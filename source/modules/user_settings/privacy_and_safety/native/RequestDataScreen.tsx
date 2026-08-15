// Module ID: 14218
// Function ID: 14219
// Dependencies: [19, 17, 21, 4661, 712, 14219, 2]

// Module 14218
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
const memoResult = require("noop").memo(() => <closure_2 style={callback().container}>{jsx(importDefault(14219), {})}</closure_2>);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default memoResult;
