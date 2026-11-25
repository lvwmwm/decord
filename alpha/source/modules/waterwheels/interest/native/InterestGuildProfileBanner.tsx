// Module ID: 17967
// Function ID: 17968
// Name: InterestGuildProfileBanner
// Dependencies: [19, 17, 4883, 1071, 21, 5012, 1412, 9470, 1494, 504, 4875, 8687, 5699, 2]
// Exports: default

// Module 17967 (InterestGuildProfileBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4875 */;
import FastImageDefault from "FastImage" /* 5699 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 8687 */;
import VideoBackground from "VideoBackground" /* 9470 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

function InterestGuildProfileSolidBanner(profile) {
  profile = profile.profile;
  const tmp = closure_7();
  const obj = AvatarUtilsDefault;
  const obj2 = { id: profile.id, icon: profile.icon, size: 80 };
  const guildIconURL = obj.getGuildIconURL(obj2);
  const useDominantColorFromImage = VideoBackground.useDominantColorFromImage;
  VideoBackground;
  const items = [tmp.banner, ];
  const obj3 = VideoBackground;
  items[1] = { backgroundColor: useDominantColorFromImage(guildIconURL, obj3.memoizedImageSource(guildIconURL)) };
  ({ backgroundColor: useDominantColorFromImage(guildIconURL, obj3.memoizedImageSource(guildIconURL)) });
  return <View style={items} />;
}
const View = react_native.View;
const GuildFeatures = Constants.GuildFeatures;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ banner: { height: 140, width: "100%" }, image: { resizeMode: "cover" } });
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildProfileBanner.tsx");

export default function InterestGuildProfileBanner(profile) {
  profile = profile.profile;
  let tmp = closure_7();
  const width = useWindowDimensionsDefault().width;
  let obj = profile(504);
  const items = [GuildStore];
  if (obj.useStateFromStores(items, () => {
    let guild = GuildStore.getGuild(profile.id);
    const tmp = profile;
    if (guild == null) {
      const obj = GuildRecordUtils;
      guild = obj.fromGuildProfile(tmp);
    }
    const features = guild.features;
    return features.has(GuildFeatures.DISCOVERABLE);
  })) {
    if (null != profile.customBanner) {
      ({ id: obj2.id, customBanner: obj2.splash } = profile);
      const obj3 = { id: null, splash: null, size: getDevicePixelRatioDefault() * width };
      const getGuildDiscoverySplashSource = AvatarUtilsDefault.getGuildDiscoverySplashSource;
      AvatarUtilsDefault;
      const guildDiscoverySplashSource = getGuildDiscoverySplashSource(obj3);
      const items1 = [, ];
      ({ banner: arr2[0], image: arr2[1] } = tmp);
      return jsx(FastImageDefault, { style: items1, source: guildDiscoverySplashSource });
    }
  }
  return <InterestGuildProfileSolidBanner profile={profile} />;
};
