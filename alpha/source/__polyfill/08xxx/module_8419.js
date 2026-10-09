// Module ID: 8419
// Function ID: 8420
// Dependencies: [8420, 8421, 8428, 4908]

// Module 8419
import _mod8420 from "module_8420" /* 8420 */;
import _mod8428 from "module_8428" /* 8428 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8421 */;
import module_4908_mod from "module_4908" /* 4908 */;
import "module_4908";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4908;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8428), source: oneOfType(items), blurRadius: module_4908.number, defaultSource: module_4908.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4908.bool, fadeDuration: module_4908.number, internal_analyticTag: module_4908.string, onLoadStart: module_4908.func, onError: module_4908.func, onLoad: module_4908.func, onLoadEnd: module_4908.func, testID: module_4908.string, resizeMethod: module_4908.oneOf(["auto", "resize", "scale"]), resizeMode: module_4908.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8420 = Object.assign(_mod8420);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4908 = module_4908_mod;
oneOfType = module_4908.oneOfType;
module_4908 = module_4908_mod;
const shape = module_4908.shape;
const obj2 = { uri: module_4908.string, headers: module_4908.objectOf(module_4908.string) };
module_4908 = module_4908_mod;
items = [shape(obj2), module_4908.number, ];
module_4908 = module_4908_mod;
const arrayOf = module_4908.arrayOf;
module_4908 = module_4908_mod;
const size = { uri: module_4908.string, width: module_4908.number, height: module_4908.number, headers: module_4908.objectOf(module_4908.string) };
const shape2 = module_4908.shape;
items[2] = arrayOf(shape2(size));
module_4908 = module_4908_mod;
oneOfType2 = module_4908.oneOfType;
module_4908 = module_4908_mod;
items1 = [, ];
const obj3 = { uri: module_4908.string };
items1[0] = module_4908.shape(obj3);
items1[1] = module_4908.number;
module_4908 = module_4908_mod;

export default obj;
