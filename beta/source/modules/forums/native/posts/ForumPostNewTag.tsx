// Module ID: 11497
// Function ID: 11498
// Name: ForumPostNewTag
// Dependencies: [19, 21, 4836, 576, 1177, 2]
// Exports: default

// Module 11497 (ForumPostNewTag)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { container: { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND } };
({ paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = containerStyle.containerStyle;
  const items = [containerStyle, closure_3().container];
  closure_3();
  return jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-text-brand" });
};
