// Module ID: 14464
// Function ID: 14465
// Name: useShouldPinCollectiblesEditPreview
// Dependencies: [558, 1499, 1633, 5266, 2]

// Module 14464 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1499 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import NavigatorConstants from "NavigatorConstants" /* 5266 */;
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
