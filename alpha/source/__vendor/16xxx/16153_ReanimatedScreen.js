// Module ID: 16153
// Function ID: 16154
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1655, 5322]

// Module 16153 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5322 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1655" /* 1655 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
