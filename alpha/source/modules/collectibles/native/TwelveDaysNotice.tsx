// Module ID: 18530
// Function ID: 18531
// Name: TwelveDaysNotice
// Dependencies: [32, 19, 17, 1072, 5152, 21, 5930, 5306, 575, 5139, 9420, 7918, 6338, 1264, 5893, 1092, 1502, 18531, 9560, 7428, 1113, 9521, 5929, 7988, 7549, 2]
// Exports: TwelveDaysHomeNagbar, TwelveDaysIndexNotice

// Module 18530 (TwelveDaysNotice)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import TextVariants from "TextVariants" /* 5930 */;
import useTrackImpression from "useTrackImpression" /* 6338 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
function NoticeGradient() {
  const obj = { colors, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, style: hasOwnProperty.absoluteFill, pointerEvents: "none" };
  const tmp = LinearGradientDefault;
  return React4(tmp, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
const colors = ["rgba(14, 56, 100, 0.7)", "rgba(6, 138, 185, 0.7)"];
const TextVariantsFlat = TextVariants.TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
let createStyles = createStyles_mod;
let obj = { nagbar: rect, nagbarContent: obj2, nagbarText: { flex: 1 }, indexNotice: obj3, indexNoticeIcon: { height: lineHeight, justifyContent: "center" }, indexNoticeCopy: obj4 };
rect = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { flex: 1, alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
let items = [dismissible_content.DismissibleContent.SHOP_TWELVE_DAYS_MOBILE_HOME_NAGBAR];
let closure_14 = [];
const constants = { SHOP_HOME: "shop_home", COLLECTION_INDEX: "collection_index" };
const result = size.fileFinishedImporting("modules/collectibles/native/TwelveDaysNotice.tsx");

export const TwelveDaysHomeNagbar = (collectionSkuId) => {
  let XSmallIcon;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj10;
  collectionSkuId = collectionSkuId.collectionSkuId;
  let collectiblesAnalyticsContext;
  _slicedToArray = undefined;
  const tmp = closure_12();
  let obj = collectionSkuId(collectiblesAnalyticsContext[16]);
  navigation = obj.useNavigation();
  const obj2 = collectionSkuId(collectiblesAnalyticsContext[10]);
  collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  const obj3 = collectionSkuId(collectiblesAnalyticsContext[17]);
  let enabled = obj3.useShopTwelveDaysPromoConfig("TwelveDaysHomeNagbar").enabled;
  const obj4 = collectionSkuId(collectiblesAnalyticsContext[18]);
  const tmp8 = _slicedToArray(obj4.useSelectedDismissibleContent(enabled ? items : closure_14), 2)[1];
  _slicedToArray = tmp8;
  if (enabled) {
    enabled = null != tmp7;
  }
  const SHOP_HOME = constants.SHOP_HOME;
  let analyticsLocations;
  const tmp2Result = collectionSkuId(collectiblesAnalyticsContext[10]);
  const collectiblesAnalyticsContext1 = tmp2Result.useCollectiblesAnalyticsContext();
  let sessionId;
  if (collectiblesAnalyticsContext1 != null) {
    sessionId = collectiblesAnalyticsContext1.sessionId;
  }
  analyticsLocations = navigation(tmp3[11])().analyticsLocations;
  items = [enabled, SHOP_HOME, collectionSkuId, sessionId, analyticsLocations];
  const effect = react.useEffect(() => {
    let obj2;
    const tmp = enabled;
    if (tmp) {
      const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_PROMO_NOTICE, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: obj2 };
      const trackImpression = useTrackImpression.trackImpression;
      useTrackImpression;
      obj2 = { surface: COLLECTION_INDEX, sku_id: collectionSkuId, shop_session_id: sessionId, location_stack: analyticsLocations };
      trackImpression(obj, false, true);
    }
  }, items);
  const items1 = [navigation, collectionSkuId, collectiblesAnalyticsContext];
  [][0] = tmp8;
  const callback = react.useCallback(() => {
    const obj = { categorySkuId: collectionSkuId, analyticsContext: collectiblesAnalyticsContext };
    navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
  }, items1);
  let tmp16 = null;
  if (enabled) {
    const obj5 = { style: tmp.nagbar, children: items2 };
    items2 = [closure_9(NoticeGradient, {}), , ];
    const obj6 = { style: tmp.nagbarContent, accessibilityRole: "button", accessibilityHint: intl.string(collectionSkuId(collectiblesAnalyticsContext[20]).t.F8ma9x), onPress: callback, children: items3 };
    const PressableOpacity = tmp2(tmp3[19]).PressableOpacity;
    intl = tmp2(tmp3[20]).intl;
    const obj7 = { size: "xs", color: navigation(collectiblesAnalyticsContext[8]).colors.ICON_OVERLAY_LIGHT };
    const TagIcon = tmp2(tmp3[21]).TagIcon;
    items3 = [closure_9(TagIcon, obj7), ];
    const obj8 = { variant: "body-sm/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.nagbarText, children: intl2.string(collectionSkuId(collectiblesAnalyticsContext[20]).t.htSz0L) };
    const Text = tmp2(tmp3[22]).Text;
    intl2 = tmp2(tmp3[20]).intl;
    items3[1] = closure_9(Text, obj8);
    items2[1] = closure_10(PressableOpacity, obj6);
    const obj9 = { variant: "icon-only", size: "sm", icon: closure_9(XSmallIcon, obj10), accessibilityLabel: intl3.string(collectionSkuId(collectiblesAnalyticsContext[20]).t.WAI6xu), onPress: tmp15 };
    const IconButton = tmp2(tmp3[23]).IconButton;
    obj10 = { size: "sm", color: navigation(collectiblesAnalyticsContext[8]).colors.ICON_OVERLAY_LIGHT };
    XSmallIcon = tmp2(tmp3[24]).XSmallIcon;
    intl3 = tmp2(tmp3[20]).intl;
    items2[2] = closure_9(IconButton, obj9);
    tmp16 = closure_10(closure_6, obj5);
  }
  return tmp16;
};
export const TwelveDaysIndexNotice = (collectionSkuId) => {
  let COLLECTION_INDEX;
  let TagIcon;
  let enabled;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj5;
  collectionSkuId = collectionSkuId.collectionSkuId;
  let tmp = closure_12();
  let obj = COLLECTION_INDEX(enabled[17]);
  enabled = obj.useShopTwelveDaysPromoConfig("TwelveDaysIndexNotice").enabled;
  COLLECTION_INDEX = constants.COLLECTION_INDEX;
  let analyticsLocations;
  let obj2 = COLLECTION_INDEX(enabled[10]);
  const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  analyticsLocations = collectionSkuId(tmp3[11])().analyticsLocations;
  items = [enabled, COLLECTION_INDEX, collectionSkuId, sessionId, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    let obj2;
    const tmp = enabled;
    if (tmp) {
      const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_PROMO_NOTICE, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: obj2 };
      const trackImpression = useTrackImpression.trackImpression;
      useTrackImpression;
      obj2 = { surface: COLLECTION_INDEX, sku_id: collectionSkuId, shop_session_id: sessionId, location_stack: analyticsLocations };
      trackImpression(obj, false, true);
    }
  }, items);
  let tmp8 = null;
  const tmp6 = collectionSkuId;
  if (enabled) {
    const obj3 = { style: tmp.indexNotice, children: items1 };
    items1 = [closure_9(NoticeGradient, {}), , ];
    const obj4 = { style: tmp.indexNoticeIcon, children: closure_9(TagIcon, obj5) };
    obj5 = { size: "xs", color: tmp6(enabled[8]).colors.ICON_OVERLAY_LIGHT };
    TagIcon = tmp2(tmp3[21]).TagIcon;
    items1[1] = closure_9(closure_6, obj4);
    const obj6 = { style: tmp.indexNoticeCopy, children: items2 };
    const obj7 = { variant: "body-sm/semibold", color: "text-overlay-light", children: intl.string(COLLECTION_INDEX(enabled[20]).t.htSz0L) };
    const Text = tmp2(tmp3[22]).Text;
    intl = tmp2(tmp3[20]).intl;
    items2 = [closure_9(Text, obj7), ];
    const obj8 = { variant: "body-sm/normal", color: "text-overlay-light", children: intl2.string(COLLECTION_INDEX(enabled[20]).t.acMr0Q) };
    const Text2 = tmp2(tmp3[22]).Text;
    intl2 = tmp2(tmp3[20]).intl;
    items2[1] = closure_9(Text2, obj8);
    items1[2] = closure_10(closure_6, obj6);
    tmp8 = closure_10(closure_6, obj3);
  }
  return tmp8;
};
