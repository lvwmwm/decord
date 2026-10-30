// Module ID: 9280
// Function ID: 9281
// Name: GuildProfileView
// Dependencies: [19, 17, 4880, 1072, 21, 5031, 5075, 5009, 575, 504, 4872, 1492, 1410, 9281, 5712, 5248, 5591, 9282, 5582, 9283, 5619, 9295, 14687, 2]
// Exports: default, getBackgroundForProfile

// Module 9280 (GuildProfileView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4872 */;
import themes from "themes" /* 5031 */;
import native from "native" /* 5075 */;
import useThemeDefault from "useTheme" /* 5248 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useToken from "useToken" /* 5591 */;
import FastImageDefault from "FastImage" /* 5712 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 9281 */;
import guild_profile_GuildProfileUtils from "guild_profile/GuildProfileUtils" /* 9282 */;
import GuildProfileHeaderDefault from "GuildProfileHeader" /* 9283 */;
import GuildProfileGamesDefault from "GuildProfileGames" /* 9295 */;
import GuildProfileTraitsDefault from "GuildProfileTraits" /* 14687 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let tmp = dependencyMap;
  let obj = guildProfile(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = GuildStore.getGuild(guildProfile.id);
    const tmp = guildProfile;
    if (guild == null) {
      const obj = GuildRecordUtils;
      guild = obj.fromGuildProfile(tmp);
    }
    const features = guild.features;
    return features.has(GuildFeatures.DISCOVERABLE);
  });
  const width = useWindowDimensionsDefault().width;
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      ({ id: obj2.id, customBanner: obj2.splash } = guildProfile);
      const obj3 = { id: null, splash: null, size: getDevicePixelRatioDefault() * width };
      const getGuildDiscoverySplashSource = tmp3(1410).getGuildDiscoverySplashSource;
      AvatarUtilsDefault;
      const guildDiscoverySplashSource = getGuildDiscoverySplashSource(obj3);
      const obj5 = { style: tmp4.imageBanner, source: guildDiscoverySplashSource };
      return closure_7(FastImageDefault, obj5);
    }
  }
  return closure_7(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  let brightenColorResult;
  let items;
  guildProfile = guildProfile.guildProfile;
  const tmp = styles();
  const tmp2 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj2 = guild_profile_GuildProfileUtils;
  const profilePrimaryColor = obj2.useProfilePrimaryColor(guildProfile, token);
  const obj3 = { style: tmp.colorBanner, start: frozen.START, end: frozen.END, colors: items };
  items = [profilePrimaryColor, ];
  const tmp6 = LinearGradientDefault;
  const obj4 = themes;
  const isThemeDarkResult = obj4.isThemeDark(tmp2);
  const obj5 = native;
  const tmp5 = metroImportDefault;
  if (isThemeDarkResult) {
    brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  return tmp5(tmp6, obj3);
}
const View = react_native.View;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, colorBanner: { height: 140, width: "100%" }, imageBanner: { height: 140, width: "100%", resizeMode: "cover" }, body: { marginTop: 12, paddingHorizontal: 16, gap: 16 }, error: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, buttonContainer: { marginTop: 160 }, header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 }, avatarBackground: size, restrictedAcronym: { fontSize: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
const styles = createStyles(obj);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  let items1;
  let items2;
  guildProfile = guildProfile.guildProfile;
  let tmp = styles();
  const items = [guildProfile];
  let obj = { style: tmp.container, children: items1 };
  const memo = react.useMemo(() => {
    const tmp = guildProfile;
    if (null == guildProfile) {
      return null;
    } else {
      const obj3 = { id: null, icon: null, size: 96, canAnimate: true };
      ({ id: obj2.id, icon: obj2.icon } = tmp);
      const obj = AvatarUtilsDefault;
      const guildIconSource = obj.getGuildIconSource(obj3);
      let uri = null;
      if (typeof guildIconSource !== "number") {
        uri = guildIconSource.uri;
      }
      return uri;
    }
  }, items);
  items1 = [closure_7(GuildProfileBackground, { guildProfile }), closure_7(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: memo }), ];
  const obj2 = { style: tmp.body, children: items2 };
  let tmp5Result = null != guildProfile.description && guildProfile.description.length > 0;
  if (tmp5Result) {
    let obj3 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
    tmp5Result = tmp5(guildProfile(5619).Text, obj3);
  }
  items2 = [tmp5Result, closure_7(GuildProfileGamesDefault, { profile: guildProfile }), closure_7(GuildProfileTraitsDefault, { profile: guildProfile })];
  items1[2] = closure_8(View, obj2);
  return closure_8(View, obj);
};
export function getBackgroundForProfile(theme, token) {
  let brightenColorResult;
  const items = [token, ];
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const obj2 = native;
  if (isThemeDarkResult) {
    brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
}
export const useStyles = styles;
export const DiagonalGradient = frozen;
