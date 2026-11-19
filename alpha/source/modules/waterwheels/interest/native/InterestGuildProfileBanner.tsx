// Module ID: 17863
// Function ID: 17864
// Name: InterestGuildProfileBanner
// Dependencies: [19, 17, 4663, 1072, 21, 4792, 1414, 8085, 1496, 504, 4655, 9629, 5479, 2]
// Exports: default

// Module 17863 (InterestGuildProfileBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4655 */;
import FastImageDefault from "FastImage" /* 5479 */;
import VideoBackground from "VideoBackground" /* 8085 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 9629 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4663 */;
import createStyles from "createStyles" /* 4792 */;
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
