// Module ID: 14033
// Function ID: 107364
// Name: BountiesCtaDescription
// Dependencies: [31, 27, 4122, 14034, 4976, 33, 4130, 689, 1212, 4126, 14013, 566, 6969, 10868, 4979, 6958, 6968, 13956, 14035, 14036, 1273, 4543, 14029, 10952, 3842, 7529, 10956, 2]

// Module 14033 (BountiesCtaDescription)
import importAllResult from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_11;
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
  obj = { onClick: importDefault(14013) };
  const formatResult = intl2.format(require(1212) /* getSystemLocale */.t.fjSvsC, obj);
  if (isEmptyOrCompleted) {
    obj = { variant: "text-sm/medium" };
    const items = [tmp3, " ", formatResult];
    obj.children = items;
    let tmp5Result = tmp5(require(4126) /* Text */.Text, obj);
  } else {
    const obj1 = { style: tmp.description };
    const items1 = [tmp3, ];
    const obj2 = { variant: "text-sm/medium", children: formatResult };
    items1[1] = callback(require(4126) /* Text */.Text, obj2);
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
  const stateFromStores1 = obj1.useStateFromStores(items1, () => bounties.some((id) => !outer2_6.hasSeen(bounties(outer2_2[12]).AdCreativeType.BOUNTY, id.id)), items2);
  let obj2 = bounties(10868);
  const QuestContent = bounties(4979).QuestContent;
  const tmp4 = obj2.useBountiesExperience(constants2.QUEST_HOME_MOBILE).verticalScrollEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp4;
  const items3 = [bounties, tmp4];
  obj = { ref: bounties.containerRef, style: tmp.container };
  const callback = importAllResult.useCallback(() => {
    let obj = bounties(outer1_2[15]);
    obj = { adContentId: outer1_8, adCreativeType: bounties(outer1_2[12]).AdCreativeType.BOUNTY, questContent: bounties(outer1_2[14]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: bounties(outer1_2[16]).QuestContentCTA.START_BOUNTY, sourceQuestContent: bounties(outer1_2[14]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent: _undefined };
    _undefined(outer1_2[17]).showModal(obj);
  }, items3);
  obj = { uri: importDefault(14036) };
  const items4 = [, ];
  ({ header: arr5[0], headerRoundedBottom: arr5[1] } = tmp);
  obj.style = items4;
  let tmp10 = stateFromStores1;
  if (stateFromStores1) {
    obj1 = { variant: "text-xs/bold" };
    ({ newPill: obj6.containerStyle, newPillText: obj6.textStyle } = tmp);
    tmp10 = callback(bounties(1273).NewTag, obj1);
  }
  const items5 = [tmp10, ];
  obj2 = { style: tmp.headerTextBox };
  const obj3 = { variant: "text-lg/semibold", color: "text-strong" };
  const intl = bounties(1212).intl;
  obj3.children = intl.string(bounties(1212).t.qetVDw);
  const items6 = [callback(bounties(4126).Text, obj3), , ];
  const obj4 = { isEmptyOrCompleted: flag };
  items6[1] = callback(BountiesCtaDescription, obj4);
  let tmp16 = !flag;
  if (tmp16) {
    const obj5 = { grow: true, size: "md", variant: "primary-overlay" };
    const intl2 = bounties(1212).intl;
    obj5.text = intl2.string(bounties(1212).t["1kkbKw"]);
    obj5.onPress = callback;
    tmp16 = callback(bounties(4543).Button, obj5);
  }
  items6[2] = tmp16;
  obj2.children = items6;
  items5[1] = closure_11(closure_4, obj2);
  obj.children = items5;
  const items7 = [closure_11(importDefault(14035), obj), false];
  obj.children = items7;
  return closure_11(closure_4, obj);
}
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
({ BountyCarouselEmptyStateReason: closure_7, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: closure_9 } = QuestsExperimentLocations);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles(() => {
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
  const tmp = containerRef(14029)();
  containerRef = tmp.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp2 = undefined !== isEmptyOrCompleted;
  if (tmp2) {
    tmp2 = isEmptyOrCompleted;
  }
  if (!tmp2) {
    let obj = _require(10952);
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: _require(7529).ThemeTypes.DARKER };
    if (tmp2) {
      obj = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj["containerRef"] = containerRef;
      let tmp10Result = tmp10(BountiesCtaHeaderInner, obj);
    } else {
      const obj1 = {
        adContentId: closure_8,
        adCreativeType: _require(6969).AdCreativeType.BOUNTY,
        questContent: _require(4979).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp.isInView,
        sourceQuestContent: _require(4979).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj["containerRef"] = containerRef;
              return outer1_10(outer1_14, obj);
            }
      };
      tmp10Result = tmp10(_require(10956).QuestContentImpressionTrackerNative, obj1);
    }
    obj.children = tmp10Result;
    return closure_10(_require(3842).ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;
