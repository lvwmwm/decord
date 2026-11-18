// Module ID: 9186
// Function ID: 9187
// Dependencies: [9177, 9170, 4864]

// Module 9186
import normalizeColor from "normalizeColor" /* 9170 */;
import _mod9177 from "module_9177" /* 9177 */;
import "module_4864";
import module_4864_mod from "module_4864" /* 4864 */;

let arrayOf;
let module_4864;
let size;
const obj = { color: normalizeColor, fontFamily: module_4864.string, fontSize: module_4864.number, fontStyle: module_4864.oneOf(["normal", "italic"]), fontWeight: module_4864.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4864.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4864.shape(size), textShadowRadius: module_4864.number, textShadowColor: normalizeColor, letterSpacing: module_4864.number, lineHeight: module_4864.number, textAlign: module_4864.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4864.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4864.bool, textDecorationLine: module_4864.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4864.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4864.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4864.oneOf(["auto", "ltr", "rtl"]) };
const module_9177 = Object.assign(_mod9177);
module_4864 = module_4864_mod;
arrayOf = module_4864.arrayOf;
module_4864 = module_4864_mod;
size = { width: module_4864.number, height: module_4864.number };
module_4864 = module_4864_mod;

export default obj;
