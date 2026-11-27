// Module ID: 8905
// Function ID: 8906
// Dependencies: [8901, 8902, 8903, 5084, 8893]

// Module 8905
import normalizeColor2 from "normalizeColor" /* 8893 */;
import _mod8901 from "module_8901" /* 8901 */;
import normalizeColor3 from "normalizeColor" /* 8902 */;
import merged22 from "merged2" /* 8903 */;
import "module_5084";
import module_5084_mod from "module_5084" /* 5084 */;

let module_5084;
const obj = { resizeMode: module_5084.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5084.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5084.number, borderRadius: module_5084.number, overflow: module_5084.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5084.number, overlayColor: module_5084.string, borderTopLeftRadius: module_5084.number, borderTopRightRadius: module_5084.number, borderBottomLeftRadius: module_5084.number, borderBottomRightRadius: module_5084.number };
const size = Object.assign(_mod8901);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5084 = module_5084_mod;

export default obj;
