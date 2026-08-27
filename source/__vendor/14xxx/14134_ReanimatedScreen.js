// Module ID: 14134
// Function ID: 14135
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1654, 4821]

// Module 14134 (ReanimatedScreen)
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
