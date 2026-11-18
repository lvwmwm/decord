// Module ID: 9173
// Function ID: 9174
// Dependencies: [9174, 9175, 9182, 4864]

// Module 9173
import _mod9174 from "module_9174" /* 9174 */;
import _mod9182 from "module_9182" /* 9182 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9175 */;
import module_4864_mod from "module_4864" /* 4864 */;
import "module_4864";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4864;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9182), source: oneOfType(items), blurRadius: module_4864.number, defaultSource: module_4864.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4864.bool, fadeDuration: module_4864.number, internal_analyticTag: module_4864.string, onLoadStart: module_4864.func, onError: module_4864.func, onLoad: module_4864.func, onLoadEnd: module_4864.func, testID: module_4864.string, resizeMethod: module_4864.oneOf(["auto", "resize", "scale"]), resizeMode: module_4864.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9174 = Object.assign(_mod9174);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4864 = module_4864_mod;
oneOfType = module_4864.oneOfType;
module_4864 = module_4864_mod;
const shape = module_4864.shape;
const obj2 = { uri: module_4864.string, headers: module_4864.objectOf(module_4864.string) };
module_4864 = module_4864_mod;
items = [shape(obj2), module_4864.number, ];
module_4864 = module_4864_mod;
const arrayOf = module_4864.arrayOf;
module_4864 = module_4864_mod;
const size = { uri: module_4864.string, width: module_4864.number, height: module_4864.number, headers: module_4864.objectOf(module_4864.string) };
const shape2 = module_4864.shape;
items[2] = arrayOf(shape2(size));
module_4864 = module_4864_mod;
oneOfType2 = module_4864.oneOfType;
module_4864 = module_4864_mod;
items1 = [, ];
const obj3 = { uri: module_4864.string };
items1[0] = module_4864.shape(obj3);
items1[1] = module_4864.number;
module_4864 = module_4864_mod;

export default obj;
