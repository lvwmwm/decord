// Module ID: 17616
// Function ID: 17617
// Name: BountiesCtaHeader
// Dependencies: [109, 19, 17, 5307, 10513, 5338, 21, 575, 5942, 5306, 504, 9730, 17595, 5936, 1113, 5929, 17603, 17617, 5345, 8825, 5341, 8834, 17542, 17544, 1187, 17618, 17619, 17620, 17621, 5377, 17101, 15264, 2]

// Module 17616 (BountiesCtaHeader)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import QuestTypes from "QuestTypes" /* 5341 */;
import AdCreativeType from "AdCreativeType" /* 5345 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import AnalyticsActions from "AnalyticsActions" /* 8825 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8834 */;
import common_Video from "common/Video" /* 9730 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 17542 */;
import BountiesModalTypes from "BountiesModalTypes" /* 17544 */;
import _modDef17595 from "module_17595" /* 17595 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 17603 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 17618 */;
import _modDef17619 from "module_17619" /* 17619 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import AdContentSeenStore from "AdContentSeenStore" /* 10513 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
  obj3 = { uri: _modDef17595 };
  const VideoComponent = common_Video.VideoComponent;
  return authStore2(VideoComponent, obj2);
}
function StartEarningOrbsButton(arg0) {
  let intl;
  let onPress;
  let variant;
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: intl.string(intl3.t["1kkbKw"]), onPress };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  return authStore2(Button, obj);
}
function BountiesCtaDescription(embedded) {
  let Text;
  let intl;
  let obj2;
  let obj3;
  let flag = embedded.embedded;
  if (flag === undefined) {
    flag = false;
  }
  let description = !flag;
  const tmp2 = metroImportDefault;
  if (!flag) {
    description = closure_18().description;
  }
  let obj = { style: description, children: authStore2(Text, obj2) };
  let str = "text-subtle";
  Text = Text_Text.Text;
  if (flag) {
    str = "text-default";
  }
  obj2 = { variant: "body-sm/medium", color: str, children: intl.format(intl3.t["FlR14/"], obj3) };
  intl = tmp3(1113).intl;
  obj3 = {
    learnMoreHook(children, arg1) {
      const obj = { variant: "body-sm/medium", color: "text-link", accessible: true, accessibilityRole: "link", onPress: openBountiesNuxPromoSheetDefault, children };
      const Text = require("Text/Text").Text;
      return closure_1_12(Text, obj, arg1);
    }
  };
  return authStore2(tmp2, obj);
}
function BountiesEmptyCard(containerRef) {
  let emptyLearnMore;
  let intl;
  let intl2;
  let items;
  let obj4;
  containerRef = containerRef.containerRef;
  const tmp = closure_18();
  _require = tmp;
  let obj = { ref: containerRef, style: tmp.emptyCard, children: items };
  items = [closure_12(StarfieldBackground, {}), , , ];
  const obj2 = { variant: "body-md/semibold", color: "text-strong", children: intl.string(require("intl").t["4nwvXG"]) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items[1] = closure_12(Heading, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-default", children: intl2.format(require("intl").t.PfRDXa, obj4) };
  let Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  obj4 = {
    learnMoreHook(children, arg1) {
      const obj = { variant: "body-sm/medium", color: "text-default", style: emptyLearnMore.emptyLearnMore, accessible: true, accessibilityRole: "link", onPress: openBountiesNuxPromoSheetDefault, children };
      const Text = Text_Text.Text;
      return authStore2(Text, obj, arg1);
    }
  };
  items[2] = closure_12(Text, obj3);
  const obj5 = { pointerEvents: "none", style: tmp.emptyCardBorder };
  items[3] = closure_12(closure_7, obj5);
  return closure_13(closure_7, obj);
}
function BountiesCtaHeaderInner(bounties) {
  let footer;
  let intl;
  let intl2;
  let items11;
  let items12;
  let items13;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let obj39;
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
  let obj = bounties(17617);
  const bountiesEntryPointButtonVariant = obj.getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj2 = bounties(504);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  const stateFromStores = obj2.useStateFromStores(items, () => bounties.some((id) => !closure_1_9.hasSeen(bounties(closure_1_2[18]).AdCreativeType.BOUNTY, id.id)), items1);
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
  let obj3 = { ref: containerRef, style: tmp.container, children: items12 };
  const items3 = [tmp.bannerClip, ];
  let tmp10Result4 = !tmp8Result2;
  let headerRoundedBottom = tmp10Result4;
  if (!tmp8Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  let obj4 = { style: items3, children: tmp8Result };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp10Result4;
    if (!tmp8Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: items4, children: items5 };
    items4[1] = headerRoundedBottom3;
    items5 = [closure_12(StarfieldBackground, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: closure_13(closure_7, obj8) };
    let tmp10Result = stateFromStores;
    obj8 = { style: tmp.headerHeadingGroup, children: items6 };
    if (tmp10Result) {
      const obj9 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
      ({ newPillInline: obj12.containerStyle, newPillText: obj12.textStyle } = tmp);
      tmp10Result = tmp10(tmp3(1187).NewTag, obj9);
    }
    items6 = [tmp10Result, ];
    const obj10 = { style: tmp.headerHeadingContent, children: items7 };
    const obj11 = { variant: "body-lg/semibold", color: "text-strong", children: intl2.string(bounties(1113).t["4nwvXG"]) };
    const Heading2 = tmp3(5929).Heading;
    intl2 = tmp3(1113).intl;
    items7 = [closure_12(Heading2, obj11), closure_12(BountiesCtaDescription, { embedded: true })];
    items6[1] = closure_13(closure_7, obj10);
    items5[1] = closure_12(closure_7, obj7);
    items5[2] = replaceHeaderMediaWith;
    if (!tmp8Result2) {
      const obj13 = { style: tmp.headerReplaceMediaCta, children: closure_12(StartEarningOrbsButton, obj14) };
      obj14 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp10Result4 = tmp10(tmp9, obj13);
    }
    items5[3] = tmp10Result4;
    tmp8Result = tmp8(tmp9, obj6);
  } else {
    const obj15 = { uri: _modDef17619, style: items8, children: items9 };
    items8 = [tmp.header, tmp8Result2 && tmp.headerWithFooter, ];
    let headerRoundedBottom2 = tmp10Result4;
    const tmp25 = BountiesBannerBackgroundDefault;
    if (!tmp8Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items8[2] = headerRoundedBottom2;
    let tmp10Result5 = stateFromStores;
    if (tmp10Result5) {
      const obj16 = { variant: "body-xs/semibold", containerStyle: null, textStyle: null };
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp10Result5 = tmp10(tmp3(1187).NewTag, obj16);
    }
    items9 = [tmp10Result5, ];
    const items10 = [tmp.headerTextBox, ];
    const obj17 = { style: items10, children: items11 };
    const tmp13 = tmp8Result2 && tmp.headerTextBoxWithFooter;
    items10[1] = tmp13;
    const obj18 = { variant: "body-lg/semibold", color: "text-strong", children: intl.string(bounties(1113).t["4nwvXG"]) };
    const Heading = tmp3(5929).Heading;
    intl = tmp3(1113).intl;
    items11 = [closure_12(Heading, obj18), closure_12(BountiesCtaDescription, {}), ];
    let tmp10Result6 = tmp10Result4;
    if (!tmp8Result2) {
      const obj19 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp10Result6 = tmp10(StartEarningOrbsButton, obj19);
    }
    items11[2] = tmp10Result6;
    items9[1] = closure_13(closure_7, obj17);
    tmp8Result = tmp8(tmp25, obj15);
  }
  items12 = [closure_12(closure_7, obj4), ];
  if (tmp8Result2) {
    const obj20 = { style: tmp.footerClip, children: items13 };
    items13 = [closure_12(StarfieldBackground, {}), footer, ];
    const obj38 = { style: tmp.footerCta, children: closure_12(StartEarningOrbsButton, obj39) };
    obj39 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
    items13[2] = closure_12(closure_7, obj38);
    tmp8Result2 = tmp8(tmp9, obj20);
  }
  items12[1] = tmp8Result2;
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
  const tmp2 = bounties(17620)();
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
  let obj = containerRef(17621);
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(tmp4);
  const obj2 = { theme: containerRef(17101).ThemeTypes.DARK, children: tmp9Result };
  const ThemeContextProvider = containerRef(5377).ThemeContextProvider;
  if (tmp3) {
    const obj3 = { containerRef };
    tmp9Result = tmp9(BountiesEmptyCard, obj3);
  } else {
    const obj4 = {
      adContentId,
      adCreativeType: containerRef(5345).AdCreativeType.BOUNTY,
      questContent: containerRef(5341).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      questContentPosition: 0,
      overrideVisibility: isInView,
      sourceQuestContent: containerRef(5341).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
      children() {
          const obj = { bounties, containerRef };
          const merged = Object.assign(closure_2);
          return authStore2(BountiesCtaHeaderInner, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp7(15264).QuestContentImpressionTrackerNative;
    tmp9Result = tmp9(QuestContentImpressionTrackerNative, obj4);
  }
  return closure_12(ThemeContextProvider, obj2);
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;
