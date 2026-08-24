// Module ID: 13999
// Function ID: 14000
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1654, 4680]

// Module 13999 (ReanimatedScreen)
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
