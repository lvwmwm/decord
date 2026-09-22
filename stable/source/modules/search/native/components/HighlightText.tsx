// Module ID: 10254
// Function ID: 10255
// Name: HighlightText
// Dependencies: [19, 1074, 21, 4636, 4486, 576, 1176, 2]
// Exports: default

// Module 10254 (HighlightText)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
const obj2 = { text: null };
const obj3 = { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
const ColorUtils = fn(4486);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3);
obj3.color = nativeDefault.colors.TEXT_STRONG;
obj2.text = obj3;
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = closure_3();
  return jsx(native.LegacyText, { style: closure_3().text, children: children.children });
};
