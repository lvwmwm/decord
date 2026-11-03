// Module ID: 9021
// Function ID: 9022
// Dependencies: [9017, 9018, 9019, 5180, 9009]

// Module 9021
import normalizeColor2 from "normalizeColor" /* 9009 */;
import _mod9017 from "module_9017" /* 9017 */;
import normalizeColor3 from "normalizeColor" /* 9018 */;
import merged22 from "merged2" /* 9019 */;
import "module_5180";
import module_5180_mod from "module_5180" /* 5180 */;

let module_5180;
const obj = { resizeMode: module_5180.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5180.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5180.number, borderRadius: module_5180.number, overflow: module_5180.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5180.number, overlayColor: module_5180.string, borderTopLeftRadius: module_5180.number, borderTopRightRadius: module_5180.number, borderBottomLeftRadius: module_5180.number, borderBottomRightRadius: module_5180.number };
const size = Object.assign(_mod9017);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5180 = module_5180_mod;

export default obj;
