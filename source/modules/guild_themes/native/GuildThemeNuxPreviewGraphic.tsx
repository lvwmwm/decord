// Module ID: 15360
// Function ID: 15361
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: [19, 17, 21, 4342, 712, 15361, 2]
// Exports: default

// Module 15360 (GuildThemeNuxPreviewGraphic)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { container: null };
createCacheKey = { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  const obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: createCacheKey().container, children: null };
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj[3] = jsx(importDefault(15361), { themeSettings: tmp4 });
  return <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={createCacheKey().container}>{null}</View>;
};
