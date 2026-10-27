// Module ID: 13115
// Function ID: 13116
// Name: ForumPostNewTag
// Dependencies: [19, 21, 4971, 587, 558, 576, 1202, 2]

// Module 13115 (ForumPostNewTag)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const native = tmp(1202);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostNewTag(containerStyle) {
  const obj = react2;
  const cResult = obj.c(3);
  containerStyle = containerStyle.containerStyle;
  const tmp4 = closure_3();
  if (cResult[0] === containerStyle) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [containerStyle, tmp4.container];
  const tmp6 = jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-primary-text" });
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ForumPostNewTag(containerStyle) {
  containerStyle = containerStyle.containerStyle;
  const items = [containerStyle, closure_3().container];
  closure_3();
  return jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-primary-text" });
});
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default tmp3;
