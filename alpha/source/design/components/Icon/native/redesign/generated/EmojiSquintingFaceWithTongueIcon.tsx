// Module ID: 17902
// Function ID: 17903
// Name: EmojiSquintingFaceWithTongueIcon
// Dependencies: [19, 21, 575, 5956, 17903, 2]
// Exports: EmojiSquintingFaceWithTongueIcon

// Module 17902 (EmojiSquintingFaceWithTongueIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage2 from "BaseIconImage" /* 5956 */;
import AssetRegistry from "AssetRegistry" /* 17903 */;
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
