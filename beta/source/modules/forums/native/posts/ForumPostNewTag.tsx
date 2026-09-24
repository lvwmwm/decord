// Module ID: 12181
// Function ID: 12182
// Name: ForumPostNewTag
// Dependencies: [19, 21, 4790, 580, 558, 568, 1181, 2]

// Module 12181 (ForumPostNewTag)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj2 = { container: { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((containerStyle) => {
  const cResult = c.c(3);
  containerStyle = containerStyle.containerStyle;
  const tmp4 = closure_3();
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.container) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
  const items = [containerStyle, tmp4.container];
  obj2.containerStyle = items;
  const tmp6 = jsx(native.NewTag, { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" });
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((containerStyle) => {
  const obj = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
  const items = [containerStyle.containerStyle, closure_3().container];
  obj.containerStyle = items;
  return jsx(native.NewTag, { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" });
});
