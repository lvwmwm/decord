// Module ID: 8805
// Function ID: 8806
// Dependencies: [8806, 8807, 8814, 5011]

// Module 8805
import _mod8806 from "module_8806" /* 8806 */;
import _mod8814 from "module_8814" /* 8814 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8807 */;
import module_5011_mod from "module_5011" /* 5011 */;
import "module_5011";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5011;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8814), source: oneOfType(items), blurRadius: module_5011.number, defaultSource: module_5011.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5011.bool, fadeDuration: module_5011.number, internal_analyticTag: module_5011.string, onLoadStart: module_5011.func, onError: module_5011.func, onLoad: module_5011.func, onLoadEnd: module_5011.func, testID: module_5011.string, resizeMethod: module_5011.oneOf(["auto", "resize", "scale"]), resizeMode: module_5011.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8806 = Object.assign(_mod8806);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5011 = module_5011_mod;
oneOfType = module_5011.oneOfType;
module_5011 = module_5011_mod;
const shape = module_5011.shape;
const obj2 = { uri: module_5011.string, headers: module_5011.objectOf(module_5011.string) };
module_5011 = module_5011_mod;
items = [shape(obj2), module_5011.number, ];
module_5011 = module_5011_mod;
const arrayOf = module_5011.arrayOf;
module_5011 = module_5011_mod;
const size = { uri: module_5011.string, width: module_5011.number, height: module_5011.number, headers: module_5011.objectOf(module_5011.string) };
const shape2 = module_5011.shape;
items[2] = arrayOf(shape2(size));
module_5011 = module_5011_mod;
oneOfType2 = module_5011.oneOfType;
module_5011 = module_5011_mod;
items1 = [, ];
const obj3 = { uri: module_5011.string };
items1[0] = module_5011.shape(obj3);
items1[1] = module_5011.number;
module_5011 = module_5011_mod;

export default obj;
