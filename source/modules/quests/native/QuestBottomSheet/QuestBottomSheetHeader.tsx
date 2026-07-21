// Module ID: 13893
// Function ID: 105060
// Name: QuestBottomSheetHeader
// Dependencies: []
// Exports: default

// Module 13893 (QuestBottomSheetHeader)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.containerWithActionSheet = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj.title = { textAlign: "center" };
obj.titleWithActionSheet = { "Null": 1, "Null": null };
obj.actionSheetButton = { marginRight: -536870861, columnGap: -299892737 };
let closure_9 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default function QuestBottomSheetHeader(step) {
  let quest;
  let withActionSheet;
  ({ quest, withActionSheet } = step);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let arg1;
  let importDefault;
  const tmp = callback2();
  let obj = arg1(dependencyMap[16]);
  const tmp3 = function useHeaderCopy(quest) {
    quest = quest.quest;
    const isScreenReaderEnabled = quest;
    const step = quest.step;
    let tmp2;
    let gameTitle;
    let hasWatchVideoTasksResult;
    let isInGameQuestResult;
    let first;
    let targetMinutes;
    let memo;
    let hasWatchVideoOnMobileTasks;
    let defaultRewardNameWithArticle;
    let isSponsoredPlayQuestResult;
    const userStatus = quest.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    tmp2 = null != completedAt;
    gameTitle = quest.config.messages.gameTitle;
    const questTaskDetails = isScreenReaderEnabled(tmp2[7]).useQuestTaskDetails(quest);
    const obj = isScreenReaderEnabled(tmp2[7]);
    hasWatchVideoTasksResult = isScreenReaderEnabled(tmp2[8]).hasWatchVideoTasks(quest);
    const obj2 = isScreenReaderEnabled(tmp2[8]);
    isInGameQuestResult = isScreenReaderEnabled(tmp2[8]).isInGameQuest(quest);
    const obj3 = isScreenReaderEnabled(tmp2[8]);
    first = gameTitle(isScreenReaderEnabled(tmp2[7]).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
    targetMinutes = questTaskDetails.targetMinutes;
    const items = [quest];
    memo = hasWatchVideoTasksResult.useMemo(() => {
      let obj = quest(tmp2[8]);
      obj = { quest };
      return obj.hasStreamOnDesktopTask(obj);
    }, items);
    const obj4 = isScreenReaderEnabled(tmp2[7]);
    hasWatchVideoOnMobileTasks = isScreenReaderEnabled(tmp2[9]).useHasWatchVideoOnMobileTasks(quest.config);
    const obj5 = isScreenReaderEnabled(tmp2[9]);
    const items1 = [first];
    const stateFromStores = isScreenReaderEnabled(tmp2[10]).useStateFromStores(items1, () => first.getCurrentUser());
    const obj6 = isScreenReaderEnabled(tmp2[10]);
    defaultRewardNameWithArticle = isScreenReaderEnabled(tmp2[11]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
    const obj7 = isScreenReaderEnabled(tmp2[11]);
    isSponsoredPlayQuestResult = isScreenReaderEnabled(tmp2[12]).isSponsoredPlayQuest(quest);
    const items2 = [tmp2, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
    return hasWatchVideoTasksResult.useMemo(() => {
      if (tmp2) {
        const intl7 = quest(tmp2[13]).intl;
        return intl7.string(quest(tmp2[13]).t.ij5E/5);
      } else if (hasWatchVideoTasksResult) {
        const intl6 = quest(tmp2[13]).intl;
        const formatToPlainString = intl6.formatToPlainString;
        const t = quest(tmp2[13]).t;
        if (hasWatchVideoOnMobileTasks) {
          let obj = { reward: defaultRewardNameWithArticle };
          let formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj);
        } else {
          obj = { questReward: defaultRewardNameWithArticle };
          formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj);
        }
        return formatToPlainStringResult;
      } else {
        if (isInGameQuestResult) {
          obj = quest(tmp2[8]);
          const defaultInGameTask = obj.getDefaultInGameTask(quest.config);
          if (null != defaultInGameTask) {
            return defaultInGameTask.messages.taskDescription;
          }
        }
        if (step === quest(isInGameQuestResult[14]).QuestBottomSheetStep.TASK_SELECT) {
          const intl5 = quest(tmp2[13]).intl;
          let stringResult = intl5.string(quest(tmp2[13]).t.drVw4T);
        } else if (step === quest(tmp2[14]).QuestBottomSheetStep.CONSOLE_CONNECT) {
          const intl4 = quest(tmp2[13]).intl;
          stringResult = intl4.string(quest(tmp2[13]).t.svdwbA);
        } else if (isSponsoredPlayQuestResult) {
          const intl3 = quest(tmp2[13]).intl;
          const obj1 = { targetMinutes, rewardNameWithArticle: defaultRewardNameWithArticle };
          stringResult = intl3.formatToPlainString(quest(tmp2[13]).t.2GJLK2, obj1);
        } else {
          if (first === quest(tmp2[15]).TaskPlatformScreen.DESKTOP) {
            if (memo) {
              const intl2 = quest(tmp2[13]).intl;
              const obj2 = { gameTitle, questReward: defaultRewardNameWithArticle, streamingDurationRequirement: targetMinutes };
              stringResult = intl2.formatToPlainString(quest(tmp2[13]).t.hkJ+Gs, obj2);
            }
          }
          const intl = quest(tmp2[13]).intl;
          const obj3 = { gameTitle, rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes };
          stringResult = intl.formatToPlainString(quest(tmp2[13]).t.NIimTt, obj3);
        }
        return stringResult;
      }
    }, items2);
  }({ quest, step: step.step, location: step.location });
  let obj1 = arg1(dependencyMap[17]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  arg1 = isScreenReaderEnabled;
  const ref = React.useRef(null);
  importDefault = ref;
  const items = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(closure_2[18]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  obj = {};
  const items1 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  items1[1] = containerWithActionSheet;
  obj.style = items1;
  let tmp10Result = null != tmp3;
  if (tmp10Result) {
    obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028706073021718732, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017100505289156275, "Null": 994646613622753800000000000000000000000000000000000000000000000000000000000000000000000, ../lib/deferred: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001056174957006, ref };
    const items2 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items2[1] = titleWithActionSheet;
    obj.style = items2;
    obj.children = tmp3;
    tmp10Result = callback(arg1(dependencyMap[19]).Text, obj);
    const tmp10 = callback;
  }
  const items3 = [tmp10Result, ];
  if (withActionSheet) {
    obj1 = { accessibilityRole: "button" };
    const intl = arg1(dependencyMap[13]).intl;
    obj1.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.UKOtz+);
    obj1.onPress = actionSheetPressHandler;
    obj1.style = tmp.actionSheetButton;
    const obj2 = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj1.children = callback(arg1(dependencyMap[21]).MoreHorizontalIcon, obj2);
    withActionSheet = callback(arg1(dependencyMap[20]).PressableOpacity, obj1);
  }
  items3[1] = withActionSheet;
  obj.children = items3;
  return closure_8(View, obj);
};
