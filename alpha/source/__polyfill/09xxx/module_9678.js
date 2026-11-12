// Module ID: 9678
// Function ID: 9679
// Dependencies: [9679, 9680, 9687, 5294]

// Module 9678
import _mod9679 from "module_9679" /* 9679 */;
import _mod9687 from "module_9687" /* 9687 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 9680 */;
import module_5294_mod from "module_5294" /* 5294 */;
import "module_5294";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5294;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod9687), source: oneOfType(items), blurRadius: module_5294.number, defaultSource: module_5294.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5294.bool, fadeDuration: module_5294.number, internal_analyticTag: module_5294.string, onLoadStart: module_5294.func, onError: module_5294.func, onLoad: module_5294.func, onLoadEnd: module_5294.func, testID: module_5294.string, resizeMethod: module_5294.oneOf(["auto", "resize", "scale"]), resizeMode: module_5294.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_9679 = Object.assign(_mod9679);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5294 = module_5294_mod;
oneOfType = module_5294.oneOfType;
module_5294 = module_5294_mod;
const shape = module_5294.shape;
const obj2 = { uri: module_5294.string, headers: module_5294.objectOf(module_5294.string) };
module_5294 = module_5294_mod;
items = [shape(obj2), module_5294.number, ];
module_5294 = module_5294_mod;
const arrayOf = module_5294.arrayOf;
module_5294 = module_5294_mod;
const size = { uri: module_5294.string, width: module_5294.number, height: module_5294.number, headers: module_5294.objectOf(module_5294.string) };
const shape2 = module_5294.shape;
items[2] = arrayOf(shape2(size));
module_5294 = module_5294_mod;
oneOfType2 = module_5294.oneOfType;
module_5294 = module_5294_mod;
items1 = [, ];
const obj3 = { uri: module_5294.string };
items1[0] = module_5294.shape(obj3);
items1[1] = module_5294.number;
module_5294 = module_5294_mod;

export default obj;
