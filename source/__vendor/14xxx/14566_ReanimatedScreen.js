// Module ID: 14566
// Function ID: 14567
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1636, 4916]

// Module 14566 (ReanimatedScreen)
import cancelAnimationDefault from "cancelAnimation" /* 1636 */;
import { jsx } from "jsxProd" /* 21 */;
import importDefaultResult from "noop" /* 19 */;

let closure_1 = cancelAnimationDefault.createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
