// Module ID: 18860
// Function ID: 18861
// Name: ConnectionFineIcon
// Dependencies: [19, 21, 575, 5873, 18861, 2]
// Exports: ConnectionFineIcon

// Module 18860 (ConnectionFineIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage2 from "BaseIconImage" /* 5873 */;
import AssetRegistry from "AssetRegistry" /* 18861 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  const style = color.style;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = nativeDefault.colors.ICON_FEEDBACK_POSITIVE;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const BaseIconImage = BaseIconImage2.BaseIconImage;
  const merged1 = Object.assign(merged);
  return <BaseIconImage source={AssetRegistry} color={ICON_FEEDBACK_POSITIVE} style={style} />;
}
