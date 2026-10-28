// Module ID: 14752
// Function ID: 14753
// Name: useShouldPinCollectiblesEditPreview
// Dependencies: [558, 1496, 1630, 5304, 2]

// Module 14752 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import NavigatorConstants from "NavigatorConstants" /* 5304 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldPinCollectiblesEditPreview() {
  let bottom;
  let top;
  const height = useWindowDimensionsDefault().height;
  ({ top, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  return height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top - bottom >= 618;
}) : (function useShouldPinCollectiblesEditPreview() {
  let bottom;
  let top;
  const height = useWindowDimensionsDefault().height;
  ({ top, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  return height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top - bottom >= 618;
});
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShouldPinCollectiblesEditPreview.tsx");

export const useShouldPinCollectiblesEditPreview = tmp2;
