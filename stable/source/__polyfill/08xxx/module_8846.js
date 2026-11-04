// Module ID: 8846
// Function ID: 8847
// Dependencies: [8842, 8843, 8844, 5042, 8834]

// Module 8846
import normalizeColor2 from "normalizeColor" /* 8834 */;
import _mod8842 from "module_8842" /* 8842 */;
import normalizeColor3 from "normalizeColor" /* 8843 */;
import merged22 from "merged2" /* 8844 */;
import "module_5042";
import module_5042_mod from "module_5042" /* 5042 */;

let module_5042;
const obj = { resizeMode: module_5042.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5042.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5042.number, borderRadius: module_5042.number, overflow: module_5042.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5042.number, overlayColor: module_5042.string, borderTopLeftRadius: module_5042.number, borderTopRightRadius: module_5042.number, borderBottomLeftRadius: module_5042.number, borderBottomRightRadius: module_5042.number };
const size = Object.assign(_mod8842);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5042 = module_5042_mod;

export default obj;
