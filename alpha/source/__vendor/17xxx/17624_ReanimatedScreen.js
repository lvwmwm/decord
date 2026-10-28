// Module ID: 17624
// Function ID: 17625
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1655, 5969]

// Module 17624 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5969 */;
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
