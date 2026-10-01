// Module ID: 9209
// Function ID: 9210
// Name: GuildProfileView
// Dependencies: [19, 17, 2067, 1074, 21, 4538, 4540, 4836, 576, 504, 2059, 1479, 1397, 9210, 4767, 4531, 9211, 5293, 9212, 4832, 9214, 9221, 2]
// Exports: default, getBackgroundForProfile

// Module 9209 (GuildProfileView)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import useToken from "useToken" /* 4531 */;
import themes from "themes" /* 4538 */;
import native from "native" /* 4540 */;
import useThemeDefault from "useTheme" /* 4767 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 9210 */;
import guild_profile_GuildProfileUtils from "guild_profile/GuildProfileUtils" /* 9211 */;
import GuildProfileHeaderDefault from "GuildProfileHeader" /* 9212 */;
import GuildProfileGamesDefault from "GuildProfileGames" /* 9214 */;
import GuildProfileTraitsDefault from "GuildProfileTraits" /* 9221 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
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
      const getGuildDiscoverySplashSource = tmp3(1397).getGuildDiscoverySplashSource;
      AvatarUtilsDefault;
      const obj5 = { style: tmp4.imageBanner, source: getGuildDiscoverySplashSource(obj3) };
      return closure_8(closure_5, obj5);
    }
  }
  return closure_8(GuildProfileGradient, { guildProfile });
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
  const tmp5 = metroImportAll;
  if (isThemeDarkResult) {
    brightenColorResult = obj5.brightenColor(profilePrimaryColor, 0.8);
  } else {
    brightenColorResult = obj5.darkenColor(profilePrimaryColor, 0.8);
  }
  items[1] = brightenColorResult;
  return tmp5(tmp6, obj3);
}
({ View: closure_4, Image: hasOwnProperty } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, colorBanner: { height: 140, width: "100%" }, imageBanner: { height: 140, width: "100%", objectFit: "cover" }, body: { marginTop: 12, paddingHorizontal: 16, gap: 16 }, error: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, buttonContainer: { marginTop: 160 }, header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 }, avatarBackground: size, restrictedAcronym: { fontSize: 24 } };
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
  items1 = [closure_8(GuildProfileBackground, { guildProfile }), closure_8(GuildProfileHeaderDefault, { profile: guildProfile, guildIconSource: memo }), ];
  const obj2 = { style: tmp.body, children: items2 };
  let tmp5Result = null != guildProfile.description && guildProfile.description.length > 0;
  if (tmp5Result) {
    let obj3 = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
    tmp5Result = tmp5(guildProfile(4832).Text, obj3);
  }
  items2 = [tmp5Result, closure_8(GuildProfileGamesDefault, { profile: guildProfile }), closure_8(GuildProfileTraitsDefault, { profile: guildProfile })];
  items1[2] = closure_9(closure_4, obj2);
  return closure_9(closure_4, obj);
};
export const getBackgroundForProfile = function getBackgroundForProfile(theme, token) {
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
};
export const useStyles = styles;
export const DiagonalGradient = frozen;
