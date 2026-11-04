// Module ID: 8897
// Function ID: 8898
// Dependencies: [8893, 8894, 8895, 5053, 8885]

// Module 8897
import normalizeColor2 from "normalizeColor" /* 8885 */;
import _mod8893 from "module_8893" /* 8893 */;
import normalizeColor3 from "normalizeColor" /* 8894 */;
import merged22 from "merged2" /* 8895 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let module_5053;
const obj = { resizeMode: module_5053.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5053.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5053.number, borderRadius: module_5053.number, overflow: module_5053.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5053.number, overlayColor: module_5053.string, borderTopLeftRadius: module_5053.number, borderTopRightRadius: module_5053.number, borderBottomLeftRadius: module_5053.number, borderBottomRightRadius: module_5053.number };
const size = Object.assign(_mod8893);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5053 = module_5053_mod;

export default obj;
