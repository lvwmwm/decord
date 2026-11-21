// Module ID: 9269
// Function ID: 9270
// Dependencies: [9270, 9271, 9278, 4954]

// Module 9269
import _mod9270 from "module_9270" /* 9270 */;
import _mod9278 from "module_9278" /* 9278 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9271 */;
import module_4954_mod from "module_4954" /* 4954 */;
import "module_4954";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4954;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9278), source: oneOfType(items), blurRadius: module_4954.number, defaultSource: module_4954.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4954.bool, fadeDuration: module_4954.number, internal_analyticTag: module_4954.string, onLoadStart: module_4954.func, onError: module_4954.func, onLoad: module_4954.func, onLoadEnd: module_4954.func, testID: module_4954.string, resizeMethod: module_4954.oneOf(["auto", "resize", "scale"]), resizeMode: module_4954.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9270 = Object.assign(_mod9270);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4954 = module_4954_mod;
oneOfType = module_4954.oneOfType;
module_4954 = module_4954_mod;
const shape = module_4954.shape;
const obj2 = { uri: module_4954.string, headers: module_4954.objectOf(module_4954.string) };
module_4954 = module_4954_mod;
items = [shape(obj2), module_4954.number, ];
module_4954 = module_4954_mod;
const arrayOf = module_4954.arrayOf;
module_4954 = module_4954_mod;
const size = { uri: module_4954.string, width: module_4954.number, height: module_4954.number, headers: module_4954.objectOf(module_4954.string) };
const shape2 = module_4954.shape;
items[2] = arrayOf(shape2(size));
module_4954 = module_4954_mod;
oneOfType2 = module_4954.oneOfType;
module_4954 = module_4954_mod;
items1 = [, ];
const obj3 = { uri: module_4954.string };
items1[0] = module_4954.shape(obj3);
items1[1] = module_4954.number;
module_4954 = module_4954_mod;

export default obj;
