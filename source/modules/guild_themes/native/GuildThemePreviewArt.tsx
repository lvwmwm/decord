// Module ID: 14995
// Function ID: 114235
// Name: PreviewOverlay
// Dependencies: [31, 27, 33, 4130, 689, 3978, 14996, 4066, 4554, 2]
// Exports: default

// Module 14995 (PreviewOverlay)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function PreviewOverlay() {
  return <View pointerEvents="none" style={_createForOfIteratorHelperLoose().previewOverlay}>{jsx(importDefault(14996), {})}</View>;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.previewArt = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.previewOverlay = { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default function GuildThemePreviewArt(themeSettings) {
  themeSettings = themeSettings.themeSettings;
  const tmp2 = importDefault(4066)();
  importDefault = tmp2;
  let items = [themeSettings, tmp2];
  const memo = React.useMemo(() => (function getGradientConfig(themeSettings, closure_1) {
    if (null == themeSettings) {
      return null;
    } else {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          let obj = {};
          const items = [];
          HermesBuiltin.arraySpread(themeSettings(outer2_2[5]).getSingleColorGuildThemeGradientColors(first, closure_1), 0);
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
      obj = themeSettings(outer2_2[5]);
      const guildThemePreset = obj.getGuildThemePreset(themeSettings.presetId);
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = themeSettings(outer2_2[5]).getGuildThemePresetAppearance(guildThemePreset, closure_1);
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
  })(themeSettings, closure_1), items);
  const items1 = [_createForOfIteratorHelperLoose().previewArt, themeSettings.style];
  if (null == memo) {
    let obj = { style: items1, children: <PreviewOverlay /> };
    let tmp10 = <View style={items1}><PreviewOverlay /></View>;
  } else {
    obj = {};
    ({ colors: obj.colors, locations: obj.locations } = memo);
    obj.useAngle = true;
    obj.angle = memo.angle;
    obj.style = items1;
    obj.children = <PreviewOverlay />;
    tmp10 = jsx(importDefault(4554), {});
    const tmp7 = importDefault(4554);
  }
  return tmp10;
};
