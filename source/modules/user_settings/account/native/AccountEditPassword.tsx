// Module ID: 14304
// Function ID: 14305
// Dependencies: [19, 17, 21, 4444, 712, 14305, 2]

// Module 14304
import ThemesDefault from "Themes" /* 712 */;
import componentWillUnmountDefault from "componentWillUnmount" /* 14305 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => <closure_2 style={callback().container}>{jsx(componentWillUnmountDefault, {})}</closure_2>);
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default memoResult;
