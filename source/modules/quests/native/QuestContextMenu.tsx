// Module ID: 14048
// Function ID: 108049
// Name: renderDefaultButton
// Dependencies: [29, 31, 6942, 653, 33, 7771, 8969, 1212, 10464, 566, 4979, 10925, 10468, 9468, 6963, 477, 4111, 10919, 10472, 6969, 3843, 14004, 9444, 7563, 14049, 4078, 6965, 5492, 4082, 9449, 9450, 9451, 6970, 9302, 2]

// Module 14048 (renderDefaultButton)
import apexExperiment from "apexExperiment";
import importAllResult from "AdUserActionType";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { LinkingTypes } from "ME";
import { jsx } from "ContextMenu";

const require = arg1;
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(callback(ref, closure_3));
  obj["icon"] = importDefault(8969);
  obj["variant"] = "secondary";
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["accessibilityLabel"] = intl.string(require(1212) /* getSystemLocale */.t.CAgr1w);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["accessibilityHint"] = intl2.string(require(1212) /* getSystemLocale */.t.hd0b7t);
  return jsx(require(7771) /* IconButton */.IconButton, { ref: ref.ref });
}
let closure_3 = ["ref"];
const memoResult = importAllResult.memo((children) => {
  children = children.children;
  if (children === undefined) {
    children = stateFromStores;
  }
  const quest = children.quest;
  let flag = children.showShareLink;
  if (flag === undefined) {
    flag = false;
  }
  let additionalItems = children.additionalItems;
  if (additionalItems === undefined) {
    additionalItems = [];
  }
  const sourceQuestContent = children.sourceQuestContent;
  let handleComplete;
  let handleProgress;
  let handleResetDismissibilityClick;
  let handleResetStatusClick;
  let handleOverridePreviewClick;
  let handleResetHasBeenSeenClick;
  stateFromStores = undefined;
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
  let obj = quest(sourceQuestContent[8]);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  handleComplete = questPreviewActions.handleComplete;
  handleProgress = questPreviewActions.handleProgress;
  handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let items = [handleResetStatusClick];
  stateFromStores = quest(sourceQuestContent[9]).useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj2 = quest(sourceQuestContent[9]);
  trackQuestContentClickedWithImpression = quest(sourceQuestContent[11]).useTrackQuestContentClickedWithImpression();
  let obj3 = quest(sourceQuestContent[11]);
  questImpressionId = quest(sourceQuestContent[12]).useQuestImpressionId();
  const obj4 = quest(sourceQuestContent[12]);
  externalCtaLabel = quest(sourceQuestContent[13]).getExternalCtaLabel(quest);
  if (flag) {
    flag = quest(sourceQuestContent[14]).isShareableQuest(quest.config);
    const obj6 = quest(sourceQuestContent[14]);
  }
  let items1 = [quest, questImpressionId, sourceQuestContent];
  callback = handleResetDismissibilityClick.useCallback(() => {
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
  let items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      let obj = quest(sourceQuestContent[13]);
      obj = { content: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: questImpressionId, sourceQuestContent };
      obj.copyShareLink(quest.id, obj);
      const AccessibilityAnnouncer = quest(sourceQuestContent[20]).AccessibilityAnnouncer;
      const intl = quest(sourceQuestContent[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(quest(sourceQuestContent[7]).t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    let obj = additionalItems(sourceQuestContent[21]);
    obj = { quest, isTargetedDisclosure: false };
    obj = { content: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
    obj.trackingCtx = obj;
    obj.showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => quest(sourceQuestContent[22]).manuallyStartConsoleQuest(quest.id, true), items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => quest(sourceQuestContent[22]).manualStopConsoleQuest(quest.id), items5);
  const items6 = [externalCtaLabel, callback, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
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
  memo1 = handleResetDismissibilityClick.useMemo(() => {
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
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    let obj = {
      label: "Set Random Quest Progress",
      action() {
        return outer1_4(0.9 * Math.random() + 0.03);
      }
    };
    const items = [obj, obj, obj, obj1, obj2, ...memo1, obj3];
    obj = { label: "Complete Quest", action: handleComplete };
    obj = { label: "Reset Quest", action: handleResetStatusClick };
    return items;
  }, items8);
  const obj5 = quest(sourceQuestContent[13]);
  shouldShowQuestPreviewOverrides = quest(sourceQuestContent[8]).useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id, ];
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  items9[2] = id;
  memo3 = handleResetDismissibilityClick.useMemo(() => {
    const obj = {
      label: "Show in Quest Bar",
      action() {
        return outer1_7(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE);
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
  const memo4 = handleResetDismissibilityClick.useMemo(() => {
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
  const callback5 = handleResetDismissibilityClick.useCallback(() => {
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
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[33]).ContextMenu, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default memoResult;
