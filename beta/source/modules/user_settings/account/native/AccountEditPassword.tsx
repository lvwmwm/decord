// Module ID: 17276
// Function ID: 17277
// Name: AccountEditPassword
// Dependencies: [19, 17, 21, 5306, 575, 17277, 2]

// Module 17276 (AccountEditPassword)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsAccountEditPasswordDefault from "UserSettingsAccountEditPassword" /* 17277 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5306 */;
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
const memoResult = react.memo(function AccountEditPassword() {
  return <React2 style={closure_4().container}>{jsx(UserSettingsAccountEditPasswordDefault, {})}</React2>;
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default memoResult;
