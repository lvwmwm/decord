// Module ID: 13899
// Function ID: 13900
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1653, 4717]

// Module 13899 (ReanimatedScreen)
import { jsx } from "jsxProd";
import importDefaultResult from "noop";

let closure_1 = require("cancelAnimation").createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
