// Module ID: 8764
// Function ID: 8765
// Dependencies: [8765, 8766, 8773, 5000]

// Module 8764
import _mod8765 from "module_8765" /* 8765 */;
import _mod8773 from "module_8773" /* 8773 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8766 */;
import module_5000_mod from "module_5000" /* 5000 */;
import "module_5000";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5000;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8773), source: oneOfType(items), blurRadius: module_5000.number, defaultSource: module_5000.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5000.bool, fadeDuration: module_5000.number, internal_analyticTag: module_5000.string, onLoadStart: module_5000.func, onError: module_5000.func, onLoad: module_5000.func, onLoadEnd: module_5000.func, testID: module_5000.string, resizeMethod: module_5000.oneOf(["auto", "resize", "scale"]), resizeMode: module_5000.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8765 = Object.assign(_mod8765);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5000 = module_5000_mod;
oneOfType = module_5000.oneOfType;
module_5000 = module_5000_mod;
const shape = module_5000.shape;
const obj2 = { uri: module_5000.string, headers: module_5000.objectOf(module_5000.string) };
module_5000 = module_5000_mod;
items = [shape(obj2), module_5000.number, ];
module_5000 = module_5000_mod;
const arrayOf = module_5000.arrayOf;
module_5000 = module_5000_mod;
const size = { uri: module_5000.string, width: module_5000.number, height: module_5000.number, headers: module_5000.objectOf(module_5000.string) };
const shape2 = module_5000.shape;
items[2] = arrayOf(shape2(size));
module_5000 = module_5000_mod;
oneOfType2 = module_5000.oneOfType;
module_5000 = module_5000_mod;
items1 = [, ];
const obj3 = { uri: module_5000.string };
items1[0] = module_5000.shape(obj3);
items1[1] = module_5000.number;
module_5000 = module_5000_mod;

export default obj;
