// Module ID: 8725
// Function ID: 8726
// Dependencies: [8726, 8727, 8734, 4979]

// Module 8725
import _mod8726 from "module_8726" /* 8726 */;
import _mod8734 from "module_8734" /* 8734 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8727 */;
import module_4979_mod from "module_4979" /* 4979 */;
import "module_4979";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4979;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8734), source: oneOfType(items), blurRadius: module_4979.number, defaultSource: module_4979.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4979.bool, fadeDuration: module_4979.number, internal_analyticTag: module_4979.string, onLoadStart: module_4979.func, onError: module_4979.func, onLoad: module_4979.func, onLoadEnd: module_4979.func, testID: module_4979.string, resizeMethod: module_4979.oneOf(["auto", "resize", "scale"]), resizeMode: module_4979.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8726 = Object.assign(_mod8726);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4979 = module_4979_mod;
oneOfType = module_4979.oneOfType;
module_4979 = module_4979_mod;
const shape = module_4979.shape;
const obj2 = { uri: module_4979.string, headers: module_4979.objectOf(module_4979.string) };
module_4979 = module_4979_mod;
items = [shape(obj2), module_4979.number, ];
module_4979 = module_4979_mod;
const arrayOf = module_4979.arrayOf;
module_4979 = module_4979_mod;
const size = { uri: module_4979.string, width: module_4979.number, height: module_4979.number, headers: module_4979.objectOf(module_4979.string) };
const shape2 = module_4979.shape;
items[2] = arrayOf(shape2(size));
module_4979 = module_4979_mod;
oneOfType2 = module_4979.oneOfType;
module_4979 = module_4979_mod;
items1 = [, ];
const obj3 = { uri: module_4979.string };
items1[0] = module_4979.shape(obj3);
items1[1] = module_4979.number;
module_4979 = module_4979_mod;

export default obj;
