// Module ID: 17177
// Function ID: 17178
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1658, 5913]

// Module 17177 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 5913 */;
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
