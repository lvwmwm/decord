// Module ID: 14398
// Function ID: 14399
// Name: RequestDataScreen
// Dependencies: [19, 17, 21, 4836, 576, 14399, 2]

// Module 14398 (RequestDataScreen)
import nativeDefault from "native" /* 576 */;
import RequestDataContentDefault from "RequestDataContent" /* 14399 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const obj = { container: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default noop.memo(() => <React2 style={closure_4().container}>{jsx(RequestDataContentDefault, {})}</React2>);
