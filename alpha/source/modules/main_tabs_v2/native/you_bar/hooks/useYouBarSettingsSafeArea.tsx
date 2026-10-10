// Module ID: 13728
// Function ID: 13729
// Name: useYouBarSettingsSafeArea
// Dependencies: [558, 1631, 576, 6626, 1383, 2]

// Module 13728 (useYouBarSettingsSafeArea)
import react from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6626 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const utils_PlatformUtils = tmp(1383);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarSettingsCustomHeaderPaddingTop() {
  const top = useSafeAreaInsetsDefault().top;
  let num = 16;
  if (!closure_3()) {
    num = top;
  }
  return num;
}) : (function useYouBarSettingsCustomHeaderPaddingTop() {
  const top = useSafeAreaInsetsDefault().top;
  let num = 16;
  if (!closure_3()) {
    num = top;
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarSettingsOutsideSafeAreaTop() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const tmp4 = useIsWindowLargeDefault();
  if (cResult[0] !== tmp4) {
    const tmpResult = utils_PlatformUtils;
    const tmp6 = tmpResult.isIOS() || tmp4;
    cResult[0] = tmp4;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = utils_PlatformUtils;
  const tmp2 = obj.isIOS() || tmp;
  return tmp2;
});
let closure_3 = tmp3;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = tmp2;
export const useYouBarSettingsOutsideSafeAreaTop = tmp3;
