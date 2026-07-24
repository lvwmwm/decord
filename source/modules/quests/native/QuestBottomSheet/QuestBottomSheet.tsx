// Module ID: 14066
// Function ID: 107580
// Name: QuestBottomSheet
// Dependencies: [57, 31, 27, 6941, 4976, 33, 4130, 689, 6947, 9480, 3831, 1212, 9212, 10493, 10501, 4979, 14040, 566, 10956, 6964, 5187, 14067, 14068, 10952, 10497, 6968, 9485, 9486, 9487, 6969, 14105, 14107, 14108, 6962, 7631, 4126, 2]
// Exports: default

// Module 14066 (QuestBottomSheet)
import _slicedToArray from "_slicedToArray";
import importDefaultResult from "QuestBottomSheetTaskSelect";
import { useState } from "QuestBottomSheetTaskSelect";
import { View } from "emitClickEventWithCreative";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import jsxProd from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
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
  let obj1 = _require(14040);
  const hasWatchVideoOnMobileTasks = obj1.useHasWatchVideoOnMobileTasks(quest.config);
  let obj2 = _require(6964);
  const tmp = callback3();
  let obj3 = _require(6964);
  const hasWatchVideoTasksResult = obj2.hasWatchVideoTasks(quest);
  const tmp6 = callback(useState(0), 2);
  _require = tmp6[1];
  obj = { value: importDefaultResult.useMemo(() => ({ isInQuestBottomSheet: true }), []) };
  obj = {};
  obj1 = { quest, step, location: constants.QUEST_HOME_MOBILE };
  obj.header = callback2(importDefault(14067), obj1);
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
      tmp9 = callback2(importDefault(14068), obj2);
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
  obj3.children = callback2(QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUEST_HOME_MOBILE, showMicrophone, sourceQuestContent, step });
  obj.children = callback2(View, obj3);
  obj.children = callback2(_require(5187).BottomSheet, obj);
  return callback2(context.Provider, obj);
}
function useEnrolledQuestContentProps(quest) {
  let _location;
  let initialStep;
  let tmp6;
  let tmp7;
  quest = quest.quest;
  const sourceQuestContent = quest.sourceQuestContent;
  ({ initialStep, location: _location } = quest);
  let obj = quest(10952);
  let dependencyMap = obj.useTrackQuestContentClickedWithImpression();
  let callback = quest(10497).useQuestImpressionId();
  let obj2 = quest(10497);
  let questTaskDetails = quest(10493).useQuestTaskDetails(quest);
  let obj3 = quest(10493);
  let isQuestProgressing = quest(10493).useIsQuestProgressing(quest);
  let obj4 = quest(10493);
  const tmp3 = callback(quest(10493).useTaskPlatformScreen(quest, questTaskDetails), 3);
  let closure_4 = tmp3[2];
  let obj5 = quest(10493);
  let hasWatchVideoOnMobileTasks = quest(14040).useHasWatchVideoOnMobileTasks(quest.config);
  const obj6 = quest(14040);
  [tmp6, tmp7] = callback((function useSteps(quest) {
    quest = quest.quest;
    let xboxAndPlaystationAccounts;
    let first;
    let c3;
    let c4;
    let first1;
    let c6;
    let isQuestProgressing;
    let callback;
    let memo1;
    let memo2;
    let memo3;
    let hasWatchVideoOnMobileTasks;
    let isMobileActivityQuest;
    function showConsoleSelect() {
      return _undefined3(true);
    }
    function hideConsoleSelect() {
      return _undefined3(false);
    }
    const userStatus = quest.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    let obj = quest(10493);
    xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
    let items = [quest, xboxAndPlaystationAccounts];
    const memo = React.useMemo(() => {
      const obj = quest(10501);
      return quest(10501).supportedConsoles(quest).filter((arg0) => {
        let closure_0 = arg0;
        return outer1_1.find((type) => type.type === closure_0);
      });
    }, items);
    const questTaskDetails = quest(10493).useQuestTaskDetails(quest);
    const obj2 = quest(10493);
    isQuestProgressing = quest(10493).useIsQuestProgressing(quest);
    const obj3 = quest(10493);
    const tmp5 = callback(quest(10493).useTaskPlatformScreen(quest, questTaskDetails), 3);
    first = tmp5[0];
    c3 = tmp7;
    c4 = tmp8;
    let tmp10 = 0 === memo.length;
    if (tmp10) {
      tmp10 = !tmp2;
    }
    if (tmp10) {
      tmp10 = first === quest(4979).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp10) {
      tmp10 = quest.initialStep === outer1_13.CONSOLE_CONNECT;
    }
    const tmp14 = callback(React.useState(tmp10), 2);
    first1 = tmp14[0];
    c6 = tmp16;
    if (!isQuestProgressing) {
      isQuestProgressing = questTaskDetails.progressSeconds > 0;
    }
    let tmp17 = 0 !== memo.length || tmp2;
    if (!tmp17) {
      tmp17 = first !== quest(4979).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp17) {
      tmp17 = first1;
    }
    if (!tmp17) {
      tmp16(true);
    }
    const items1 = [tmp5[2]];
    callback = React.useCallback(() => {
      _undefined3(false);
      _undefined2(null);
    }, items1);
    memo1 = React.useMemo(() => {
      const items = [{ type: outer2_13.TASK_STATUS, shouldShow: true }];
      return items;
    }, []);
    const items2 = [first1, isQuestProgressing];
    memo2 = React.useMemo(() => {
      let obj = { type: outer2_13.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
      const items = [obj, ];
      obj = { type: outer2_13.TASK_STATUS, shouldShow: true };
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
      let obj = { type: outer2_13.TASK_SELECT, shouldShow: first === quest(4979).TaskPlatformScreen.SELECT };
      const items = [obj, , ];
      obj = { type: outer2_13.CONSOLE_CONNECT, shouldShow: first === quest(4979).TaskPlatformScreen.CONSOLE && first1, onBack: callback, onNext: hideConsoleSelect };
      items[1] = obj;
      obj = { type: outer2_13.TASK_STATUS, shouldShow: true };
      if (isQuestProgressing) {
        obj.onBack = undefined;
        items[2] = obj;
        return items;
      } else {
        first === quest(4979).TaskPlatformScreen.CONSOLE ? showConsoleSelect : callback;
      }
    }, items3);
    const obj4 = quest(10493);
    hasWatchVideoOnMobileTasks = quest(14040).useHasWatchVideoOnMobileTasks(quest.config);
    const obj5 = quest(14040);
    isMobileActivityQuest = quest(14040).useMobileActivityQuest(quest).isMobileActivityQuest;
    const items4 = [tmp5[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks, isMobileActivityQuest];
    const memo4 = React.useMemo(() => {
      let hasItem = 1 === _undefined.length;
      if (hasItem) {
        hasItem = _undefined.includes(outer2_9.DESKTOP);
      }
      let hasItem1 = 1 === _undefined.length;
      if (hasItem1) {
        hasItem1 = _undefined.includes(outer2_9.CONSOLE);
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
  })({ quest, initialStep, location: _location }), 2);
  let userStatus = quest.userStatus;
  let completedAt;
  let tmp5 = callback((function useSteps(quest) {
    quest = quest.quest;
    let xboxAndPlaystationAccounts;
    let first;
    let c3;
    let c4;
    let first1;
    let c6;
    let isQuestProgressing;
    let callback;
    let memo1;
    let memo2;
    let memo3;
    let hasWatchVideoOnMobileTasks;
    let isMobileActivityQuest;
    function showConsoleSelect() {
      return _undefined3(true);
    }
    function hideConsoleSelect() {
      return _undefined3(false);
    }
    const userStatus = quest.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    let obj = quest(10493);
    xboxAndPlaystationAccounts = obj.useConnectedAccounts().xboxAndPlaystationAccounts;
    let items = [quest, xboxAndPlaystationAccounts];
    const memo = React.useMemo(() => {
      const obj = quest(10501);
      return quest(10501).supportedConsoles(quest).filter((arg0) => {
        let closure_0 = arg0;
        return outer1_1.find((type) => type.type === closure_0);
      });
    }, items);
    const questTaskDetails = quest(10493).useQuestTaskDetails(quest);
    const obj2 = quest(10493);
    isQuestProgressing = quest(10493).useIsQuestProgressing(quest);
    const obj3 = quest(10493);
    const tmp5 = callback(quest(10493).useTaskPlatformScreen(quest, questTaskDetails), 3);
    first = tmp5[0];
    c3 = tmp7;
    c4 = tmp8;
    let tmp10 = 0 === memo.length;
    if (tmp10) {
      tmp10 = !tmp2;
    }
    if (tmp10) {
      tmp10 = first === quest(4979).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp10) {
      tmp10 = quest.initialStep === outer1_13.CONSOLE_CONNECT;
    }
    const tmp14 = callback(React.useState(tmp10), 2);
    first1 = tmp14[0];
    c6 = tmp16;
    if (!isQuestProgressing) {
      isQuestProgressing = questTaskDetails.progressSeconds > 0;
    }
    let tmp17 = 0 !== memo.length || tmp2;
    if (!tmp17) {
      tmp17 = first !== quest(4979).TaskPlatformScreen.CONSOLE;
    }
    if (!tmp17) {
      tmp17 = first1;
    }
    if (!tmp17) {
      tmp16(true);
    }
    const items1 = [tmp5[2]];
    callback = React.useCallback(() => {
      _undefined3(false);
      _undefined2(null);
    }, items1);
    memo1 = React.useMemo(() => {
      const items = [{ type: outer2_13.TASK_STATUS, shouldShow: true }];
      return items;
    }, []);
    const items2 = [first1, isQuestProgressing];
    memo2 = React.useMemo(() => {
      let obj = { type: outer2_13.CONSOLE_CONNECT, shouldShow: first1, onNext: hideConsoleSelect };
      const items = [obj, ];
      obj = { type: outer2_13.TASK_STATUS, shouldShow: true };
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
      let obj = { type: outer2_13.TASK_SELECT, shouldShow: first === quest(4979).TaskPlatformScreen.SELECT };
      const items = [obj, , ];
      obj = { type: outer2_13.CONSOLE_CONNECT, shouldShow: first === quest(4979).TaskPlatformScreen.CONSOLE && first1, onBack: callback, onNext: hideConsoleSelect };
      items[1] = obj;
      obj = { type: outer2_13.TASK_STATUS, shouldShow: true };
      if (isQuestProgressing) {
        obj.onBack = undefined;
        items[2] = obj;
        return items;
      } else {
        first === quest(4979).TaskPlatformScreen.CONSOLE ? showConsoleSelect : callback;
      }
    }, items3);
    const obj4 = quest(10493);
    hasWatchVideoOnMobileTasks = quest(14040).useHasWatchVideoOnMobileTasks(quest.config);
    const obj5 = quest(14040);
    isMobileActivityQuest = quest(14040).useMobileActivityQuest(quest).isMobileActivityQuest;
    const items4 = [tmp5[1], memo3, memo1, memo2, hasWatchVideoOnMobileTasks, isMobileActivityQuest];
    const memo4 = React.useMemo(() => {
      let hasItem = 1 === _undefined.length;
      if (hasItem) {
        hasItem = _undefined.includes(outer2_9.DESKTOP);
      }
      let hasItem1 = 1 === _undefined.length;
      if (hasItem1) {
        hasItem1 = _undefined.includes(outer2_9.CONSOLE);
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
  })({ quest, initialStep, location: _location }), 2);
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let tmp11 = !tmp10;
  if (null == completedAt) {
    tmp11 = !isQuestProgressing;
  }
  if (tmp11) {
    tmp11 = tmp3[0] === quest(4979).TaskPlatformScreen.CONSOLE;
  }
  if (tmp11) {
    tmp11 = !hasWatchVideoOnMobileTasks;
  }
  obj = {
    quest,
    defibrillator: (function useDefibrillator(quest) {
      let closure_0 = quest;
      let obj = quest(6947);
      obj = { quest, location: outer1_8.QUEST_HOME_MOBILE };
      const questLogger = obj.getQuestLogger(obj);
      const tmp2 = callback(outer1_5([]), 2);
      const dependencyMap = tmp3;
      const tmp4 = callback(outer1_5(false), 2);
      callback = tmp5;
      const items = [quest, questLogger, tmp4[1], tmp2[1]];
      obj = {
        errorHints: tmp2[0],
        isActive: tmp4[0],
        start: React.useCallback(() => {
          tmp5(true);
          const result = quest(tmp3[9]).manuallyStartConsoleQuest(quest.id);
          let obj = quest(tmp3[9]);
          const nextPromise = result.then((errorHints) => outer1_2(errorHints.errorHints));
          result.then((errorHints) => outer1_2(errorHints.errorHints)).catch((arg0) => {
            outer1_2([]);
            outer1_1.error("Failed to start console quest", arg0);
            let obj = sourceQuestContent(3831);
            obj = { key: "START_DEFIBRILLATOR_ERROR" };
            const intl = quest(1212).intl;
            obj.content = intl.string(quest(1212).t.CKsXk3);
            obj.icon = sourceQuestContent(9212);
            obj.open(obj);
          }).finally(() => outer1_3(false));
        }, items)
      };
      return obj;
    })(quest),
    step: tmp6,
    stepActions: tmp7,
    showMicrophone: tmp11,
    handleTaskSelect(arg0) {
      if (arg0 === outer1_9.CONSOLE) {
        let DESELECT_PLATFORM = quest(6968).QuestContentCTA.SELECT_CONSOLE_PLATFORM;
      } else if (arg0 === outer1_9.DESKTOP) {
        DESELECT_PLATFORM = quest(6968).QuestContentCTA.SELECT_DESKTOP_PLATFORM;
      } else {
        DESELECT_PLATFORM = quest(6968).QuestContentCTA.DESELECT_PLATFORM;
      }
      let obj = quest(9485);
      if (obj.shouldMigrateToAdAnalyticsInterface(quest(9485).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet")) {
        obj = { type: quest(9487).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(6969).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: DESELECT_PLATFORM, surfaceId: quest(4979).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: _slicedToArray };
        quest(9486).captureAdUserAction(obj);
        const obj3 = quest(9486);
      } else {
        obj = { questId: quest.id, questContent: quest(4979).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: DESELECT_PLATFORM, sourceQuestContent };
        dependencyMap(obj);
      }
      React(arg0);
    }
  };
  return obj;
}
class QuestBottomSheetContent {
  constructor(arg0) {
    ({ defibrillator, quest } = global);
    flag = global.showMicrophone;
    if (flag === undefined) {
      flag = false;
    }
    sourceQuestContent = global.sourceQuestContent;
    step = global.step;
    c2 = undefined;
    obj = require("useIsMobileQuestDockRenderedBase");
    hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
    c2 = hasWatchVideoOnMobileTasks;
    items = [, , ];
    items[0] = quest;
    items[1] = hasWatchVideoOnMobileTasks;
    items[2] = sourceQuestContent;
    obj = {};
    tmp5 = step === jsxs.TASK_SELECT;
    memo = closure_4.useMemo(() => {
      if (hasWatchVideoOnMobileTasks) {
        let obj = { quest, sourceQuestContent };
        let tmp5Result = outer1_10(quest(hasWatchVideoOnMobileTasks[30]).QuestBottomSheetProgressCardWatchTask, obj);
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
        isInGameQuestResult = obj.isInGameQuest(quest);
      }
      return tmp5Result;
    }, items);
    tmp3 = jsxs;
    tmp4 = Fragment;
    if (tmp5) {
      tmp6 = jsx;
      tmp7 = sourceQuestContent;
      tmp8 = c2;
      num = 31;
      obj1 = {};
      obj1.onTaskSelect = global.handleTaskSelect;
      tmp5 = jsx(require("QuestBottomSheetTaskSelect"), obj1);
    }
    items1 = [, , ];
    items1[0] = tmp5;
    tmp9 = step === jsxs.CONSOLE_CONNECT;
    if (tmp9) {
      tmp10 = jsx;
      tmp11 = sourceQuestContent;
      tmp12 = c2;
      num2 = 32;
      obj2 = {};
      obj2.quest = quest;
      obj2.step = step;
      obj2.sourceQuestContent = sourceQuestContent;
      tmp9 = jsx(require("NonInlineConsoleConnection"), obj2);
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
  const tmp = callback3();
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
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
    const items1 = [closure_10(require(7631) /* WarningIcon */.WarningIcon, obj1), ];
    const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    if (tmp3) {
      const obj3 = { gameTitle: quest.config.messages.gameTitle };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp21(1212).t["28Ql27"], obj3);
    } else {
      formatToPlainStringResult = intl2.string(tmp21(1212).t.YstzGO);
    }
    obj2.children = formatToPlainStringResult;
    items1[1] = closure_10(require(4126) /* Text */.Text, obj2);
    obj.children = items1;
    const items2 = [closure_11(View, obj), items3.map((children) => outer1_10(outer1_0(outer1_2[35]).Text, { variant: "text-sm/normal", children }, arg1))];
    obj.children = items2;
    return closure_11(View, obj);
  }
  obj1 = require(6962) /* _createForOfIteratorHelperLoose */;
  const intl = require(1212) /* getSystemLocale */.intl;
  if (isSponsoredPlayQuestResult) {
    let stringResult = intl.string(tmp5(1212).t.bUyEZZ);
  } else {
    const obj4 = { gameTitle: quest.config.messages.gameTitle };
    stringResult = intl.formatToPlainString(tmp5(1212).t.GXqvC1, obj4);
  }
  items3 = [stringResult];
}
({ QuestsExperimentLocations: closure_8, QuestTaskPlatform: closure_9 } = QuestsExperimentLocations);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = { TASK_SELECT: "TASK_SELECT", CONSOLE_CONNECT: "CONSOLE_CONNECT", TASK_STATUS: "TASK_STATUS" };
obj = { contentContainer: { display: "flex", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 } };
_createForOfIteratorHelperLoose = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.microphoneUnit = _createForOfIteratorHelperLoose;
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.microphoneUnitHeader = obj3;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const context = importDefaultResult.createContext({ isInQuestBottomSheet: false });
let obj1 = { display: "flex", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx");

export default function QuestBottomSheetConnected(questContentPosition) {
  let importDefault;
  let require;
  let sourceQuestContent;
  ({ questId: require, initialStep: importDefault, sourceQuestContent } = questContentPosition);
  let obj = require(sourceQuestContent[17]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getQuest(closure_0));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require(sourceQuestContent[15]).QuestContent.QUEST_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
          return outer1_10(outer1_16, { quest: stateFromStores, initialStep: closure_1, sourceQuestContent });
        }
    };
    tmp2 = callback2(require(sourceQuestContent[18]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp2;
};
export const QuestBottomSheetStep = obj;
export { useEnrolledQuestContentProps };
export { QuestBottomSheetContent };
export const QuestBottomSheetContext = context;
