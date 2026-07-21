// Module ID: 3975
// Function ID: 32975
// Name: getGuildThemeName
// Dependencies: []
// Exports: default

// Module 3975 (getGuildThemeName)
function getGuildThemeName() {
  const intl = arg1(dependencyMap[3]).intl;
  return intl.string(arg1(dependencyMap[3]).t.CFzDOG);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/client_themes/native/useColorThemeBackground.tsx");

export default function useColorThemeBackground() {
  const tmp = importDefault(dependencyMap[6])();
  const arg1 = tmp;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => theme.theme);
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[7]);
  const items1 = [closure_5];
  let stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => gradientPreset.gradientPreset);
  const obj2 = arg1(dependencyMap[7]);
  let customBackgroundGradient = arg1(dependencyMap[8]).useCustomBackgroundGradient();
  const items2 = [tmp, stateFromStores];
  const memo = React.useMemo(() => function getGuildThemeBackground(type, stateFromStores) {
    let colors;
    if (null == type) {
      return null;
    } else if ("custom" === type.type) {
      const customUserThemeSettings = type.customUserThemeSettings;
      let num = 0;
      let obj = { type: callback(closure_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: closure_6, theme: stateFromStores };
      obj = {};
      const items = [];
      HermesBuiltin.arraySpread(callback(closure_2[5]).getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], stateFromStores), 0);
      obj.colors = items;
      obj.gradientColorStops = [];
      const gradientAngle = customUserThemeSettings.gradientAngle;
      if (null != gradientAngle) {
        num = gradientAngle;
      }
      obj.gradientAngle = num;
      let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
      if (null == GUILD_THEME_DEFAULT_BASE_MIX) {
        GUILD_THEME_DEFAULT_BASE_MIX = callback(closure_2[5]).GUILD_THEME_DEFAULT_BASE_MIX;
      }
      obj.baseMix = GUILD_THEME_DEFAULT_BASE_MIX;
      obj.customThemeSettings = obj;
      return obj;
    } else {
      const guildThemePresetAppearance = callback(closure_2[5]).getGuildThemePresetAppearance(type.preset, stateFromStores);
      obj = { type: callback(closure_2[4]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: closure_6, theme: stateFromStores };
      const obj1 = {};
      colors = guildThemePresetAppearance.colors;
      obj1.colors = colors.map((hex) => hex.hex);
      ({ angle: obj6.gradientAngle, colors } = guildThemePresetAppearance);
      obj1.gradientColorStops = colors.map((stop) => stop.stop);
      obj1.baseMix = guildThemePresetAppearance.baseMix;
      obj.customThemeSettings = obj1;
      return obj;
    }
  }(tmp, stateFromStores), items2);
  if (null != memo) {
    customBackgroundGradient = memo;
  }
  if (null != customBackgroundGradient) {
    stateFromStores1 = customBackgroundGradient;
  }
  return stateFromStores1;
};
