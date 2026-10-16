// Module ID: 8671
// Function ID: 8672
// Dependencies: [8667, 8668, 8669, 5006, 8659]

// Module 8671
import normalizeColor2 from "normalizeColor" /* 8659 */;
import _mod8667 from "module_8667" /* 8667 */;
import normalizeColor3 from "normalizeColor" /* 8668 */;
import merged22 from "merged2" /* 8669 */;
import "module_5006";
import module_5006_mod from "module_5006" /* 5006 */;

let module_5006;
const obj = { resizeMode: module_5006.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5006.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5006.number, borderRadius: module_5006.number, overflow: module_5006.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5006.number, overlayColor: module_5006.string, borderTopLeftRadius: module_5006.number, borderTopRightRadius: module_5006.number, borderBottomLeftRadius: module_5006.number, borderBottomRightRadius: module_5006.number };
const size = Object.assign(_mod8667);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5006 = module_5006_mod;

export default obj;
