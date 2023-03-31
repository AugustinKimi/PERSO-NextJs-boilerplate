
import Lenis from "@studio-freight/lenis"


class SmoothScrollManager {
  public lenis: Lenis
  public currentScroll = 0
  protected isStart = false
  public scrollDirection = 1

  // --------------------------------------------------------------------------- INIT

  public init() {
    if (this.lenis) return
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })
    this.lenis.on("scroll", this.onScroll)
    this.lenis.scrollTo(0, {
      immediate: true,
    })
    const raf = (time) => {
      this.lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  // --------------------------------------------------------------------------- PUBLIC METHODS

  public stop() {
    if (!this.isStart) {
      return
    }
    this.isStart = false
    this.lenis.stop()
  }

  public start() {
    if (this.isStart) {
      return
    }
    this.isStart = true
    this.lenis.start()
  }

  private onScroll = (e) => {
    this.currentScroll = e.scroll
    this.scrollDirection = e.direction
  }

  public destroy() {
    this.lenis.destroy()
    this.lenis = null
  }
}

export default new SmoothScrollManager()
