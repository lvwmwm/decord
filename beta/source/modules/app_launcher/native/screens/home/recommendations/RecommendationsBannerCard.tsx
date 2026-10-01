// Module ID: 11573
// Function ID: 11574
// Name: RecommendationsBannerCard
// Dependencies: [19, 17, 1074, 21, 4836, 576, 8590, 7632, 1397, 11565, 5435, 11574, 1979, 11568, 4832, 1115, 11538, 5924, 2]
// Exports: default

// Module 11573 (RecommendationsBannerCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import ActivityShelfBadgeDefault from "ActivityShelfBadge" /* 11568 */;
import RecommendationsBannerDefault from "RecommendationsBanner" /* 11574 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
const View = react_native.View;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, banner: { width: "100%", height: 106, overflow: "hidden" }, appDetailsContainer: obj3, appDetails: obj4, appIconContainer: { flexShrink: 0 }, notifsContainer: rect, badge: {}, promotedLabelWrapper: obj5 };
obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, width: "100%", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj4 = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
rect = { position: "absolute", display: "flex", gap: nativeDefault.space.PX_4, right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8, alignItems: "flex-end" };
obj5 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx");

export default function RecommendationsBannerCard(application) {
  let Text;
  let icon;
  let intl;
  let isFirst;
  let isLandscape;
  let isLast;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj14;
  let onPress;
  let showsPromoted;
  let style;
  let tmp12Result2;
  let tmp4Result;
  application = application.application;
  ({ onPress, isFirst, isLast, showsPromoted } = application);
  ({ style, isLandscape } = application);
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const overrideImageUrl = application.overrideImageUrl;
  let tmp = closure_8();
  if (!showsPromoted) {
    const obj = application(8590);
    showsPromoted = obj.isPromotedApplication(application);
  }
  const obj2 = application(8590);
  const shelfBadgeTypeIfActive = obj2.getShelfBadgeTypeIfActive(application);
  let bot = application.bot;
  let id;
  const useEffect = react.useEffect;
  if (bot != null) {
    id = bot.id;
  }
  const items = [id];
  const effect = useEffect(() => {
    const bot = application.bot;
    let id;
    const tmp = maybeFetchUserProfileDefault;
    if (bot != null) {
      id = bot.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp(id);
  }, items);
  const obj3 = AvatarUtilsDefault;
  const obj4 = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj3.getApplicationIconSource(obj4);
  if (isLandscape) {
    const obj5 = { application, iconSource: applicationIconSource, onPress, isFirstRow: isFirst, isLastRow: isLast };
    tmp12Result2 = closure_6(tmp4(11565).BaseAppRow, obj5);
  } else {
    let tmp12Result;
    const items1 = [tmp.container, , ];
    let num = 8;
    let num2 = 8;
    const PressableOpacity = tmp4(5435).PressableOpacity;
    if (isFirst) {
      num2 = 0;
    }
    const obj6 = { marginTop: num2, marginBottom: num };
    if (isLast) {
      num = 0;
    }
    const obj7 = { style: items1, onPress, children: items4 };
    items1[1] = obj6;
    items1[2] = style;
    const obj9 = { style: tmp.banner, children: items2 };
    const obj10 = { applicationBot: application.bot, applicationEmbedded: tmp4Result.isEmbeddedApp(application), applicationId: null, applicationIcon: icon, overrideImageUrl };
    const tmp10Result = RecommendationsBannerDefault;
    ({ id: obj8.applicationId, icon } = application);
    tmp4Result = application(8590);
    items2 = [closure_6(tmp10Result, obj10), ];
    if (showsPromoted) {
      const obj11 = { style: tmp.notifsContainer, children: items3 };
      const obj12 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
      items3 = [closure_6(ActivityShelfBadgeDefault, obj12), ];
      if (showsPromoted) {
        const obj13 = { style: tmp.promotedLabelWrapper, children: closure_6(Text, obj14) };
        obj14 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary", children: intl.string(application(1115).t["/eVltv"]) };
        Text = tmp4(4832).Text;
        intl = tmp4(1115).intl;
        showsPromoted = tmp14(tmp13, obj13);
      }
      items3[1] = showsPromoted;
      tmp12Result = tmp12(tmp13, obj11);
    } else {
      tmp12Result = null;
    }
    items2[1] = tmp12Result;
    items4 = [closure_7(View, obj9), ];
    let tmp14Result = null != applicationIconSource;
    const obj15 = { style: tmp.appDetailsContainer, children: items5 };
    if (tmp14Result) {
      const obj16 = { iconSource: applicationIconSource, iconSize: 36, wrapperStyle: tmp.appIconContainer };
      tmp14Result = tmp14(tmp10(11538), obj16);
    }
    items5 = [tmp14Result, , ];
    const obj17 = { style: tmp.appDetails, children: items6 };
    const obj18 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
    items6 = [closure_6(application(4832).Text, obj18), ];
    const obj19 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: application.description };
    items6[1] = closure_6(application(4832).Text, obj19);
    items5[1] = closure_7(View, obj17);
    items5[2] = closure_6(application(5924).TableRowArrow, {});
    items4[1] = closure_7(View, obj15);
    tmp12Result2 = tmp12(PressableOpacity, obj7);
  }
  return tmp12Result2;
};
