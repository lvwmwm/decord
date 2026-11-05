// Module ID: 9034
// Function ID: 9035
// Dependencies: [9035, 9036, 9043, 5182]

// Module 9034
import _mod9035 from "module_9035" /* 9035 */;
import _mod9043 from "module_9043" /* 9043 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9036 */;
import module_5182_mod from "module_5182" /* 5182 */;
import "module_5182";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5182;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9043), source: oneOfType(items), blurRadius: module_5182.number, defaultSource: module_5182.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5182.bool, fadeDuration: module_5182.number, internal_analyticTag: module_5182.string, onLoadStart: module_5182.func, onError: module_5182.func, onLoad: module_5182.func, onLoadEnd: module_5182.func, testID: module_5182.string, resizeMethod: module_5182.oneOf(["auto", "resize", "scale"]), resizeMode: module_5182.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9035 = Object.assign(_mod9035);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5182 = module_5182_mod;
oneOfType = module_5182.oneOfType;
module_5182 = module_5182_mod;
const shape = module_5182.shape;
const obj2 = { uri: module_5182.string, headers: module_5182.objectOf(module_5182.string) };
module_5182 = module_5182_mod;
items = [shape(obj2), module_5182.number, ];
module_5182 = module_5182_mod;
const arrayOf = module_5182.arrayOf;
module_5182 = module_5182_mod;
const size = { uri: module_5182.string, width: module_5182.number, height: module_5182.number, headers: module_5182.objectOf(module_5182.string) };
const shape2 = module_5182.shape;
items[2] = arrayOf(shape2(size));
module_5182 = module_5182_mod;
oneOfType2 = module_5182.oneOfType;
module_5182 = module_5182_mod;
items1 = [, ];
const obj3 = { uri: module_5182.string };
items1[0] = module_5182.shape(obj3);
items1[1] = module_5182.number;
module_5182 = module_5182_mod;

export default obj;
