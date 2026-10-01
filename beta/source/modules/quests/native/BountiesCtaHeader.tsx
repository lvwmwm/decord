// Module ID: 14608
// Function ID: 14609
// Name: BountiesCtaHeader
// Dependencies: [19, 17, 4825, 14609, 5756, 21, 576, 5286, 4836, 504, 7755, 14588, 5281, 1115, 4832, 14597, 14610, 5763, 7131, 5759, 7141, 14539, 14541, 1177, 14611, 14612, 14613, 10749, 4540, 14591, 10753, 2]

// Module 14608 (BountiesCtaHeader)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import common_Video from "common/Video" /* 7755 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14539 */;
import BountiesModalTypes from "BountiesModalTypes" /* 14541 */;
import _modDef14588 from "module_14588" /* 14588 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 14597 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 14611 */;
import _modDef14612 from "module_14612" /* 14612 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import AdContentSeenStore from "AdContentSeenStore" /* 14609 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let unpackModuleId;
function StarfieldBackground() {
  let obj3;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: obj3, style: absoluteFillObject.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  obj3 = { uri: _modDef14588 };
  const VideoComponent = common_Video.VideoComponent;
  return authStore(VideoComponent, obj2);
}
function StartEarningOrbsButton(arg0) {
  let intl;
  let onPress;
  let variant;
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: intl.string(intl3.t["1kkbKw"]), onPress };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  return authStore(Button, obj);
}
function BountiesCtaDescription(arg0) {
  let AZGGo1;
  let inlineLearnMore;
  let intl;
  let isEmptyOrCompleted;
  let items;
  let items1;
  let tmp5;
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  const tmp = closure_16();
  const t = intl3.t;
  if (isEmptyOrCompleted) {
    AZGGo1 = t.q4wlOE;
    tmp5 = tmp2;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = tmp2;
  }
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  const obj = { variant: "text-sm/medium", color: str, children: intl.string(AZGGo1) };
  const Text = tmp5(4832).Text;
  intl = tmp5(1115).intl;
  const tmp7 = authStore(Text, obj);
  const intl2 = tmp5(1115).intl;
  const format = intl2.format;
  const obj2 = { onClick: openBountiesNuxPromoSheetDefault };
  const fjSvsC = tmp5(1115).t.fjSvsC;
  const formatResult = format(fjSvsC, obj2);
  const tmp6 = authStore;
  if (!isEmptyOrCompleted) {
    let tmp11;
    if (!inlineLearnMore) {
      const obj3 = { style: tmp.description, children: items };
      items = [tmp7, ];
      const obj4 = { variant: "text-sm/medium", children: formatResult };
      items[1] = tmp6(tmp5(4832).Text, obj4);
      tmp11 = unpackModuleId(hasOwnProperty, obj3);
    }
    return tmp11;
  }
  const obj5 = { variant: "text-sm/medium", children: items1 };
  items1 = [tmp7, " ", formatResult];
  tmp11 = unpackModuleId(tmp5(4832).Text, obj5);
}
function BountiesCtaHeaderInner(bounties) {
  let containerRef;
  let footer;
  let items10;
  let items11;
  let items12;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  let obj14;
  let obj39;
  let obj8;
  let replaceHeaderMediaWith;
  let shopCarouselButtonVariant;
  let tmp9Result;
  bounties = bounties.bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant, containerRef } = bounties);
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_16();
  let tmp9Result2 = null != footer;
  let tmp11Result6 = !flag;
  let obj = bounties(14610);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj2 = bounties(504);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  let stateFromStores = obj2.useStateFromStores(items, () => bounties.some((id) => !closure_1_7.hasSeen(bounties(closure_1_2[17]).AdCreativeType.BOUNTY, id.id)), items1);
  const items2 = [bounties];
  const callback = react.useCallback(() => {
    const first = bounties[0];
    const obj = AnalyticsActions;
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj2);
    const obj3 = BountiesModalActionCreatorsDefault;
    const obj4 = { bountyId: first.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
    obj3.showModal(obj4);
  }, items2);
  let obj3 = { ref: containerRef, style: tmp.container, children: items11 };
  const items3 = [tmp.bannerClip, ];
  let headerRoundedBottom = tmp12;
  if (!tmp9Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  let obj4 = { style: items3, children: tmp9Result };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp12;
    if (!tmp9Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: items4, children: items5 };
    items4[1] = headerRoundedBottom3;
    items5 = [closure_10(StarfieldBackground, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: closure_11(closure_5, obj8) };
    obj8 = { style: tmp.headerHeadingGroup, children: items6 };
    if (stateFromStores) {
      const obj9 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
      ({ newPillInline: obj12.containerStyle, newPillText: obj12.textStyle } = tmp);
      stateFromStores = tmp11(tmp4(1177).NewTag, obj9);
    }
    items6 = [stateFromStores, ];
    const obj10 = { style: tmp.headerHeadingContent, children: closure_10(BountiesCtaDescription, obj11) };
    obj11 = { isEmptyOrCompleted: flag, inlineLearnMore: true };
    items6[1] = closure_10(closure_5, obj10);
    items5[1] = closure_10(closure_5, obj7);
    items5[2] = replaceHeaderMediaWith;
    let tmp11Result = tmp11Result6;
    if (!flag) {
      tmp11Result = tmp12;
    }
    if (tmp11Result) {
      const obj13 = { style: tmp.headerReplaceMediaCta, children: closure_10(StartEarningOrbsButton, obj14) };
      obj14 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result = tmp11(tmp10, obj13);
    }
    items5[3] = tmp11Result;
    tmp9Result = tmp9(tmp10, obj6);
  } else {
    const obj15 = { uri: _modDef14612, style: items7, children: items8 };
    items7 = [tmp.header, tmp9Result2 && tmp.headerWithFooter, ];
    let headerRoundedBottom2 = tmp12;
    const tmp26 = BountiesBannerBackgroundDefault;
    if (!tmp9Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items7[2] = headerRoundedBottom2;
    let tmp11Result4 = stateFromStores;
    if (tmp11Result4) {
      const obj16 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp11Result4 = tmp11(tmp4(1177).NewTag, obj16);
    }
    items8 = [tmp11Result4, ];
    const items9 = [tmp.headerTextBox, ];
    const obj17 = { style: items9, children: items10 };
    const tmp14 = tmp9Result2 && tmp.headerTextBoxWithFooter;
    items9[1] = tmp14;
    const obj18 = { isEmptyOrCompleted: flag };
    items10 = [closure_10(BountiesCtaDescription, obj18), ];
    let tmp11Result5 = tmp11Result6;
    if (!flag) {
      tmp11Result5 = tmp12;
    }
    if (tmp11Result5) {
      const obj19 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result5 = tmp11(StartEarningOrbsButton, obj19);
    }
    items10[1] = tmp11Result5;
    items8[1] = closure_11(closure_5, obj17);
    tmp9Result = tmp9(tmp26, obj15);
  }
  items11 = [closure_10(closure_5, obj4), ];
  if (tmp9Result2) {
    const obj20 = { style: tmp.footerClip, children: items12 };
    items12 = [closure_10(StarfieldBackground, {}), footer, ];
    if (!flag) {
      const obj38 = { style: tmp.footerCta, children: closure_10(StartEarningOrbsButton, obj39) };
      obj39 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result6 = tmp11(tmp10, obj38);
    }
    items12[2] = tmp11Result6;
    tmp9Result2 = tmp9(tmp10, obj20);
  }
  items11[1] = tmp9Result2;
  return closure_11(closure_5, obj3);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ BountyCarouselEmptyStateReason: metroImportAll, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9 } = QuestConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const PX_202 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
let closure_16 = createStyles.createStyles(() => {
  let obj5;
  let obj9;
  let rect;
  const obj = { container: { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" }, bannerClip: { overflow: "hidden" }, footerClip: { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl }, header: { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, headerWithFooter: obj5, headerReplaceMedia: { width: "100%", overflow: "hidden" }, headerTitleSection: { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 }, headerHeadingGroup: { gap: nativeDefault.space.PX_24 }, headerHeadingContent: { gap: nativeDefault.space.PX_4 }, headerReplaceMediaCta: obj9, headerRoundedBottom: { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl }, newPill: rect, newPillInline: { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 }, newPillText: { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT }, headerTextBox: { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 }, headerTextBoxWithFooter: { paddingBottom: nativeDefault.space.PX_12 }, description: { marginBottom: 16 }, footerCta: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 } };
  ({ width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" });
  ({ overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl });
  obj5 = { minHeight };
  ({ width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 });
  ({ gap: nativeDefault.space.PX_24 });
  obj9 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_202 };
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
const memoResult = react.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  let containerRef;
  let tmp9Result;
  _require = isEmptyOrCompleted;
  const tmp2 = containerRef(14613)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  const isInView = tmp2.isInView;
  const bounties = isEmptyOrCompleted.bounties;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
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
  let obj = require("AnalyticsHooks");
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(tmp4);
  const obj2 = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: tmp9Result };
  const ThemeContextProvider = require("native").ThemeContextProvider;
  if (tmp3) {
    const obj3 = { containerRef };
    let merged = Object.assign(isEmptyOrCompleted);
    tmp9Result = tmp9(BountiesCtaHeaderInner, obj3);
  } else {
    const obj4 = {
      adContentId,
      adCreativeType: require("AdCreativeType").AdCreativeType.BOUNTY,
      questContent: require("QuestTypes").QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
      overrideVisibility: isInView,
      sourceQuestContent: require("QuestTypes").QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      children() {
          const obj = { containerRef };
          const merged = Object.assign(isEmptyOrCompleted);
          return authStore(BountiesCtaHeaderInner, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp7(10753).QuestContentImpressionTrackerNative;
    tmp9Result = tmp9(QuestContentImpressionTrackerNative, obj4);
  }
  return closure_10(ThemeContextProvider, obj2);
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;
