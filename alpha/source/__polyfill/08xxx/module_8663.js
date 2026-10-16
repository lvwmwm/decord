// Module ID: 8663
// Function ID: 8664
// Dependencies: [8664, 8665, 8672, 5006]

// Module 8663
import _mod8664 from "module_8664" /* 8664 */;
import _mod8672 from "module_8672" /* 8672 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8665 */;
import module_5006_mod from "module_5006" /* 5006 */;
import "module_5006";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5006;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8672), source: oneOfType(items), blurRadius: module_5006.number, defaultSource: module_5006.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5006.bool, fadeDuration: module_5006.number, internal_analyticTag: module_5006.string, onLoadStart: module_5006.func, onError: module_5006.func, onLoad: module_5006.func, onLoadEnd: module_5006.func, testID: module_5006.string, resizeMethod: module_5006.oneOf(["auto", "resize", "scale"]), resizeMode: module_5006.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8664 = Object.assign(_mod8664);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5006 = module_5006_mod;
oneOfType = module_5006.oneOfType;
module_5006 = module_5006_mod;
const shape = module_5006.shape;
const obj2 = { uri: module_5006.string, headers: module_5006.objectOf(module_5006.string) };
module_5006 = module_5006_mod;
items = [shape(obj2), module_5006.number, ];
module_5006 = module_5006_mod;
const arrayOf = module_5006.arrayOf;
module_5006 = module_5006_mod;
const size = { uri: module_5006.string, width: module_5006.number, height: module_5006.number, headers: module_5006.objectOf(module_5006.string) };
const shape2 = module_5006.shape;
items[2] = arrayOf(shape2(size));
module_5006 = module_5006_mod;
oneOfType2 = module_5006.oneOfType;
module_5006 = module_5006_mod;
items1 = [, ];
const obj3 = { uri: module_5006.string };
items1[0] = module_5006.shape(obj3);
items1[1] = module_5006.number;
module_5006 = module_5006_mod;

export default obj;
