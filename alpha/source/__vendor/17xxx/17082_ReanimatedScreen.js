// Module ID: 17082
// Function ID: 17083
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1655, 6291]

// Module 17082 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 6291 */;
import react from "react" /* 19 */;
import module_1655 from "module_1655" /* 1655 */;

const jsx = Fragment.jsx;
let closure_1 = module_1655.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
