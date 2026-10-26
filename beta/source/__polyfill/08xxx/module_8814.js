// Module ID: 8814
// Function ID: 8815
// Dependencies: [8810, 8811, 8812, 5010, 8802]

// Module 8814
import normalizeColor2 from "normalizeColor" /* 8802 */;
import _mod8810 from "module_8810" /* 8810 */;
import normalizeColor3 from "normalizeColor" /* 8811 */;
import merged22 from "merged2" /* 8812 */;
import "module_5010";
import module_5010_mod from "module_5010" /* 5010 */;

let module_5010;
const obj = { resizeMode: module_5010.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5010.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5010.number, borderRadius: module_5010.number, overflow: module_5010.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5010.number, overlayColor: module_5010.string, borderTopLeftRadius: module_5010.number, borderTopRightRadius: module_5010.number, borderBottomLeftRadius: module_5010.number, borderBottomRightRadius: module_5010.number };
const size = Object.assign(_mod8810);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5010 = module_5010_mod;

export default obj;
