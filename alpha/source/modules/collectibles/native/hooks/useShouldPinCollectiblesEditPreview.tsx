// Module ID: 14464
// Function ID: 14465
// Name: useShouldPinCollectiblesEditPreview
// Dependencies: [1495, 1629, 5597, 2]
// Exports: useShouldPinCollectiblesEditPreview

// Module 14464 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import NavigatorConstants from "NavigatorConstants" /* 5597 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShouldPinCollectiblesEditPreview.tsx");

export function useShouldPinCollectiblesEditPreview() {
  let bottom;
  let top;
  const height = useWindowDimensionsDefault().height;
  ({ top, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  return height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top - bottom >= 618;
}
