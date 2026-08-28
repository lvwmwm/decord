// Module ID: 14153
// Function ID: 14154
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1654, 4834]

// Module 14153 (ReanimatedScreen)
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import { jsx } from "jsxProd" /* 21 */;
import importDefaultResult from "noop" /* 19 */;

let closure_1 = cancelAnimationDefault.createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
