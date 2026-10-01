// Module ID: 7297
// Function ID: 7298
// Name: ClientThemesOverrides
// Dependencies: [19, 4836, 4652, 7298, 2]
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 7297 (ClientThemesOverrides)
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4652 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7298 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const items = [gradientValue];
  return react.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      tmp2 = { backgroundColor: tmp };
      const obj = { backgroundColor: tmp };
    }
    return tmp2;
  }, items);
};
export const useGradientTop = function useGradientTop() {
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.START);
  const items = [gradientValue];
  return react.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      tmp2 = { backgroundColor: tmp };
      const obj = { backgroundColor: tmp };
    }
    return tmp2;
  }, items);
};
export const useGradientMidpoint = function useGradientMidpoint() {
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.MID);
  const items = [gradientValue];
  return react.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      tmp2 = { backgroundColor: tmp };
      const obj = { backgroundColor: tmp };
    }
    return tmp2;
  }, items);
};
export const useClientThemesOverride = function useClientThemesOverride(noHeight) {
  let tmp2;
  const tmp = closure_4();
  if (useIsUsingClientThemeDefault()) {
    let none = noHeight;
    if (noHeight == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
};
