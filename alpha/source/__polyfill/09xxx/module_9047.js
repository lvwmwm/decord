// Module ID: 9047
// Function ID: 9048
// Dependencies: [9038, 9031, 5182]

// Module 9047
import normalizeColor from "normalizeColor" /* 9031 */;
import _mod9038 from "module_9038" /* 9038 */;
import "module_5182";
import module_5182_mod from "module_5182" /* 5182 */;

let arrayOf;
let module_5182;
let size;
const obj = { color: normalizeColor, fontFamily: module_5182.string, fontSize: module_5182.number, fontStyle: module_5182.oneOf(["normal", "italic"]), fontWeight: module_5182.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5182.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5182.shape(size), textShadowRadius: module_5182.number, textShadowColor: normalizeColor, letterSpacing: module_5182.number, lineHeight: module_5182.number, textAlign: module_5182.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5182.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5182.bool, textDecorationLine: module_5182.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5182.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5182.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5182.oneOf(["auto", "ltr", "rtl"]) };
const module_9038 = Object.assign(_mod9038);
module_5182 = module_5182_mod;
arrayOf = module_5182.arrayOf;
module_5182 = module_5182_mod;
size = { width: module_5182.number, height: module_5182.number };
module_5182 = module_5182_mod;

export default obj;
