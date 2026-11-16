// Module ID: 9754
// Function ID: 9755
// Dependencies: [9750, 9751, 9752, 5347, 9742]

// Module 9754
import normalizeColor2 from "normalizeColor" /* 9742 */;
import _mod9750 from "module_9750" /* 9750 */;
import normalizeColor3 from "normalizeColor" /* 9751 */;
import merged22 from "merged2" /* 9752 */;
import "module_5347";
import module_5347_mod from "module_5347" /* 5347 */;

let module_5347;
const obj = { resizeMode: module_5347.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5347.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5347.number, borderRadius: module_5347.number, overflow: module_5347.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5347.number, overlayColor: module_5347.string, borderTopLeftRadius: module_5347.number, borderTopRightRadius: module_5347.number, borderBottomLeftRadius: module_5347.number, borderBottomRightRadius: module_5347.number };
const size = Object.assign(_mod9750);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5347 = module_5347_mod;

export default obj;
