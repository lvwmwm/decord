// Module ID: 13983
// Function ID: 107041
// Name: BountiesCtaDescription
// Dependencies: [31, 27, 4122, 13984, 4976, 33, 4130, 689, 1212, 4126, 13963, 5459, 566, 6970, 10843, 4979, 6959, 6969, 13905, 13985, 13986, 1273, 4543, 13979, 10925, 3842, 13958, 10929, 2]

// Module 13983 (BountiesCtaDescription)
import importAllResult from "result";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function BountiesCtaDescription(isEmptyOrCompleted) {
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  const t = require(1212) /* getSystemLocale */.t;
  let obj = { variant: "text-sm/medium", color: "text-subtle" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(isEmptyOrCompleted ? t.q4wlOE : t.AZGGo1);
  const tmp3 = callback(require(4126) /* Text */.Text, obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { onClick: importDefault(13963) };
  const formatResult = intl2.format(require(1212) /* getSystemLocale */.t.fjSvsC, obj);
  if (isEmptyOrCompleted) {
    obj = { variant: "text-sm/medium" };
    const items = [tmp3, " ", formatResult];
    obj.children = items;
    let tmp5Result = tmp5(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
  } else {
    const obj1 = { style: tmp.description };
    const items1 = [tmp3, ];
    const obj2 = { variant: "text-sm/medium", children: formatResult };
    items1[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj2);
    obj1.children = items1;
    tmp5Result = tmp5(closure_4, obj1);
  }
  return tmp5Result;
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  const tmp = callback2();
  let obj = bounties(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  let obj1 = bounties(566);
  const items1 = [closure_6];
  const items2 = [bounties];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => bounties.some((id) => !outer2_6.hasSeen(bounties(outer2_2[13]).AdCreativeType.BOUNTY, id.id)), items2);
  let obj2 = bounties(10843);
  const videoModalPlacementEnabled = obj2.useVideoModalPlacementEnabled("BountiesCtaHeader");
  const QuestContent = bounties(4979).QuestContent;
  const tmp5 = videoModalPlacementEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp5;
  const items3 = [bounties, tmp5];
  obj = { ref: bounties.containerRef, style: tmp.container };
  const callback = importAllResult.useCallback(() => {
    let obj = bounties(outer1_2[16]);
    obj = { adContentId: outer1_8, adCreativeType: bounties(outer1_2[13]).AdCreativeType.BOUNTY, questContent: bounties(outer1_2[15]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: bounties(outer1_2[17]).QuestContentCTA.START_BOUNTY, sourceQuestContent: bounties(outer1_2[15]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent: _undefined };
    _undefined(outer1_2[18]).showModal(obj);
  }, items3);
  obj = { uri: importDefault(13986) };
  const items4 = [, ];
  ({ header: arr5[0], headerRoundedBottom: arr5[1] } = tmp);
  obj.style = items4;
  let tmp11 = stateFromStores1;
  if (stateFromStores1) {
    obj1 = { variant: "text-xs/bold" };
    ({ newPill: obj6.containerStyle, newPillText: obj6.textStyle } = tmp);
    tmp11 = callback(bounties(1273).NewTag, obj1);
  }
  const items5 = [tmp11, ];
  obj2 = { style: tmp.headerTextBox };
  const obj3 = { variant: "text-lg/semibold", color: "text-strong" };
  const intl = bounties(1212).intl;
  obj3.children = intl.string(bounties(1212).t.qetVDw);
  const items6 = [callback(bounties(4126).Text, obj3), , ];
  const obj4 = { isEmptyOrCompleted: flag };
  items6[1] = callback(BountiesCtaDescription, obj4);
  let tmp17 = !flag;
  if (tmp17) {
    const obj5 = { grow: true, size: "md", variant: "primary-overlay" };
    const intl2 = bounties(1212).intl;
    obj5.text = intl2.string(bounties(1212).t["1kkbKw"]);
    obj5.onPress = callback;
    tmp17 = callback(bounties(4543).Button, obj5);
  }
  items6[2] = tmp17;
  obj2.children = items6;
  items5[1] = closure_10(closure_4, obj2);
  obj.children = items5;
  const items7 = [closure_10(importDefault(13985), obj), false];
  obj.children = items7;
  return closure_10(closure_4, obj);
}
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
({ BountyCarouselEmptyStateReason: closure_7, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8 } = QuestsExperimentLocations);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { width: "100%", backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED, borderBottomLeftRadius: importDefault(689).radii.xxl, borderBottomRightRadius: importDefault(689).radii.xxl, overflow: "hidden" };
  obj.container = obj;
  obj = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH };
  obj.header = obj;
  obj.headerRoundedBottom = { borderBottomLeftRadius: importDefault(689).radii.xxl, borderBottomRightRadius: importDefault(689).radii.xxl };
  const obj1 = { borderBottomLeftRadius: importDefault(689).radii.xxl, borderBottomRightRadius: importDefault(689).radii.xxl };
  obj.newPill = { position: "absolute", top: importDefault(689).space.PX_12, left: importDefault(689).space.PX_12, zIndex: 1, backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(689).radii.round, paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4 };
  const obj2 = { position: "absolute", top: importDefault(689).space.PX_12, left: importDefault(689).space.PX_12, zIndex: 1, backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(689).radii.round, paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4 };
  obj.newPillText = { color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj3 = { color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = { paddingBottom: importDefault(689).space.PX_24, paddingHorizontal: importDefault(689).space.PX_20, gap: importDefault(689).space.PX_8 };
  obj.description = { marginBottom: 16 };
  const obj5 = { width: "100%", overflow: "hidden", borderBottomLeftRadius: importDefault(689).radii.xl, borderBottomRightRadius: importDefault(689).radii.xl };
  obj.bottomSection = obj5;
  const obj6 = { paddingBottom: 24, paddingHorizontal: 20, gap: importDefault(689).space.PX_12 };
  obj.bottomContent = obj6;
  const obj7 = { alignSelf: "stretch", height: 160, borderRadius: importDefault(689).radii.md, backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj.placeholderCards = obj7;
  return obj;
});
const memoResult = importAllResult.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  const _require = isEmptyOrCompleted;
  const tmp = containerRef(13979)();
  containerRef = tmp.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp2 = undefined !== isEmptyOrCompleted;
  if (tmp2) {
    tmp2 = isEmptyOrCompleted;
  }
  if (!tmp2) {
    let obj = _require(10925);
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: _require(13958).ThemeTypes.DARKER };
    if (tmp2) {
      obj = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj["containerRef"] = containerRef;
      let tmp10Result = tmp10(BountiesCtaHeaderInner, obj);
    } else {
      const obj1 = {
        adContentId: closure_8,
        adCreativeType: _require(6970).AdCreativeType.BOUNTY,
        questContent: _require(4979).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp.isInView,
        sourceQuestContent: _require(4979).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj["containerRef"] = containerRef;
              return outer1_9(outer1_13, obj);
            }
      };
      tmp10Result = tmp10(_require(10929).QuestContentImpressionTrackerNative, obj1);
    }
    obj.children = tmp10Result;
    return closure_9(_require(3842).ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;
