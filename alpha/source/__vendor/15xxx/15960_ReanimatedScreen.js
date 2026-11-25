// Module ID: 15960
// Function ID: 15961
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1653, 6040]

// Module 15960 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 6040 */;
import react from "react" /* 19 */;
import module_1653 from "module_1653" /* 1653 */;

const jsx = Fragment.jsx;
let closure_1 = module_1653.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
