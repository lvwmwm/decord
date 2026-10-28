// Module ID: 8851
// Function ID: 8852
// Dependencies: [8847, 8848, 8849, 5043, 8839]

// Module 8851
import normalizeColor2 from "normalizeColor" /* 8839 */;
import _mod8847 from "module_8847" /* 8847 */;
import normalizeColor3 from "normalizeColor" /* 8848 */;
import merged22 from "merged2" /* 8849 */;
import "module_5043";
import module_5043_mod from "module_5043" /* 5043 */;

let module_5043;
const obj = { resizeMode: module_5043.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5043.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5043.number, borderRadius: module_5043.number, overflow: module_5043.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5043.number, overlayColor: module_5043.string, borderTopLeftRadius: module_5043.number, borderTopRightRadius: module_5043.number, borderBottomLeftRadius: module_5043.number, borderBottomRightRadius: module_5043.number };
const size = Object.assign(_mod8847);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5043 = module_5043_mod;

export default obj;
