// Module ID: 14443
// Function ID: 14444
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1652, 4869]

// Module 14443 (ReanimatedScreen)
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import { jsx } from "jsxProd" /* 21 */;
import importDefaultResult from "noop" /* 19 */;

let closure_1 = cancelAnimationDefault.createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
