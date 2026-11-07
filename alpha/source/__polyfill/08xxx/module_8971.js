// Module ID: 8971
// Function ID: 8972
// Dependencies: [8967, 8968, 8969, 5179, 8959]

// Module 8971
import normalizeColor2 from "normalizeColor" /* 8959 */;
import _mod8967 from "module_8967" /* 8967 */;
import normalizeColor3 from "normalizeColor" /* 8968 */;
import merged22 from "merged2" /* 8969 */;
import "module_5179";
import module_5179_mod from "module_5179" /* 5179 */;

let module_5179;
const obj = { resizeMode: module_5179.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5179.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5179.number, borderRadius: module_5179.number, overflow: module_5179.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5179.number, overlayColor: module_5179.string, borderTopLeftRadius: module_5179.number, borderTopRightRadius: module_5179.number, borderBottomLeftRadius: module_5179.number, borderBottomRightRadius: module_5179.number };
const size = Object.assign(_mod8967);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5179 = module_5179_mod;

export default obj;
