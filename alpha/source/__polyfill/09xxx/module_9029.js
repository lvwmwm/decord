// Module ID: 9029
// Function ID: 9030
// Dependencies: [9030, 9031, 9038, 5180]

// Module 9029
import _mod9030 from "module_9030" /* 9030 */;
import _mod9038 from "module_9038" /* 9038 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9031 */;
import module_5180_mod from "module_5180" /* 5180 */;
import "module_5180";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5180;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9038), source: oneOfType(items), blurRadius: module_5180.number, defaultSource: module_5180.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5180.bool, fadeDuration: module_5180.number, internal_analyticTag: module_5180.string, onLoadStart: module_5180.func, onError: module_5180.func, onLoad: module_5180.func, onLoadEnd: module_5180.func, testID: module_5180.string, resizeMethod: module_5180.oneOf(["auto", "resize", "scale"]), resizeMode: module_5180.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9030 = Object.assign(_mod9030);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5180 = module_5180_mod;
oneOfType = module_5180.oneOfType;
module_5180 = module_5180_mod;
const shape = module_5180.shape;
const obj2 = { uri: module_5180.string, headers: module_5180.objectOf(module_5180.string) };
module_5180 = module_5180_mod;
items = [shape(obj2), module_5180.number, ];
module_5180 = module_5180_mod;
const arrayOf = module_5180.arrayOf;
module_5180 = module_5180_mod;
const size = { uri: module_5180.string, width: module_5180.number, height: module_5180.number, headers: module_5180.objectOf(module_5180.string) };
const shape2 = module_5180.shape;
items[2] = arrayOf(shape2(size));
module_5180 = module_5180_mod;
oneOfType2 = module_5180.oneOfType;
module_5180 = module_5180_mod;
items1 = [, ];
const obj3 = { uri: module_5180.string };
items1[0] = module_5180.shape(obj3);
items1[1] = module_5180.number;
module_5180 = module_5180_mod;

export default obj;
