// Module ID: 14705
// Function ID: 14706
// Dependencies: [19, 17, 21, 4478, 709, 14706, 2]

// Module 14705
import ThemesDefault from "Themes" /* 709 */;
import _modDef14706 from "module_14706" /* 14706 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => <closure_2 style={callback().container}>{jsx(_modDef14706, {})}</closure_2>);
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default memoResult;
