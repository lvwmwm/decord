// Module ID: 9004
// Function ID: 9005
// Dependencies: [9000, 9001, 9002, 5211, 8992]

// Module 9004
import normalizeColor2 from "normalizeColor" /* 8992 */;
import _mod9000 from "module_9000" /* 9000 */;
import normalizeColor3 from "normalizeColor" /* 9001 */;
import merged22 from "merged2" /* 9002 */;
import "module_5211";
import module_5211_mod from "module_5211" /* 5211 */;

let module_5211;
const obj = { resizeMode: module_5211.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5211.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5211.number, borderRadius: module_5211.number, overflow: module_5211.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5211.number, overlayColor: module_5211.string, borderTopLeftRadius: module_5211.number, borderTopRightRadius: module_5211.number, borderBottomLeftRadius: module_5211.number, borderBottomRightRadius: module_5211.number };
const size = Object.assign(_mod9000);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5211 = module_5211_mod;

export default obj;
