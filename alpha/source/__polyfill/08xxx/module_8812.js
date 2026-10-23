// Module ID: 8812
// Function ID: 8813
// Dependencies: [8808, 8809, 8810, 5008, 8800]

// Module 8812
import normalizeColor2 from "normalizeColor" /* 8800 */;
import _mod8808 from "module_8808" /* 8808 */;
import normalizeColor3 from "normalizeColor" /* 8809 */;
import merged22 from "merged2" /* 8810 */;
import "module_5008";
import module_5008_mod from "module_5008" /* 5008 */;

let module_5008;
const obj = { resizeMode: module_5008.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5008.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5008.number, borderRadius: module_5008.number, overflow: module_5008.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5008.number, overlayColor: module_5008.string, borderTopLeftRadius: module_5008.number, borderTopRightRadius: module_5008.number, borderBottomLeftRadius: module_5008.number, borderBottomRightRadius: module_5008.number };
const size = Object.assign(_mod8808);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5008 = module_5008_mod;

export default obj;
