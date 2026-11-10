// Module ID: 8968
// Function ID: 8969
// Dependencies: [8969, 8970, 8977, 5181]

// Module 8968
import _mod8969 from "module_8969" /* 8969 */;
import _mod8977 from "module_8977" /* 8977 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8970 */;
import module_5181_mod from "module_5181" /* 5181 */;
import "module_5181";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5181;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8977), source: oneOfType(items), blurRadius: module_5181.number, defaultSource: module_5181.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5181.bool, fadeDuration: module_5181.number, internal_analyticTag: module_5181.string, onLoadStart: module_5181.func, onError: module_5181.func, onLoad: module_5181.func, onLoadEnd: module_5181.func, testID: module_5181.string, resizeMethod: module_5181.oneOf(["auto", "resize", "scale"]), resizeMode: module_5181.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8969 = Object.assign(_mod8969);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5181 = module_5181_mod;
oneOfType = module_5181.oneOfType;
module_5181 = module_5181_mod;
const shape = module_5181.shape;
const obj2 = { uri: module_5181.string, headers: module_5181.objectOf(module_5181.string) };
module_5181 = module_5181_mod;
items = [shape(obj2), module_5181.number, ];
module_5181 = module_5181_mod;
const arrayOf = module_5181.arrayOf;
module_5181 = module_5181_mod;
const size = { uri: module_5181.string, width: module_5181.number, height: module_5181.number, headers: module_5181.objectOf(module_5181.string) };
const shape2 = module_5181.shape;
items[2] = arrayOf(shape2(size));
module_5181 = module_5181_mod;
oneOfType2 = module_5181.oneOfType;
module_5181 = module_5181_mod;
items1 = [, ];
const obj3 = { uri: module_5181.string };
items1[0] = module_5181.shape(obj3);
items1[1] = module_5181.number;
module_5181 = module_5181_mod;

export default obj;
