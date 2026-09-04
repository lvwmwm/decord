// Module ID: 12111
// Function ID: 12112
// Name: styles
// Dependencies: [19, 17, 21, 4481, 709, 2]
// Exports: default

// Module 12111 (styles)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

noopAll;
createCacheKey = { iconWrapper: null };
createCacheKey = { justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  const obj = { style: null, children: null };
  const items = [createCacheKey().iconWrapper, wrapperSize.wrapperStyle, { height: num, width: num }];
  obj[0] = items;
  obj[1] = wrapperSize.icon;
  return <View style={null}>{null}</View>;
};
export const useAppLauncherOptionIconStyles = createCacheKey;
