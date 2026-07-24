// Module ID: 11241
// Function ID: 87562
// Dependencies: [31, 27, 1857, 653, 33, 4130, 10911, 11233, 10643, 5085, 7974, 8304, 1392, 7903, 2]

// Module 11241
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ BANNER_HEIGHT: closure_6, EMPTY_STRING_SNOWFLAKE_ID: closure_7 } = ME);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ imageContainer: { width: "100%", height: "100%" }, image: { width: "100%", height: "100%" } });
let closure_10 = importAllResult.memo((applicationId) => {
  let imageSource;
  let imageStyle;
  let obj = heroMediaDimensions(10911);
  let obj1 = heroMediaDimensions(11233);
  heroMediaDimensions = obj1.useHeroMediaDimensions({ width: obj.useRequiredAppLauncherContext().width });
  obj = { applicationId: applicationId.applicationId, size: heroMediaDimensions.width, names: ["embedded_cover"] };
  const tmp2 = importDefault(10643)(obj);
  importDefault = tmp2;
  let items = [heroMediaDimensions, tmp2];
  const memo = importAllResult.useMemo(() => {
    obj = { imageStyle: obj };
    obj = { backgroundColor: "black", height: heroMediaDimensions.height, width: heroMediaDimensions.width, transform: items };
    obj = { translateY: (outer1_6 - heroMediaDimensions.height) / 2 };
    items = [obj];
    let tmp;
    if (null != tmp2.url) {
      const obj1 = { uri: tmp2.url };
      tmp = obj1;
    }
    obj.imageSource = tmp;
    return obj;
  }, items);
  ({ imageStyle, imageSource } = memo);
  if (null != imageSource) {
    obj = { style: imageStyle, source: imageSource, resizeMode: "cover" };
    let tmp6 = jsx(importDefault(5085), { style: imageStyle, source: imageSource, resizeMode: "cover" });
  } else {
    obj1 = { style: imageStyle };
    tmp6 = <View style={imageStyle} />;
  }
  return tmp6;
});
let closure_11 = importAllResult.memo((applicationBot) => {
  applicationBot = applicationBot.applicationBot;
  let id;
  if (null != applicationBot) {
    id = applicationBot.id;
  }
  if (null == id) {
    id = closure_7;
  }
  const tmp = importDefault(7974);
  const obj = { displayProfile: importDefault(7974)(id) };
  const tmpResult = importDefault(7974)(id);
  const tmp4 = importDefault(8304);
  obj.user = new _isNativeReflectConstruct(applicationBot);
  return <tmp4 displayProfile={importDefault(7974)(id)} />;
});
const memoResult = importAllResult.memo(function RecommendationBanner(arg0) {
  let applicationBot;
  let applicationEmbedded;
  let applicationIcon;
  let applicationId;
  let overrideImageUrl;
  ({ applicationId, applicationBot, overrideImageUrl } = arg0);
  ({ applicationEmbedded, applicationIcon } = arg0);
  const tmp = callback();
  let obj = importDefault(1392);
  const applicationIconSource = obj.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  importDefault(7903);
  if ("number" !== typeof applicationIconSource) {
    let uri;
    if (null != applicationIconSource) {
      uri = applicationIconSource.uri;
    }
  }
  if (null != overrideImageUrl) {
    obj = { style: tmp.imageContainer };
    obj = { style: tmp.image };
    const obj1 = { uri: overrideImageUrl };
    obj.source = obj1;
    obj.resizeMode = "cover";
    obj.children = jsx(importDefault(5085), { style: tmp.image });
    let tmp10 = <View style={tmp.image} />;
  } else if (applicationEmbedded) {
    const obj2 = { applicationId };
    tmp10 = <closure_10 applicationId={applicationId} />;
  } else if (null != applicationBot) {
    const obj3 = { applicationBot };
    tmp10 = <closure_11 applicationBot={applicationBot} />;
  } else {
    const obj4 = {};
    const obj5 = { backgroundColor: tmp7 };
    obj4.style = obj5;
    tmp10 = <View />;
  }
  return tmp10;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx");

export default memoResult;
