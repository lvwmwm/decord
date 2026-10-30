// Module ID: 8879
// Function ID: 8880
// Dependencies: [8880, 8881, 8888, 5048]

// Module 8879
import _mod8880 from "module_8880" /* 8880 */;
import _mod8888 from "module_8888" /* 8888 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8881 */;
import module_5048_mod from "module_5048" /* 5048 */;
import "module_5048";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_5048;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8888), source: oneOfType(items), blurRadius: module_5048.number, defaultSource: module_5048.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_5048.bool, fadeDuration: module_5048.number, internal_analyticTag: module_5048.string, onLoadStart: module_5048.func, onError: module_5048.func, onLoad: module_5048.func, onLoadEnd: module_5048.func, testID: module_5048.string, resizeMethod: module_5048.oneOf(["auto", "resize", "scale"]), resizeMode: module_5048.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8880 = Object.assign(_mod8880);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_5048 = module_5048_mod;
oneOfType = module_5048.oneOfType;
module_5048 = module_5048_mod;
const shape = module_5048.shape;
const obj2 = { uri: module_5048.string, headers: module_5048.objectOf(module_5048.string) };
module_5048 = module_5048_mod;
items = [shape(obj2), module_5048.number, ];
module_5048 = module_5048_mod;
const arrayOf = module_5048.arrayOf;
module_5048 = module_5048_mod;
const size = { uri: module_5048.string, width: module_5048.number, height: module_5048.number, headers: module_5048.objectOf(module_5048.string) };
const shape2 = module_5048.shape;
items[2] = arrayOf(shape2(size));
module_5048 = module_5048_mod;
oneOfType2 = module_5048.oneOfType;
module_5048 = module_5048_mod;
items1 = [, ];
const obj3 = { uri: module_5048.string };
items1[0] = module_5048.shape(obj3);
items1[1] = module_5048.number;
module_5048 = module_5048_mod;

export default obj;
