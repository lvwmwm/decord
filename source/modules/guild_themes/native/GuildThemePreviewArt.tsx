// Module ID: 14868
// Function ID: 111990
// Name: PreviewOverlay
// Dependencies: []
// Exports: default

// Module 14868 (PreviewOverlay)
function PreviewOverlay() {
  return <View pointerEvents="none" style={callback().previewOverlay}>{jsx(importDefault(dependencyMap[6]), {})}</View>;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.previewArt = obj;
obj.previewOverlay = { left: null, accessibilityRole: null, exports: null, "Null": null, "Null": null };
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default function GuildThemePreviewArt(themeSettings) {
  themeSettings = themeSettings.themeSettings;
  const arg1 = themeSettings;
  const tmp2 = importDefault(dependencyMap[7])();
  const importDefault = tmp2;
  const items = [themeSettings, tmp2];
  const memo = React.useMemo(() => function getGradientConfig(themeSettings, theme) {
    if (null == themeSettings) {
      return null;
    } else {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          let obj = {};
          const items = [];
          HermesBuiltin.arraySpread(callback(closure_2[5]).getSingleColorGuildThemeGradientColors(first, theme), 0);
          obj.colors = items;
          const gradientAngle = customUserThemeSettings.gradientAngle;
          let num5 = 0;
          if (null != gradientAngle) {
            num5 = gradientAngle;
          }
          obj.angle = num5;
          return obj;
        }
      }
      obj = callback(closure_2[5]);
      const guildThemePreset = obj.getGuildThemePreset(themeSettings.presetId);
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = callback(closure_2[5]).getGuildThemePresetAppearance(guildThemePreset, theme);
        obj = {};
        const colors = guildThemePresetAppearance.colors;
        obj.colors = colors.map((hex) => hex.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj.locations = colors1.map((stop) => stop.stop / 100);
        obj.angle = guildThemePresetAppearance.angle;
        return obj;
      } else {
        return null;
      }
    }
  }(themeSettings, tmp2), items);
  const items1 = [callback().previewArt, themeSettings.style];
  if (null == memo) {
    let obj = { style: items1, children: <PreviewOverlay /> };
    let tmp10 = <View {...obj} />;
  } else {
    obj = {};
    ({ colors: obj.colors, locations: obj.locations } = memo);
    obj.useAngle = true;
    obj.angle = memo.angle;
    obj.style = items1;
    obj.children = <PreviewOverlay />;
    tmp10 = jsx(importDefault(dependencyMap[8]), obj);
    const tmp7 = importDefault(dependencyMap[8]);
  }
  return tmp10;
};
