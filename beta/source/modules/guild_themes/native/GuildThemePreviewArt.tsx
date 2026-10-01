// Module ID: 15796
// Function ID: 15797
// Name: GuildThemePreviewArt
// Dependencies: [19, 17, 21, 4836, 576, 4689, 15797, 4767, 5293, 2]
// Exports: default

// Module 15796 (GuildThemePreviewArt)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import GuildThemePresets from "GuildThemePresets" /* 4689 */;
import useThemeDefault from "useTheme" /* 4767 */;
import GuildThemePreviewOverlayDefault from "GuildThemePreviewOverlay" /* 15797 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj2;
let tmp2;
const LinearGradientDefault = tmp2(5293);
function PreviewOverlay() {
  return <View pointerEvents="none" style={closure_6().previewOverlay}>{jsx(GuildThemePreviewOverlayDefault, {})}</View>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { previewArt: obj2, previewOverlay: { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 } };
obj2 = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default function GuildThemePreviewArt(themeSettings) {
  let closure_1;
  let tmp9;
  themeSettings = themeSettings.themeSettings;
  importDefault = undefined;
  const style = themeSettings.style;
  const tmp2 = importDefault;
  const tmp3 = dependencyMap;
  const tmp = closure_6();
  let tmp4 = useThemeDefault();
  importDefault = tmp4;
  let items = [themeSettings, tmp4];
  const memo = react.useMemo(() => {
    let colors;
    let colors1;
    let items;
    let num2;
    let tmp4 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = tmp2.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          const obj3 = { colors: items, angle: num2 };
          items = [];
          const obj5 = GuildThemePresets;
          HermesBuiltin.arraySpread(items, obj5.getSingleColorGuildThemeGradientColors(first, closure_1), 0);
          num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          tmp4 = obj3;
        }
      }
      const obj = GuildThemePresets;
      const guildThemePreset = obj.getGuildThemePreset(tmp2.presetId);
      tmp4 = null;
      if (null != guildThemePreset) {
        const obj2 = GuildThemePresets;
        const guildThemePresetAppearance = obj2.getGuildThemePresetAppearance(guildThemePreset, tmp3);
        const obj4 = { colors: colors.map((hex) => hex.hex), locations: colors1.map((stop) => stop.stop / 100), angle: guildThemePresetAppearance.angle };
        colors = guildThemePresetAppearance.colors;
        colors1 = guildThemePresetAppearance.colors;
        tmp4 = obj4;
      }
    }
    return tmp4;
  }, items);
  const items1 = [tmp.previewArt, style];
  if (null == memo) {
    tmp9 = <View style={items1}>{null}</View>;
  } else {
    let obj = { colors: null, locations: null, useAngle: true, angle: null, style: items1, children: null };
    ({ colors: obj.colors, locations: obj.locations, angle: obj.angle } = memo);
    LinearGradientDefault;
    tmp9 = <tmp2Result colors={null} locations={null} useAngle angle={null} style={items1}>{null}</tmp2Result>;
  }
  return tmp9;
};
