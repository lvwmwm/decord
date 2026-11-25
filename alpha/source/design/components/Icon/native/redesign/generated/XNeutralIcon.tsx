// Module ID: 14181
// Function ID: 14182
// Name: XNeutralIcon
// Dependencies: [19, 21, 5698, 14182, 2]
// Exports: XNeutralIcon

// Module 14181 (XNeutralIcon)
import Fragment from "Fragment" /* 21 */;
import BaseIconImage2 from "BaseIconImage" /* 5698 */;
import AssetRegistry from "AssetRegistry" /* 14182 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export function XNeutralIcon(color) {
  let str = color.color;
  const style = color.style;
  if (str === undefined) {
    str = "#4E5058";
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const BaseIconImage = BaseIconImage2.BaseIconImage;
  const merged1 = Object.assign(merged);
  return <BaseIconImage source={AssetRegistry} color={str} style={style} />;
}
