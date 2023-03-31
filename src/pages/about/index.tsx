import css from "./About.module.less";
import { forwardRef, useRef, useImperativeHandle } from "react"
import gsap from "gsap"

interface IProps {}

const componentName = "About";

/**
 * @name About
 */
const About = (props: IProps, handleRef) => {
  const $root = useRef<HTMLDivElement>(null)

  const playIn = () =>
    gsap
      .timeline({ defaults: { duration: 1, ease: "power3.out" } })
      .fromTo($root.current, { autoAlpha: 0, x: -50 }, { autoAlpha: 1, x: 0 })

  const playOut = () =>
    gsap
      .timeline({ defaults: { duration: 1, ease: "power3.out" } })
      .to($root.current, { autoAlpha: 0, x: 50 })

  useImperativeHandle(handleRef, () => ({
    playIn,
    playOut,
    $root: $root.current,
  }))

  return (
    <div ref={$root} className={css.root}>
      {componentName}
    </div>
  );
};

About.displayName = componentName;
export default forwardRef<HTMLDivElement>(About);



export async function getStaticProps() {
    return {
      props: {
        id: 'About',
      }, // will be passed to the page component as props
    }
  }