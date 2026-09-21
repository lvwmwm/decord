// Module ID: 13727
// Function ID: 13728
// Name: useYouBarSettingsSafeArea
// Dependencies: [558, 1616, 568, 7186, 1369, 2]

// Module 13727 (useYouBarSettingsSafeArea)
import c from "c" /* 568 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1369 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7186 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = useIsWindowLargeDefault();
  if (cResult[0] !== tmp4) {
    const tmp6 = utils_PlatformUtils.isIOS() || tmp4;
    cResult[0] = tmp4;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
    const tmpResult = utils_PlatformUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = useIsWindowLargeDefault();
  return utils_PlatformUtils.isIOS() || tmp;
});
let closure_3 = tmp3;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let num = 16;
  if (!closure_3()) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
}) : (() => {
  let num = 16;
  if (!closure_3()) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
});
export const useYouBarSettingsOutsideSafeAreaTop = tmp3;
