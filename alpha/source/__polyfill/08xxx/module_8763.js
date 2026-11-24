// Module ID: 8763
// Function ID: 8764
// Dependencies: [8759, 8760, 8761, 4958, 8751]

// Module 8763
import normalizeColor2 from "normalizeColor" /* 8751 */;
import _mod8759 from "module_8759" /* 8759 */;
import normalizeColor3 from "normalizeColor" /* 8760 */;
import merged22 from "merged2" /* 8761 */;
import "module_4958";
import module_4958_mod from "module_4958" /* 4958 */;

let module_4958;
const obj = { resizeMode: module_4958.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4958.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4958.number, borderRadius: module_4958.number, overflow: module_4958.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4958.number, overlayColor: module_4958.string, borderTopLeftRadius: module_4958.number, borderTopRightRadius: module_4958.number, borderBottomLeftRadius: module_4958.number, borderBottomRightRadius: module_4958.number };
const size = Object.assign(_mod8759);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4958 = module_4958_mod;

export default obj;
