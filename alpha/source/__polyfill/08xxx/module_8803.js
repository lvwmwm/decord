// Module ID: 8803
// Function ID: 8804
// Dependencies: [8804, 8805, 8812, 5008]

// Module 8803
import _mod8804 from "module_8804" /* 8804 */;
import _mod8812 from "module_8812" /* 8812 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8805 */;
import module_5008_mod from "module_5008" /* 5008 */;
import "module_5008";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5008;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8812), source: oneOfType(items), blurRadius: module_5008.number, defaultSource: module_5008.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5008.bool, fadeDuration: module_5008.number, internal_analyticTag: module_5008.string, onLoadStart: module_5008.func, onError: module_5008.func, onLoad: module_5008.func, onLoadEnd: module_5008.func, testID: module_5008.string, resizeMethod: module_5008.oneOf(["auto", "resize", "scale"]), resizeMode: module_5008.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8804 = Object.assign(_mod8804);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5008 = module_5008_mod;
oneOfType = module_5008.oneOfType;
module_5008 = module_5008_mod;
const shape = module_5008.shape;
const obj2 = { uri: module_5008.string, headers: module_5008.objectOf(module_5008.string) };
module_5008 = module_5008_mod;
items = [shape(obj2), module_5008.number, ];
module_5008 = module_5008_mod;
const arrayOf = module_5008.arrayOf;
module_5008 = module_5008_mod;
const size = { uri: module_5008.string, width: module_5008.number, height: module_5008.number, headers: module_5008.objectOf(module_5008.string) };
const shape2 = module_5008.shape;
items[2] = arrayOf(shape2(size));
module_5008 = module_5008_mod;
oneOfType2 = module_5008.oneOfType;
module_5008 = module_5008_mod;
items1 = [, ];
const obj3 = { uri: module_5008.string };
items1[0] = module_5008.shape(obj3);
items1[1] = module_5008.number;
module_5008 = module_5008_mod;

export default obj;
