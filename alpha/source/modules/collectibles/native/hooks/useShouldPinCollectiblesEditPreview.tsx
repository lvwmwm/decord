// Module ID: 14138
// Function ID: 14139
// Name: useShouldPinCollectiblesEditPreview
// Dependencies: [1494, 1628, 5348, 2]
// Exports: useShouldPinCollectiblesEditPreview

// Module 14138 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import NavigatorConstants from "NavigatorConstants" /* 5348 */;
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
