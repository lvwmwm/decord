// Module ID: 8444
// Function ID: 8445
// Dependencies: [8435, 8428, 4947]

// Module 8444
import normalizeColor from "normalizeColor" /* 8428 */;
import _mod8435 from "module_8435" /* 8435 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let arrayOf;
let module_4947;
let size;
const obj = { color: normalizeColor, fontFamily: module_4947.string, fontSize: module_4947.number, fontStyle: module_4947.oneOf(["normal", "italic"]), fontWeight: module_4947.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4947.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4947.shape(size), textShadowRadius: module_4947.number, textShadowColor: normalizeColor, letterSpacing: module_4947.number, lineHeight: module_4947.number, textAlign: module_4947.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4947.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4947.bool, textDecorationLine: module_4947.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4947.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4947.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4947.oneOf(["auto", "ltr", "rtl"]) };
const module_8435 = Object.assign(_mod8435);
module_4947 = module_4947_mod;
arrayOf = module_4947.arrayOf;
module_4947 = module_4947_mod;
size = { width: module_4947.number, height: module_4947.number };
module_4947 = module_4947_mod;

export default obj;
