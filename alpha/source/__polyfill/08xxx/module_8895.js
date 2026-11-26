// Module ID: 8895
// Function ID: 8896
// Dependencies: [8896, 8897, 8904, 5084]

// Module 8895
import _mod8896 from "module_8896" /* 8896 */;
import _mod8904 from "module_8904" /* 8904 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8897 */;
import module_5084_mod from "module_5084" /* 5084 */;
import "module_5084";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5084;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8904), source: oneOfType(items), blurRadius: module_5084.number, defaultSource: module_5084.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5084.bool, fadeDuration: module_5084.number, internal_analyticTag: module_5084.string, onLoadStart: module_5084.func, onError: module_5084.func, onLoad: module_5084.func, onLoadEnd: module_5084.func, testID: module_5084.string, resizeMethod: module_5084.oneOf(["auto", "resize", "scale"]), resizeMode: module_5084.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8896 = Object.assign(_mod8896);
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
