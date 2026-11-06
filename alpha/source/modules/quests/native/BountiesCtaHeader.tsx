// Module ID: 17254
// Function ID: 17255
// Name: BountiesCtaHeader
// Dependencies: [109, 19, 17, 5171, 9779, 6861, 21, 575, 5794, 5170, 504, 8965, 17233, 5788, 1113, 5781, 17241, 17255, 6868, 7961, 6864, 7970, 17180, 17182, 1187, 17256, 17257, 17258, 17259, 5229, 16736, 14901, 2]

// Module 17254 (BountiesCtaHeader)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import ButtonConstants from "ButtonConstants" /* 5794 */;
import QuestTypes from "QuestTypes" /* 6864 */;
import AdCreativeType from "AdCreativeType" /* 6868 */;
import AnalyticsActions from "AnalyticsActions" /* 7961 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7970 */;
import common_Video from "common/Video" /* 8965 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 17180 */;
import BountiesModalTypes from "BountiesModalTypes" /* 17182 */;
import _modDef17233 from "module_17233" /* 17233 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 17241 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 17256 */;
import _modDef17257 from "module_17257" /* 17257 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import AdContentSeenStore from "AdContentSeenStore" /* 9779 */;
import QuestConstants from "QuestConstants" /* 6861 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function StarfieldBackground() {
  let obj3;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: obj3, style: metroRequire.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  obj3 = { uri: _modDef17233 };
  const VideoComponent = common_Video.VideoComponent;
  return authStore2(VideoComponent, obj2);
}
function StartEarningOrbsButton(arg0) {
  let intl;
  let onPress;
  let variant;
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: intl.string(intl4.t["1kkbKw"]), onPress };
  const Button = components_Button_Button.Button;
  intl = intl4.intl;
  return authStore2(Button, obj);
}
function BountiesCtaDescription(inlineLearnMore) {
  let intl;
  let items;
  let items1;
  let tmp7Result;
  let flag = inlineLearnMore.inlineLearnMore;
  if (flag === undefined) {
    flag = false;
  }
  let str = "text-subtle";
  const tmp = closure_18();
  const AZGGo1 = intl4.t.AZGGo1;
  if (flag) {
    str = "text-default";
  }
  const obj = { variant: "body-sm/medium", color: str, children: intl.string(AZGGo1) };
  const Text = tmp2(5781).Text;
  intl = tmp2(1113).intl;
  const tmp5 = authStore2(Text, obj);
  const intl2 = tmp2(1113).intl;
  const format = intl2.format;
  const obj2 = { onClick: openBountiesNuxPromoSheetDefault };
  const fjSvsC = tmp2(1113).t.fjSvsC;
  const formatResult = format(fjSvsC, obj2);
  const tmp4 = authStore2;
  if (flag) {
    const obj3 = { variant: "body-sm/medium", children: items };
    items = [tmp5, " ", formatResult];
    tmp7Result = tmp7(tmp2(5781).Text, obj3);
  } else {
    const obj4 = { style: tmp.description, children: items1 };
    items1 = [tmp5, ];
    const obj5 = { variant: "body-sm/medium", children: formatResult };
    items1[1] = tmp4(Text_Text.Text, obj5);
    tmp7Result = tmp7(metroImportDefault, obj4);
  }
  return tmp7Result;
}
function BountiesEmptyCard(containerRef) {
  let intl;
  let intl3;
  let items;
  let items1;
  containerRef = containerRef.containerRef;
  const tmp = closure_18();
  const obj = { ref: containerRef, style: tmp.emptyCard, children: items };
  items = [authStore2(StarfieldBackground, {}), , , ];
  const obj2 = { variant: "body-md/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items[1] = authStore2(Heading, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-default", children: items1 };
  const Text = Text_Text.Text;
  const intl2 = intl4.intl;
  items1 = [intl2.string(intl4.t.q4wlOE), " ", ];
  const obj4 = { variant: "body-sm/medium", color: "text-default", style: tmp.emptyLearnMore, accessible: true, accessibilityRole: "link", onPress: openBountiesNuxPromoSheetDefault, children: intl3.string(intl4.t.iiTtpJ) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items1[2] = authStore2(Text2, obj4);
  items[2] = map1(Text, obj3);
  const obj5 = { pointerEvents: "none", style: tmp.emptyCardBorder };
  items[3] = authStore2(metroImportDefault, obj5);
  return map1(metroImportDefault, obj);
}
function BountiesCtaHeaderInner(bounties) {
  let footer;
  let items10;
  let items11;
  let items12;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj13;
  let obj35;
  let obj8;
  let replaceHeaderMediaWith;
  let shopCarouselButtonVariant;
  let tmp8Result;
  bounties = bounties.bounties;
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant } = bounties);
  const containerRef = bounties.containerRef;
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_18();
  let tmp8Result2 = null != footer;
  let obj = bounties(17255);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj2 = bounties(504);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  let stateFromStores = obj2.useStateFromStores(items, () => bounties.some((id) => !closure_1_9.hasSeen(bounties(closure_1_2[18]).AdCreativeType.BOUNTY, id.id)), items1);
  const items2 = [bounties];
  const callback = react.useCallback(() => {
    const first = bounties[0];
    const obj = AnalyticsActions;
    const obj2 = { adContentId: unpackModuleId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj2);
    const obj3 = BountiesModalActionCreatorsDefault;
    const obj4 = { bountyId: first.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
    obj3.showModal(obj4);
  }, items2);
  let obj3 = { ref: containerRef, style: tmp.container, children: items11 };
  const items3 = [tmp.bannerClip, ];
  let tmp10Result = !tmp8Result2;
  let headerRoundedBottom = tmp10Result;
  if (!tmp8Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  let obj4 = { style: items3, children: tmp8Result };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp10Result;
    if (!tmp8Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: items4, children: items5 };
    items4[1] = headerRoundedBottom3;
    items5 = [closure_12(StarfieldBackground, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: closure_13(closure_7, obj8) };
    obj8 = { style: tmp.headerHeadingGroup, children: items6 };
    if (stateFromStores) {
      const obj9 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
      ({ newPillInline: obj11.containerStyle, newPillText: obj11.textStyle } = tmp);
      stateFromStores = tmp10(tmp3(1187).NewTag, obj9);
    }
    items6 = [stateFromStores, ];
    const obj10 = { style: tmp.headerHeadingContent, children: closure_12(BountiesCtaDescription, { inlineLearnMore: true }) };
    items6[1] = closure_12(closure_7, obj10);
    items5[1] = closure_12(closure_7, obj7);
    items5[2] = replaceHeaderMediaWith;
    if (!tmp8Result2) {
      const obj12 = { style: tmp.headerReplaceMediaCta, children: closure_12(StartEarningOrbsButton, obj13) };
      obj13 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp10Result = tmp10(tmp9, obj12);
    }
    items5[3] = tmp10Result;
    tmp8Result = tmp8(tmp9, obj6);
  } else {
    const obj14 = { uri: _modDef17257, style: items7, children: items8 };
    items7 = [tmp.header, tmp8Result2 && tmp.headerWithFooter, ];
    let headerRoundedBottom2 = tmp10Result;
    const tmp24 = BountiesBannerBackgroundDefault;
    if (!tmp8Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items7[2] = headerRoundedBottom2;
    let tmp10Result3 = stateFromStores;
    if (tmp10Result3) {
      const obj15 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp10Result3 = tmp10(tmp3(1187).NewTag, obj15);
    }
    items8 = [tmp10Result3, ];
    const items9 = [tmp.headerTextBox, ];
    const obj16 = { style: items9, children: items10 };
    const tmp13 = tmp8Result2 && tmp.headerTextBoxWithFooter;
    items9[1] = tmp13;
    items10 = [closure_12(BountiesCtaDescription, {}), ];
    let tmp10Result4 = tmp10Result;
    if (!tmp8Result2) {
      const obj17 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp10Result4 = tmp10(StartEarningOrbsButton, obj17);
    }
    items10[1] = tmp10Result4;
    items8[1] = closure_13(closure_7, obj16);
    tmp8Result = tmp8(tmp24, obj14);
  }
  items11 = [closure_12(closure_7, obj4), ];
  if (tmp8Result2) {
    const obj18 = { style: tmp.footerClip, children: items12 };
    items12 = [closure_12(StarfieldBackground, {}), footer, ];
    const obj34 = { style: tmp.footerCta, children: closure_12(StartEarningOrbsButton, obj35) };
    obj35 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
    items12[2] = closure_12(closure_7, obj34);
    tmp8Result2 = tmp8(tmp9, obj18);
  }
  items11[1] = tmp8Result2;
  return closure_13(closure_7, obj3);
}
let closure_3 = ["bounties", "isEmptyOrCompleted"];
({ StyleSheet: metroRequire, View: metroImportDefault } = react_native);
({ BountyCarouselEmptyStateReason: c10, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: unpackModuleId } = QuestConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const PX_202 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
let closure_18 = createStyles.createStyles(() => {
  let obj11;
  let obj4;
  let obj7;
  let rect;
  const obj = { container: { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" }, emptyCard: { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, emptyCardBorder: obj4, emptyLearnMore: { textDecorationLine: "underline" }, bannerClip: { overflow: "hidden" }, footerClip: { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl }, header: { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, headerWithFooter: obj7, headerReplaceMedia: { width: "100%", overflow: "hidden" }, headerTitleSection: { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 }, headerHeadingGroup: { gap: nativeDefault.space.PX_24 }, headerHeadingContent: { gap: nativeDefault.space.PX_4 }, headerReplaceMediaCta: obj11, headerRoundedBottom: { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl }, newPill: rect, newPillInline: { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 }, newPillText: { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT }, headerTextBox: { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 }, headerTextBoxWithFooter: { paddingBottom: nativeDefault.space.PX_12 }, description: { marginBottom: 16 }, footerCta: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 } };
  ({ width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" });
  obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.lg };
  ({ marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" });
  const merged = Object.assign(metroRequire.absoluteFillObject);
  ({ overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl });
  obj7 = { minHeight };
  ({ width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 });
  ({ gap: nativeDefault.space.PX_24 });
  obj11 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_202 };
  ({ gap: nativeDefault.space.PX_4 });
  ({ borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl });
  rect = { position: "absolute", top: nativeDefault.space.PX_20, left: nativeDefault.space.PX_20, zIndex: 1, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  ({ alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 });
  ({ color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT });
  ({ paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 });
  ({ paddingBottom: nativeDefault.space.PX_12 });
  ({ paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 });
  return obj;
});
const memoResult = react.memo(function BountiesCtaHeader(bounties) {
  let closure_2;
  let tmp9Result;
  const tmp2 = bounties(17258)();
  const containerRef = tmp2.containerRef;
  bounties = bounties.bounties;
  const isEmptyOrCompleted = bounties.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  const isInView = tmp2.isInView;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  dependencyMap = _objectWithoutProperties(bounties, closure_3);
  let tmp4 = null;
  if (tmp3) {
    let COMPLETED;
    if (0 === bounties.length) {
      COMPLETED = constants.EMPTY;
    } else {
      COMPLETED = constants.COMPLETED;
    }
    tmp4 = COMPLETED;
  }
  let obj = containerRef(17259);
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(tmp4);
  const obj2 = { theme: containerRef(16736).ThemeTypes.DARK, children: tmp9Result };
  const ThemeContextProvider = containerRef(5229).ThemeContextProvider;
  if (tmp3) {
    const obj3 = { containerRef };
    tmp9Result = tmp9(BountiesEmptyCard, obj3);
  } else {
    const obj4 = {
      adContentId,
      adCreativeType: containerRef(6868).AdCreativeType.BOUNTY,
      questContent: containerRef(6864).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
      overrideVisibility: isInView,
      sourceQuestContent: containerRef(6864).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      children() {
          const obj = { bounties, containerRef };
          const merged = Object.assign(closure_2);
          return authStore2(BountiesCtaHeaderInner, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp7(14901).QuestContentImpressionTrackerNative;
    tmp9Result = tmp9(QuestContentImpressionTrackerNative, obj4);
  }
  return closure_12(ThemeContextProvider, obj2);
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;
