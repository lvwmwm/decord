// Module ID: 9149
// Function ID: 9150
// Dependencies: [9150, 9151, 9158, 4833]

// Module 9149
import _mod9150 from "module_9150" /* 9150 */;
import _mod9158 from "module_9158" /* 9158 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9151 */;
import module_4833_mod from "module_4833" /* 4833 */;
import "module_4833";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4833;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9158), source: oneOfType(items), blurRadius: module_4833.number, defaultSource: module_4833.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4833.bool, fadeDuration: module_4833.number, internal_analyticTag: module_4833.string, onLoadStart: module_4833.func, onError: module_4833.func, onLoad: module_4833.func, onLoadEnd: module_4833.func, testID: module_4833.string, resizeMethod: module_4833.oneOf(["auto", "resize", "scale"]), resizeMode: module_4833.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9150 = Object.assign(_mod9150);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4833 = module_4833_mod;
oneOfType = module_4833.oneOfType;
module_4833 = module_4833_mod;
const shape = module_4833.shape;
const obj2 = { uri: module_4833.string, headers: module_4833.objectOf(module_4833.string) };
module_4833 = module_4833_mod;
items = [shape(obj2), module_4833.number, ];
module_4833 = module_4833_mod;
const arrayOf = module_4833.arrayOf;
module_4833 = module_4833_mod;
const size = { uri: module_4833.string, width: module_4833.number, height: module_4833.number, headers: module_4833.objectOf(module_4833.string) };
const shape2 = module_4833.shape;
items[2] = arrayOf(shape2(size));
module_4833 = module_4833_mod;
oneOfType2 = module_4833.oneOfType;
module_4833 = module_4833_mod;
items1 = [, ];
const obj3 = { uri: module_4833.string };
items1[0] = module_4833.shape(obj3);
items1[1] = module_4833.number;
module_4833 = module_4833_mod;

export default obj;
