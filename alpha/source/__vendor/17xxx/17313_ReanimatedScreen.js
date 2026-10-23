// Module ID: 17313
// Function ID: 17314
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1658, 5931]

// Module 17313 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5931 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1658" /* 1658 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
