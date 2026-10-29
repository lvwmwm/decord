// Module ID: 8858
// Function ID: 8859
// Dependencies: [8849, 8842, 5044]

// Module 8858
import normalizeColor from "normalizeColor" /* 8842 */;
import _mod8849 from "module_8849" /* 8849 */;
import "module_5044";
import module_5044_mod from "module_5044" /* 5044 */;

let arrayOf;
let module_5044;
let size;
const obj = { color: normalizeColor, fontFamily: module_5044.string, fontSize: module_5044.number, fontStyle: module_5044.oneOf(["normal", "italic"]), fontWeight: module_5044.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5044.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5044.shape(size), textShadowRadius: module_5044.number, textShadowColor: normalizeColor, letterSpacing: module_5044.number, lineHeight: module_5044.number, textAlign: module_5044.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5044.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5044.bool, textDecorationLine: module_5044.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5044.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5044.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5044.oneOf(["auto", "ltr", "rtl"]) };
const module_8849 = Object.assign(_mod8849);
module_5044 = module_5044_mod;
arrayOf = module_5044.arrayOf;
module_5044 = module_5044_mod;
size = { width: module_5044.number, height: module_5044.number };
module_5044 = module_5044_mod;

export default obj;
