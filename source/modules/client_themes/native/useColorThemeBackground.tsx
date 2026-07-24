// Module ID: 3977
// Function ID: 32983
// Name: getGuildThemeName
// Dependencies: [31, 1278, 3942, 1212, 3944, 3978, 3980, 624, 4063, 2]
// Exports: default

// Module 3977 (getGuildThemeName)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

let require = arg1;
function getGuildThemeName() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.CFzDOG);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = stateFromStores(3980)();
  const require = tmp;
  let items = [_isNativeReflectConstruct];
  stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_4.theme);
  let obj = require(624) /* defaultAreStatesEqual */;
  const items1 = [closure_5];
  let stateFromStores1 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items1, () => outer1_5.gradientPreset);
  const obj2 = require(624) /* defaultAreStatesEqual */;
  let customBackgroundGradient = require(4063) /* getCustomThemesName */.useCustomBackgroundGradient();
  const items2 = [tmp, stateFromStores];
  const memo = React.useMemo(() => (function getGuildThemeBackground(closure_0, stateFromStores) {
    let colors;
    if (null == closure_0) {
      return null;
    } else if ("custom" === closure_0.type) {
      const customUserThemeSettings = closure_0.customUserThemeSettings;
      let num = 0;
      let obj = { type: callback(outer2_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: outer2_6, theme: stateFromStores };
      obj = {};
      const items = [];
      HermesBuiltin.arraySpread(callback(outer2_2[5]).getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], stateFromStores), 0);
      obj.colors = items;
      obj.gradientColorStops = [];
      const gradientAngle = customUserThemeSettings.gradientAngle;
      if (null != gradientAngle) {
        num = gradientAngle;
      }
      obj.gradientAngle = num;
      let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
      if (null == GUILD_THEME_DEFAULT_BASE_MIX) {
        GUILD_THEME_DEFAULT_BASE_MIX = callback(outer2_2[5]).GUILD_THEME_DEFAULT_BASE_MIX;
      }
      obj.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
      obj.customThemeSettings = obj;
      return obj;
    } else {
      const guildThemePresetAppearance = callback(outer2_2[5]).getGuildThemePresetAppearance(closure_0.preset, stateFromStores);
      obj = { type: callback(outer2_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: outer2_6, theme: stateFromStores };
      const obj1 = {};
      colors = guildThemePresetAppearance.colors;
      obj1.colors = colors.map((hex) => hex.hex);
      ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
      obj1.gradientColorStops = colors.map((stop) => stop.stop);
      obj1.baseMix = guildThemePresetAppearance.baseMix;
      obj.customThemeSettings = obj1;
      return obj;
    }
  })(closure_0, stateFromStores), items2);
  if (null != memo) {
    customBackgroundGradient = memo;
  }
  if (null != customBackgroundGradient) {
    stateFromStores1 = customBackgroundGradient;
  }
  return stateFromStores1;
};
