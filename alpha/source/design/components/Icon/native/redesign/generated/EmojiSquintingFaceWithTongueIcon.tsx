// Module ID: 16836
// Function ID: 16837
// Name: EmojiSquintingFaceWithTongueIcon
// Dependencies: [19, 21, 575, 5603, 16837, 2]
// Exports: EmojiSquintingFaceWithTongueIcon

// Module 16836 (EmojiSquintingFaceWithTongueIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage2 from "BaseIconImage" /* 5603 */;
import AssetRegistry from "AssetRegistry" /* 16837 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiSquintingFaceWithTongueIcon.tsx");

export function EmojiSquintingFaceWithTongueIcon(color) {
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
