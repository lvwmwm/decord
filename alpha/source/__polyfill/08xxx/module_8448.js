// Module ID: 8448
// Function ID: 8449
// Dependencies: [8439, 8432, 4947]

// Module 8448
import normalizeColor from "normalizeColor" /* 8432 */;
import _mod8439 from "module_8439" /* 8439 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let arrayOf;
let module_4947;
let size;
const obj = { color: normalizeColor, fontFamily: module_4947.string, fontSize: module_4947.number, fontStyle: module_4947.oneOf(["normal", "italic"]), fontWeight: module_4947.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4947.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4947.shape(size), textShadowRadius: module_4947.number, textShadowColor: normalizeColor, letterSpacing: module_4947.number, lineHeight: module_4947.number, textAlign: module_4947.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4947.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4947.bool, textDecorationLine: module_4947.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4947.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4947.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4947.oneOf(["auto", "ltr", "rtl"]) };
const module_8439 = Object.assign(_mod8439);
module_4947 = module_4947_mod;
arrayOf = module_4947.arrayOf;
module_4947 = module_4947_mod;
size = { width: module_4947.number, height: module_4947.number };
module_4947 = module_4947_mod;

export default obj;
