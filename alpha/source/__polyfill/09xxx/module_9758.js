// Module ID: 9758
// Function ID: 9759
// Dependencies: [9749, 9742, 5347]

// Module 9758
import normalizeColor from "normalizeColor" /* 9742 */;
import _mod9749 from "module_9749" /* 9749 */;
import "module_5347";
import module_5347_mod from "module_5347" /* 5347 */;

let arrayOf;
let module_5347;
let size;
const obj = { color: normalizeColor, fontFamily: module_5347.string, fontSize: module_5347.number, fontStyle: module_5347.oneOf(["normal", "italic"]), fontWeight: module_5347.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5347.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5347.shape(size), textShadowRadius: module_5347.number, textShadowColor: normalizeColor, letterSpacing: module_5347.number, lineHeight: module_5347.number, textAlign: module_5347.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5347.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5347.bool, textDecorationLine: module_5347.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5347.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5347.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5347.oneOf(["auto", "ltr", "rtl"]) };
const module_9749 = Object.assign(_mod9749);
module_5347 = module_5347_mod;
arrayOf = module_5347.arrayOf;
module_5347 = module_5347_mod;
size = { width: module_5347.number, height: module_5347.number };
module_5347 = module_5347_mod;

export default obj;
