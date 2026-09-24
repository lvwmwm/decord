// Module ID: 12255
// Function ID: 12256
// Name: HighlightText
// Dependencies: [19, 1078, 21, 4790, 4640, 580, 558, 568, 1181, 2]

// Module 12255 (HighlightText)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
const obj2 = { text: null };
const obj3 = { fontFamily: fn(1078).Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
const ColorUtils = fn(4640);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3);
obj3.color = nativeDefault.colors.TEXT_STRONG;
obj2.text = obj3;
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp4 = closure_3();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.text) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(native.LegacyText, { style: tmp4.text, children });
  cResult[0] = children;
  cResult[1] = tmp4.text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((children) => {
  const tmp = closure_3();
  return jsx(native.LegacyText, { style: closure_3().text, children: children.children });
});
