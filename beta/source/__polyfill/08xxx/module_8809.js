// Module ID: 8809
// Function ID: 8810
// Dependencies: [8810, 8811, 8812, 5010, 8802]

// Module 8809
import normalizeColor2 from "normalizeColor" /* 8802 */;
import _mod8810 from "module_8810" /* 8810 */;
import normalizeColor3 from "normalizeColor" /* 8811 */;
import merged22 from "merged2" /* 8812 */;
import "module_5010";
import module_5010_mod from "module_5010" /* 5010 */;

let module_5010;
const obj = { backfaceVisibility: module_5010.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderTopColor: normalizeColor2, borderRightColor: normalizeColor2, borderBottomColor: normalizeColor2, borderLeftColor: normalizeColor2, borderStartColor: normalizeColor2, borderEndColor: normalizeColor2, borderRadius: module_5010.number, borderTopLeftRadius: module_5010.number, borderTopRightRadius: module_5010.number, borderTopStartRadius: module_5010.number, borderTopEndRadius: module_5010.number, borderBottomLeftRadius: module_5010.number, borderBottomRightRadius: module_5010.number, borderBottomStartRadius: module_5010.number, borderBottomEndRadius: module_5010.number, borderStyle: module_5010.oneOf(["solid", "dotted", "dashed"]), borderWidth: module_5010.number, borderTopWidth: module_5010.number, borderRightWidth: module_5010.number, borderBottomWidth: module_5010.number, borderLeftWidth: module_5010.number, opacity: module_5010.number, elevation: module_5010.number };
const size = Object.assign(_mod8810);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5010 = module_5010_mod;

export default obj;
