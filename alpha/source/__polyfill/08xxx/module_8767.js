// Module ID: 8767
// Function ID: 8768
// Dependencies: [8758, 8751, 4958]

// Module 8767
import normalizeColor from "normalizeColor" /* 8751 */;
import _mod8758 from "module_8758" /* 8758 */;
import "module_4958";
import module_4958_mod from "module_4958" /* 4958 */;

let arrayOf;
let module_4958;
let size;
const obj = { color: normalizeColor, fontFamily: module_4958.string, fontSize: module_4958.number, fontStyle: module_4958.oneOf(["normal", "italic"]), fontWeight: module_4958.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4958.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4958.shape(size), textShadowRadius: module_4958.number, textShadowColor: normalizeColor, letterSpacing: module_4958.number, lineHeight: module_4958.number, textAlign: module_4958.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4958.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4958.bool, textDecorationLine: module_4958.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4958.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4958.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4958.oneOf(["auto", "ltr", "rtl"]) };
const module_8758 = Object.assign(_mod8758);
module_4958 = module_4958_mod;
arrayOf = module_4958.arrayOf;
module_4958 = module_4958_mod;
size = { width: module_4958.number, height: module_4958.number };
module_4958 = module_4958_mod;

export default obj;
