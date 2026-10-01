// Module ID: 7765
// Function ID: 7766
// Dependencies: [7766, 7767, 7774, 4663]

// Module 7765
import _mod7766 from "module_7766" /* 7766 */;
import _mod7774 from "module_7774" /* 7774 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 7767 */;
import module_4663_mod from "module_4663" /* 4663 */;
import "module_4663";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4663;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod7774), source: oneOfType(items), blurRadius: module_4663.number, defaultSource: module_4663.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4663.bool, fadeDuration: module_4663.number, internal_analyticTag: module_4663.string, onLoadStart: module_4663.func, onError: module_4663.func, onLoad: module_4663.func, onLoadEnd: module_4663.func, testID: module_4663.string, resizeMethod: module_4663.oneOf(["auto", "resize", "scale"]), resizeMode: module_4663.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_7766 = Object.assign(_mod7766);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4663 = module_4663_mod;
oneOfType = module_4663.oneOfType;
module_4663 = module_4663_mod;
const shape = module_4663.shape;
const obj2 = { uri: module_4663.string, headers: module_4663.objectOf(module_4663.string) };
module_4663 = module_4663_mod;
items = [shape(obj2), module_4663.number, ];
module_4663 = module_4663_mod;
const arrayOf = module_4663.arrayOf;
module_4663 = module_4663_mod;
const size = { uri: module_4663.string, width: module_4663.number, height: module_4663.number, headers: module_4663.objectOf(module_4663.string) };
const shape2 = module_4663.shape;
items[2] = arrayOf(shape2(size));
module_4663 = module_4663_mod;
oneOfType2 = module_4663.oneOfType;
module_4663 = module_4663_mod;
items1 = [, ];
const obj3 = { uri: module_4663.string };
items1[0] = module_4663.shape(obj3);
items1[1] = module_4663.number;
module_4663 = module_4663_mod;

export default obj;
