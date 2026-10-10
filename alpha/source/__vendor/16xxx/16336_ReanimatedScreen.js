// Module ID: 16336
// Function ID: 16337
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1656, 5324]

// Module 16336 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5324 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1656" /* 1656 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
