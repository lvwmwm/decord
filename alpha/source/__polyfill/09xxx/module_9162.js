// Module ID: 9162
// Function ID: 9163
// Dependencies: [9153, 9146, 4835]

// Module 9162
import normalizeColor from "normalizeColor" /* 9146 */;
import _mod9153 from "module_9153" /* 9153 */;
import "module_4835";
import module_4835_mod from "module_4835" /* 4835 */;

let arrayOf;
let module_4835;
let size;
const obj = { color: normalizeColor, fontFamily: module_4835.string, fontSize: module_4835.number, fontStyle: module_4835.oneOf(["normal", "italic"]), fontWeight: module_4835.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4835.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4835.shape(size), textShadowRadius: module_4835.number, textShadowColor: normalizeColor, letterSpacing: module_4835.number, lineHeight: module_4835.number, textAlign: module_4835.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4835.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4835.bool, textDecorationLine: module_4835.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4835.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4835.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4835.oneOf(["auto", "ltr", "rtl"]) };
const module_9153 = Object.assign(_mod9153);
module_4835 = module_4835_mod;
arrayOf = module_4835.arrayOf;
module_4835 = module_4835_mod;
size = { width: module_4835.number, height: module_4835.number };
module_4835 = module_4835_mod;

export default obj;
