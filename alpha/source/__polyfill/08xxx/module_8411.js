// Module ID: 8411
// Function ID: 8412
// Dependencies: [8412, 8413, 8420, 4907]

// Module 8411
import _mod8412 from "module_8412" /* 8412 */;
import _mod8420 from "module_8420" /* 8420 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8413 */;
import module_4907_mod from "module_4907" /* 4907 */;
import "module_4907";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4907;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8420), source: oneOfType(items), blurRadius: module_4907.number, defaultSource: module_4907.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4907.bool, fadeDuration: module_4907.number, internal_analyticTag: module_4907.string, onLoadStart: module_4907.func, onError: module_4907.func, onLoad: module_4907.func, onLoadEnd: module_4907.func, testID: module_4907.string, resizeMethod: module_4907.oneOf(["auto", "resize", "scale"]), resizeMode: module_4907.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8412 = Object.assign(_mod8412);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4907 = module_4907_mod;
oneOfType = module_4907.oneOfType;
module_4907 = module_4907_mod;
const shape = module_4907.shape;
const obj2 = { uri: module_4907.string, headers: module_4907.objectOf(module_4907.string) };
module_4907 = module_4907_mod;
items = [shape(obj2), module_4907.number, ];
module_4907 = module_4907_mod;
const arrayOf = module_4907.arrayOf;
module_4907 = module_4907_mod;
const size = { uri: module_4907.string, width: module_4907.number, height: module_4907.number, headers: module_4907.objectOf(module_4907.string) };
const shape2 = module_4907.shape;
items[2] = arrayOf(shape2(size));
module_4907 = module_4907_mod;
oneOfType2 = module_4907.oneOfType;
module_4907 = module_4907_mod;
items1 = [, ];
const obj3 = { uri: module_4907.string };
items1[0] = module_4907.shape(obj3);
items1[1] = module_4907.number;
module_4907 = module_4907_mod;

export default obj;
