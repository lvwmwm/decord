// Module ID: 15031
// Function ID: 15032
// Name: useShouldPinCollectiblesEditPreview
// Dependencies: [1492, 1626, 5581, 2]
// Exports: useShouldPinCollectiblesEditPreview

// Module 15031 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import NavigatorConstants from "NavigatorConstants" /* 5581 */;
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
