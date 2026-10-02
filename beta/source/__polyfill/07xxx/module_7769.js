// Module ID: 7769
// Function ID: 7770
// Dependencies: [7770, 7771, 7778, 4665]

// Module 7769
import _mod7770 from "module_7770" /* 7770 */;
import _mod7778 from "module_7778" /* 7778 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 7771 */;
import module_4665_mod from "module_4665" /* 4665 */;
import "module_4665";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4665;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod7778), source: oneOfType(items), blurRadius: module_4665.number, defaultSource: module_4665.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4665.bool, fadeDuration: module_4665.number, internal_analyticTag: module_4665.string, onLoadStart: module_4665.func, onError: module_4665.func, onLoad: module_4665.func, onLoadEnd: module_4665.func, testID: module_4665.string, resizeMethod: module_4665.oneOf(["auto", "resize", "scale"]), resizeMode: module_4665.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_7770 = Object.assign(_mod7770);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4665 = module_4665_mod;
oneOfType = module_4665.oneOfType;
module_4665 = module_4665_mod;
const shape = module_4665.shape;
const obj2 = { uri: module_4665.string, headers: module_4665.objectOf(module_4665.string) };
module_4665 = module_4665_mod;
items = [shape(obj2), module_4665.number, ];
module_4665 = module_4665_mod;
const arrayOf = module_4665.arrayOf;
module_4665 = module_4665_mod;
const size = { uri: module_4665.string, width: module_4665.number, height: module_4665.number, headers: module_4665.objectOf(module_4665.string) };
const shape2 = module_4665.shape;
items[2] = arrayOf(shape2(size));
module_4665 = module_4665_mod;
oneOfType2 = module_4665.oneOfType;
module_4665 = module_4665_mod;
items1 = [, ];
const obj3 = { uri: module_4665.string };
items1[0] = module_4665.shape(obj3);
items1[1] = module_4665.number;
module_4665 = module_4665_mod;

export default obj;
