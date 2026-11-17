// Module ID: 9771
// Function ID: 9772
// Dependencies: [9762, 9755, 5351]

// Module 9771
import normalizeColor from "normalizeColor" /* 9755 */;
import _mod9762 from "module_9762" /* 9762 */;
import "module_5351";
import module_5351_mod from "module_5351" /* 5351 */;

let arrayOf;
let module_5351;
let size;
const obj = { color: normalizeColor, fontFamily: module_5351.string, fontSize: module_5351.number, fontStyle: module_5351.oneOf(["normal", "italic"]), fontWeight: module_5351.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5351.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5351.shape(size), textShadowRadius: module_5351.number, textShadowColor: normalizeColor, letterSpacing: module_5351.number, lineHeight: module_5351.number, textAlign: module_5351.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5351.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5351.bool, textDecorationLine: module_5351.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5351.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5351.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5351.oneOf(["auto", "ltr", "rtl"]) };
const module_9762 = Object.assign(_mod9762);
module_5351 = module_5351_mod;
arrayOf = module_5351.arrayOf;
module_5351 = module_5351_mod;
size = { width: module_5351.number, height: module_5351.number };
module_5351 = module_5351_mod;

export default obj;
