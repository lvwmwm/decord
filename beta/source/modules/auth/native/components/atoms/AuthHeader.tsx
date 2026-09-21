// Module ID: 7215
// Function ID: 7216
// Name: AuthHeader
// Dependencies: [19, 1078, 21, 4758, 5743, 580, 558, 568, 1181, 2]

// Module 7215 (AuthHeader)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5743 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { header: null };
const obj3 = {};
const merged = Object.assign(TextStyles(fn(1078).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj2.header = obj3;
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ children, style } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.header) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { style: tmp5, accessibilityRole: "header", children };
    const tmp8 = jsx(native.LegacyText, { style: tmp5, accessibilityRole: "header", children });
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.header, style];
  cResult[0] = style;
  cResult[1] = tmp4.header;
  cResult[2] = items;
  tmp5 = items;
}) : ((arg0) => {
  ({ children, style } = arg0);
  const obj = { style: null, accessibilityRole: "header", children };
  const items = [closure_3().header, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, accessibilityRole: "header", children });
});
