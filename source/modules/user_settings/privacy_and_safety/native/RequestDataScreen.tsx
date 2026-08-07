// Module ID: 14036
// Function ID: 14037
// Dependencies: [19, 17, 21, 4302, 712, 14037, 2]

// Module 14036
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let StyleSheet;
let obj1;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { container: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(() => <closure_2 style={callback().container}>{jsx(importDefault(14037), {})}</closure_2>);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default memoResult;
