// Module ID: 8435
// Function ID: 8436
// Dependencies: [8436, 8437, 8444, 4947]

// Module 8435
import _mod8436 from "module_8436" /* 8436 */;
import _mod8444 from "module_8444" /* 8444 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8437 */;
import module_4947_mod from "module_4947" /* 4947 */;
import "module_4947";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4947;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8444), source: oneOfType(items), blurRadius: module_4947.number, defaultSource: module_4947.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4947.bool, fadeDuration: module_4947.number, internal_analyticTag: module_4947.string, onLoadStart: module_4947.func, onError: module_4947.func, onLoad: module_4947.func, onLoadEnd: module_4947.func, testID: module_4947.string, resizeMethod: module_4947.oneOf(["auto", "resize", "scale"]), resizeMode: module_4947.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8436 = Object.assign(_mod8436);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4947 = module_4947_mod;
oneOfType = module_4947.oneOfType;
module_4947 = module_4947_mod;
const shape = module_4947.shape;
const obj2 = { uri: module_4947.string, headers: module_4947.objectOf(module_4947.string) };
module_4947 = module_4947_mod;
items = [shape(obj2), module_4947.number, ];
module_4947 = module_4947_mod;
const arrayOf = module_4947.arrayOf;
module_4947 = module_4947_mod;
const size = { uri: module_4947.string, width: module_4947.number, height: module_4947.number, headers: module_4947.objectOf(module_4947.string) };
const shape2 = module_4947.shape;
items[2] = arrayOf(shape2(size));
module_4947 = module_4947_mod;
oneOfType2 = module_4947.oneOfType;
module_4947 = module_4947_mod;
items1 = [, ];
const obj3 = { uri: module_4947.string };
items1[0] = module_4947.shape(obj3);
items1[1] = module_4947.number;
module_4947 = module_4947_mod;

export default obj;
