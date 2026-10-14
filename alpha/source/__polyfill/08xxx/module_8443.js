// Module ID: 8443
// Function ID: 8444
// Dependencies: [8444, 8445, 8452, 4949]

// Module 8443
import _mod8444 from "module_8444" /* 8444 */;
import _mod8452 from "module_8452" /* 8452 */;
import DeprecatedStyleSheetPropType_mod from "DeprecatedStyleSheetPropType" /* 8445 */;
import module_4949_mod from "module_4949" /* 4949 */;
import "module_4949";

let DeprecatedStyleSheetPropType;
let items;
let items1;
let module_4949;
let oneOfType;
let oneOfType2;
const obj = { style: DeprecatedStyleSheetPropType(_mod8452), source: oneOfType(items), blurRadius: module_4949.number, defaultSource: module_4949.number, loadingIndicatorSource: oneOfType2(items1), progressiveRenderingEnabled: module_4949.bool, fadeDuration: module_4949.number, internal_analyticTag: module_4949.string, onLoadStart: module_4949.func, onError: module_4949.func, onLoad: module_4949.func, onLoadEnd: module_4949.func, testID: module_4949.string, resizeMethod: module_4949.oneOf(["auto", "resize", "scale"]), resizeMode: module_4949.oneOf(["cover", "contain", "stretch", "repeat", "center"]) };
const module_8444 = Object.assign(_mod8444);
DeprecatedStyleSheetPropType = DeprecatedStyleSheetPropType_mod;
module_4949 = module_4949_mod;
oneOfType = module_4949.oneOfType;
module_4949 = module_4949_mod;
const shape = module_4949.shape;
const obj2 = { uri: module_4949.string, headers: module_4949.objectOf(module_4949.string) };
module_4949 = module_4949_mod;
items = [shape(obj2), module_4949.number, ];
module_4949 = module_4949_mod;
const arrayOf = module_4949.arrayOf;
module_4949 = module_4949_mod;
const size = { uri: module_4949.string, width: module_4949.number, height: module_4949.number, headers: module_4949.objectOf(module_4949.string) };
const shape2 = module_4949.shape;
items[2] = arrayOf(shape2(size));
module_4949 = module_4949_mod;
oneOfType2 = module_4949.oneOfType;
module_4949 = module_4949_mod;
items1 = [, ];
const obj3 = { uri: module_4949.string };
items1[0] = module_4949.shape(obj3);
items1[1] = module_4949.number;
module_4949 = module_4949_mod;

export default obj;
