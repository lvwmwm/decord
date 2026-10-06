// Module ID: 15894
// Function ID: 15895
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1643, 5739]

// Module 15894 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5739 */;
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
