// Module ID: 8855
// Function ID: 8856
// Dependencies: [8846, 8839, 5043]

// Module 8855
import normalizeColor from "normalizeColor" /* 8839 */;
import _mod8846 from "module_8846" /* 8846 */;
import "module_5043";
import module_5043_mod from "module_5043" /* 5043 */;

let arrayOf;
let module_5043;
let size;
const obj = { color: normalizeColor, fontFamily: module_5043.string, fontSize: module_5043.number, fontStyle: module_5043.oneOf(["normal", "italic"]), fontWeight: module_5043.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5043.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5043.shape(size), textShadowRadius: module_5043.number, textShadowColor: normalizeColor, letterSpacing: module_5043.number, lineHeight: module_5043.number, textAlign: module_5043.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5043.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5043.bool, textDecorationLine: module_5043.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5043.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5043.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5043.oneOf(["auto", "ltr", "rtl"]) };
const module_8846 = Object.assign(_mod8846);
module_5043 = module_5043_mod;
arrayOf = module_5043.arrayOf;
module_5043 = module_5043_mod;
size = { width: module_5043.number, height: module_5043.number };
module_5043 = module_5043_mod;

export default obj;
