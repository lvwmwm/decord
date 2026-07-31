// Module ID: 13639
// Function ID: 13640
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1606, 4544]

// Module 13639 (ReanimatedScreen)
import { jsx } from "jsxProd";
import importDefaultResult from "noop";

let closure_1 = require("cancelAnimation").createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
