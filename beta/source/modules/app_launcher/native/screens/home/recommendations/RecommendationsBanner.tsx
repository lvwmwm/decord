// Module ID: 11574
// Function ID: 11575
// Name: RecommendationsBanner
// Dependencies: [19, 17, 1386, 1074, 21, 4836, 10785, 11566, 8933, 5899, 7631, 7692, 1397, 7589, 2]

// Module 11574 (RecommendationsBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import useAvatarColorDefault from "useAvatarColor" /* 7589 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 7631 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 8933 */;
import react from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1386 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
let tmp;
let tmp3;
const FastImageDefault = tmp3(5899);
const UserProfileBannerDefault = tmp(7692);
const View = react_native.View;
({ BANNER_HEIGHT: metroRequire, EMPTY_STRING_SNOWFLAKE_ID: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ imageContainer: { width: "100%", height: "100%" }, image: { width: "100%", height: "100%" } });
let closure_10 = react.memo((applicationId) => {
  let imageSource;
  let imageStyle;
  let tmp8;
  let url;
  let heroMediaDimensions;
  importDefault = undefined;
  applicationId = applicationId.applicationId;
  const tmp = dependencyMap;
  let obj = heroMediaDimensions(10785);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj2 = heroMediaDimensions(11566);
  heroMediaDimensions = obj2.useHeroMediaDimensions({ width });
  let obj3 = { applicationId, size: heroMediaDimensions.width, names: ["embedded_cover"] };
  const tmp4 = useEmbeddedActivityBackgroundDefault(obj3);
  importDefault = tmp4;
  let items = [heroMediaDimensions, tmp4];
  const memo = react.useMemo(() => {
    let items;
    let tmp2;
    const obj = { imageStyle: size, imageSource: tmp2 };
    size = { backgroundColor: "black", height: heroMediaDimensions.height, width: heroMediaDimensions.width, transform: items };
    items = [];
    const obj2 = { translateY: (metroRequire - heroMediaDimensions.height) / 2 };
    items[0] = obj2;
    tmp2 = undefined;
    if (null != url.url) {
      tmp2 = { uri: tmp.url };
      const obj3 = { uri: tmp.url };
    }
    return obj;
  }, items);
  ({ imageStyle, imageSource } = memo);
  if (null != imageSource) {
    tmp8 = jsx(FastImageDefault, { style: imageStyle, source: imageSource, resizeMode: "cover" });
  } else {
    tmp8 = <View style={imageStyle} />;
  }
  return tmp8;
});
let closure_11 = react.memo((applicationBot) => {
  applicationBot = applicationBot.applicationBot;
  let id;
  const tmp3 = useDisplayProfileDefault;
  if (applicationBot != null) {
    id = applicationBot.id;
  }
  if (id == null) {
    id = metroImportDefault;
  }
  UserProfileBannerDefault;
  new UserRecord(applicationBot);
  return <tmpResult displayProfile={tmp3(id)} user={new UserRecord(applicationBot)} />;
});
const memoResult = react.memo(function RecommendationBanner(arg0) {
  let applicationBot;
  let applicationEmbedded;
  let applicationIcon;
  let applicationId;
  let overrideImageUrl;
  let tmp11;
  ({ applicationId, applicationBot, overrideImageUrl } = arg0);
  ({ applicationEmbedded, applicationIcon } = arg0);
  const tmp = closure_9();
  const obj = AvatarUtilsDefault;
  const applicationIconSource = obj.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  useAvatarColorDefault;
  if (typeof applicationIconSource !== "number") {
    let uri;
    if (applicationIconSource != null) {
      uri = applicationIconSource.uri;
    }
  }
  if (null != overrideImageUrl) {
    tmp11 = <View style={tmp.imageContainer}>{null}</View>;
    const obj4 = { uri: overrideImageUrl };
  } else if (applicationEmbedded) {
    tmp11 = <closure_10 applicationId={applicationId} />;
  } else if (null != applicationBot) {
    tmp11 = <closure_11 applicationBot={applicationBot} />;
  } else {
    tmp11 = <View style={{ backgroundColor: tmp8 }} />;
    const obj8 = { backgroundColor: tmp8 };
  }
  return tmp11;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx");

export default memoResult;
