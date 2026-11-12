// Module ID: 8993
// Function ID: 8994
// Name: ClientThemesOverrides
// Dependencies: [19, 5243, 5423, 8994, 2]
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 8993 (ClientThemesOverrides)
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5423 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8994 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export function useGradientBottom() {
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
}
export function useGradientTop() {
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
}
export function useGradientMidpoint() {
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
}
export function useClientThemesOverride(noHeight) {
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
}
