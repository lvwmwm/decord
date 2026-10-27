// Module ID: 8722
// Function ID: 8723
// Dependencies: [8713, 8706, 5042]

// Module 8722
import normalizeColor from "normalizeColor" /* 8706 */;
import _mod8713 from "module_8713" /* 8713 */;
import "module_5042";
import module_5042_mod from "module_5042" /* 5042 */;

let arrayOf;
let module_5042;
let size;
const obj = { color: normalizeColor, fontFamily: module_5042.string, fontSize: module_5042.number, fontStyle: module_5042.oneOf(["normal", "italic"]), fontWeight: module_5042.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5042.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5042.shape(size), textShadowRadius: module_5042.number, textShadowColor: normalizeColor, letterSpacing: module_5042.number, lineHeight: module_5042.number, textAlign: module_5042.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5042.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5042.bool, textDecorationLine: module_5042.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5042.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5042.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5042.oneOf(["auto", "ltr", "rtl"]) };
const module_8713 = Object.assign(_mod8713);
module_5042 = module_5042_mod;
arrayOf = module_5042.arrayOf;
module_5042 = module_5042_mod;
size = { width: module_5042.number, height: module_5042.number };
module_5042 = module_5042_mod;

export default obj;
