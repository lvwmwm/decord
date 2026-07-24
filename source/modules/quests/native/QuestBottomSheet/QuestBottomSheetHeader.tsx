// Module ID: 14067
// Function ID: 107611
// Name: QuestBottomSheetHeader
// Dependencies: [57, 31, 27, 1849, 33, 4130, 689, 10493, 6964, 14040, 566, 9499, 6962, 1212, 14066, 4979, 14041, 4528, 4539, 4126, 4660, 9007, 2]
// Exports: default

// Module 14067 (QuestBottomSheetHeader)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", gap: 6, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { alignItems: "center", flexDirection: "row", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.containerWithActionSheet = obj1;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.titleWithActionSheet = { textAlign: "left", flex: 1 };
_createForOfIteratorHelperLoose.actionSheetButton = { flexGrow: 0, flexShrink: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default function QuestBottomSheetHeader(step) {
  let quest;
  let withActionSheet;
  ({ quest, withActionSheet } = step);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = isScreenReaderEnabled(14041);
  const tmp3 = (function useHeaderCopy(quest) {
    quest = quest.quest;
    const step = quest.step;
    let c2;
    let gameTitle;
    let c4;
    let c5;
    let first;
    let targetMinutes;
    let memo;
    let hasWatchVideoOnMobileTasks;
    let defaultRewardNameWithArticle;
    let c11;
    const userStatus = quest.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    c2 = tmp2;
    gameTitle = quest.config.messages.gameTitle;
    const questTaskDetails = isScreenReaderEnabled(outer1_2[7]).useQuestTaskDetails(quest);
    let obj = isScreenReaderEnabled(outer1_2[7]);
    const hasWatchVideoTasksResult = isScreenReaderEnabled(outer1_2[8]).hasWatchVideoTasks(quest);
    c4 = hasWatchVideoTasksResult;
    let obj2 = isScreenReaderEnabled(outer1_2[8]);
    const isInGameQuestResult = isScreenReaderEnabled(outer1_2[8]).isInGameQuest(quest);
    c5 = isInGameQuestResult;
    let obj3 = isScreenReaderEnabled(outer1_2[8]);
    first = outer1_3(isScreenReaderEnabled(outer1_2[7]).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
    targetMinutes = questTaskDetails.targetMinutes;
    const items = [quest];
    memo = outer1_4.useMemo(() => {
      let obj = isScreenReaderEnabled(outer2_2[8]);
      obj = { quest };
      return obj.hasStreamOnDesktopTask(obj);
    }, items);
    const obj4 = isScreenReaderEnabled(outer1_2[7]);
    hasWatchVideoOnMobileTasks = isScreenReaderEnabled(outer1_2[9]).useHasWatchVideoOnMobileTasks(quest.config);
    const obj5 = isScreenReaderEnabled(outer1_2[9]);
    const items1 = [outer1_6];
    const stateFromStores = isScreenReaderEnabled(outer1_2[10]).useStateFromStores(items1, () => outer2_6.getCurrentUser());
    const obj6 = isScreenReaderEnabled(outer1_2[10]);
    defaultRewardNameWithArticle = isScreenReaderEnabled(outer1_2[11]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
    const obj7 = isScreenReaderEnabled(outer1_2[11]);
    const isSponsoredPlayQuestResult = isScreenReaderEnabled(outer1_2[12]).isSponsoredPlayQuest(quest);
    c11 = isSponsoredPlayQuestResult;
    const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
    return outer1_4.useMemo(() => {
      if (c2) {
        const intl7 = isScreenReaderEnabled(outer2_2[13]).intl;
        return intl7.string(isScreenReaderEnabled(outer2_2[13]).t["ij5E/5"]);
      } else if (c4) {
        const intl6 = isScreenReaderEnabled(outer2_2[13]).intl;
        const formatToPlainString = intl6.formatToPlainString;
        const t = isScreenReaderEnabled(outer2_2[13]).t;
        if (hasWatchVideoOnMobileTasks) {
          let obj = { reward: defaultRewardNameWithArticle };
          let formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj);
        } else {
          obj = { questReward: defaultRewardNameWithArticle };
          formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj);
        }
        return formatToPlainStringResult;
      } else {
        if (c5) {
          obj = isScreenReaderEnabled(outer2_2[8]);
          const defaultInGameTask = obj.getDefaultInGameTask(quest.config);
          if (null != defaultInGameTask) {
            return defaultInGameTask.messages.taskDescription;
          }
        }
        if (step === isScreenReaderEnabled(outer2_2[14]).QuestBottomSheetStep.TASK_SELECT) {
          const intl5 = isScreenReaderEnabled(outer2_2[13]).intl;
          let stringResult = intl5.string(isScreenReaderEnabled(outer2_2[13]).t.drVw4T);
        } else if (step === isScreenReaderEnabled(outer2_2[14]).QuestBottomSheetStep.CONSOLE_CONNECT) {
          const intl4 = isScreenReaderEnabled(outer2_2[13]).intl;
          stringResult = intl4.string(isScreenReaderEnabled(outer2_2[13]).t.svdwbA);
        } else if (c11) {
          const intl3 = isScreenReaderEnabled(outer2_2[13]).intl;
          const obj1 = { targetMinutes, rewardNameWithArticle: defaultRewardNameWithArticle };
          stringResult = intl3.formatToPlainString(isScreenReaderEnabled(outer2_2[13]).t["2GJLK2"], obj1);
        } else {
          if (first === isScreenReaderEnabled(outer2_2[15]).TaskPlatformScreen.DESKTOP) {
            if (memo) {
              const intl2 = isScreenReaderEnabled(outer2_2[13]).intl;
              const obj2 = { gameTitle, questReward: defaultRewardNameWithArticle, streamingDurationRequirement: targetMinutes };
              stringResult = intl2.formatToPlainString(isScreenReaderEnabled(outer2_2[13]).t["hkJ+Gs"], obj2);
            }
          }
          const intl = isScreenReaderEnabled(outer2_2[13]).intl;
          const obj3 = { gameTitle, rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes };
          stringResult = intl.formatToPlainString(isScreenReaderEnabled(outer2_2[13]).t.NIimTt, obj3);
        }
        return stringResult;
      }
    }, items2);
  })({ quest, step: step.step, location: step.location });
  let obj1 = isScreenReaderEnabled(4528);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = React.useRef(null);
  let items = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(outer1_2[18]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  obj = {};
  let items1 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  items1[1] = containerWithActionSheet;
  obj.style = items1;
  let tmp10Result = null != tmp3;
  if (tmp10Result) {
    obj = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
    let items2 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items2[1] = titleWithActionSheet;
    obj.style = items2;
    obj.children = tmp3;
    tmp10Result = callback(isScreenReaderEnabled(4126).Text, obj);
    const tmp10 = callback;
  }
  const items3 = [tmp10Result, ];
  if (withActionSheet) {
    obj1 = { accessibilityRole: "button" };
    let intl = isScreenReaderEnabled(1212).intl;
    obj1.accessibilityLabel = intl.string(isScreenReaderEnabled(1212).t["UKOtz+"]);
    obj1.onPress = actionSheetPressHandler;
    obj1.style = tmp.actionSheetButton;
    let obj2 = { color: ref(689).colors.INTERACTIVE_TEXT_DEFAULT };
    obj1.children = callback(isScreenReaderEnabled(9007).MoreHorizontalIcon, obj2);
    withActionSheet = callback(isScreenReaderEnabled(4660).PressableOpacity, obj1);
  }
  items3[1] = withActionSheet;
  obj.children = items3;
  return closure_8(View, obj);
};
