// Module ID: 16689
// Function ID: 16690
// Name: EmojiSmilingFaceWithHeartsIcon
// Dependencies: [19, 21, 575, 5480, 16690, 2]
// Exports: EmojiSmilingFaceWithHeartsIcon

// Module 16689 (EmojiSmilingFaceWithHeartsIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage2 from "BaseIconImage" /* 5480 */;
import AssetRegistry from "AssetRegistry" /* 16690 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiSmilingFaceWithHeartsIcon.tsx");

export function EmojiSmilingFaceWithHeartsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  const style = color.style;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const BaseIconImage = BaseIconImage2.BaseIconImage;
  const merged1 = Object.assign(merged);
  return <BaseIconImage source={AssetRegistry} color={INTERACTIVE_ICON_DEFAULT} style={style} />;
}
