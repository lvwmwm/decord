// Module ID: 4688
// Function ID: 4689
// Name: useColorThemeBackground
// Dependencies: [19, 1182, 4653, 1115, 1230, 4689, 4691, 563, 4764, 2]
// Exports: default

// Module 4688 (useColorThemeBackground)
import intl2 from "intl" /* 1115 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import GuildThemePresets from "GuildThemePresets" /* 4689 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getGuildThemeName() {
  const intl = intl2.intl;
  return intl.string(intl2.t.CFzDOG);
}
const result = size.fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  let gradientPreset;
  let stateFromStores;
  let theme;
  let type;
  const tmp = stateFromStores(4691)();
  _require = tmp;
  let obj = require("useStateFromStores");
  let items = [ThemeStore];
  stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  let obj2 = require("useStateFromStores");
  const items1 = [ClientThemesBackgroundStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => gradientPreset.gradientPreset);
  let obj3 = require("MobileThemesUtils");
  const items2 = [tmp, stateFromStores];
  const customBackgroundGradient = obj3.useCustomBackgroundGradient();
  let memo = react.useMemo(() => {
    let GUILD_THEME_DEFAULT_BASE_MIX;
    let colors;
    let colors1;
    let items;
    let num2;
    let obj2;
    let obj9;
    let tmp4 = null;
    if (null != type) {
      if ("custom" === type.type) {
        const customUserThemeSettings = tmp2.customUserThemeSettings;
        const first = customUserThemeSettings.colors[0];
        const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getGuildThemeName, theme: stateFromStores, customThemeSettings: obj2 };
        obj2 = { colors: items, gradientColorStops: [], gradientAngle: num2, baseMix: GUILD_THEME_DEFAULT_BASE_MIX };
        items = [];
        const obj3 = GuildThemePresets;
        HermesBuiltin.arraySpread(items, obj3.getSingleColorGuildThemeGradientColors(first, stateFromStores), 0);
        num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
        if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
          GUILD_THEME_DEFAULT_BASE_MIX = GuildThemePresets.GUILD_THEME_DEFAULT_BASE_MIX;
        }
        tmp4 = obj;
      } else {
        const obj4 = GuildThemePresets;
        const guildThemePresetAppearance = obj4.getGuildThemePresetAppearance(tmp2.preset, tmp3);
        const obj5 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getGuildThemeName, theme: stateFromStores, customThemeSettings: obj9 };
        obj9 = { colors: colors1.map((hex) => hex.hex), gradientAngle: null, gradientColorStops: colors.map((stop) => stop.stop), baseMix: guildThemePresetAppearance.baseMix };
        colors1 = guildThemePresetAppearance.colors;
        ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
        tmp4 = obj5;
      }
    }
    return tmp4;
  }, items2);
  if (memo == null) {
    memo = customBackgroundGradient;
  }
  if (memo == null) {
    memo = stateFromStores1;
  }
  return memo;
};
