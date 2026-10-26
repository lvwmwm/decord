// Module ID: 8805
// Function ID: 8806
// Dependencies: [8806, 8807, 8814, 5010]

// Module 8805
import _mod8806 from "module_8806" /* 8806 */;
import _mod8814 from "module_8814" /* 8814 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8807 */;
import module_5010_mod from "module_5010" /* 5010 */;
import "module_5010";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5010;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8814), source: oneOfType(items), blurRadius: module_5010.number, defaultSource: module_5010.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5010.bool, fadeDuration: module_5010.number, internal_analyticTag: module_5010.string, onLoadStart: module_5010.func, onError: module_5010.func, onLoad: module_5010.func, onLoadEnd: module_5010.func, testID: module_5010.string, resizeMethod: module_5010.oneOf(["auto", "resize", "scale"]), resizeMode: module_5010.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8806 = Object.assign(_mod8806);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5010 = module_5010_mod;
oneOfType = module_5010.oneOfType;
module_5010 = module_5010_mod;
const shape = module_5010.shape;
const obj2 = { uri: module_5010.string, headers: module_5010.objectOf(module_5010.string) };
module_5010 = module_5010_mod;
items = [shape(obj2), module_5010.number, ];
module_5010 = module_5010_mod;
const arrayOf = module_5010.arrayOf;
module_5010 = module_5010_mod;
const size = { uri: module_5010.string, width: module_5010.number, height: module_5010.number, headers: module_5010.objectOf(module_5010.string) };
const shape2 = module_5010.shape;
items[2] = arrayOf(shape2(size));
module_5010 = module_5010_mod;
oneOfType2 = module_5010.oneOfType;
module_5010 = module_5010_mod;
items1 = [, ];
const obj3 = { uri: module_5010.string };
items1[0] = module_5010.shape(obj3);
items1[1] = module_5010.number;
module_5010 = module_5010_mod;

export default obj;
