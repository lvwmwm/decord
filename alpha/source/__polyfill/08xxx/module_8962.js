// Module ID: 8962
// Function ID: 8963
// Dependencies: [8963, 8964, 8971, 5179]

// Module 8962
import _mod8963 from "module_8963" /* 8963 */;
import _mod8971 from "module_8971" /* 8971 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8964 */;
import module_5179_mod from "module_5179" /* 5179 */;
import "module_5179";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5179;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8971), source: oneOfType(items), blurRadius: module_5179.number, defaultSource: module_5179.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5179.bool, fadeDuration: module_5179.number, internal_analyticTag: module_5179.string, onLoadStart: module_5179.func, onError: module_5179.func, onLoad: module_5179.func, onLoadEnd: module_5179.func, testID: module_5179.string, resizeMethod: module_5179.oneOf(["auto", "resize", "scale"]), resizeMode: module_5179.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8963 = Object.assign(_mod8963);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5179 = module_5179_mod;
oneOfType = module_5179.oneOfType;
module_5179 = module_5179_mod;
const shape = module_5179.shape;
const obj2 = { uri: module_5179.string, headers: module_5179.objectOf(module_5179.string) };
module_5179 = module_5179_mod;
items = [shape(obj2), module_5179.number, ];
module_5179 = module_5179_mod;
const arrayOf = module_5179.arrayOf;
module_5179 = module_5179_mod;
const size = { uri: module_5179.string, width: module_5179.number, height: module_5179.number, headers: module_5179.objectOf(module_5179.string) };
const shape2 = module_5179.shape;
items[2] = arrayOf(shape2(size));
module_5179 = module_5179_mod;
oneOfType2 = module_5179.oneOfType;
module_5179 = module_5179_mod;
items1 = [, ];
const obj3 = { uri: module_5179.string };
items1[0] = module_5179.shape(obj3);
items1[1] = module_5179.number;
module_5179 = module_5179_mod;

export default obj;
