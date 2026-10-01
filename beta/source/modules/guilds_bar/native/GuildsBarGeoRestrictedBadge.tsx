// Module ID: 15984
// Function ID: 15985
// Name: GuildsBarGeoRestrictedBadge
// Dependencies: [19, 17, 21, 4836, 576, 5753, 5899, 11746, 2]

// Module 15984 (GuildsBarGeoRestrictedBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 11746 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { badgeImageContainer: size, badgeImage: size1 };
size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: 16, opacity: LegacyTokens.DARK_1_LIGHT_08, tintColor: nativeDefault.colors.BLACK };
let closure_4 = createStyles(obj);
const memoResult = react.memo(function GuildsBarGeoRestrictedBadge(style) {
  style = style.style;
  const tmp = closure_4();
  const items = [tmp.badgeImageContainer, style];
  ({ source: AssetRegistryDefault, style: tmp.badgeImage });
  FastImageDefault;
  return <View style={items} pointerEvents="none">{null}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;
