// Module ID: 8709
// Function ID: 8710
// Dependencies: [8710, 8711, 8718, 5042]

// Module 8709
import _mod8710 from "module_8710" /* 8710 */;
import _mod8718 from "module_8718" /* 8718 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8711 */;
import module_5042_mod from "module_5042" /* 5042 */;
import "module_5042";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5042;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8718), source: oneOfType(items), blurRadius: module_5042.number, defaultSource: module_5042.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5042.bool, fadeDuration: module_5042.number, internal_analyticTag: module_5042.string, onLoadStart: module_5042.func, onError: module_5042.func, onLoad: module_5042.func, onLoadEnd: module_5042.func, testID: module_5042.string, resizeMethod: module_5042.oneOf(["auto", "resize", "scale"]), resizeMode: module_5042.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8710 = Object.assign(_mod8710);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5042 = module_5042_mod;
oneOfType = module_5042.oneOfType;
module_5042 = module_5042_mod;
const shape = module_5042.shape;
const obj2 = { uri: module_5042.string, headers: module_5042.objectOf(module_5042.string) };
module_5042 = module_5042_mod;
items = [shape(obj2), module_5042.number, ];
module_5042 = module_5042_mod;
const arrayOf = module_5042.arrayOf;
module_5042 = module_5042_mod;
const size = { uri: module_5042.string, width: module_5042.number, height: module_5042.number, headers: module_5042.objectOf(module_5042.string) };
const shape2 = module_5042.shape;
items[2] = arrayOf(shape2(size));
module_5042 = module_5042_mod;
oneOfType2 = module_5042.oneOfType;
module_5042 = module_5042_mod;
items1 = [, ];
const obj3 = { uri: module_5042.string };
items1[0] = module_5042.shape(obj3);
items1[1] = module_5042.number;
module_5042 = module_5042_mod;

export default obj;
