// Module ID: 16361
// Function ID: 16362
// Name: QuestBottomSheetHooks
// Dependencies: [5, 19, 6696, 558, 576, 16335, 16357, 5196, 9574, 16362, 9542, 9545, 6703, 7785, 6699, 2]

// Module 16361 (QuestBottomSheetHooks)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import QuestConstants from "QuestConstants" /* 6696 */;
import QuestTypes from "QuestTypes" /* 6699 */;
import AdCreativeType from "AdCreativeType" /* 6703 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7785 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9542 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9545 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 16362 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap;

let _asyncToGenerator = _asyncToGenerator_mod;
const QuestDockMode = QuestConstants.QuestDockMode;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDismissSheetOrCollapseDock() {
  let setRestingQuestDockMode;
  let obj = setRestingQuestDockMode(576);
  const cResult = obj.c(3);
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(16335).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(setRestingQuestDockMode(16357).QuestBottomSheetContext).isInQuestBottomSheet;
  if (cResult[0] === isInQuestBottomSheet) {
    let tmp2;
    if (cResult[1] === setRestingQuestDockMode) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function t() {
    const tmp = isInQuestBottomSheet;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    }
  };
  cResult[0] = isInQuestBottomSheet;
  cResult[1] = setRestingQuestDockMode;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useDismissSheetOrCollapseDock() {
  let setRestingQuestDockMode;
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(16335).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(setRestingQuestDockMode(16357).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  return react.useCallback(() => {
    const tmp = isInQuestBottomSheet;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWatchTaskPressHandler(questId) {
  let closure_2;
  let obj = questId(576);
  const cResult = obj.c(5);
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const tmp2 = closure_6();
  dependencyMap = tmp2;
  const obj2 = questId(9574);
  const questImpression = obj2.useQuestImpression();
  if (cResult[0] === tmp2) {
    if (cResult[1] === questImpression) {
      if (cResult[2] === questId) {
        let tmp4;
        if (cResult[3] === sourceQuestContent) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const fn = function s() {
    let id;
    let questContentPosition;
    let questContentPosition1;
    closure_2();
    const obj = { questId, questContentPosition, sourceQuestContent };
    questContentPosition = undefined;
    const tmp3 = openVideoQuestModalDefault;
    const tmp4 = questId;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    tmp3(obj);
    const tmp7 = captureAdUserAction2;
    const captureAdUserAction = tmp7.captureAdUserAction;
    const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: tmp4, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition: questContentPosition1 };
    id = undefined;
    if (questImpression != null) {
      id = obj2.getId();
    }
    questContentPosition1 = undefined;
    if (questImpression != null) {
      questContentPosition1 = obj2.getQuestContentPosition();
    }
    captureAdUserAction(obj3);
  };
  cResult[0] = tmp2;
  cResult[1] = questImpression;
  cResult[2] = questId;
  cResult[3] = sourceQuestContent;
  cResult[4] = fn;
  tmp4 = fn;
}) : (function useWatchTaskPressHandler(questId) {
  let closure_2;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = questId(9574);
  const questImpression = obj.useQuestImpression();
  const items = [questId, tmp, questImpression, sourceQuestContent];
  return react.useCallback(() => {
    let id;
    let questContentPosition;
    let questContentPosition1;
    closure_2();
    const obj = { questId, questContentPosition, sourceQuestContent };
    questContentPosition = undefined;
    const tmp3 = openVideoQuestModalDefault;
    const tmp4 = questId;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    tmp3(obj);
    const tmp7 = captureAdUserAction2;
    const captureAdUserAction = tmp7.captureAdUserAction;
    const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: tmp4, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition: questContentPosition1 };
    id = undefined;
    if (questImpression != null) {
      id = obj2.getId();
    }
    questContentPosition1 = undefined;
    if (questImpression != null) {
      questContentPosition1 = obj2.getQuestContentPosition();
    }
    captureAdUserAction(obj3);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileActivityPressHandler(questId) {
  let closure_3;
  let launchMobileActivity;
  let obj = questId(launchMobileActivity[4]);
  const cResult = obj.c(6);
  questId = questId.questId;
  let sourceQuestContent = questId.sourceQuestContent;
  launchMobileActivity = questId.launchMobileActivity;
  const tmp2 = closure_6();
  _asyncToGenerator = tmp2;
  let obj2 = questId(launchMobileActivity[8]);
  const questImpression = obj2.useQuestImpression();
  if (cResult[0] === tmp2) {
    if (cResult[1] === questImpression) {
      if (cResult[2] === launchMobileActivity) {
        if (cResult[3] === questId) {
          let tmp4;
          if (cResult[4] === sourceQuestContent) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
    }
  }
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let id;
    let questContentPosition;
    let v3;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let adCreativeId;
        c2 = 2;
        if (0 === sourceQuestContent) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            adCreativeId = tmp3;
            closure_1_3();
            sourceQuestContent = 1;
            c2 = 1;
            const obj4 = { value: c2(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj6 = { type: adCreativeId(launchMobileActivity[11]).AdUserActionType.CLICK_INTERNAL, adCreativeType: adCreativeId(launchMobileActivity[12]).AdCreativeType.QUEST, adCreativeId, questContentCTA: adCreativeId(launchMobileActivity[13]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: adCreativeId(launchMobileActivity[14]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition };
          const captureAdUserAction = adCreativeId(launchMobileActivity[10]).captureAdUserAction;
          const tmp18 = adCreativeId(launchMobileActivity[10]);
          id = undefined;
          const obj7 = questImpression;
          if (questImpression != null) {
            id = obj7.getId();
          }
          questContentPosition = undefined;
          const obj = questImpression;
          if (questImpression != null) {
            questContentPosition = obj.getQuestContentPosition();
          }
          captureAdUserAction(obj6);
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c2 = 3;
        throw tmp11;
      }
    }
  });
  function t0() {
    return closure_0(...arguments);
  }
  cResult[0] = tmp2;
  cResult[1] = questImpression;
  cResult[2] = launchMobileActivity;
  cResult[3] = questId;
  cResult[4] = sourceQuestContent;
  cResult[5] = t0;
  tmp4 = t0;
}) : (function useMobileActivityPressHandler(questId) {
  let closure_3;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let launchMobileActivity = questId.launchMobileActivity;
  const tmp = closure_6();
  _asyncToGenerator = tmp;
  let obj = questId(launchMobileActivity[8]);
  const questImpression = obj.useQuestImpression();
  const items = [questId, tmp, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    let id;
    let questContentPosition;
    if (launchMobileActivity === 2) {
      launchMobileActivity = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        launchMobileActivity = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            launchMobileActivity = 3;
            throw value;
          } else if (arg0 === 2) {
            launchMobileActivity = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3();
            c1 = 1;
            launchMobileActivity = 1;
            const obj4 = { value: launchMobileActivity(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          launchMobileActivity = 3;
          throw value;
        } else if (arg0 === 2) {
          launchMobileActivity = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj6 = { type: tmp3(launchMobileActivity[11]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[12]).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp3(launchMobileActivity[13]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[14]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: id, questContentPosition };
          const captureAdUserAction = tmp3(launchMobileActivity[10]).captureAdUserAction;
          const tmp18 = tmp3(launchMobileActivity[10]);
          id = undefined;
          const obj7 = closure_128_4;
          if (closure_128_4 != null) {
            id = obj7.getId();
          }
          questContentPosition = undefined;
          const obj = closure_128_4;
          if (closure_128_4 != null) {
            questContentPosition = obj.getQuestContentPosition();
          }
          captureAdUserAction(obj6);
          launchMobileActivity = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        launchMobileActivity = 3;
        throw tmp11;
      }
    }
  }), items);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = tmp2;
export const useMobileActivityPressHandler = tmp3;
