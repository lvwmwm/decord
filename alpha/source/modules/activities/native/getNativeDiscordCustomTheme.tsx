// Module ID: 16325
// Function ID: 16326
// Name: getNativeDiscordCustomTheme
// Dependencies: [5033, 5245, 1242, 5187, 5016, 5006, 2]
// Exports: default

// Module 16325 (getNativeDiscordCustomTheme)
import MobileThemesUtils from "MobileThemesUtils" /* 5245 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import size from "module_2" /* 2 */;

let tmp;
const ClientThemesTypes = tmp(1242);
const ColorUtils = tmp(5006);
const shared = tmp(5016);
const client_themes_ClientThemesUtils = tmp(5187);
const result = size.fileFinishedImporting("modules/activities/native/getNativeDiscordCustomTheme.tsx");

export default function getNativeDiscordCustomTheme() {
  let b;
  let g;
  let obj3;
  let r;
  const tmp = require;
  const obj = MobileThemesUtils;
  let gradientPreset = obj.getCustomBackgroundGradient();
  if (gradientPreset == null) {
    gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  }
  if (null == gradientPreset) {
    return null;
  } else {
    const tmp17 = gradientPreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
    const tmpResult = client_themes_ClientThemesUtils;
    const gradientHexColors = tmpResult.getGradientHexColors(gradientPreset);
    if (tmp17) {
      let gradientColorStops = gradientPreset.customThemeSettings.gradientColorStops;
    } else {
      const colors = gradientPreset.colors;
      gradientColorStops = colors.map((stop) => stop.stop);
    }
    const mapped = gradientHexColors.map((item, index) => {
      let combined = item;
      if (gradientColorStops.length === gradientHexColors.length) {
        const _HermesInternal = HermesInternal;
        combined = "" + item + " " + tmp[index] + "%";
      }
      return combined;
    });
    if (1 === mapped.length) {
      mapped.push(mapped[0]);
    }
    const tmpResult5 = client_themes_ClientThemesUtils;
    const gradientAngle = tmpResult5.getGradientAngle(gradientPreset);
    let _HermesInternal = HermesInternal;
    let combined = "linear-gradient(" + gradientAngle + "deg, " + mapped.join(", ") + ")";
    const tmpResult6 = shared;
    const isThemeDarkResult = tmpResult6.isThemeDark(gradientPreset.theme);
    const hexToRgb = ColorUtils.hexToRgb;
    ColorUtils;
    const OverlayColors = client_themes_ClientThemesUtils.OverlayColors;
    ({ r, g, b } = hexToRgb(isThemeDarkResult ? OverlayColors.DARK : OverlayColors.LIGHT));
    hexToRgb(isThemeDarkResult ? OverlayColors.DARK : OverlayColors.LIGHT);
    const _HermesInternal2 = HermesInternal;
    const tmpResult8 = client_themes_ClientThemesUtils;
    const combined1 = "rgb(" + r + " " + g + " " + b + " / " + 1 - tmpResult8.getGradientShare(gradientPreset, gradientPreset.theme) + ")";
    const obj2 = { classNames: tmp17 ? ["custom-theme-background", "custom-client-theme"] : ["custom-theme-background"], variables: obj3 };
    const _HermesInternal3 = HermesInternal;
    obj3 = { "--custom-theme-background": combined, "--custom-theme-primary-color": gradientHexColors[0], "--custom-theme-secondary-color": gradientHexColors[gradientHexColors.length - 1], "--background-gradient-chat": "linear-gradient(" + combined1 + ", " + combined1 + ") fixed 0 0 / cover, " + combined + " fixed 0 0 / cover" };
    return obj2;
  }
};
