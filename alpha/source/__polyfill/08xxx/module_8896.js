// Module ID: 8896
// Function ID: 8897
// Dependencies: [8897, 8898, 8905, 5084]

// Module 8896
import _mod8897 from "module_8897" /* 8897 */;
import _mod8905 from "module_8905" /* 8905 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8898 */;
import module_5084_mod from "module_5084" /* 5084 */;
import "module_5084";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5084;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8905), source: oneOfType(items), blurRadius: module_5084.number, defaultSource: module_5084.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5084.bool, fadeDuration: module_5084.number, internal_analyticTag: module_5084.string, onLoadStart: module_5084.func, onError: module_5084.func, onLoad: module_5084.func, onLoadEnd: module_5084.func, testID: module_5084.string, resizeMethod: module_5084.oneOf(["auto", "resize", "scale"]), resizeMode: module_5084.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8897 = Object.assign(_mod8897);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5084 = module_5084_mod;
oneOfType = module_5084.oneOfType;
module_5084 = module_5084_mod;
const shape = module_5084.shape;
const obj2 = { uri: module_5084.string, headers: module_5084.objectOf(module_5084.string) };
module_5084 = module_5084_mod;
items = [shape(obj2), module_5084.number, ];
module_5084 = module_5084_mod;
const arrayOf = module_5084.arrayOf;
module_5084 = module_5084_mod;
const size = { uri: module_5084.string, width: module_5084.number, height: module_5084.number, headers: module_5084.objectOf(module_5084.string) };
const shape2 = module_5084.shape;
items[2] = arrayOf(shape2(size));
module_5084 = module_5084_mod;
oneOfType2 = module_5084.oneOfType;
module_5084 = module_5084_mod;
items1 = [, ];
const obj3 = { uri: module_5084.string };
items1[0] = module_5084.shape(obj3);
items1[1] = module_5084.number;
module_5084 = module_5084_mod;

export default obj;
