// Module ID: 13895
// Function ID: 13896
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1653, 4694]

// Module 13895 (ReanimatedScreen)
import { jsx } from "jsxProd";
import importDefaultResult from "noop";

let closure_1 = require("cancelAnimation").createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
