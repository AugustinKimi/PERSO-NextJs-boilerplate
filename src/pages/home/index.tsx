import css from "./Home.module.less";
import { forwardRef, useRef, useImperativeHandle } from "react"
import gsap from "gsap"
interface IProps {}

const componentName = "Home";

/**
 * @name Home
 */
const Home = (props: IProps, handleRef) => {
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

Home.displayName = componentName;
export default forwardRef<HTMLDivElement>(Home);


export async function getStaticProps() {
    return {
      props: {
        id: 'home',
      }, // will be passed to the page component as props
    }
  }