// Module ID: 14011
// Function ID: 14012
// Name: ForumPostNewTag
// Dependencies: [19, 21, 5140, 575, 1187, 2]
// Exports: default

// Module 14011 (ForumPostNewTag)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { container: { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND } };
({ paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = containerStyle.containerStyle;
  const items = [containerStyle, closure_3().container];
  closure_3();
  return jsx(native.NewTag, { containerStyle: items, variant: "body-xs/semibold", color: "badge-primary-text" });
};
