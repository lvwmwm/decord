// Module ID: 8777
// Function ID: 8778
// Dependencies: [8768, 8761, 5000]

// Module 8777
import normalizeColor from "normalizeColor" /* 8761 */;
import _mod8768 from "module_8768" /* 8768 */;
import "module_5000";
import module_5000_mod from "module_5000" /* 5000 */;

let arrayOf;
let module_5000;
let size;
const obj = { color: normalizeColor, fontFamily: module_5000.string, fontSize: module_5000.number, fontStyle: module_5000.oneOf(["normal", "italic"]), fontWeight: module_5000.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5000.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5000.shape(size), textShadowRadius: module_5000.number, textShadowColor: normalizeColor, letterSpacing: module_5000.number, lineHeight: module_5000.number, textAlign: module_5000.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5000.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5000.bool, textDecorationLine: module_5000.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5000.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5000.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5000.oneOf(["auto", "ltr", "rtl"]) };
const module_8768 = Object.assign(_mod8768);
module_5000 = module_5000_mod;
arrayOf = module_5000.arrayOf;
module_5000 = module_5000_mod;
size = { width: module_5000.number, height: module_5000.number };
module_5000 = module_5000_mod;

export default obj;
