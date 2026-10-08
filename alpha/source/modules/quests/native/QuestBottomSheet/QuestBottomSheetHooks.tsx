// Module ID: 15204
// Function ID: 15205
// Name: QuestBottomSheetHooks
// Dependencies: [5, 19, 5977, 558, 576, 15178, 15200, 5054, 10580, 15205, 7416, 7405, 7415, 5984, 7404, 5980, 7395, 2]

// Module 15204 (QuestBottomSheetHooks)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import QuestConstants from "QuestConstants" /* 5977 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import AdCreativeType from "AdCreativeType" /* 5984 */;
import AnalyticsActions from "AnalyticsActions" /* 7395 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7404 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7405 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7415 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7416 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 15205 */;
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
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(15178).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(setRestingQuestDockMode(15200).QuestBottomSheetContext).isInQuestBottomSheet;
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
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(15178).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(setRestingQuestDockMode(15200).QuestBottomSheetContext).isInQuestBottomSheet;
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
  const obj2 = questId(10580);
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
  const fn = function n() {
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let questContentPosition2;
    closure_2();
    const obj = { questId, questContentPosition, sourceQuestContent };
    questContentPosition = undefined;
    const tmp3 = openVideoQuestModalDefault;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    tmp3(obj);
    const obj3 = AdAnalyticsInterfaceExperiment;
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition: questContentPosition1 };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      id = undefined;
      if (questImpression != null) {
        id = obj2.getId();
      }
      questContentPosition1 = undefined;
      if (questImpression != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      captureAdUserAction(obj4);
    } else {
      const obj5 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, questContentPosition: questContentPosition2, impressionId: id1, sourceQuestContent };
      const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
      AnalyticsActions;
      questContentPosition2 = undefined;
      if (questImpression != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      id1 = undefined;
      if (questImpression != null) {
        id1 = obj2.getId();
      }
      const result = trackQuestContentClicked(obj5);
    }
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
  let obj = questId(10580);
  const questImpression = obj.useQuestImpression();
  const items = [questId, tmp, questImpression, sourceQuestContent];
  return react.useCallback(() => {
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let questContentPosition2;
    closure_2();
    const obj = { questId, questContentPosition, sourceQuestContent };
    questContentPosition = undefined;
    const tmp3 = openVideoQuestModalDefault;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    tmp3(obj);
    const obj3 = AdAnalyticsInterfaceExperiment;
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition: questContentPosition1 };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      id = undefined;
      if (questImpression != null) {
        id = obj2.getId();
      }
      questContentPosition1 = undefined;
      if (questImpression != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      captureAdUserAction(obj4);
    } else {
      const obj5 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, questContentPosition: questContentPosition2, impressionId: id1, sourceQuestContent };
      const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
      AnalyticsActions;
      questContentPosition2 = undefined;
      if (questImpression != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      id1 = undefined;
      if (questImpression != null) {
        id1 = obj2.getId();
      }
      const result = trackQuestContentClicked(obj5);
    }
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
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let v3;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === sourceQuestContent) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_1_3();
            sourceQuestContent = 1;
            c2 = 1;
            const obj8 = { value: c2(), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj11 = tmp3(launchMobileActivity[10]);
          if (obj11.shouldMigrateToAdAnalyticsInterface(tmp3(launchMobileActivity[10]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            const obj10 = { type: tmp3(launchMobileActivity[12]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[13]).AdCreativeType.QUEST, adCreativeId: tmp3, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition };
            const captureAdUserAction = tmp3(launchMobileActivity[11]).captureAdUserAction;
            const tmp46Result = tmp3(launchMobileActivity[11]);
            id = undefined;
            const obj5 = questImpression;
            if (questImpression != null) {
              id = obj5.getId();
            }
            questContentPosition = undefined;
            const obj6 = questImpression;
            if (questImpression != null) {
              questContentPosition = obj6.getQuestContentPosition();
            }
            captureAdUserAction(obj10);
          } else {
            const obj = { questId: tmp3, questContent: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: questContentPosition1, impressionId: id1, sourceQuestContent };
            const trackQuestContentClicked = tmp3(launchMobileActivity[16]).trackQuestContentClicked;
            const tmp4 = tmp3(launchMobileActivity[16]);
            questContentPosition1 = undefined;
            const obj2 = questImpression;
            if (questImpression != null) {
              questContentPosition1 = obj2.getQuestContentPosition();
            }
            id1 = undefined;
            const obj3 = questImpression;
            if (questImpression != null) {
              id1 = obj3.getId();
            }
            const result = trackQuestContentClicked(obj);
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        c2 = 3;
        throw tmp36;
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
    let id1;
    let questContentPosition;
    let questContentPosition1;
    if (launchMobileActivity === 2) {
      launchMobileActivity = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_3();
            c1 = 1;
            launchMobileActivity = 1;
            const obj8 = { value: launchMobileActivity(), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          launchMobileActivity = 3;
          throw value;
        } else if (arg0 === 2) {
          launchMobileActivity = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj11 = tmp3(launchMobileActivity[10]);
          if (obj11.shouldMigrateToAdAnalyticsInterface(tmp3(launchMobileActivity[10]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            const obj10 = { type: tmp3(launchMobileActivity[12]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[13]).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: id, questContentPosition };
            const captureAdUserAction = tmp3(launchMobileActivity[11]).captureAdUserAction;
            const tmp46Result = tmp3(launchMobileActivity[11]);
            id = undefined;
            const obj5 = closure_128_4;
            if (closure_128_4 != null) {
              id = obj5.getId();
            }
            questContentPosition = undefined;
            const obj6 = closure_128_4;
            if (closure_128_4 != null) {
              questContentPosition = obj6.getQuestContentPosition();
            }
            captureAdUserAction(obj10);
          } else {
            const obj = { questId: closure_128_0, questContent: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: questContentPosition1, impressionId: id1, sourceQuestContent: closure_128_1 };
            const trackQuestContentClicked = tmp3(launchMobileActivity[16]).trackQuestContentClicked;
            const tmp4 = tmp3(launchMobileActivity[16]);
            questContentPosition1 = undefined;
            const obj2 = closure_128_4;
            if (closure_128_4 != null) {
              questContentPosition1 = obj2.getQuestContentPosition();
            }
            id1 = undefined;
            const obj3 = closure_128_4;
            if (closure_128_4 != null) {
              id1 = obj3.getId();
            }
            const result = trackQuestContentClicked(obj);
          }
          launchMobileActivity = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        launchMobileActivity = 3;
        throw tmp36;
      }
    }
  }), items);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = tmp2;
export const useMobileActivityPressHandler = tmp3;
