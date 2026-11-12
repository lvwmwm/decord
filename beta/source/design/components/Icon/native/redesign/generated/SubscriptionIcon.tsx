// Module ID: 17243
// Function ID: 17244
// Name: SubscriptionIcon
// Dependencies: [19, 21, 575, 5873, 17244, 2]
// Exports: SubscriptionIcon

// Module 17243 (SubscriptionIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage2 from "BaseIconImage" /* 5873 */;
import AssetRegistry from "AssetRegistry" /* 17244 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  const style = color.style;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const BaseIconImage = BaseIconImage2.BaseIconImage;
  const merged1 = Object.assign(merged);
  return <BaseIconImage source={AssetRegistry} color={ICON_STRONG} style={style} />;
}
