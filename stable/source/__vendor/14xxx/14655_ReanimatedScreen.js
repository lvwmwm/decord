// Module ID: 14655
// Function ID: 14656
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1636, 5005]

// Module 14655 (ReanimatedScreen)
import noop from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1636 */;

const jsx = fn(21).jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(fn(5005).InnerScreen);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
