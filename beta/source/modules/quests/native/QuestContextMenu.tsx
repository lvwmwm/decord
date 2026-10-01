// Module ID: 14682
// Function ID: 14683
// Name: QuestContextMenu
// Dependencies: [109, 19, 7116, 1074, 21, 7363, 7366, 1115, 10681, 504, 5759, 10749, 10711, 10699, 7135, 1364, 4813, 10678, 10719, 7141, 4541, 14642, 5763, 10683, 8037, 14683, 4779, 7137, 6610, 4783, 7153, 7142, 7152, 7358, 2]

// Module 14682 (QuestContextMenu)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import CopyIcon from "CopyIcon" /* 4779 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 4783 */;
import parseURLDefault from "parseURL" /* 4813 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7137 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import IconButton2 from "IconButton" /* 7363 */;
import AssetRegistryDefault from "AssetRegistry" /* 7366 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8037 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14642 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14683 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7116 */;
import size from "module_2" /* 2 */;

let children;

function renderDefaultButton(ref) {
  ref = ref.ref;
  const tmp = _objectWithoutProperties(ref, closure_3);
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(tmp);
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <IconButton ref={ref} icon={AssetRegistryDefault} variant="secondary" accessibilityLabel={intl.string(intl3.t.CAgr1w)} accessibilityHint={intl2.string(intl3.t.hd0b7t)} />;
}
let closure_3 = ["ref"];
const LinkingTypes = Constants.LinkingTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo((children) => {
  let stateFromStores;
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
  flag = undefined;
  let action;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo;
  let memo1;
  let memo2;
  let shouldShowQuestPreviewOverrides;
  let memo3;
  let tmp = quest;
  const tmp2 = sourceQuestContent;
  let obj = quest(sourceQuestContent[8]);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  const handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  const handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  const handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let obj2 = quest(sourceQuestContent[9]);
  let items = [handleResetStatusClick];
  stateFromStores = obj2.useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj3 = quest(sourceQuestContent[11]);
  const trackQuestContentClickedWithImpression = obj3.useTrackQuestContentClickedWithImpression();
  let obj4 = quest(sourceQuestContent[12]);
  const questImpressionId = obj4.useQuestImpressionId();
  let obj5 = quest(sourceQuestContent[13]);
  const externalCtaLabel = obj5.getExternalCtaLabel(quest);
  if (flag) {
    let tmpResult = tmp(tmp2[14]);
    flag = tmpResult.isShareableQuest(quest.config);
  }
  let items1 = [quest, questImpressionId, sourceQuestContent];
  action = handleResetDismissibilityClick.useCallback(() => {
    const obj = PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      const tmp5 = parseURLDefault;
      const tmpResult = QuestCopyUtils;
      isIOSResult = tmp5(tmpResult.getCtaLink(quest.config)).payload.type === LinkingTypes.INVITE;
    }
    if (isIOSResult) {
      const tmpResult3 = QuestUtils;
      const result = tmpResult3.dismissOverlayScreens();
    }
    const tmpResult4 = QuestPlatformUtils;
    const obj2 = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: questImpressionId, sourceQuestContent };
    tmpResult4.openGameLinkDirectly(quest, obj2);
  }, items1);
  let items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    const tmp = flag;
    if (tmp) {
      const obj = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: questImpressionId, sourceQuestContent };
      const copyShareLink = QuestCopyUtils.copyShareLink;
      const id = quest.id;
      QuestCopyUtils;
      copyShareLink(id, obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl3.intl;
      announce(intl.string(intl3.t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    const obj = { creative: { type: AdCreativeType.AdCreativeType.QUEST, quest }, isTargetedDisclosure: false, trackingCtx: { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent } };
    const showModal = QuestDisclosureModalActionCreatorsDefault.showModal;
    ({ type: AdCreativeType.AdCreativeType.QUEST, quest });
    ({ content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent });
    showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => {
    const obj = QuestActionCreators;
    return obj.manuallyStartConsoleQuest(quest.id, true);
  }, items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => {
    const obj = QuestActionCreators;
    return obj.manualStopConsoleQuest(quest.id);
  }, items5);
  const items6 = [externalCtaLabel, action, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    let intl;
    let intl2;
    let items2;
    const items = [{ label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" }, ];
    const obj2 = { label: intl.string(intl3.t.GcsZKJ), action: callback2, iconSource: AssetRegistryDefault2 };
    ({ label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" });
    intl = intl3.intl;
    items[1] = obj2;
    const tmp4 = flag;
    if (tmp4) {
      const obj3 = { label: intl2.string(intl3.t.WqhZss), IconComponent: CopyIcon.CopyIcon, action: callback1 };
      intl2 = tmp2(1115).intl;
      const items1 = [obj3];
      items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 2);
    return items;
  }, items6);
  const items7 = [quest, callback3, callback4];
  memo1 = handleResetDismissibilityClick.useMemo(() => {
    let items1;
    const obj = QuestTaskUtils;
    if (obj.isConsoleQuest(quest)) {
      const items = [{ label: "Start Console Heartbeat", action: callback3 }, ];
      const obj2 = { label: "Start Console Heartbeat", action: callback3 };
      const obj3 = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj3;
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [memo1, handleComplete, handleResetDismissibilityClick, handleProgress, handleResetStatusClick, handleResetHasBeenSeenClick, quest.id];
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    let id;
    let obj = {
      label: "Set Random Quest Progress",
      action() {
        return handleProgress(0.9 * Math.random() + 0.03);
      }
    };
    const items = [obj, , , , , ];
    const obj2 = { label: "Complete Quest", action: handleComplete };
    items[1] = obj2;
    const obj3 = { label: "Reset Quest", action: handleResetStatusClick };
    items[2] = obj3;
    const obj4 = { label: "Reset Dismissibility", action: handleResetDismissibilityClick };
    items[3] = obj4;
    const obj5 = { label: "Reset Quest Seen", action: handleResetHasBeenSeenClick };
    items[4] = obj5;
    items[HermesBuiltin.arraySpread(items, memo1, 5)] = {
      label: "Copy Quest ID",
      action() {
        const obj = quest(sourceQuestContent[28]);
        return obj.copy(id.id);
      }
    };
    return items;
  }, items8);
  const tmpResult2 = tmp(tmp2[8]);
  shouldShowQuestPreviewOverrides = tmpResult2.useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id, ];
  let id;
  const useMemo = handleResetDismissibilityClick.useMemo;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items9[2] = id;
  memo3 = useMemo(() => {
    let CheckmarkLargeIcon;
    let id;
    const obj = {
      label: "Show in Quest Bar",
      action() {
        return handleOverridePreviewClick(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE);
      },
      IconComponent: CheckmarkLargeIcon
    };
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    CheckmarkLargeIcon = undefined;
    if (id === quest.id) {
      CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
    }
    return obj;
  }, items9);
  const items10 = [memo, memo2, quest.preview, shouldShowQuestPreviewOverrides, memo3, additionalItems];
  const items11 = [quest.id, trackQuestContentClickedWithImpression, questImpressionId, sourceQuestContent];
  const items12 = obj7.useMemo(() => {
    let items1;
    if (null != additionalItems) {
      const items = [memo, tmp2];
      items1 = items;
    } else {
      items1 = [memo];
    }
    const tmp5 = shouldShowQuestPreviewOverrides;
    if (tmp5) {
      const items2 = [memo3];
      items1.push(items2);
    }
    let tmp8 = items1;
    if (quest.preview) {
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items3, items1, 0)] = memo2;
      tmp8 = items3;
    }
    return tmp8;
  }, items10);
  const onOpen = obj7.useCallback(() => {
    const obj = AdAnalyticsInterfaceExperiment;
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: questImpressionId };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      captureAdUserAction(obj2);
    } else {
      const obj3 = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj3);
    }
  }, items11);
  return handleResetHasBeenSeenClick(tmp(tmp2[33]).ContextMenu, { items: items12, onOpen, triggerOnTap: true, children });
});
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default memoResult;
