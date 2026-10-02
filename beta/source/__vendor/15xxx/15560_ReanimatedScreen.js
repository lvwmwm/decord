// Module ID: 15560
// Function ID: 15561
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1644, 5229]

// Module 15560 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5229 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1644" /* 1644 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
