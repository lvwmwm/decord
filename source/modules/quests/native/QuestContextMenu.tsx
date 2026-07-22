// Module ID: 13934
// Function ID: 105893
// Name: renderDefaultButton
// Dependencies: []

// Module 13934 (renderDefaultButton)
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(callback(ref, closure_3));
  obj["icon"] = importDefault(dependencyMap[6]);
  obj["variant"] = "secondary";
  const intl = arg1(dependencyMap[7]).intl;
  obj["accessibilityLabel"] = intl.string(arg1(dependencyMap[7]).t.CAgr1w);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj["accessibilityHint"] = intl2.string(arg1(dependencyMap[7]).t.hd0b7t);
  return jsx(arg1(dependencyMap[5]).IconButton, obj);
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const LinkingTypes = arg1(dependencyMap[3]).LinkingTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const memoResult = importAllResult.memo((children) => {
  children = children.children;
  if (children === undefined) {
    children = renderDefaultButton;
  }
  const quest = children.quest;
  const arg1 = quest;
  let flag = children.showShareLink;
  if (flag === undefined) {
    flag = false;
  }
  let additionalItems = children.additionalItems;
  if (additionalItems === undefined) {
    additionalItems = [];
  }
  const importDefault = additionalItems;
  const sourceQuestContent = children.sourceQuestContent;
  const dependencyMap = sourceQuestContent;
  let closure_3;
  let closure_4;
  let importAllResult;
  let closure_6;
  let LinkingTypes;
  let jsx;
  let renderDefaultButton;
  let trackQuestContentClickedWithImpression;
  let questImpressionId;
  let externalCtaLabel;
  flag = undefined;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo;
  let memo1;
  let memo2;
  let shouldShowQuestPreviewOverrides;
  let memo3;
  let obj = arg1(dependencyMap[8]);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  closure_3 = handleComplete;
  const handleProgress = questPreviewActions.handleProgress;
  closure_4 = handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  importAllResult = handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  closure_6 = handleResetStatusClick;
  const handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  LinkingTypes = handleOverridePreviewClick;
  const handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  jsx = handleResetHasBeenSeenClick;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE), []);
  renderDefaultButton = stateFromStores;
  const obj2 = arg1(dependencyMap[9]);
  trackQuestContentClickedWithImpression = arg1(dependencyMap[11]).useTrackQuestContentClickedWithImpression();
  const obj3 = arg1(dependencyMap[11]);
  questImpressionId = arg1(dependencyMap[12]).useQuestImpressionId();
  const obj4 = arg1(dependencyMap[12]);
  externalCtaLabel = arg1(dependencyMap[13]).getExternalCtaLabel(quest);
  if (flag) {
    flag = arg1(dependencyMap[14]).isShareableQuest(quest.config);
    const obj6 = arg1(dependencyMap[14]);
  }
  const items1 = [quest, questImpressionId, sourceQuestContent];
  callback = importAllResult.useCallback(() => {
    let obj = quest(sourceQuestContent[15]);
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      const tmp4 = additionalItems(sourceQuestContent[16]);
      isIOSResult = tmp4(quest(sourceQuestContent[13]).getCtaLink(quest.config)).payload.type === handleOverridePreviewClick.INVITE;
      const obj2 = quest(sourceQuestContent[13]);
    }
    if (isIOSResult) {
      const result = quest(sourceQuestContent[17]).dismissOverlayScreens();
      const obj3 = quest(sourceQuestContent[17]);
    }
    obj = { content: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: questImpressionId, sourceQuestContent };
    quest(sourceQuestContent[18]).openGameLinkDirectly(quest, obj);
  }, items1);
  const items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = importAllResult.useCallback(() => {
    if (flag) {
      let obj = quest(sourceQuestContent[13]);
      obj = { content: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: questImpressionId, sourceQuestContent };
      obj.copyShareLink(quest.id, obj);
      const AccessibilityAnnouncer = quest(sourceQuestContent[20]).AccessibilityAnnouncer;
      const intl = quest(sourceQuestContent[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(quest(sourceQuestContent[7]).t.+5kSoW));
    }
  }, items2);
  const items3 = [quest, sourceQuestContent];
  callback2 = importAllResult.useCallback(() => {
    let obj = additionalItems(sourceQuestContent[21]);
    obj = { quest, isTargetedDisclosure: false };
    obj = { content: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
    obj.trackingCtx = obj;
    obj.showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = importAllResult.useCallback(() => quest(sourceQuestContent[22]).manuallyStartConsoleQuest(quest.id, true), items4);
  const items5 = [quest.id];
  callback4 = importAllResult.useCallback(() => quest(sourceQuestContent[22]).manualStopConsoleQuest(quest.id), items5);
  const items6 = [externalCtaLabel, callback, callback2, flag, callback1];
  memo = importAllResult.useMemo(() => {
    let obj = { label: externalCtaLabel, IconComponent: quest(sourceQuestContent[23]).LinkExternalSmallIcon, action: callback, accessibilityRole: "link" };
    const items = [obj, ];
    obj = {};
    const intl = quest(sourceQuestContent[7]).intl;
    obj.label = intl.string(quest(sourceQuestContent[7]).t.GcsZKJ);
    obj.action = callback2;
    obj.iconSource = additionalItems(sourceQuestContent[24]);
    items[1] = obj;
    if (flag) {
      obj = {};
      const intl2 = quest(sourceQuestContent[7]).intl;
      obj.label = intl2.string(quest(sourceQuestContent[7]).t.WqhZss);
      obj.IconComponent = quest(sourceQuestContent[25]).CopyIcon;
      obj.action = callback1;
      const items1 = [obj];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, 2);
    return items;
  }, items6);
  const items7 = [quest, callback3, callback4];
  memo1 = importAllResult.useMemo(() => {
    let obj = quest(sourceQuestContent[26]);
    if (obj.isConsoleQuest(quest)) {
      obj = { label: "Start Console Heartbeat", action: callback3 };
      const items = [obj, ];
      obj = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj;
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [memo1, handleComplete, handleResetDismissibilityClick, handleProgress, handleResetStatusClick, handleResetHasBeenSeenClick, quest.id];
  memo2 = importAllResult.useMemo(() => {
    let obj = {
      label: "Set Random Quest Progress",
      action() {
        return callback(0.9 * Math.random() + 0.03);
      }
    };
    const items = [obj, obj, obj, obj1, obj2, ...closure_20, obj3];
    obj = { label: "Complete Quest", action: handleComplete };
    obj = { label: "Reset Quest", action: handleResetStatusClick };
    return items;
  }, items8);
  const obj5 = arg1(dependencyMap[13]);
  shouldShowQuestPreviewOverrides = arg1(dependencyMap[8]).useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id, ];
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  items9[2] = id;
  memo3 = importAllResult.useMemo(() => {
    const obj = {
      label: "Show in Quest Bar",
      action() {
        return callback2(callback(closure_2[10]).QuestContent.QUEST_BAR_MOBILE);
      }
    };
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    let CheckmarkLargeIcon;
    if (id === quest.id) {
      CheckmarkLargeIcon = quest(sourceQuestContent[28]).CheckmarkLargeIcon;
    }
    obj.IconComponent = CheckmarkLargeIcon;
    return obj;
  }, items9);
  const items10 = [memo, memo2, quest.preview, shouldShowQuestPreviewOverrides, memo3, additionalItems];
  const items11 = [quest.id, trackQuestContentClickedWithImpression, questImpressionId, sourceQuestContent];
  const memo4 = importAllResult.useMemo(() => {
    if (null != additionalItems) {
      const items = [memo, additionalItems];
      let items1 = items;
    } else {
      items1 = [memo];
    }
    if (shouldShowQuestPreviewOverrides) {
      const items2 = [memo3];
      items1.push(items2);
    }
    let tmp6 = items1;
    if (quest.preview) {
      const items3 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      items3[arraySpreadResult] = memo2;
      const sum = arraySpreadResult + 1;
      tmp6 = items3;
    }
    return tmp6;
  }, items10);
  const callback5 = importAllResult.useCallback(() => {
    let obj = quest(sourceQuestContent[29]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(sourceQuestContent[29]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      obj = { type: quest(sourceQuestContent[31]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(sourceQuestContent[32]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(sourceQuestContent[19]).QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: questImpressionId };
      quest(sourceQuestContent[30]).captureAdUserAction(obj);
      const obj3 = quest(sourceQuestContent[30]);
    } else {
      obj = { questId: quest.id, questContent: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, questContentCTA: quest(sourceQuestContent[19]).QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj);
    }
  }, items11);
  obj = { items: memo4, onOpen: callback5, triggerOnTap: true, children };
  return jsx(arg1(dependencyMap[33]).ContextMenu, obj);
});
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default memoResult;
