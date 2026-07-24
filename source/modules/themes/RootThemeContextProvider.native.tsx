// Module ID: 13544
// Function ID: 104164
// Name: RootThemeContextProvider
// Dependencies: [31, 4122, 1278, 482, 33, 566, 3977, 1324, 13545, 3842, 10831, 2]
// Exports: RootThemeContextProvider

// Module 13544 (RootThemeContextProvider)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ThemeTypes } from "sum";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let contrast;
  let saturation;
  let obj = enabled(chatInputLegacySendButton[5]);
  let items = [_isNativeReflectConstruct, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: outer1_4.saturation, contrast: outer1_4.contrast, theme: outer1_5.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp2 = chatInputFloating(chatInputLegacySendButton[6])();
  const mobileVisualRefreshConfig = enabled(chatInputLegacySendButton[7]).useMobileVisualRefreshConfig({ location: "RootThemeContextProvider" });
  enabled = mobileVisualRefreshConfig.enabled;
  chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  chatInputLegacySendButton = mobileVisualRefreshConfig.chatInputLegacySendButton;
  const obj2 = enabled(chatInputLegacySendButton[7]);
  const manaTypeConsolidationExperiment = enabled(chatInputLegacySendButton[8]).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const items1 = [enabled, chatInputFloating, chatInputLegacySendButton, manaTypeConsolidationExperiment];
  if (null == tmp2) {
    let num4 = 0;
    if (1 !== saturation) {
      num4 = enabled(chatInputLegacySendButton[9]).setThemeFlag(0, enabled(chatInputLegacySendButton[9]).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
      const obj6 = enabled(chatInputLegacySendButton[9]);
    }
    if (1 === contrast) {
      obj = { theme: stateFromStoresObject.theme, flags: num4, saturation, contrast, enabledExperiments: tmp5, children: children.children };
      return jsx(enabled(chatInputLegacySendButton[10]).RootThemeContextProvider, { theme: stateFromStoresObject.theme, flags: num4, saturation, contrast, enabledExperiments: tmp5, children: children.children });
    } else {
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = enabled(chatInputLegacySendButton[9]).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = enabled(chatInputLegacySendButton[9]).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      enabled(chatInputLegacySendButton[9]).setThemeFlag(num4, REDUCED_CONTRAST_ENABLED);
      const obj7 = enabled(chatInputLegacySendButton[9]);
    }
  } else if (tmp2.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = enabled(chatInputLegacySendButton[9]).setThemeFlag(0, enabled(chatInputLegacySendButton[9]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const obj5 = enabled(chatInputLegacySendButton[9]);
  } else {
    setThemeFlagResult1 = enabled(chatInputLegacySendButton[9]).setThemeFlag(0, enabled(chatInputLegacySendButton[9]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const obj4 = enabled(chatInputLegacySendButton[9]);
  }
};
