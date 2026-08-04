// Module ID: 13926
// Function ID: 13927
// Dependencies: [19, 17, 21, 4285, 712, 13927, 2]

// Module 13926
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
const memoResult = require("noop").memo(() => <closure_2 style={callback().container}>{jsx(importDefault(13927), {})}</closure_2>);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default memoResult;
