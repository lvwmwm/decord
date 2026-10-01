// Module ID: 14127
// Function ID: 14128
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1638, 5228]

// Module 14127 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5228 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1638" /* 1638 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
