// Module ID: 16413
// Function ID: 16414
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1650, 5983]

// Module 16413 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5983 */;
import react from "react" /* 19 */;
import cancelAnimation from "module_1650" /* 1650 */;

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
