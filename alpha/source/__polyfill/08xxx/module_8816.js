// Module ID: 8816
// Function ID: 8817
// Dependencies: [8807, 8800, 5008]

// Module 8816
import normalizeColor from "normalizeColor" /* 8800 */;
import _mod8807 from "module_8807" /* 8807 */;
import "module_5008";
import module_5008_mod from "module_5008" /* 5008 */;

let arrayOf;
let module_5008;
let size;
const obj = { color: normalizeColor, fontFamily: module_5008.string, fontSize: module_5008.number, fontStyle: module_5008.oneOf(["normal", "italic"]), fontWeight: module_5008.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5008.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5008.shape(size), textShadowRadius: module_5008.number, textShadowColor: normalizeColor, letterSpacing: module_5008.number, lineHeight: module_5008.number, textAlign: module_5008.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5008.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5008.bool, textDecorationLine: module_5008.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5008.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5008.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5008.oneOf(["auto", "ltr", "rtl"]) };
const module_8807 = Object.assign(_mod8807);
module_5008 = module_5008_mod;
arrayOf = module_5008.arrayOf;
module_5008 = module_5008_mod;
size = { width: module_5008.number, height: module_5008.number };
module_5008 = module_5008_mod;

export default obj;
