// Module ID: 8842
// Function ID: 8843
// Dependencies: [8843, 8844, 8851, 5043]

// Module 8842
import _mod8843 from "module_8843" /* 8843 */;
import _mod8851 from "module_8851" /* 8851 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8844 */;
import module_5043_mod from "module_5043" /* 5043 */;
import "module_5043";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5043;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8851), source: oneOfType(items), blurRadius: module_5043.number, defaultSource: module_5043.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5043.bool, fadeDuration: module_5043.number, internal_analyticTag: module_5043.string, onLoadStart: module_5043.func, onError: module_5043.func, onLoad: module_5043.func, onLoadEnd: module_5043.func, testID: module_5043.string, resizeMethod: module_5043.oneOf(["auto", "resize", "scale"]), resizeMode: module_5043.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8843 = Object.assign(_mod8843);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5043 = module_5043_mod;
oneOfType = module_5043.oneOfType;
module_5043 = module_5043_mod;
const shape = module_5043.shape;
const obj2 = { uri: module_5043.string, headers: module_5043.objectOf(module_5043.string) };
module_5043 = module_5043_mod;
items = [shape(obj2), module_5043.number, ];
module_5043 = module_5043_mod;
const arrayOf = module_5043.arrayOf;
module_5043 = module_5043_mod;
const size = { uri: module_5043.string, width: module_5043.number, height: module_5043.number, headers: module_5043.objectOf(module_5043.string) };
const shape2 = module_5043.shape;
items[2] = arrayOf(shape2(size));
module_5043 = module_5043_mod;
oneOfType2 = module_5043.oneOfType;
module_5043 = module_5043_mod;
items1 = [, ];
const obj3 = { uri: module_5043.string };
items1[0] = module_5043.shape(obj3);
items1[1] = module_5043.number;
module_5043 = module_5043_mod;

export default obj;
