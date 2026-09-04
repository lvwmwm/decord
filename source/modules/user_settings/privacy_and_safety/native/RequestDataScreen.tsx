// Module ID: 14786
// Function ID: 14787
// Dependencies: [19, 17, 21, 4481, 709, 14787, 2]

// Module 14786
import ThemesDefault from "Themes" /* 709 */;
import _modDef14787 from "module_14787" /* 14787 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import importAllResult from "noop" /* 19 */;

({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => <closure_2 style={callback().container}>{jsx(_modDef14787, {})}</closure_2>);
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default memoResult;
