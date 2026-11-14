// Module ID: 9758
// Function ID: 9759
// Dependencies: [9749, 9742, 5357]

// Module 9758
import normalizeColor from "normalizeColor" /* 9742 */;
import _mod9749 from "module_9749" /* 9749 */;
import "module_5357";
import module_5357_mod from "module_5357" /* 5357 */;

let arrayOf;
let module_5357;
let size;
const obj = { color: normalizeColor, fontFamily: module_5357.string, fontSize: module_5357.number, fontStyle: module_5357.oneOf(["normal", "italic"]), fontWeight: module_5357.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5357.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5357.shape(size), textShadowRadius: module_5357.number, textShadowColor: normalizeColor, letterSpacing: module_5357.number, lineHeight: module_5357.number, textAlign: module_5357.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5357.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5357.bool, textDecorationLine: module_5357.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5357.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5357.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5357.oneOf(["auto", "ltr", "rtl"]) };
const module_9749 = Object.assign(_mod9749);
module_5357 = module_5357_mod;
arrayOf = module_5357.arrayOf;
module_5357 = module_5357_mod;
size = { width: module_5357.number, height: module_5357.number };
module_5357 = module_5357_mod;

export default obj;
