// Module ID: 8754
// Function ID: 8755
// Dependencies: [8755, 8756, 8763, 4958]

// Module 8754
import _mod8755 from "module_8755" /* 8755 */;
import _mod8763 from "module_8763" /* 8763 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8756 */;
import module_4958_mod from "module_4958" /* 4958 */;
import "module_4958";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4958;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8763), source: oneOfType(items), blurRadius: module_4958.number, defaultSource: module_4958.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4958.bool, fadeDuration: module_4958.number, internal_analyticTag: module_4958.string, onLoadStart: module_4958.func, onError: module_4958.func, onLoad: module_4958.func, onLoadEnd: module_4958.func, testID: module_4958.string, resizeMethod: module_4958.oneOf(["auto", "resize", "scale"]), resizeMode: module_4958.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8755 = Object.assign(_mod8755);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4958 = module_4958_mod;
oneOfType = module_4958.oneOfType;
module_4958 = module_4958_mod;
const shape = module_4958.shape;
const obj2 = { uri: module_4958.string, headers: module_4958.objectOf(module_4958.string) };
module_4958 = module_4958_mod;
items = [shape(obj2), module_4958.number, ];
module_4958 = module_4958_mod;
const arrayOf = module_4958.arrayOf;
module_4958 = module_4958_mod;
const size = { uri: module_4958.string, width: module_4958.number, height: module_4958.number, headers: module_4958.objectOf(module_4958.string) };
const shape2 = module_4958.shape;
items[2] = arrayOf(shape2(size));
module_4958 = module_4958_mod;
oneOfType2 = module_4958.oneOfType;
module_4958 = module_4958_mod;
items1 = [, ];
const obj3 = { uri: module_4958.string };
items1[0] = module_4958.shape(obj3);
items1[1] = module_4958.number;
module_4958 = module_4958_mod;

export default obj;
