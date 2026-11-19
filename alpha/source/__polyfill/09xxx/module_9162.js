// Module ID: 9162
// Function ID: 9163
// Dependencies: [9153, 9146, 4833]

// Module 9162
import normalizeColor from "normalizeColor" /* 9146 */;
import _mod9153 from "module_9153" /* 9153 */;
import "module_4833";
import module_4833_mod from "module_4833" /* 4833 */;

let arrayOf;
let module_4833;
let size;
const obj = { color: normalizeColor, fontFamily: module_4833.string, fontSize: module_4833.number, fontStyle: module_4833.oneOf(["normal", "italic"]), fontWeight: module_4833.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4833.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4833.shape(size), textShadowRadius: module_4833.number, textShadowColor: normalizeColor, letterSpacing: module_4833.number, lineHeight: module_4833.number, textAlign: module_4833.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4833.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4833.bool, textDecorationLine: module_4833.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4833.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4833.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4833.oneOf(["auto", "ltr", "rtl"]) };
const module_9153 = Object.assign(_mod9153);
module_4833 = module_4833_mod;
arrayOf = module_4833.arrayOf;
module_4833 = module_4833_mod;
size = { width: module_4833.number, height: module_4833.number };
module_4833 = module_4833_mod;

export default obj;
