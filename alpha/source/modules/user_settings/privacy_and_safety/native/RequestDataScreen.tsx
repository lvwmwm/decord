// Module ID: 16752
// Function ID: 16753
// Name: RequestDataScreen
// Dependencies: [19, 17, 21, 5014, 575, 16753, 2]

// Module 16752 (RequestDataScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RequestDataContentDefault from "RequestDataContent" /* 16753 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let obj2;
({ View: c2, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_4 = createStyles(obj);
const memoResult = react.memo(function RequestDataScreen() {
  return <React2 style={closure_4().container}>{jsx(RequestDataContentDefault, {})}</React2>;
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default memoResult;
