// Module ID: 14846
// Function ID: 14847
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1637, 5133]

// Module 14846 (ReanimatedScreen)
import noop from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1637 */;

const jsx = fn(21).jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(fn(5133).InnerScreen);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
