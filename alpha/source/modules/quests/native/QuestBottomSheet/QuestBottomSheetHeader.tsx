// Module ID: 17086
// Function ID: 17087
// Name: QuestBottomSheetHeader
// Dependencies: [32, 19, 17, 1383, 21, 5014, 575, 9681, 7868, 17055, 504, 9700, 7866, 1113, 17085, 6784, 17087, 17056, 5274, 6021, 5624, 6980, 9756, 2]
// Exports: default

// Module 17086 (QuestBottomSheetHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react_native2 from "react-native" /* 6021 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithActionSheet: obj3, title: { textAlign: "center" }, titleWithActionSheet: { textAlign: "left", flex: 1 }, actionSheetButton: { flexGrow: 0, flexShrink: 0 } };
obj2 = { display: "flex", gap: 6, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default function QuestBottomSheetHeader(arg0) {
  let MoreHorizontalIcon;
  let currentUser;
  let intl;
  let items5;
  let items6;
  let obj6;
  let quest;
  let step;
  let withActionSheet;
  ({ quest, step, withActionSheet } = arg0);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = closure_9();
  let tmp2 = isScreenReaderEnabled;
  let tmp3 = dependencyMap;
  let obj = isScreenReaderEnabled(17087);
  const questCreative = obj.useQuestCreative(quest);
  let obj2 = isScreenReaderEnabled(17056);
  let closure_2;
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
  const actionSheetPressHandler = obj2.useActionSheetPressHandler(questCreative);
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  closure_2 = tmp7;
  gameTitle = quest.config.messages.gameTitle;
  const tmp2Result = tmp2(9681);
  const questTaskDetails = tmp2Result.useQuestTaskDetails(quest);
  const tmp2Result9 = tmp2(7868);
  const hasWatchVideoTasksResult = tmp2Result9.hasWatchVideoTasks(quest);
  c4 = hasWatchVideoTasksResult;
  const tmp2Result10 = tmp2(7868);
  const isInGameQuestResult = tmp2Result10.isInGameQuest(quest);
  c5 = isInGameQuestResult;
  const tmp2Result11 = tmp2(9681);
  first = _slicedToArray(tmp2Result11.useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  targetMinutes = questTaskDetails.targetMinutes;
  const items = [quest];
  memo = react.useMemo(() => {
    const obj = isScreenReaderEnabled(dependencyMap[8]);
    const obj2 = { quest };
    return obj.hasStreamOnDesktopTask(obj2);
  }, items);
  const tmp2Result12 = tmp2(17055);
  hasWatchVideoOnMobileTasks = tmp2Result12.useHasWatchVideoOnMobileTasks(quest.config);
  const items1 = [UserStore];
  const tmp2Result13 = tmp2(504);
  const stateFromStores = tmp2Result13.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp2Result14 = tmp2(9700);
  defaultRewardNameWithArticle = tmp2Result14.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp2Result15 = tmp2(7866);
  const isSponsoredPlayQuestResult = tmp2Result15.isSponsoredPlayQuest(quest);
  c11 = isSponsoredPlayQuestResult;
  const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  const memo1 = react.useMemo(() => {
    const tmp = closure_2;
    if (tmp) {
      const intl7 = isScreenReaderEnabled(dependencyMap[13]).intl;
      return intl7.string(isScreenReaderEnabled(dependencyMap[13]).t["ij5E/5"]);
    } else {
      const tmp2 = c4;
      if (tmp2) {
        let formatToPlainStringResult;
        const intl6 = isScreenReaderEnabled(dependencyMap[13]).intl;
        const formatToPlainString = intl6.formatToPlainString;
        const t = isScreenReaderEnabled(dependencyMap[13]).t;
        if (hasWatchVideoOnMobileTasks) {
          const obj2 = { reward: defaultRewardNameWithArticle };
          formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj2);
        } else {
          const obj3 = { questReward: defaultRewardNameWithArticle };
          formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj3);
        }
        return formatToPlainStringResult;
      } else {
        let stringResult;
        const tmp3 = c5;
        if (tmp3) {
          const obj = isScreenReaderEnabled(dependencyMap[8]);
          const defaultInGameTask = obj.getDefaultInGameTask(quest.config);
          if (null != defaultInGameTask) {
            return defaultInGameTask.messages.taskDescription;
          }
        }
        const tmp9 = step;
        if (step === isScreenReaderEnabled(dependencyMap[14]).QuestBottomSheetStep.TASK_SELECT) {
          const intl5 = isScreenReaderEnabled(dependencyMap[13]).intl;
          stringResult = intl5.string(isScreenReaderEnabled(dependencyMap[13]).t.drVw4T);
        } else if (tmp9 === isScreenReaderEnabled(dependencyMap[14]).QuestBottomSheetStep.CONSOLE_CONNECT) {
          const intl4 = isScreenReaderEnabled(dependencyMap[13]).intl;
          stringResult = intl4.string(isScreenReaderEnabled(dependencyMap[13]).t.svdwbA);
        } else {
          const tmp59 = c11;
          if (tmp59) {
            const intl3 = isScreenReaderEnabled(dependencyMap[13]).intl;
            const obj4 = { targetMinutes, rewardNameWithArticle: defaultRewardNameWithArticle };
            stringResult = intl3.formatToPlainString(isScreenReaderEnabled(dependencyMap[13]).t["2GJLK2"], obj4);
          } else {
            if (first === isScreenReaderEnabled(dependencyMap[15]).TaskPlatformScreen.DESKTOP) {
              const tmp15 = memo;
              if (tmp15) {
                const intl2 = isScreenReaderEnabled(dependencyMap[13]).intl;
                const obj5 = { gameTitle, questReward: defaultRewardNameWithArticle, streamingDurationRequirement: targetMinutes };
                stringResult = intl2.formatToPlainString(isScreenReaderEnabled(dependencyMap[13]).t["hkJ+Gs"], obj5);
              }
            }
            const intl = isScreenReaderEnabled(dependencyMap[13]).intl;
            const obj6 = { gameTitle, rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes };
            stringResult = intl.formatToPlainString(isScreenReaderEnabled(dependencyMap[13]).t.NIimTt, obj6);
          }
        }
        return stringResult;
      }
    }
  }, items2);
  const tmp2Result16 = tmp2(5274);
  isScreenReaderEnabled = tmp2Result16.useIsScreenReaderEnabled();
  ref = react.useRef(null);
  const items3 = [isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native2;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items3);
  const items4 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  const tmp21 = closure_8;
  const tmp22 = View;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  let obj3 = { style: items4, children: items6 };
  items4[1] = containerWithActionSheet;
  let tmp24Result = null != memo1;
  if (tmp24Result) {
    let obj4 = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: items5, children: memo1 };
    items5 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    const Text = tmp2(5624).Text;
    const tmp24 = closure_7;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items5[1] = titleWithActionSheet;
    tmp24Result = tmp24(Text, obj4);
  }
  items6 = [tmp24Result, ];
  if (withActionSheet) {
    let obj5 = { accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(1113).t["UKOtz+"]), onPress: actionSheetPressHandler, style: tmp.actionSheetButton, children: closure_7(MoreHorizontalIcon, obj6) };
    const PressableOpacity = tmp2(6980).PressableOpacity;
    intl = tmp2(1113).intl;
    obj6 = { color: ref(575).colors.INTERACTIVE_TEXT_DEFAULT };
    MoreHorizontalIcon = tmp2(9756).MoreHorizontalIcon;
    withActionSheet = closure_7(PressableOpacity, obj5);
  }
  items6[1] = withActionSheet;
  return tmp21(tmp22, obj3);
};
