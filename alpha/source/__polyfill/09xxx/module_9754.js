// Module ID: 9754
// Function ID: 9755
// Dependencies: [9750, 9751, 9752, 5357, 9742]

// Module 9754
import normalizeColor2 from "normalizeColor" /* 9742 */;
import _mod9750 from "module_9750" /* 9750 */;
import normalizeColor3 from "normalizeColor" /* 9751 */;
import merged22 from "merged2" /* 9752 */;
import "module_5357";
import module_5357_mod from "module_5357" /* 5357 */;

let module_5357;
const obj = { resizeMode: module_5357.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5357.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5357.number, borderRadius: module_5357.number, overflow: module_5357.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5357.number, overlayColor: module_5357.string, borderTopLeftRadius: module_5357.number, borderTopRightRadius: module_5357.number, borderBottomLeftRadius: module_5357.number, borderBottomRightRadius: module_5357.number };
const size = Object.assign(_mod9750);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5357 = module_5357_mod;

export default obj;
