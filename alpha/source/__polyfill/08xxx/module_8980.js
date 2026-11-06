// Module ID: 8980
// Function ID: 8981
// Dependencies: [8981, 8982, 8989, 5209]

// Module 8980
import _mod8981 from "module_8981" /* 8981 */;
import _mod8989 from "module_8989" /* 8989 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8982 */;
import module_5209_mod from "module_5209" /* 5209 */;
import "module_5209";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5209;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8989), source: oneOfType(items), blurRadius: module_5209.number, defaultSource: module_5209.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5209.bool, fadeDuration: module_5209.number, internal_analyticTag: module_5209.string, onLoadStart: module_5209.func, onError: module_5209.func, onLoad: module_5209.func, onLoadEnd: module_5209.func, testID: module_5209.string, resizeMethod: module_5209.oneOf(["auto", "resize", "scale"]), resizeMode: module_5209.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8981 = Object.assign(_mod8981);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5209 = module_5209_mod;
oneOfType = module_5209.oneOfType;
module_5209 = module_5209_mod;
const shape = module_5209.shape;
const obj2 = { uri: module_5209.string, headers: module_5209.objectOf(module_5209.string) };
module_5209 = module_5209_mod;
items = [shape(obj2), module_5209.number, ];
module_5209 = module_5209_mod;
const arrayOf = module_5209.arrayOf;
module_5209 = module_5209_mod;
const size = { uri: module_5209.string, width: module_5209.number, height: module_5209.number, headers: module_5209.objectOf(module_5209.string) };
const shape2 = module_5209.shape;
items[2] = arrayOf(shape2(size));
module_5209 = module_5209_mod;
oneOfType2 = module_5209.oneOfType;
module_5209 = module_5209_mod;
items1 = [, ];
const obj3 = { uri: module_5209.string };
items1[0] = module_5209.shape(obj3);
items1[1] = module_5209.number;
module_5209 = module_5209_mod;

export default obj;
