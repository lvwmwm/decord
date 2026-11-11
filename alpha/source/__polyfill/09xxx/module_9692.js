// Module ID: 9692
// Function ID: 9693
// Dependencies: [9683, 9676, 5294]

// Module 9692
import normalizeColor from "normalizeColor" /* 9676 */;
import _mod9683 from "module_9683" /* 9683 */;
import "module_5294";
import module_5294_mod from "module_5294" /* 5294 */;

let arrayOf;
let module_5294;
let size;
const obj = { color: normalizeColor, fontFamily: module_5294.string, fontSize: module_5294.number, fontStyle: module_5294.oneOf(["normal", "italic"]), fontWeight: module_5294.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5294.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5294.shape(size), textShadowRadius: module_5294.number, textShadowColor: normalizeColor, letterSpacing: module_5294.number, lineHeight: module_5294.number, textAlign: module_5294.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5294.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5294.bool, textDecorationLine: module_5294.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5294.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5294.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5294.oneOf(["auto", "ltr", "rtl"]) };
const module_9683 = Object.assign(_mod9683);
module_5294 = module_5294_mod;
arrayOf = module_5294.arrayOf;
module_5294 = module_5294_mod;
size = { width: module_5294.number, height: module_5294.number };
module_5294 = module_5294_mod;

export default obj;
