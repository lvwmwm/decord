// Module ID: 17085
// Function ID: 17086
// Name: QuestBottomSheet
// Dependencies: [32, 19, 17, 7846, 6781, 21, 5014, 575, 7853, 9682, 5712, 1113, 9681, 9719, 6784, 17055, 504, 14685, 7868, 5272, 17086, 17088, 9717, 7871, 9684, 9687, 6788, 17122, 17124, 17125, 7866, 8026, 5624, 2]
// Exports: default

// Module 17085 (QuestBottomSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 575 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import Text_Text from "Text/Text" /* 5624 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7866 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7868 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9681 */;
import QuestHooks from "QuestHooks" /* 17055 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 17086 */;
import QuestBottomSheetProgressCard from "QuestBottomSheetProgressCard" /* 17122 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import QuestStore from "QuestStore" /* 7846 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let BottomSheet, dependencyMap;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj3;
let obj4;
let obj5;
let tmp11;
let unpackModuleId;
const QuestBottomSheetFooterDefault = tmp11(17088);
function QuestBottomSheet(initialStep) {
  let closure_0;
  let defibrillator;
  let first;
  let handleTaskSelect;
  let obj10;
  let obj6;
  let obj7;
  let obj9;
  let quest;
  let showMicrophone;
  let sourceQuestContent;
  let step;
  let stepActions;
  let tmp10Result;
  let tmp13;
  ({ quest, sourceQuestContent } = initialStep);
  closure_0 = undefined;
  const obj = { quest, initialStep: initialStep.initialStep, location: metroImportAll.QUEST_HOME_MOBILE, sourceQuestContent };
  const tmp = closure_14();
  const tmp3 = useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = tmp3);
  ({ handleTaskSelect, showMicrophone } = tmp3);
  const obj2 = QuestHooks;
  const hasWatchVideoOnMobileTasks = obj2.useHasWatchVideoOnMobileTasks(quest.config);
  const obj3 = QuestTaskUtils;
  const hasWatchVideoTasksResult = obj3.hasWatchVideoTasks(quest);
  const obj4 = QuestTaskUtils;
  const isInGameQuestResult = obj4.isInGameQuest(quest);
  [first, closure_0] = useState(0);
  const Provider = context.Provider;
  const obj5 = { value: react.useMemo(() => ({ isInQuestBottomSheet: true }), []), children: authStore(BottomSheet, obj6) };
  obj6 = { header: authStore(QuestBottomSheetHeaderDefault, obj7), footer: tmp10Result, startExpanded: true, children: authStore(tmp13, obj9) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  tmp10Result = null;
  obj7 = { quest, step, location: metroImportAll.QUEST_HOME_MOBILE };
  const tmp2 = metroImportAll;
  if (!isInGameQuestResult) {
    if (!hasWatchVideoTasksResult) {
      const obj8 = {
        quest,
        sourceQuestContent,
        step,
        isDefibrilating: defibrillator.isActive,
        onLayout: function handleLayout(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.layout.height);
            },
        onBack: stepActions.onBack,
        onDefib: defibrillator.start,
        onConnectConsoleNext: stepActions.onNext
      };
      tmp10Result = tmp10(QuestBottomSheetFooterDefault, obj8);
    } else {
      tmp10Result = null;
    }
  }
  const items = [tmp.contentContainer, ];
  let num = 0;
  tmp13 = View;
  if (step !== obj.TASK_SELECT) {
    num = first;
  }
  items[1] = { paddingBottom: num };
  obj9 = { style: items, children: authStore(QuestBottomSheetContent, obj10) };
  obj10 = { defibrillator, quest, handleTaskSelect, location: tmp2.QUEST_HOME_MOBILE, showMicrophone, sourceQuestContent, step };
  return authStore(Provider, obj5);
}
function useEnrolledQuestContentProps(quest) {
  let _location;
  let closure_2;
  let closure_3;
  let first;
  let onNext;
  let sourceQuestContent;
  let tmp33;
  let tmp34;
  quest = quest.quest;
  ({ location: _location, sourceQuestContent: importDefault } = quest);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = quest;
  let tmp2 = dependencyMap;
  const initialStep = quest.initialStep;
  let obj = quest(9717);
  dependencyMap = obj.useGetQuestImpressionId();
  let obj2 = quest(9681);
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  let obj3 = quest(9681);
  const isQuestProgressing = obj3.useIsQuestProgressing(quest);
  let tmp5 = _slicedToArray;
  const obj4 = quest(9681);
  [first, , _slicedToArray] = obj4.useTaskPlatformScreen(quest, questTaskDetails);
  let xboxAndPlaystationAccounts;
  let first1;
  _slicedToArray = undefined;
  let closure_4;
  let first2;
  let closure_6;
  let isQuestProgressing1;
  let callback;
  let memo1;
  let memo2;
  let memo3;
  let hasWatchVideoOnMobileTasks1;
  let isMobileActivityQuest;
  function showConsoleSelect() {
    return closure_6(true);
  }
  function hideConsoleSelect() {
    return closure_6(false);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  const obj5 = quest(17055);
  const hasWatchVideoOnMobileTasks = obj5.useHasWatchVideoOnMobileTasks(quest.config);
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmpResult = tmp(9681);
  xboxAndPlaystationAccounts = tmpResult.useConnectedAccounts().xboxAndPlaystationAccounts;
  let items = [quest, xboxAndPlaystationAccounts];
  const memo = react.useMemo(() => {
    const obj = quest(first1[13]);
    const supportedConsolesResult = obj.supportedConsoles(quest);
    return supportedConsolesResult.filter((item) => {
      let closure_0 = item;
      return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
    });
  }, items);
  const tmpResult7 = tmp(9681);
  const questTaskDetails1 = tmpResult7.useQuestTaskDetails(quest);
  const tmpResult8 = tmp(9681);
  isQuestProgressing1 = tmpResult8.useIsQuestProgressing(quest);
  const tmpResult9 = tmp(9681);
  const tmp5Result = tmp5(tmpResult9.useTaskPlatformScreen(quest, questTaskDetails1), 3);
  first1 = tmp5Result[0];
  _slicedToArray = tmp15;
  closure_4 = tmp16;
  let tmp17 = 0 === memo.length;
  useState = react.useState;
  if (tmp17) {
    tmp17 = !tmp10;
  }
  if (tmp17) {
    tmp17 = first1 === tmp(6784).TaskPlatformScreen.CONSOLE;
  }
  if (!tmp17) {
    tmp17 = initialStep === obj.CONSOLE_CONNECT;
  }
  const tmp5Result5 = tmp5(useState(tmp17), 2);
  first2 = tmp5Result5[0];
  closure_6 = tmp21;
  if (!isQuestProgressing1) {
    isQuestProgressing1 = questTaskDetails1.progressSeconds > 0;
  }
  const tmp22 = 0 !== memo.length || null != completedAt || first1 !== tmp(6784).TaskPlatformScreen.CONSOLE || first2;
  if (!tmp22) {
    tmp5Result5[1](true);
  }
  const items1 = [tmp5Result[2]];
  callback = obj7.useCallback(() => {
    closure_6(false);
    closure_4(null);
  }, items1);
  memo1 = obj7.useMemo(() => {
    const items = [];
    const obj = { type: constants2.TASK_STATUS, shouldShow: true };
    items[0] = obj;
    return items;
  }, []);
  const items2 = [first2, isQuestProgressing1];
  memo2 = obj7.useMemo(() => {
    let tmp;
    const items = [, ];
    const obj = { type: constants2.CONSOLE_CONNECT, shouldShow: first2, onNext: hideConsoleSelect };
    items[0] = obj;
    const obj2 = { type: constants2.TASK_STATUS, shouldShow: true, onBack: tmp };
    tmp = undefined;
    if (!isQuestProgressing1) {
      tmp = showConsoleSelect;
    }
    items[1] = obj2;
    return items;
  }, items2);
  const items3 = [first1, first2, isQuestProgressing1, callback];
  memo3 = obj7.useMemo(() => {
    let tmp7;
    const items = [{ type: constants2.TASK_SELECT, shouldShow: first1 === quest(first1[14]).TaskPlatformScreen.SELECT }, , ];
    const obj2 = { type: constants2.CONSOLE_CONNECT, shouldShow: first1 === quest(first1[14]).TaskPlatformScreen.CONSOLE && first2, onBack, onNext: hideConsoleSelect };
    ({ type: constants2.TASK_SELECT, shouldShow: first1 === quest(first1[14]).TaskPlatformScreen.SELECT });
    let tmp6 = onBack;
    items[1] = obj2;
    const obj3 = { type: constants2.TASK_STATUS, shouldShow: true, onBack: tmp7 };
    tmp7 = undefined;
    first1 === quest(first1[14]).TaskPlatformScreen.CONSOLE && first2;
    const tmp2 = first1;
    const tmp3 = quest;
    const tmp4 = first1;
    if (!isQuestProgressing1) {
      if (tmp2 === tmp3(tmp4[14]).TaskPlatformScreen.CONSOLE) {
        tmp6 = showConsoleSelect;
      }
      tmp7 = tmp6;
    }
    items[2] = obj3;
    return items;
  }, items3);
  const tmpResult10 = tmp(17055);
  hasWatchVideoOnMobileTasks1 = tmpResult10.useHasWatchVideoOnMobileTasks(quest.config);
  const tmpResult11 = tmp(17055);
  isMobileActivityQuest = tmpResult11.useMobileActivityQuest(quest).isMobileActivityQuest;
  const items4 = [tmp5Result[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks1, isMobileActivityQuest];
  const memo4 = obj7.useMemo(() => {
    const hasItem = 1 === length.length && arr.includes(constants.DESKTOP);
    const hasItem1 = 1 === arr.length && arr.includes(constants.CONSOLE);
    let arr2 = memo3;
    if (!hasItem) {
      const tmp5 = hasWatchVideoOnMobileTasks1;
      if (!tmp5) {
        const tmp6 = isMobileActivityQuest;
        if (!tmp6) {
          if (hasItem1) {
            arr2 = memo2;
          }
        }
        let found = arr2.find((shouldShow) => shouldShow.shouldShow);
        if (found == null) {
          found = arr2.at(-1);
        }
        return found;
      }
    }
    arr2 = memo1;
  }, items4);
  const items5 = [memo4.type, ];
  let onBack;
  if (memo4 != null) {
    onBack = memo4.onBack;
  }
  const obj6 = { onBack, onNext };
  onNext = undefined;
  if (memo4 != null) {
    onNext = memo4.onNext;
  }
  items5[1] = obj6;
  [tmp33, tmp34] = tmp5(items5, 2);
  tmp5(items5, 2);
  const obj8 = { quest, location: constants.QUEST_HOME_MOBILE };
  const tmpResult12 = tmp(7853);
  const questLogger = tmpResult12.getQuestLogger(obj8);
  const tmp5Result7 = tmp5(useState([]), 2);
  dependencyMap = tmp38;
  const first3 = tmp5Result7[0];
  const tmp5Result8 = tmp5(useState(false), 2);
  _slicedToArray = tmp40;
  const items6 = [quest, questLogger, tmp5Result8[1], tmp5Result7[1]];
  const userStatus2 = quest.userStatus;
  let completedAt1;
  const obj9 = {
    errorHints: first3,
    isActive: tmp5Result8[0],
    start: react.useCallback(() => {
      let logger;
      closure_3(true);
      let obj = quest(closure_2[9]);
      const result = obj.manuallyStartConsoleQuest(quest.id);
      const nextPromise = result.then((errorHints) => closure_1_2(errorHints.errorHints));
      const catchPromise = nextPromise.catch((error) => {
        let intl;
        closure_1_2([]);
        logger.error("Failed to start console quest", error);
        const obj = { text: intl.string(quest(closure_2[11]).t.CKsXk3), variant: "critical" };
        const open = questLogger(closure_2[10]).open;
        questLogger(closure_2[10]);
        intl = quest(closure_2[11]).intl;
        open("START_DEFIBRILLATOR_ERROR", obj);
      });
      catchPromise.finally(() => closure_1_3(false));
    }, items6)
  };
  if (userStatus2 != null) {
    completedAt1 = userStatus2.completedAt;
  }
  const obj10 = {
    quest,
    defibrillator: obj9,
    step: tmp33,
    stepActions: tmp34,
    showMicrophone: null == completedAt1 && !isQuestProgressing && first === tmp(6784).TaskPlatformScreen.CONSOLE && !hasWatchVideoOnMobileTasks,
    handleTaskSelect(arg0) {
      let DESELECT_PLATFORM;
      let tmp4;
      if (arg0 === constants.CONSOLE) {
        DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_CONSOLE_PLATFORM;
        tmp4 = require;
      } else if (arg0 === tmp.DESKTOP) {
        DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.SELECT_DESKTOP_PLATFORM;
        tmp4 = require;
      } else {
        DESELECT_PLATFORM = AnalyticsTypes.QuestContentCTA.DESELECT_PLATFORM;
        tmp4 = require;
      }
      const tmp4Result = tmp4(9684);
      const obj = { type: tmp4(9687).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(6788).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: DESELECT_PLATFORM, surfaceId: tmp4(6784).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: importDefault, impressionId: closure_2() };
      tmp4Result.captureAdUserAction(obj);
      closure_3(arg0);
    }
  };
  return obj10;
}
class QuestBottomSheetContent {
  constructor(showMicrophone) {
    let defibrillator;
    let errorHints;
    let quest;
    ({ defibrillator, quest } = showMicrophone);
    let flag = showMicrophone.showMicrophone;
    const handleTaskSelect = showMicrophone.handleTaskSelect;
    if (flag === undefined) {
      flag = false;
    }
    const sourceQuestContent = showMicrophone.sourceQuestContent;
    const step = showMicrophone.step;
    let hasWatchVideoOnMobileTasks;
    let tmp = hasWatchVideoOnMobileTasks;
    let obj = quest(hasWatchVideoOnMobileTasks[15]);
    hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
    const items = [quest, hasWatchVideoOnMobileTasks, sourceQuestContent];
    const tmp6 = obj;
    let tmp7 = step === obj.TASK_SELECT;
    const memo = react.useMemo(() => {
      let tmp6Result;
      const tmp = hasWatchVideoOnMobileTasks;
      if (tmp) {
        const obj2 = { quest, sourceQuestContent };
        tmp6Result = authStore(QuestBottomSheetProgressCard.QuestBottomSheetProgressCardWatchTask, obj2);
      } else {
        const obj = QuestTaskUtils;
        const isInGameQuestResult = obj.isInGameQuest(quest);
        const tmp9 = QuestBottomSheetProgressCard;
        if (isInGameQuestResult) {
          const obj3 = { quest, sourceQuestContent };
          tmp6Result = tmp6(tmp9.QuestBottomSheetProgressCardInGameTask, obj3);
        } else {
          const obj4 = { quest, sourceQuestContent };
          tmp6Result = tmp6(tmp9.QuestBottomSheetProgressCardPlayStreamTask, obj4);
        }
      }
      return tmp6Result;
    }, items);
    const tmp5 = closure_12;
    if (tmp7) {
      let tmp9 = sourceQuestContent;
      let obj2 = { onTaskSelect: handleTaskSelect };
      tmp7 = closure_10(sourceQuestContent(tmp[28]), obj2);
    }
    const children = [tmp7, , ];
    let tmp10 = step === tmp6.CONSOLE_CONNECT;
    if (tmp10) {
      let obj3 = { quest, step, sourceQuestContent };
      tmp10 = closure_10(sourceQuestContent(tmp[29]), obj3);
    }
    children[1] = tmp10;
    let tmp4Result = step === tmp6.TASK_STATUS;
    if (tmp4Result) {
      const items2 = [memo, ];
      const tmp14 = View;
      if (flag) {
        flag = !hasWatchVideoOnMobileTasks;
      }
      if (flag) {
        let obj4 = { quest, errorHints };
        errorHints = undefined;
        const tmp15 = closure_10;
        const tmp16 = MicrophoneUnit;
        if (defibrillator != null) {
          errorHints = defibrillator.errorHints;
        }
        flag = tmp15(tmp16, obj4);
      }
      const obj5 = { children: items2 };
      items2[1] = flag;
      tmp4Result = tmp4(tmp14, obj5);
    }
    children[2] = tmp4Result;
    return closure_11(tmp5, { children });
  }
}
function MicrophoneUnit(arg0) {
  let errorHints;
  let items1;
  let items2;
  let quest;
  let stringResult;
  ({ quest, errorHints } = arg0);
  const tmp2 = closure_14();
  let obj = hooks_QuestHooks;
  let num;
  const message = obj.useQuestHowToHelpArticle().message;
  if (errorHints != null) {
    num = errorHints.length;
  }
  if (num == null) {
    num = 0;
  }
  if (num > 0) {
    let items3;
    let formatToPlainStringResult;
    if (null != errorHints) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, errorHints.map((message) => message.message), 0)] = message;
      items3 = items;
    }
    let str = "text-feedback-warning";
    const obj2 = { style: tmp2.microphoneUnit, children: items2 };
    const obj3 = { style: tmp2.microphoneUnitHeader, children: items1 };
    const WarningIcon = tmp3(8026).WarningIcon;
    if (num > 0) {
      str = "text-feedback-critical";
    }
    const obj4 = { color: str };
    items1 = [authStore(WarningIcon, obj4), ];
    const Text = tmp3(5624).Text;
    const intl2 = tmp3(1113).intl;
    if (num > 0) {
      const obj5 = { gameTitle: quest.config.messages.gameTitle };
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(1113).t["28Ql27"], obj5);
    } else {
      formatToPlainStringResult = intl2.string(tmp3(1113).t.YstzGO);
    }
    const obj6 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: formatToPlainStringResult };
    items1[1] = authStore(Text, obj6);
    items2 = [
      unpackModuleId(View, obj3),
      items3.map((children, index) => {
          const obj = { variant: "text-sm/normal", children };
          return closure_1_10(Text_Text.Text, obj, index);
        })
    ];
    return unpackModuleId(View, obj2);
  }
  const tmp3Result = utils_QuestUtils;
  const isSponsoredPlayQuestResult = tmp3Result.isSponsoredPlayQuest(quest);
  const intl = tmp3(1113).intl;
  if (isSponsoredPlayQuestResult) {
    stringResult = intl.string(tmp3(1113).t.bUyEZZ);
  } else {
    const obj7 = { gameTitle: quest.config.messages.gameTitle };
    stringResult = intl.formatToPlainString(tmp3(1113).t.GXqvC1, obj7);
  }
  items3 = [stringResult];
}
let _slicedToArray = _slicedToArray_mod;
let useState = react2.useState;
const View = react_native.View;
({ QuestsExperimentLocations: metroImportAll, QuestTaskPlatform: c9 } = QuestConstants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const QuestBottomSheetStep = { TASK_SELECT: "TASK_SELECT", CONSOLE_CONNECT: "CONSOLE_CONNECT", TASK_STATUS: "TASK_STATUS" };
let createStyles = createStyles_mod;
let obj2 = { contentContainer: obj3, microphoneUnit: obj4, microphoneUnitHeader: obj5 };
obj3 = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj4 = { display: "flex", gap: nativeDefault.space.PX_8, marginHorizontal: -nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj2);
const context = react.createContext({ isInQuestBottomSheet: false });
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default function QuestBottomSheetConnected(questContentPosition) {
  let initialStep;
  let sourceQuestContent;
  ({ questId: require, initialStep: importDefault, sourceQuestContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  let obj = require("get initialized");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require("QuestTypes").QuestContent.QUEST_BOTTOM_SHEET,
      questContentPosition,
      sourceQuestContent,
      children() {
          const obj = { quest: stateFromStores, initialStep: importDefault, sourceQuestContent };
          return authStore(QuestBottomSheet, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp(tmp2[17]).QuestContentImpressionTrackerNative;
    tmp4 = closure_10(QuestContentImpressionTrackerNative, obj2);
  }
  return tmp4;
};
export { QuestBottomSheetStep };
export { useEnrolledQuestContentProps };
export { QuestBottomSheetContent };
export const QuestBottomSheetContext = context;
