// Module ID: 9745
// Function ID: 9746
// Dependencies: [9746, 9747, 9754, 5357]

// Module 9745
import _mod9746 from "module_9746" /* 9746 */;
import _mod9754 from "module_9754" /* 9754 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9747 */;
import module_5357_mod from "module_5357" /* 5357 */;
import "module_5357";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5357;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9754), source: oneOfType(items), blurRadius: module_5357.number, defaultSource: module_5357.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5357.bool, fadeDuration: module_5357.number, internal_analyticTag: module_5357.string, onLoadStart: module_5357.func, onError: module_5357.func, onLoad: module_5357.func, onLoadEnd: module_5357.func, testID: module_5357.string, resizeMethod: module_5357.oneOf(["auto", "resize", "scale"]), resizeMode: module_5357.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9746 = Object.assign(_mod9746);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5357 = module_5357_mod;
oneOfType = module_5357.oneOfType;
module_5357 = module_5357_mod;
const shape = module_5357.shape;
const obj2 = { uri: module_5357.string, headers: module_5357.objectOf(module_5357.string) };
module_5357 = module_5357_mod;
items = [shape(obj2), module_5357.number, ];
module_5357 = module_5357_mod;
const arrayOf = module_5357.arrayOf;
module_5357 = module_5357_mod;
const size = { uri: module_5357.string, width: module_5357.number, height: module_5357.number, headers: module_5357.objectOf(module_5357.string) };
const shape2 = module_5357.shape;
items[2] = arrayOf(shape2(size));
module_5357 = module_5357_mod;
oneOfType2 = module_5357.oneOfType;
module_5357 = module_5357_mod;
items1 = [, ];
const obj3 = { uri: module_5357.string };
items1[0] = module_5357.shape(obj3);
items1[1] = module_5357.number;
module_5357 = module_5357_mod;

export default obj;
