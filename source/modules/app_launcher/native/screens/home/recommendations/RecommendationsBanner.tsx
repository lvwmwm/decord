// Module ID: 11200
// Function ID: 87230
// Dependencies: []

// Module 11200
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ BANNER_HEIGHT: closure_6, EMPTY_STRING_SNOWFLAKE_ID: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ imageContainer: {}, image: {} });
let closure_10 = importAllResult.memo((applicationId) => {
  let imageSource;
  let imageStyle;
  let obj = arg1(dependencyMap[6]);
  let obj1 = arg1(dependencyMap[7]);
  const heroMediaDimensions = obj1.useHeroMediaDimensions({ width: obj.useRequiredAppLauncherContext().width });
  const arg1 = heroMediaDimensions;
  obj = { applicationId: applicationId.applicationId, size: heroMediaDimensions.width, names: ["RollOutRight"] };
  const tmp2 = importDefault(dependencyMap[8])(obj);
  const importDefault = tmp2;
  const items = [heroMediaDimensions, tmp2];
  const memo = importAllResult.useMemo(() => {
    let obj = { imageStyle: obj };
    obj = { backgroundColor: "black", height: heroMediaDimensions.height, width: heroMediaDimensions.width, transform: items };
    obj = { translateY: (closure_6 - heroMediaDimensions.height) / 2 };
    const items = [obj];
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
    let tmp6 = jsx(importDefault(dependencyMap[9]), obj);
  } else {
    obj1 = { style: imageStyle };
    tmp6 = <View {...obj1} />;
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
  const tmp = importDefault(dependencyMap[10]);
  const obj = { displayProfile: importDefault(dependencyMap[10])(id) };
  const tmpResult = importDefault(dependencyMap[10])(id);
  const tmp4 = importDefault(dependencyMap[11]);
  obj.user = new closure_5(applicationBot);
  return <tmp4 {...obj} />;
});
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function RecommendationBanner(arg0) {
  let applicationBot;
  let applicationEmbedded;
  let applicationIcon;
  let applicationId;
  let overrideImageUrl;
  ({ applicationId, applicationBot, overrideImageUrl } = arg0);
  ({ applicationEmbedded, applicationIcon } = arg0);
  const tmp = callback();
  let obj = importDefault(dependencyMap[12]);
  const applicationIconSource = obj.getApplicationIconSource({ id: applicationId, icon: applicationIcon, bot: applicationBot, botIconFirst: true });
  importDefault(dependencyMap[13]);
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
    obj.children = jsx(importDefault(dependencyMap[9]), obj);
    let tmp10 = <View {...obj} />;
  } else if (applicationEmbedded) {
    const obj2 = { applicationId };
    tmp10 = <closure_10 {...obj2} />;
  } else if (null != applicationBot) {
    const obj3 = { applicationBot };
    tmp10 = <closure_11 {...obj3} />;
  } else {
    const obj4 = {};
    const obj5 = { backgroundColor: tmp7 };
    obj4.style = obj5;
    tmp10 = <View {...obj4} />;
  }
  return tmp10;
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx");

export default memoResult;
