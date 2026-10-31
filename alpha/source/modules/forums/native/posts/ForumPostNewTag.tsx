// Module ID: 13763
// Function ID: 13764
// Name: ForumPostNewTag
// Dependencies: [19, 21, 5014, 575, 1187, 2]
// Exports: default

// Module 13763 (ForumPostNewTag)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
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
  return jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-primary-text" });
};
