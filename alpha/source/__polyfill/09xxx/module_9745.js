// Module ID: 9745
// Function ID: 9746
// Dependencies: [9746, 9747, 9754, 5347]

// Module 9745
import _mod9746 from "module_9746" /* 9746 */;
import _mod9754 from "module_9754" /* 9754 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9747 */;
import module_5347_mod from "module_5347" /* 5347 */;
import "module_5347";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5347;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9754), source: oneOfType(items), blurRadius: module_5347.number, defaultSource: module_5347.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5347.bool, fadeDuration: module_5347.number, internal_analyticTag: module_5347.string, onLoadStart: module_5347.func, onError: module_5347.func, onLoad: module_5347.func, onLoadEnd: module_5347.func, testID: module_5347.string, resizeMethod: module_5347.oneOf(["auto", "resize", "scale"]), resizeMode: module_5347.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9746 = Object.assign(_mod9746);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5347 = module_5347_mod;
oneOfType = module_5347.oneOfType;
module_5347 = module_5347_mod;
const shape = module_5347.shape;
const obj2 = { uri: module_5347.string, headers: module_5347.objectOf(module_5347.string) };
module_5347 = module_5347_mod;
items = [shape(obj2), module_5347.number, ];
module_5347 = module_5347_mod;
const arrayOf = module_5347.arrayOf;
module_5347 = module_5347_mod;
const size = { uri: module_5347.string, width: module_5347.number, height: module_5347.number, headers: module_5347.objectOf(module_5347.string) };
const shape2 = module_5347.shape;
items[2] = arrayOf(shape2(size));
module_5347 = module_5347_mod;
oneOfType2 = module_5347.oneOfType;
module_5347 = module_5347_mod;
items1 = [, ];
const obj3 = { uri: module_5347.string };
items1[0] = module_5347.shape(obj3);
items1[1] = module_5347.number;
module_5347 = module_5347_mod;

export default obj;
