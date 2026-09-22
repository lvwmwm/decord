// Module ID: 15060
// Function ID: 15061
// Name: AccountEditPassword
// Dependencies: [19, 17, 21, 4757, 576, 15061, 2]

// Module 15060 (AccountEditPassword)
import nativeDefault from "native" /* 576 */;
import UserSettingsAccountEditPasswordDefault from "UserSettingsAccountEditPassword" /* 15061 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4757);
const obj = { container: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default noop.memo(() => <React2 style={closure_4().container}>{jsx(UserSettingsAccountEditPasswordDefault, {})}</React2>);
