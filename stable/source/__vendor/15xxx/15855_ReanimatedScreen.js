// Module ID: 15855
// Function ID: 15856
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1643, 5732]

// Module 15855 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5732 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1643" /* 1643 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
