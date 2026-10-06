// Module ID: 7782
// Function ID: 7783
// Dependencies: [7773, 7766, 4665]

// Module 7782
import normalizeColor from "normalizeColor" /* 7766 */;
import _mod7773 from "module_7773" /* 7773 */;
import "module_4665";
import module_4665_mod from "module_4665" /* 4665 */;

let arrayOf;
let module_4665;
let size;
const obj = { color: normalizeColor, fontFamily: module_4665.string, fontSize: module_4665.number, fontStyle: module_4665.oneOf(["normal", "italic"]), fontWeight: module_4665.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4665.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4665.shape(size), textShadowRadius: module_4665.number, textShadowColor: normalizeColor, letterSpacing: module_4665.number, lineHeight: module_4665.number, textAlign: module_4665.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4665.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4665.bool, textDecorationLine: module_4665.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4665.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4665.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4665.oneOf(["auto", "ltr", "rtl"]) };
const module_7773 = Object.assign(_mod7773);
module_4665 = module_4665_mod;
arrayOf = module_4665.arrayOf;
module_4665 = module_4665_mod;
size = { width: module_4665.number, height: module_4665.number };
module_4665 = module_4665_mod;

export default obj;
