// Module ID: 13892
// Function ID: 105029
// Name: QuestBottomSheet
// Dependencies: []
// Exports: default

// Module 13892 (QuestBottomSheet)
function QuestBottomSheet(initialStep) {
  let defibrillator;
  let handleTaskSelect;
  let quest;
  let showMicrophone;
  let sourceQuestContent;
  let step;
  let stepActions;
  ({ quest, sourceQuestContent } = initialStep);
  let obj = { quest, initialStep: initialStep.initialStep, location: constants.QUEST_HOME_MOBILE, sourceQuestContent };
  const tmp2 = useEnrolledQuestContentProps(obj);
  ({ step, defibrillator, stepActions } = tmp2);
  ({ handleTaskSelect, showMicrophone } = tmp2);
  let obj1 = callback(dependencyMap[16]);
  const hasWatchVideoOnMobileTasks = obj1.useHasWatchVideoOnMobileTasks(quest.config);
  let obj2 = callback(dependencyMap[19]);
  const tmp = callback4();
  let obj3 = callback(dependencyMap[19]);
  const hasWatchVideoTasksResult = obj2.hasWatchVideoTasks(quest);
  const tmp6 = callback2(useState(0), 2);
  const callback = tmp6[1];
  obj = { value: importDefaultResult.useMemo(() => ({ isInQuestBottomSheet: true }), []) };
  obj = {};
  obj1 = { quest, step, location: constants.QUEST_HOME_MOBILE };
  obj.header = callback3(importDefault(dependencyMap[21]), obj1);
  let tmp9 = null;
  if (!isInGameQuestResult) {
    if (!hasWatchVideoTasksResult) {
      obj2 = {
        quest,
        sourceQuestContent,
        step,
        isDefibrilating: defibrillator.isActive,
        onLayout(nativeEvent) {
              callback(nativeEvent.nativeEvent.layout.height);
            },
        onBack: stepActions.onBack,
        onDefib: defibrillator.start,
        onConnectConsoleNext: stepActions.onNext
      };
      tmp9 = callback3(importDefault(dependencyMap[22]), obj2);
    } else {
      tmp9 = null;
    }
  }
  obj.footer = tmp9;
  obj.startExpanded = true;
  obj3 = {};
  const items = [tmp.contentContainer, ];
  const obj4 = {};
  let num2 = 0;
  if (step !== obj.TASK_SELECT) {
    num2 = tmp6[0];
  }
  obj4.paddingBottom = num2;
  items[1] = obj4;
  obj3.style = items;
  obj3.children = callback3(QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUEST_HOME_MOBILE, showMicrophone, sourceQuestContent, step });
  obj.children = callback3(View, obj3);
  obj.children = callback3(callback(dependencyMap[20]).BottomSheet, obj);
  return callback3(context.Provider, obj);
}
function useEnrolledQuestContentProps(quest) {
  let _location;
  let initialStep;
  let tmp6;
  let tmp7;
  quest = quest.quest;
  const arg1 = quest;
  const importDefault = quest.sourceQuestContent;
  ({ initialStep, location: _location } = quest);
  let obj = arg1(closure_2[23]);
  closure_2 = obj.useTrackQuestContentClickedWithImpression();
  const callback2 = arg1(closure_2[24]).useQuestImpressionId();
  const obj2 = arg1(closure_2[24]);
  const questTaskDetails = arg1(closure_2[13]).useQuestTaskDetails(quest);
  const obj3 = arg1(closure_2[13]);
  const isQuestProgressing = arg1(closure_2[13]).useIsQuestProgressing(quest);
  const obj4 = arg1(closure_2[13]);
  const tmp3 = callback2(arg1(closure_2[13]).useTaskPlatformScreen(quest, questTaskDetails), 3);
  let closure_4 = tmp3[2];
  const obj5 = arg1(closure_2[13]);
  const hasWatchVideoOnMobileTasks = arg1(closure_2[16]).useHasWatchVideoOnMobileTasks(quest.config);
  const obj6 = arg1(closure_2[16]);
  [tmp6, tmp7] = callback2(function useSteps(quest) {
    quest = quest.quest;
    let sourceQuestContent;
    let closure_2;
    let callback2;
    let React;
    let first1;
    let tmp16;
    let isQuestProgressing;
    let callback;
    let memo1;
    let memo2;
    let memo3;
    let hasWatchVideoOnMobileTasks;
    let isMobileActivityQuest;
    function showConsoleSelect() {
      return tmp16(true);
    }
    function hideConsoleSelect() {
      return tmp16(false);
    }
    const userStatus = quest.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    let obj = quest(closure_2[13]);
    const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
    sourceQuestContent = xboxAndPlaystationAccounts;
    const items = [quest, xboxAndPlaystationAccounts];
    const memo = React.useMemo(() => {
      const obj = quest(first[14]);
      return quest(first[14]).supportedConsoles(quest).filter((arg0) => closure_1.find((type) => type.type === type));
    }, items);
    const questTaskDetails = quest(closure_2[13]).useQuestTaskDetails(quest);
    const obj2 = quest(closure_2[13]);
    isQuestProgressing = quest(closure_2[13]).useIsQuestProgressing(quest);
    const obj3 = quest(closure_2[13]);
    const tmp5 = callback2(quest(closure_2[13]).useTaskPlatformScreen(quest, questTaskDetails), 3);
    const first = tmp5[0];
    closure_2 = first;
    callback2 = tmp7;
    React = tmp8;
    let tmp10 = 0 === memo.length;
    if (tmp10) {
      tmp10 = !tmp2;
    }
    if (tmp10) {
      tmp10 = first === quest(closure_2[15]).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp10) {
      tmp10 = quest.initialStep === isMobileActivityQuest.CONSOLE_CONNECT;
    }
    const tmp14 = callback2(React.useState(tmp10), 2);
    first1 = tmp14[0];
    tmp16 = tmp14[1];
    if (!isQuestProgressing) {
      isQuestProgressing = questTaskDetails.progressSeconds > 0;
    }
    let tmp17 = 0 !== memo.length || tmp2;
    if (!tmp17) {
      tmp17 = first !== quest(closure_2[15]).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp17) {
      tmp17 = first1;
    }
    if (!tmp17) {
      tmp16(true);
    }
    const items1 = [tmp5[2]];
    callback = React.useCallback(() => {
      tmp16(false);
      tmp8(null);
    }, items1);
    memo1 = React.useMemo(() => {
      const items = [{ type: isMobileActivityQuest.TASK_STATUS, shouldShow: true }];
      return items;
    }, []);
    const items2 = [first1, isQuestProgressing];
    memo2 = React.useMemo(() => {
      let obj = { type: isMobileActivityQuest.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
      const items = [obj, ];
      obj = { type: isMobileActivityQuest.TASK_STATUS, shouldShow: true };
      let tmp;
      if (!isQuestProgressing) {
        tmp = showConsoleSelect;
      }
      obj.onBack = tmp;
      items[1] = obj;
      return items;
    }, items2);
    const items3 = [first, first1, isQuestProgressing, callback];
    memo3 = React.useMemo(() => {
      let obj = { type: isMobileActivityQuest.TASK_SELECT, shouldShow: first === quest(first[15]).TaskPlatformScreen.SELECT };
      const items = [obj, , ];
      obj = { type: isMobileActivityQuest.CONSOLE_CONNECT, shouldShow: first === quest(first[15]).TaskPlatformScreen.CONSOLE && first1, onBack: callback, onNext: hideConsoleSelect };
      items[1] = obj;
      obj = { type: isMobileActivityQuest.TASK_STATUS, shouldShow: true };
      if (isQuestProgressing) {
        obj.onBack = undefined;
        items[2] = obj;
        return items;
      } else {
        first === quest(first[15]).TaskPlatformScreen.CONSOLE ? showConsoleSelect : callback;
      }
    }, items3);
    const obj4 = quest(closure_2[13]);
    hasWatchVideoOnMobileTasks = quest(closure_2[16]).useHasWatchVideoOnMobileTasks(quest.config);
    const obj5 = quest(closure_2[16]);
    isMobileActivityQuest = quest(closure_2[16]).useMobileActivityQuest(quest).isMobileActivityQuest;
    const items4 = [tmp5[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks, isMobileActivityQuest];
    const memo4 = React.useMemo(() => {
      let hasItem = 1 === tmp7.length;
      if (hasItem) {
        hasItem = tmp7.includes(memo1.DESKTOP);
      }
      let hasItem1 = 1 === tmp7.length;
      if (hasItem1) {
        hasItem1 = tmp7.includes(memo1.CONSOLE);
      }
      let arr = memo3;
      if (!hasItem) {
        if (!hasWatchVideoOnMobileTasks) {
          if (!isMobileActivityQuest) {
            if (hasItem1) {
              arr = memo2;
            }
          }
          let found = arr.find((shouldShow) => shouldShow.shouldShow);
          if (null == found) {
            found = arr.at(-1);
          }
          return found;
        }
      }
      arr = memo1;
    }, items4);
    const items5 = [memo4.type, ];
    obj = {};
    let onBack;
    if (null != memo4) {
      onBack = memo4.onBack;
    }
    obj.onBack = onBack;
    let onNext;
    if (null != memo4) {
      onNext = memo4.onNext;
    }
    obj.onNext = onNext;
    items5[1] = obj;
    return items5;
  }({ quest, initialStep, location: _location }), 2);
  const userStatus = quest.userStatus;
  let completedAt;
  const tmp5 = callback2(function useSteps(quest) {
    quest = quest.quest;
    let sourceQuestContent;
    let closure_2;
    let callback2;
    let React;
    let first1;
    let tmp16;
    let isQuestProgressing;
    let callback;
    let memo1;
    let memo2;
    let memo3;
    let hasWatchVideoOnMobileTasks;
    let isMobileActivityQuest;
    function showConsoleSelect() {
      return tmp16(true);
    }
    function hideConsoleSelect() {
      return tmp16(false);
    }
    const userStatus = quest.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    let obj = quest(closure_2[13]);
    const xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
    sourceQuestContent = xboxAndPlaystationAccounts;
    const items = [quest, xboxAndPlaystationAccounts];
    const memo = React.useMemo(() => {
      const obj = quest(first[14]);
      return quest(first[14]).supportedConsoles(quest).filter((arg0) => closure_1.find((type) => type.type === type));
    }, items);
    const questTaskDetails = quest(closure_2[13]).useQuestTaskDetails(quest);
    const obj2 = quest(closure_2[13]);
    isQuestProgressing = quest(closure_2[13]).useIsQuestProgressing(quest);
    const obj3 = quest(closure_2[13]);
    const tmp5 = callback2(quest(closure_2[13]).useTaskPlatformScreen(quest, questTaskDetails), 3);
    const first = tmp5[0];
    closure_2 = first;
    callback2 = tmp7;
    React = tmp8;
    let tmp10 = 0 === memo.length;
    if (tmp10) {
      tmp10 = !tmp2;
    }
    if (tmp10) {
      tmp10 = first === quest(closure_2[15]).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp10) {
      tmp10 = quest.initialStep === isMobileActivityQuest.CONSOLE_CONNECT;
    }
    const tmp14 = callback2(React.useState(tmp10), 2);
    first1 = tmp14[0];
    tmp16 = tmp14[1];
    if (!isQuestProgressing) {
      isQuestProgressing = questTaskDetails.progressSeconds > 0;
    }
    let tmp17 = 0 !== memo.length || tmp2;
    if (!tmp17) {
      tmp17 = first !== quest(closure_2[15]).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp17) {
      tmp17 = first1;
    }
    if (!tmp17) {
      tmp16(true);
    }
    const items1 = [tmp5[2]];
    callback = React.useCallback(() => {
      tmp16(false);
      tmp8(null);
    }, items1);
    memo1 = React.useMemo(() => {
      const items = [{ type: isMobileActivityQuest.TASK_STATUS, shouldShow: true }];
      return items;
    }, []);
    const items2 = [first1, isQuestProgressing];
    memo2 = React.useMemo(() => {
      let obj = { type: isMobileActivityQuest.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
      const items = [obj, ];
      obj = { type: isMobileActivityQuest.TASK_STATUS, shouldShow: true };
      let tmp;
      if (!isQuestProgressing) {
        tmp = showConsoleSelect;
      }
      obj.onBack = tmp;
      items[1] = obj;
      return items;
    }, items2);
    const items3 = [first, first1, isQuestProgressing, callback];
    memo3 = React.useMemo(() => {
      let obj = { type: isMobileActivityQuest.TASK_SELECT, shouldShow: first === quest(first[15]).TaskPlatformScreen.SELECT };
      const items = [obj, , ];
      obj = { type: isMobileActivityQuest.CONSOLE_CONNECT, shouldShow: first === quest(first[15]).TaskPlatformScreen.CONSOLE && first1, onBack: callback, onNext: hideConsoleSelect };
      items[1] = obj;
      obj = { type: isMobileActivityQuest.TASK_STATUS, shouldShow: true };
      if (isQuestProgressing) {
        obj.onBack = undefined;
        items[2] = obj;
        return items;
      } else {
        first === quest(first[15]).TaskPlatformScreen.CONSOLE ? showConsoleSelect : callback;
      }
    }, items3);
    const obj4 = quest(closure_2[13]);
    hasWatchVideoOnMobileTasks = quest(closure_2[16]).useHasWatchVideoOnMobileTasks(quest.config);
    const obj5 = quest(closure_2[16]);
    isMobileActivityQuest = quest(closure_2[16]).useMobileActivityQuest(quest).isMobileActivityQuest;
    const items4 = [tmp5[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks, isMobileActivityQuest];
    const memo4 = React.useMemo(() => {
      let hasItem = 1 === tmp7.length;
      if (hasItem) {
        hasItem = tmp7.includes(memo1.DESKTOP);
      }
      let hasItem1 = 1 === tmp7.length;
      if (hasItem1) {
        hasItem1 = tmp7.includes(memo1.CONSOLE);
      }
      let arr = memo3;
      if (!hasItem) {
        if (!hasWatchVideoOnMobileTasks) {
          if (!isMobileActivityQuest) {
            if (hasItem1) {
              arr = memo2;
            }
          }
          let found = arr.find((shouldShow) => shouldShow.shouldShow);
          if (null == found) {
            found = arr.at(-1);
          }
          return found;
        }
      }
      arr = memo1;
    }, items4);
    const items5 = [memo4.type, ];
    obj = {};
    let onBack;
    if (null != memo4) {
      onBack = memo4.onBack;
    }
    obj.onBack = onBack;
    let onNext;
    if (null != memo4) {
      onNext = memo4.onNext;
    }
    obj.onNext = onNext;
    items5[1] = obj;
    return items5;
  }({ quest, initialStep, location: _location }), 2);
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let tmp11 = !tmp10;
  if (null == completedAt) {
    tmp11 = !isQuestProgressing;
  }
  if (tmp11) {
    tmp11 = tmp3[0] === arg1(closure_2[15]).TaskPlatformScreen.CONSOLE;
  }
  if (tmp11) {
    tmp11 = !hasWatchVideoOnMobileTasks;
  }
  obj = {
    quest,
    defibrillator: function useDefibrillator(quest) {
      let obj = quest(closure_2[8]);
      obj = { quest, location: constants.QUEST_HOME_MOBILE };
      const questLogger = obj.getQuestLogger(obj);
      const sourceQuestContent = questLogger;
      const tmp2 = callback2(callback3([]), 2);
      closure_2 = tmp3;
      const tmp4 = callback2(callback3(false), 2);
      const callback2 = tmp5;
      const items = [quest, questLogger, tmp4[1], tmp2[1]];
      obj = {
        errorHints: tmp2[0],
        isActive: tmp4[0],
        start: React.useCallback(() => {
          tmp5(true);
          const result = arg0(tmp3[9]).manuallyStartConsoleQuest(arg0.id);
          const obj = arg0(tmp3[9]);
          const nextPromise = result.then((errorHints) => callback2(errorHints.errorHints));
          result.then((errorHints) => callback2(errorHints.errorHints)).catch((arg0) => {
            callback2([]);
            lib.error("Failed to start console quest", arg0);
            let obj = lib(callback2[10]);
            obj = { key: "START_DEFIBRILLATOR_ERROR" };
            const intl = callback(callback2[11]).intl;
            obj.content = intl.string(callback(callback2[11]).t.CKsXk3);
            obj.icon = lib(callback2[12]);
            obj.open(obj);
          }).finally(() => callback3(false));
        }, items)
      };
      return obj;
    }(quest),
    step: tmp6,
    stepActions: tmp7,
    showMicrophone: tmp11,
    handleTaskSelect(arg0) {
      if (arg0 === constants2.CONSOLE) {
        let DESELECT_PLATFORM = quest(callback[25]).QuestContentCTA.SELECT_CONSOLE_PLATFORM;
      } else if (arg0 === constants2.DESKTOP) {
        DESELECT_PLATFORM = quest(callback[25]).QuestContentCTA.SELECT_DESKTOP_PLATFORM;
      } else {
        DESELECT_PLATFORM = quest(callback[25]).QuestContentCTA.DESELECT_PLATFORM;
      }
      let obj = quest(callback[26]);
      if (obj.shouldMigrateToAdAnalyticsInterface(quest(callback[26]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet")) {
        obj = { type: quest(callback[28]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(callback[29]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: DESELECT_PLATFORM, surfaceId: quest(callback[15]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: closure_3 };
        quest(callback[27]).captureAdUserAction(obj);
        const obj3 = quest(callback[27]);
      } else {
        obj = { questId: quest.id, questContent: quest(callback[15]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: DESELECT_PLATFORM, sourceQuestContent };
        callback(obj);
      }
      React(arg0);
    }
  };
  return obj;
}
class QuestBottomSheetContent {
  constructor(arg0) {
    ({ defibrillator, quest } = global);
    arg1 = quest;
    flag = global.showMicrophone;
    if (flag === undefined) {
      flag = false;
    }
    sourceQuestContent = global.sourceQuestContent;
    importDefault = sourceQuestContent;
    step = global.step;
    closure_2 = undefined;
    obj = arg1(closure_2[16]);
    hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
    closure_2 = hasWatchVideoOnMobileTasks;
    items = [, , ];
    items[0] = quest;
    items[1] = hasWatchVideoOnMobileTasks;
    items[2] = sourceQuestContent;
    obj = {};
    tmp5 = step === jsxs.TASK_SELECT;
    memo = closure_4.useMemo(() => {
      if (hasWatchVideoOnMobileTasks) {
        let obj = { quest, sourceQuestContent };
        let tmp5Result = callback(quest(hasWatchVideoOnMobileTasks[30]).QuestBottomSheetProgressCardWatchTask, obj);
      } else {
        obj = quest(hasWatchVideoOnMobileTasks[19]);
        const tmp8 = quest(hasWatchVideoOnMobileTasks[30]);
        if (isInGameQuestResult) {
          obj = { quest, sourceQuestContent };
          tmp5Result = tmp5(tmp8.QuestBottomSheetProgressCardInGameTask, obj);
        } else {
          const obj1 = { quest, sourceQuestContent };
          tmp5Result = tmp5(tmp8.QuestBottomSheetProgressCardPlayStreamTask, obj1);
        }
        const isInGameQuestResult = obj.isInGameQuest(quest);
      }
      return tmp5Result;
    }, items);
    tmp3 = jsxs;
    tmp4 = Fragment;
    if (tmp5) {
      tmp6 = jsx;
      tmp7 = importDefault;
      tmp8 = closure_2;
      num = 31;
      obj1 = {};
      obj1.onTaskSelect = global.handleTaskSelect;
      tmp5 = jsx(importDefault(closure_2[31]), obj1);
    }
    items1 = [, , ];
    items1[0] = tmp5;
    tmp9 = step === jsxs.CONSOLE_CONNECT;
    if (tmp9) {
      tmp10 = jsx;
      tmp11 = importDefault;
      tmp12 = closure_2;
      num2 = 32;
      obj2 = {};
      obj2.quest = quest;
      obj2.step = step;
      obj2.sourceQuestContent = sourceQuestContent;
      tmp9 = jsx(importDefault(closure_2[32]), obj2);
    }
    items1[1] = tmp9;
    tmp14Result = step === jsxs.TASK_STATUS;
    if (tmp14Result) {
      obj3 = {};
      items2 = [, ];
      items2[0] = memo;
      tmp14 = jsxs;
      tmp15 = View;
      if (flag) {
        flag = !hasWatchVideoOnMobileTasks;
      }
      if (flag) {
        obj4 = {};
        obj4.quest = quest;
        tmp18 = null;
        errorHints = undefined;
        tmp16 = jsx;
        tmp17 = MicrophoneUnit;
        if (null != defibrillator) {
          errorHints = defibrillator.errorHints;
        }
        obj4.errorHints = errorHints;
        flag = tmp16(tmp17, obj4);
      }
      items2[1] = flag;
      obj3.children = items2;
      tmp14Result = tmp14(tmp15, obj3);
    }
    items1[2] = tmp14Result;
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
}
function MicrophoneUnit(arg0) {
  let errorHints;
  let quest;
  ({ quest, errorHints } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[13]);
  let length;
  if (null != errorHints) {
    length = errorHints.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  if (num > 0) {
    if (null != errorHints) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(errorHints.map((message) => message.message), 0);
      items[arraySpreadResult] = obj.useQuestHowToHelpArticle().message;
      const sum = arraySpreadResult + 1;
      let items3 = items;
    }
    obj = { style: tmp.microphoneUnit };
    obj = { style: tmp.microphoneUnitHeader };
    let obj1 = {};
    let str = "text-feedback-warning";
    if (tmp3) {
      str = "text-feedback-critical";
    }
    obj1.color = str;
    const items1 = [closure_10(arg1(dependencyMap[34]).WarningIcon, obj1), ];
    const obj2 = {};
    const intl2 = arg1(dependencyMap[11]).intl;
    if (tmp3) {
      const obj3 = { gameTitle: quest.config.messages.gameTitle };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp21(tmp22[11]).t.28Ql27, obj3);
    } else {
      formatToPlainStringResult = intl2.string(tmp21(tmp22[11]).t.YstzGO);
    }
    obj2.children = formatToPlainStringResult;
    items1[1] = closure_10(arg1(dependencyMap[35]).Text, obj2);
    obj.children = items1;
    const items2 = [closure_11(View, obj), items3.map((children) => callback2(callback(closure_2[35]).Text, { variant: "text-sm/normal", children }, arg1))];
    obj.children = items2;
    return closure_11(View, obj);
  }
  obj1 = arg1(dependencyMap[33]);
  const intl = arg1(dependencyMap[11]).intl;
  if (isSponsoredPlayQuestResult) {
    let stringResult = intl.string(tmp5(tmp6[11]).t.bUyEZZ);
  } else {
    const obj4 = { gameTitle: quest.config.messages.gameTitle };
    stringResult = intl.formatToPlainString(tmp5(tmp6[11]).t.GXqvC1, obj4);
  }
  items3 = [stringResult];
}
let closure_3 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const useState = arg1(dependencyMap[1]).useState;
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
({ QuestsExperimentLocations: closure_8, QuestTaskPlatform: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let obj = { TASK_SELECT: "TASK_SELECT", CONSOLE_CONNECT: "CONSOLE_CONNECT", TASK_STATUS: "TASK_STATUS" };
let obj2 = arg1(dependencyMap[6]);
obj = {};
const tmp3 = arg1(dependencyMap[5]);
obj.contentContainer = { display: "flex", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_24 };
obj2 = { display: "flex", gap: importDefault(dependencyMap[7]).space.PX_8, marginHorizontal: -importDefault(dependencyMap[7]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, marginTop: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_16, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.microphoneUnit = obj2;
const obj1 = { display: "flex", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_24 };
obj.microphoneUnitHeader = { gap: importDefault(dependencyMap[7]).space.PX_8 };
let closure_14 = obj2.createStyles(obj);
const context = importDefaultResult.createContext({ isInQuestBottomSheet: false });
const obj3 = { gap: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default function QuestBottomSheetConnected(questContentPosition) {
  let sourceQuestContent;
  ({ questId: closure_0, initialStep: closure_1, sourceQuestContent } = questContentPosition);
  const dependencyMap = sourceQuestContent;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => quest.getQuest(closure_0));
  let closure_3 = stateFromStores;
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: arg1(dependencyMap[15]).QuestContent.QUEST_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
          return callback(closure_16, { quest: stateFromStores, initialStep: closure_1, sourceQuestContent });
        }
    };
    tmp2 = callback3(arg1(dependencyMap[18]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp2;
};
export const QuestBottomSheetStep = obj;
export { useEnrolledQuestContentProps };
export { QuestBottomSheetContent };
export const QuestBottomSheetContext = context;
