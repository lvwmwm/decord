// Module ID: 16685
// Function ID: 16686
// Name: ReanimatedScreen
// Dependencies: [19, 21, 1652, 6121]

// Module 16685 (ReanimatedScreen)
import Fragment from "Fragment" /* 21 */;
import InnerScreen from "InnerScreen" /* 6121 */;
import react from "react" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

const jsx = Fragment.jsx;
let closure_1 = module_1652.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
