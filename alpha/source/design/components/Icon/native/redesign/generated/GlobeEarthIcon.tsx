// Module ID: 9574
// Function ID: 9575
// Name: GlobeEarthIcon
// Dependencies: [19, 21, 575, 5711, 9575, 2]
// Exports: GlobeEarthIcon

// Module 9574 (GlobeEarthIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage2 from "BaseIconImage" /* 5711 */;
import AssetRegistry from "AssetRegistry" /* 9575 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx");

export function GlobeEarthIcon(dependencyMap) {
  let INTERACTIVE_ICON_DEFAULT = dependencyMap.color;
  const style = dependencyMap.style;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(dependencyMap, Object.assign({ style: 0, color: 0 }));
  const BaseIconImage = BaseIconImage2.BaseIconImage;
  const merged1 = Object.assign(merged);
  return <BaseIconImage source={AssetRegistry} color={INTERACTIVE_ICON_DEFAULT} style={style} />;
}
