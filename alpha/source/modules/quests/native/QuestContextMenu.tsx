// Module ID: 17058
// Function ID: 17059
// Name: QuestContextMenu
// Dependencies: [109, 19, 7839, 1072, 21, 8020, 9188, 1114, 9661, 504, 6778, 9697, 9685, 7859, 1376, 5740, 9658, 9699, 7864, 5018, 17017, 6782, 9662, 8153, 16992, 5726, 7861, 7352, 6987, 9664, 9667, 9853, 2]

// Module 17058 (QuestContextMenu)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import CopyIcon from "CopyIcon" /* 5726 */;
import parseURLDefault from "parseURL" /* 5740 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 6987 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7861 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import IconButton2 from "IconButton" /* 8020 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8153 */;
import AssetRegistryDefault from "AssetRegistry" /* 9188 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import captureAdUserAction from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9685 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9699 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16992 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17017 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7839 */;
import size from "module_2" /* 2 */;

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
const memoResult = react.memo(function QuestContextMenu(children) {
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
  const getQuestImpressionId = obj3.useGetQuestImpressionId();
  let obj4 = quest(sourceQuestContent[12]);
  const externalCtaLabel = obj4.getExternalCtaLabel(quest);
  if (flag) {
    let tmpResult = tmp(tmp2[13]);
    flag = tmpResult.isShareableQuest(quest.config);
  }
  let items1 = [quest, getQuestImpressionId, sourceQuestContent];
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
    const obj2 = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    tmpResult4.openGameLinkDirectly(quest, obj2);
  }, items1);
  let items2 = [flag, quest.id, getQuestImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    const tmp = flag;
    if (tmp) {
      const obj = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
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
      intl2 = tmp2(1114).intl;
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
        const obj = quest(sourceQuestContent[27]);
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
  const items11 = [quest.id, getQuestImpressionId, sourceQuestContent];
  const items12 = obj6.useMemo(() => {
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
  const onOpen = obj6.useCallback(() => {
    const obj = captureAdUserAction;
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj2);
  }, items11);
  return handleResetHasBeenSeenClick(tmp(tmp2[31]).ContextMenu, { items: items12, onOpen, triggerOnTap: true, children });
});
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default memoResult;
