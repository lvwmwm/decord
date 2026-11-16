// Module ID: 8995
// Function ID: 8996
// Dependencies: [8996, 8997, 9004, 5211]

// Module 8995
import _mod8996 from "module_8996" /* 8996 */;
import _mod9004 from "module_9004" /* 9004 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8997 */;
import module_5211_mod from "module_5211" /* 5211 */;
import "module_5211";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5211;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9004), source: oneOfType(items), blurRadius: module_5211.number, defaultSource: module_5211.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5211.bool, fadeDuration: module_5211.number, internal_analyticTag: module_5211.string, onLoadStart: module_5211.func, onError: module_5211.func, onLoad: module_5211.func, onLoadEnd: module_5211.func, testID: module_5211.string, resizeMethod: module_5211.oneOf(["auto", "resize", "scale"]), resizeMode: module_5211.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8996 = Object.assign(_mod8996);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5211 = module_5211_mod;
oneOfType = module_5211.oneOfType;
module_5211 = module_5211_mod;
const shape = module_5211.shape;
const obj2 = { uri: module_5211.string, headers: module_5211.objectOf(module_5211.string) };
module_5211 = module_5211_mod;
items = [shape(obj2), module_5211.number, ];
module_5211 = module_5211_mod;
const arrayOf = module_5211.arrayOf;
module_5211 = module_5211_mod;
const size = { uri: module_5211.string, width: module_5211.number, height: module_5211.number, headers: module_5211.objectOf(module_5211.string) };
const shape2 = module_5211.shape;
items[2] = arrayOf(shape2(size));
module_5211 = module_5211_mod;
oneOfType2 = module_5211.oneOfType;
module_5211 = module_5211_mod;
items1 = [, ];
const obj3 = { uri: module_5211.string };
items1[0] = module_5211.shape(obj3);
items1[1] = module_5211.number;
module_5211 = module_5211_mod;

export default obj;
