// Module ID: 15072
// Function ID: 15073
// Name: useShouldPinCollectiblesEditPreview
// Dependencies: [1491, 1625, 5586, 2]
// Exports: useShouldPinCollectiblesEditPreview

// Module 15072 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import NavigatorConstants from "NavigatorConstants" /* 5586 */;
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
