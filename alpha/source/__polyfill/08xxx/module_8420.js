// Module ID: 8420
// Function ID: 8421
// Dependencies: [8416, 8417, 8418, 4907, 8408]

// Module 8420
import normalizeColor2 from "normalizeColor" /* 8408 */;
import _mod8416 from "module_8416" /* 8416 */;
import normalizeColor3 from "normalizeColor" /* 8417 */;
import merged22 from "merged2" /* 8418 */;
import "module_4907";
import module_4907_mod from "module_4907" /* 4907 */;

let module_4907;
const obj = { resizeMode: module_4907.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4907.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4907.number, borderRadius: module_4907.number, overflow: module_4907.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4907.number, overlayColor: module_4907.string, borderTopLeftRadius: module_4907.number, borderTopRightRadius: module_4907.number, borderBottomLeftRadius: module_4907.number, borderBottomRightRadius: module_4907.number };
const size = Object.assign(_mod8416);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4907 = module_4907_mod;

export default obj;
