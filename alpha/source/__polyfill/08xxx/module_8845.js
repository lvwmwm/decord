// Module ID: 8845
// Function ID: 8846
// Dependencies: [8846, 8847, 8854, 5044]

// Module 8845
import _mod8846 from "module_8846" /* 8846 */;
import _mod8854 from "module_8854" /* 8854 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8847 */;
import module_5044_mod from "module_5044" /* 5044 */;
import "module_5044";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5044;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8854), source: oneOfType(items), blurRadius: module_5044.number, defaultSource: module_5044.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5044.bool, fadeDuration: module_5044.number, internal_analyticTag: module_5044.string, onLoadStart: module_5044.func, onError: module_5044.func, onLoad: module_5044.func, onLoadEnd: module_5044.func, testID: module_5044.string, resizeMethod: module_5044.oneOf(["auto", "resize", "scale"]), resizeMode: module_5044.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8846 = Object.assign(_mod8846);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5044 = module_5044_mod;
oneOfType = module_5044.oneOfType;
module_5044 = module_5044_mod;
const shape = module_5044.shape;
const obj2 = { uri: module_5044.string, headers: module_5044.objectOf(module_5044.string) };
module_5044 = module_5044_mod;
items = [shape(obj2), module_5044.number, ];
module_5044 = module_5044_mod;
const arrayOf = module_5044.arrayOf;
module_5044 = module_5044_mod;
const size = { uri: module_5044.string, width: module_5044.number, height: module_5044.number, headers: module_5044.objectOf(module_5044.string) };
const shape2 = module_5044.shape;
items[2] = arrayOf(shape2(size));
module_5044 = module_5044_mod;
oneOfType2 = module_5044.oneOfType;
module_5044 = module_5044_mod;
items1 = [, ];
const obj3 = { uri: module_5044.string };
items1[0] = module_5044.shape(obj3);
items1[1] = module_5044.number;
module_5044 = module_5044_mod;

export default obj;
