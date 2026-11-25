// Module ID: 8862
// Function ID: 8863
// Dependencies: [8858, 8859, 8860, 5053, 8850]

// Module 8862
import normalizeColor2 from "normalizeColor" /* 8850 */;
import _mod8858 from "module_8858" /* 8858 */;
import normalizeColor3 from "normalizeColor" /* 8859 */;
import merged22 from "merged2" /* 8860 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let module_5053;
const obj = { resizeMode: module_5053.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5053.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5053.number, borderRadius: module_5053.number, overflow: module_5053.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5053.number, overlayColor: module_5053.string, borderTopLeftRadius: module_5053.number, borderTopRightRadius: module_5053.number, borderBottomLeftRadius: module_5053.number, borderBottomRightRadius: module_5053.number };
const size = Object.assign(_mod8858);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5053 = module_5053_mod;

export default obj;
