// Module ID: 9691
// Function ID: 9692
// Dependencies: [9682, 9675, 5294]

// Module 9691
import normalizeColor from "normalizeColor" /* 9675 */;
import _mod9682 from "module_9682" /* 9682 */;
import "module_5294";
import module_5294_mod from "module_5294" /* 5294 */;

let arrayOf;
let module_5294;
let size;
const obj = { color: normalizeColor, fontFamily: module_5294.string, fontSize: module_5294.number, fontStyle: module_5294.oneOf(["normal", "italic"]), fontWeight: module_5294.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5294.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5294.shape(size), textShadowRadius: module_5294.number, textShadowColor: normalizeColor, letterSpacing: module_5294.number, lineHeight: module_5294.number, textAlign: module_5294.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5294.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5294.bool, textDecorationLine: module_5294.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5294.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5294.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5294.oneOf(["auto", "ltr", "rtl"]) };
const module_9682 = Object.assign(_mod9682);
module_5294 = module_5294_mod;
arrayOf = module_5294.arrayOf;
module_5294 = module_5294_mod;
size = { width: module_5294.number, height: module_5294.number };
module_5294 = module_5294_mod;

export default obj;
