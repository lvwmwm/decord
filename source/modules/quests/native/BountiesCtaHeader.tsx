// Module ID: 13859
// Function ID: 104813
// Name: BountiesCtaDescription
// Dependencies: []

// Module 13859 (BountiesCtaDescription)
let StyleSheet;
function BountiesCtaDescription(isEmptyOrCompleted) {
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  const t = arg1(dependencyMap[8]).t;
  let obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(isEmptyOrCompleted ? t.q4wlOE : t.AZGGo1);
  const tmp3 = callback(arg1(dependencyMap[9]).Text, obj);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj = { onClick: importDefault(dependencyMap[10]) };
  const formatResult = intl2.format(arg1(dependencyMap[8]).t.fjSvsC, obj);
  if (isEmptyOrCompleted) {
    obj = { variant: "text-sm/medium" };
    const items = [tmp3, " ", formatResult];
    obj.children = items;
    let tmp5Result = tmp5(arg1(dependencyMap[11]).TextWithIOSLinkWorkaround, obj);
  } else {
    const obj1 = { style: tmp.description };
    const items1 = [tmp3, ];
    const obj2 = { variant: "text-sm/medium", children: formatResult };
    items1[1] = callback(arg1(dependencyMap[11]).TextWithIOSLinkWorkaround, obj2);
    obj1.children = items1;
    tmp5Result = tmp5(closure_4, obj1);
  }
  return tmp5Result;
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  const arg1 = bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  const tmp = callback2();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_6];
  const items2 = [bounties];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => bounties.some((id) => !closure_6.hasSeen(callback(closure_2[13]).AdCreativeType.BOUNTY, id.id)), items2);
  let obj2 = arg1(dependencyMap[14]);
  const videoModalPlacementEnabled = obj2.useVideoModalPlacementEnabled("BountiesCtaHeader");
  const QuestContent = arg1(dependencyMap[15]).QuestContent;
  const tmp5 = videoModalPlacementEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp5;
  const items3 = [bounties, tmp5];
  obj = { ref: bounties.containerRef, style: tmp.container };
  const callback = importAllResult.useCallback(() => {
    let obj = bounties(closure_2[16]);
    obj = { adContentId: closure_8, adCreativeType: bounties(closure_2[13]).AdCreativeType.BOUNTY, questContent: bounties(closure_2[15]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: bounties(closure_2[17]).QuestContentCTA.START_BOUNTY, sourceQuestContent: bounties(closure_2[15]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent: tmp5 };
    tmp5(closure_2[18]).showModal(obj);
  }, items3);
  obj = { uri: importDefault(dependencyMap[20]) };
  const items4 = [, ];
  ({ header: arr5[0], headerRoundedBottom: arr5[1] } = tmp);
  obj.style = items4;
  let tmp11 = stateFromStores1;
  if (stateFromStores1) {
    obj1 = { variant: "text-xs/bold" };
    ({ newPill: obj6.containerStyle, newPillText: obj6.textStyle } = tmp);
    tmp11 = callback(arg1(dependencyMap[21]).NewTag, obj1);
  }
  const items5 = [tmp11, ];
  obj2 = { style: tmp.headerTextBox };
  const obj3 = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj3.children = intl.string(arg1(dependencyMap[8]).t.qetVDw);
  const items6 = [callback(arg1(dependencyMap[9]).Text, obj3), , ];
  const obj4 = { isEmptyOrCompleted: flag };
  items6[1] = callback(BountiesCtaDescription, obj4);
  let tmp17 = !flag;
  if (tmp17) {
    const obj5 = {};
    const intl2 = arg1(dependencyMap[8]).intl;
    obj5.text = intl2.string(arg1(dependencyMap[8]).t.1kkbKw);
    obj5.onPress = callback;
    tmp17 = callback(arg1(dependencyMap[22]).Button, obj5);
  }
  items6[2] = tmp17;
  obj2.children = items6;
  items5[1] = closure_10(closure_4, obj2);
  obj.children = items5;
  const items7 = [closure_10(importDefault(dependencyMap[19]), obj), false];
  obj.children = items7;
  return closure_10(closure_4, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ BountyCarouselEmptyStateReason: closure_7, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles(() => {
  let obj = {};
  obj = { p: "center", y: 0, isArray: 8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.xxl, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.xxl, overflow: "hidden" };
  obj.container = obj;
  obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
  obj.header = obj;
  obj.headerRoundedBottom = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.xxl, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.xxl };
  const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.xxl, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.xxl };
  obj.newPill = { position: "absolute", top: importDefault(dependencyMap[7]).space.PX_12, left: importDefault(dependencyMap[7]).space.PX_12, zIndex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.round, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_4 };
  const obj2 = { position: "absolute", top: importDefault(dependencyMap[7]).space.PX_12, left: importDefault(dependencyMap[7]).space.PX_12, zIndex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.round, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_4 };
  obj.newPillText = { color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj3 = { color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = { paddingBottom: importDefault(dependencyMap[7]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_20, gap: importDefault(dependencyMap[7]).space.PX_8 };
  obj.description = { marginBottom: 16 };
  const obj5 = { "Bool(true)": null, "Bool(true)": null, borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.xl, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.xl };
  obj.bottomSection = obj5;
  const obj4 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_20, gap: importDefault(dependencyMap[7]).space.PX_8 };
  obj.bottomContent = { gap: importDefault(dependencyMap[7]).space.PX_12 };
  const obj7 = { <string:1400504324>: true, <string:2707095556>: true, borderRadius: importDefault(dependencyMap[7]).radii.md, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj.placeholderCards = obj7;
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  const arg1 = isEmptyOrCompleted;
  const tmp = importDefault(dependencyMap[23])();
  const containerRef = tmp.containerRef;
  const importDefault = containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp2 = undefined !== isEmptyOrCompleted;
  if (tmp2) {
    tmp2 = isEmptyOrCompleted;
  }
  if (!tmp2) {
    let obj = arg1(dependencyMap[24]);
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: arg1(dependencyMap[26]).ThemeTypes.DARKER };
    if (tmp2) {
      obj = {};
      const merged = Object.assign(isEmptyOrCompleted);
      obj["containerRef"] = containerRef;
      let tmp10Result = tmp10(BountiesCtaHeaderInner, obj);
    } else {
      const obj1 = {
        adContentId: closure_8,
        adCreativeType: arg1(dependencyMap[13]).AdCreativeType.BOUNTY,
        questContent: arg1(dependencyMap[15]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp.isInView,
        sourceQuestContent: arg1(dependencyMap[15]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["containerRef"] = containerRef;
              return callback(closure_13, obj);
            }
      };
      tmp10Result = tmp10(arg1(dependencyMap[27]).QuestContentImpressionTrackerNative, obj1);
    }
    obj.children = tmp10Result;
    return closure_9(arg1(dependencyMap[25]).ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;
