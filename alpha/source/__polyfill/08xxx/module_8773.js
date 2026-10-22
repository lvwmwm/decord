// Module ID: 8773
// Function ID: 8774
// Dependencies: [8774, 8775, 8782, 5003]

// Module 8773
import _mod8774 from "module_8774" /* 8774 */;
import _mod8782 from "module_8782" /* 8782 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8775 */;
import module_5003_mod from "module_5003" /* 5003 */;
import "module_5003";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5003;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8782), source: oneOfType(items), blurRadius: module_5003.number, defaultSource: module_5003.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5003.bool, fadeDuration: module_5003.number, internal_analyticTag: module_5003.string, onLoadStart: module_5003.func, onError: module_5003.func, onLoad: module_5003.func, onLoadEnd: module_5003.func, testID: module_5003.string, resizeMethod: module_5003.oneOf(["auto", "resize", "scale"]), resizeMode: module_5003.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8774 = Object.assign(_mod8774);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5003 = module_5003_mod;
oneOfType = module_5003.oneOfType;
module_5003 = module_5003_mod;
const shape = module_5003.shape;
const obj2 = { uri: module_5003.string, headers: module_5003.objectOf(module_5003.string) };
module_5003 = module_5003_mod;
items = [shape(obj2), module_5003.number, ];
module_5003 = module_5003_mod;
const arrayOf = module_5003.arrayOf;
module_5003 = module_5003_mod;
const size = { uri: module_5003.string, width: module_5003.number, height: module_5003.number, headers: module_5003.objectOf(module_5003.string) };
const shape2 = module_5003.shape;
items[2] = arrayOf(shape2(size));
module_5003 = module_5003_mod;
oneOfType2 = module_5003.oneOfType;
module_5003 = module_5003_mod;
items1 = [, ];
const obj3 = { uri: module_5003.string };
items1[0] = module_5003.shape(obj3);
items1[1] = module_5003.number;
module_5003 = module_5003_mod;

export default obj;
