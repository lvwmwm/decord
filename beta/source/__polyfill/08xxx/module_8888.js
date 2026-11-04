// Module ID: 8888
// Function ID: 8889
// Dependencies: [8889, 8890, 8897, 5053]

// Module 8888
import _mod8889 from "module_8889" /* 8889 */;
import _mod8897 from "module_8897" /* 8897 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8890 */;
import module_5053_mod from "module_5053" /* 5053 */;
import "module_5053";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5053;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8897), source: oneOfType(items), blurRadius: module_5053.number, defaultSource: module_5053.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5053.bool, fadeDuration: module_5053.number, internal_analyticTag: module_5053.string, onLoadStart: module_5053.func, onError: module_5053.func, onLoad: module_5053.func, onLoadEnd: module_5053.func, testID: module_5053.string, resizeMethod: module_5053.oneOf(["auto", "resize", "scale"]), resizeMode: module_5053.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8889 = Object.assign(_mod8889);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5053 = module_5053_mod;
oneOfType = module_5053.oneOfType;
module_5053 = module_5053_mod;
const shape = module_5053.shape;
const obj2 = { uri: module_5053.string, headers: module_5053.objectOf(module_5053.string) };
module_5053 = module_5053_mod;
items = [shape(obj2), module_5053.number, ];
module_5053 = module_5053_mod;
const arrayOf = module_5053.arrayOf;
module_5053 = module_5053_mod;
const size = { uri: module_5053.string, width: module_5053.number, height: module_5053.number, headers: module_5053.objectOf(module_5053.string) };
const shape2 = module_5053.shape;
items[2] = arrayOf(shape2(size));
module_5053 = module_5053_mod;
oneOfType2 = module_5053.oneOfType;
module_5053 = module_5053_mod;
items1 = [, ];
const obj3 = { uri: module_5053.string };
items1[0] = module_5053.shape(obj3);
items1[1] = module_5053.number;
module_5053 = module_5053_mod;

export default obj;
