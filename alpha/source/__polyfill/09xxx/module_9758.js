// Module ID: 9758
// Function ID: 9759
// Dependencies: [9759, 9760, 9767, 5351]

// Module 9758
import _mod9759 from "module_9759" /* 9759 */;
import _mod9767 from "module_9767" /* 9767 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9760 */;
import module_5351_mod from "module_5351" /* 5351 */;
import "module_5351";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5351;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9767), source: oneOfType(items), blurRadius: module_5351.number, defaultSource: module_5351.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5351.bool, fadeDuration: module_5351.number, internal_analyticTag: module_5351.string, onLoadStart: module_5351.func, onError: module_5351.func, onLoad: module_5351.func, onLoadEnd: module_5351.func, testID: module_5351.string, resizeMethod: module_5351.oneOf(["auto", "resize", "scale"]), resizeMode: module_5351.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9759 = Object.assign(_mod9759);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5351 = module_5351_mod;
oneOfType = module_5351.oneOfType;
module_5351 = module_5351_mod;
const shape = module_5351.shape;
const obj2 = { uri: module_5351.string, headers: module_5351.objectOf(module_5351.string) };
module_5351 = module_5351_mod;
items = [shape(obj2), module_5351.number, ];
module_5351 = module_5351_mod;
const arrayOf = module_5351.arrayOf;
module_5351 = module_5351_mod;
const size = { uri: module_5351.string, width: module_5351.number, height: module_5351.number, headers: module_5351.objectOf(module_5351.string) };
const shape2 = module_5351.shape;
items[2] = arrayOf(shape2(size));
module_5351 = module_5351_mod;
oneOfType2 = module_5351.oneOfType;
module_5351 = module_5351_mod;
items1 = [, ];
const obj3 = { uri: module_5351.string };
items1[0] = module_5351.shape(obj3);
items1[1] = module_5351.number;
module_5351 = module_5351_mod;

export default obj;
