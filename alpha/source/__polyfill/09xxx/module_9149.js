// Module ID: 9149
// Function ID: 9150
// Dependencies: [9150, 9151, 9158, 4835]

// Module 9149
import _mod9150 from "module_9150" /* 9150 */;
import _mod9158 from "module_9158" /* 9158 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9151 */;
import module_4835_mod from "module_4835" /* 4835 */;
import "module_4835";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4835;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9158), source: oneOfType(items), blurRadius: module_4835.number, defaultSource: module_4835.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4835.bool, fadeDuration: module_4835.number, internal_analyticTag: module_4835.string, onLoadStart: module_4835.func, onError: module_4835.func, onLoad: module_4835.func, onLoadEnd: module_4835.func, testID: module_4835.string, resizeMethod: module_4835.oneOf(["auto", "resize", "scale"]), resizeMode: module_4835.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9150 = Object.assign(_mod9150);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4835 = module_4835_mod;
oneOfType = module_4835.oneOfType;
module_4835 = module_4835_mod;
const shape = module_4835.shape;
const obj2 = { uri: module_4835.string, headers: module_4835.objectOf(module_4835.string) };
module_4835 = module_4835_mod;
items = [shape(obj2), module_4835.number, ];
module_4835 = module_4835_mod;
const arrayOf = module_4835.arrayOf;
module_4835 = module_4835_mod;
const size = { uri: module_4835.string, width: module_4835.number, height: module_4835.number, headers: module_4835.objectOf(module_4835.string) };
const shape2 = module_4835.shape;
items[2] = arrayOf(shape2(size));
module_4835 = module_4835_mod;
oneOfType2 = module_4835.oneOfType;
module_4835 = module_4835_mod;
items1 = [, ];
const obj3 = { uri: module_4835.string };
items1[0] = module_4835.shape(obj3);
items1[1] = module_4835.number;
module_4835 = module_4835_mod;

export default obj;
