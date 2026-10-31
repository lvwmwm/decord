// Module ID: 18575
// Function ID: 18576
// Name: ICYMIBottomLoading
// Dependencies: [19, 17, 21, 5014, 575, 2]
// Exports: ICYMIBottomLoading

// Module 18575 (ICYMIBottomLoading)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ View: c2, ActivityIndicator: c3 } = react_native);
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, alignItems: "center", justifyContent: "center" } };
  ({ paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, alignItems: "center", justifyContent: "center" });
  return obj;
});
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export function ICYMIBottomLoading() {
  return <React2 style={closure_5().container}><_false size="small" /></React2>;
}
