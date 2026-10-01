// Module ID: 14752
// Function ID: 14753
// Name: TicketIcon
// Dependencies: [19, 21, 576, 4530, 14753, 2]
// Exports: TicketIcon

// Module 14752 (TicketIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import BaseIconImage2 from "BaseIconImage" /* 4530 */;
import AssetRegistry from "AssetRegistry" /* 14753 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TicketIcon.tsx");

export const TicketIcon = function TicketIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  const style = color.style;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const BaseIconImage = BaseIconImage2.BaseIconImage;
  const merged1 = Object.assign(merged);
  return <BaseIconImage source={AssetRegistry} color={INTERACTIVE_ICON_DEFAULT} style={style} />;
};
