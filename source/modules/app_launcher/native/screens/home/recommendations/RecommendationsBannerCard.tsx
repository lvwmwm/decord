// Module ID: 11199
// Function ID: 87215
// Name: RecommendationsBannerCard
// Dependencies: []
// Exports: default

// Module 11199 (RecommendationsBannerCard)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[2]).EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.lg, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, width: "100%", overflow: "hidden" };
obj.container = obj;
obj.banner = { -1716629078: null, 1375445090: null, -698284748: null };
const obj1 = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, 0: true, padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.appDetailsContainer = obj1;
const obj2 = { GUILD_ROOM: "#433D84", kkvDatabase: "M75.647 61.135c10.446 0 18.915-8.532 18.915-19.057 0-10.526-8.469-19.058-18.915-19.058-10.447 0-18.916 8.532-18.916 19.058 0 10.524 8.47 19.057 18.916 19.057z", UPLOAD_INTL_DATA: 0.4, paddingBottom: "url(#d)", marginLeft: importDefault(dependencyMap[5]).space.PX_16 };
obj.appDetails = obj2;
obj.appIconContainer = { flexShrink: 0 };
const tmp2 = arg1(dependencyMap[3]);
obj.notifsContainer = { gap: importDefault(dependencyMap[5]).space.PX_4, right: importDefault(dependencyMap[5]).space.PX_8, top: importDefault(dependencyMap[5]).space.PX_8, alignItems: "flex-end" };
obj.badge = {};
const obj3 = { gap: importDefault(dependencyMap[5]).space.PX_4, right: importDefault(dependencyMap[5]).space.PX_8, top: importDefault(dependencyMap[5]).space.PX_8, alignItems: "flex-end" };
obj.promotedLabelWrapper = { paddingVertical: importDefault(dependencyMap[5]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
let closure_8 = obj.createStyles(obj);
const obj4 = { paddingVertical: importDefault(dependencyMap[5]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx");

export default function RecommendationsBannerCard(application) {
  let icon;
  let isFirst;
  let isLandscape;
  let isLast;
  let onPress;
  let showsPromoted;
  let style;
  application = application.application;
  const arg1 = application;
  ({ onPress, isFirst, isLast, showsPromoted } = application);
  ({ style, isLandscape } = application);
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const tmp = callback3();
  if (!showsPromoted) {
    let obj = arg1(dependencyMap[6]);
    showsPromoted = obj.isPromotedApplication(application);
  }
  let obj1 = arg1(dependencyMap[6]);
  const shelfBadgeTypeIfActive = obj1.getShelfBadgeTypeIfActive(application);
  const bot = application.bot;
  let id;
  if (null != bot) {
    id = bot.id;
  }
  const items = [id];
  const effect = React.useEffect(() => {
    const bot = application.bot;
    let id;
    if (null != bot) {
      id = bot.id;
    }
    if (null == id) {
      id = closure_5;
    }
    callback(closure_2[7])(id);
  }, items);
  let num2 = 8;
  let obj2 = importDefault(dependencyMap[8]);
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj2.getApplicationIconSource(obj);
  if (isLandscape) {
    obj = { application, iconSource: applicationIconSource, onPress, isFirstRow: isFirst, isLastRow: isLast };
    let tmp9Result = callback(arg1(dependencyMap[9]).BaseAppRow, obj);
  } else {
    obj1 = {};
    const items1 = [tmp.container, , ];
    obj2 = {};
    let num4 = num2;
    if (isFirst) {
      num4 = 0;
    }
    obj2.marginTop = num4;
    if (isLast) {
      num2 = 0;
    }
    obj2.marginBottom = num2;
    items1[1] = obj2;
    items1[2] = style;
    obj1.style = items1;
    obj1.onPress = onPress;
    const obj3 = { style: tmp.banner };
    const obj4 = { applicationBot: application.bot };
    let obj8 = arg1(dependencyMap[6]);
    obj4.applicationEmbedded = obj8.isEmbeddedApp(application);
    ({ id: obj8.applicationId, icon } = application);
    let tmp19;
    if (null != icon) {
      tmp19 = icon;
    }
    obj4.applicationIcon = tmp19;
    obj4.overrideImageUrl = application.overrideImageUrl;
    const items2 = [callback(importDefault(dependencyMap[11]), obj4), ];
    if (showsPromoted) {
      const obj5 = { style: tmp.notifsContainer };
      const obj6 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
      const items3 = [callback(importDefault(dependencyMap[13]), obj6), ];
      if (showsPromoted) {
        const obj7 = { style: tmp.promotedLabelWrapper };
        obj8 = {};
        const intl = arg1(dependencyMap[15]).intl;
        obj8.children = intl.string(arg1(dependencyMap[15]).t./eVltv);
        obj7.children = callback(arg1(dependencyMap[14]).Text, obj8);
        showsPromoted = callback(View, obj7);
      }
      items3[1] = showsPromoted;
      obj5.children = items3;
      let tmp23Result = callback2(View, obj5);
      const tmp23 = callback2;
      const tmp24 = View;
    } else {
      tmp23Result = null;
    }
    items2[1] = tmp23Result;
    obj3.children = items2;
    const items4 = [callback2(View, obj3), ];
    const obj9 = { style: tmp.appDetailsContainer };
    let tmp34 = null != applicationIconSource;
    if (tmp34) {
      const obj10 = { iconSource: applicationIconSource, iconSize: 36, wrapperStyle: tmp.appIconContainer };
      tmp34 = callback(importDefault(dependencyMap[16]), obj10);
    }
    const items5 = [tmp34, , ];
    const obj11 = { style: tmp.appDetails };
    const obj12 = { -9223372036854775808: "low", 0: true, 0: true, children: application.name };
    const items6 = [callback(arg1(dependencyMap[14]).Text, obj12), ];
    const obj13 = { -9223372036854775808: 1, 0: "auto", 0: 0, children: application.description };
    items6[1] = callback(arg1(dependencyMap[14]).Text, obj13);
    obj11.children = items6;
    items5[1] = callback2(View, obj11);
    items5[2] = callback(arg1(dependencyMap[17]).TableRowArrow, {});
    obj9.children = items5;
    items4[1] = callback2(View, obj9);
    obj1.children = items4;
    tmp9Result = callback2(arg1(dependencyMap[10]).PressableOpacity, obj1);
    const tmp12 = callback2;
    const tmp13 = View;
    const tmp14 = callback;
    const tmp17 = importDefault(dependencyMap[11]);
    const tmp32 = callback2;
    const tmp33 = View;
    const tmp9 = callback2;
  }
  return tmp9Result;
};
