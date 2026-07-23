// Module ID: 11210
// Function ID: 87290
// Name: RecommendationsBannerCard
// Dependencies: [31, 27, 653, 33, 4130, 689, 7919, 7888, 1392, 11202, 4660, 11211, 1881, 11205, 4126, 1212, 11176, 5171, 2]
// Exports: default

// Module 11210 (RecommendationsBannerCard)
import result from "result";
import { View } from "get ActivityIndicator";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, width: "100%", overflow: "hidden" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.banner = { width: "100%", height: 106, overflow: "hidden" };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.appDetailsContainer = obj1;
let obj2 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
_createForOfIteratorHelperLoose.appDetails = obj2;
_createForOfIteratorHelperLoose.appIconContainer = { flexShrink: 0 };
let obj3 = { position: "absolute", display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_4, right: require("_createForOfIteratorHelperLoose").space.PX_8, top: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "flex-end" };
_createForOfIteratorHelperLoose.notifsContainer = obj3;
_createForOfIteratorHelperLoose.badge = {};
_createForOfIteratorHelperLoose.promotedLabelWrapper = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const result = require("ME").fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx");

export default function RecommendationsBannerCard(application) {
  let icon;
  let isFirst;
  let isLandscape;
  let isLast;
  let onPress;
  let showsPromoted;
  let style;
  application = application.application;
  ({ onPress, isFirst, isLast, showsPromoted } = application);
  ({ style, isLandscape } = application);
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  if (!showsPromoted) {
    let obj = application(7919);
    showsPromoted = obj.isPromotedApplication(application);
  }
  let obj1 = application(7919);
  const shelfBadgeTypeIfActive = obj1.getShelfBadgeTypeIfActive(application);
  let bot = application.bot;
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
      id = outer1_5;
    }
    outer1_1(outer1_2[7])(id);
  }, items);
  let num2 = 8;
  let obj2 = importDefault(1392);
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj2.getApplicationIconSource(obj);
  if (isLandscape) {
    obj = { application, iconSource: applicationIconSource, onPress, isFirstRow: isFirst, isLastRow: isLast };
    let tmp9Result = callback(application(11202).BaseAppRow, obj);
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
    let obj8 = application(7919);
    obj4.applicationEmbedded = obj8.isEmbeddedApp(application);
    ({ id: obj8.applicationId, icon } = application);
    let tmp19;
    if (null != icon) {
      tmp19 = icon;
    }
    obj4.applicationIcon = tmp19;
    obj4.overrideImageUrl = application.overrideImageUrl;
    const items2 = [callback(importDefault(11211), obj4), ];
    if (showsPromoted) {
      const obj5 = { style: tmp.notifsContainer };
      const obj6 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
      const items3 = [callback(importDefault(11205), obj6), ];
      if (showsPromoted) {
        const obj7 = { style: tmp.promotedLabelWrapper };
        obj8 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary" };
        const intl = application(1212).intl;
        obj8.children = intl.string(application(1212).t["/eVltv"]);
        obj7.children = callback(application(4126).Text, obj8);
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
      tmp34 = callback(importDefault(11176), obj10);
    }
    const items5 = [tmp34, , ];
    const obj11 = { style: tmp.appDetails };
    const obj12 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
    const items6 = [callback(application(4126).Text, obj12), ];
    const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: application.description };
    items6[1] = callback(application(4126).Text, obj13);
    obj11.children = items6;
    items5[1] = callback2(View, obj11);
    items5[2] = callback(application(5171).TableRowArrow, {});
    obj9.children = items5;
    items4[1] = callback2(View, obj9);
    obj1.children = items4;
    tmp9Result = callback2(application(4660).PressableOpacity, obj1);
    const tmp12 = callback2;
    const tmp13 = View;
    const tmp14 = callback;
    const tmp17 = importDefault(11211);
    const tmp32 = callback2;
    const tmp33 = View;
    const tmp9 = callback2;
  }
  return tmp9Result;
};
