// Module ID: 15459
// Function ID: 15460
// Name: QuestBottomSheetHooks
// Dependencies: [5, 19, 5749, 15435, 15456, 4796, 11829, 15460, 8063, 8052, 8062, 5756, 8051, 5752, 8041, 2]
// Exports: useMobileActivityPressHandler, useWatchTaskPressHandler

// Module 15459 (QuestBottomSheetHooks)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 8063 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 15460 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5749).QuestDockMode;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const setRestingQuestDockMode = noop.useContext(questId(callback[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  closure_129_0 = setRestingQuestDockMode;
  const isInQuestBottomSheet = noop.useContext(questId(callback[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  closure_129_1 = isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  callback = noop.useCallback(() => {
    if (sourceQuestContent) {
      ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
    } else {
      questId(QuestDockMode.COLLAPSED);
    }
  }, items);
  const questImpression = questId(callback[6]).useQuestImpression();
  const items1 = [questId, callback, questImpression, sourceQuestContent];
  return noop.useCallback(() => {
    callback();
    const obj = { questId, questContentPosition: null, sourceQuestContent: null };
    let questContentPosition;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    obj.questContentPosition = questContentPosition;
    obj.sourceQuestContent = sourceQuestContent;
    openVideoQuestModalDefault(obj);
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: tmp8(8062).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp8(5756).AdCreativeType.QUEST, adCreativeId: tmp4, questContentCTA: tmp8(8051).QuestContentCTA.WATCH_VIDEO, surfaceId: tmp8(5752).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: tmp6, impressionId: null, questContentPosition: null };
      let id;
      if (obj2 != null) {
        id = obj2.getId();
      }
      obj4.impressionId = id;
      let questContentPosition1;
      if (obj2 != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      obj4.questContentPosition = questContentPosition1;
      tmp8(8052).captureAdUserAction(obj4);
      const tmp8Result = tmp8(8052);
    } else {
      const obj5 = { questId: tmp4, questContent: tmp8(5752).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp8(8051).QuestContentCTA.WATCH_VIDEO, questContentPosition: null, impressionId: null, sourceQuestContent: null };
      let questContentPosition2;
      if (obj2 != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      obj5.questContentPosition = questContentPosition2;
      let id1;
      if (obj2 != null) {
        id1 = obj2.getId();
      }
      obj5.impressionId = id1;
      obj5.sourceQuestContent = tmp6;
      const result = tmp8(8041).trackQuestContentClicked(obj5);
      const tmp8Result2 = tmp8(8041);
    }
  }, items1);
};
export const useMobileActivityPressHandler = function useMobileActivityPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  const setRestingQuestDockMode = questImpression.useContext(questId(launchMobileActivity[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  closure_129_0 = setRestingQuestDockMode;
  const isInQuestBottomSheet = questImpression.useContext(questId(launchMobileActivity[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  closure_129_1 = isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  const callback = questImpression.useCallback(() => {
    if (sourceQuestContent) {
      ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
    } else {
      questId(QuestDockMode.COLLAPSED);
    }
  }, items);
  questImpression = questId(launchMobileActivity[6]).useQuestImpression();
  const items1 = [questId, callback, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(callback(function*(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            callback();
            c1 = 1;
            dependencyMap = 1;
            const obj5 = { value: launchMobileActivity(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let captureAdUserAction = tmp4;
          if (obj12.shouldMigrateToAdAnalyticsInterface(tmp4(8063).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            captureAdUserAction = captureAdUserAction(8052).captureAdUserAction;
            const obj9 = { type: tmp4(8062).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(5756).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp4(8051).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp4(5752).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: null, questContentPosition: null };
            let id;
            if (closure_128_4 != null) {
              id = obj6.getId();
            }
            obj9.impressionId = id;
            let questContentPosition;
            if (closure_128_4 != null) {
              questContentPosition = obj7.getQuestContentPosition();
            }
            obj9.questContentPosition = questContentPosition;
            captureAdUserAction(obj9);
            const captureAdUserActionResult = captureAdUserAction(8052);
            obj6 = closure_128_4;
            obj7 = closure_128_4;
          } else {
            const obj10 = { questId: closure_128_0, questContent: tmp4(5752).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp4(8051).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: null, impressionId: null, sourceQuestContent: null };
            let questContentPosition1;
            if (closure_128_4 != null) {
              questContentPosition1 = obj3.getQuestContentPosition();
            }
            obj10.questContentPosition = questContentPosition1;
            let id1;
            if (closure_128_4 != null) {
              id1 = obj4.getId();
            }
            obj10.impressionId = id1;
            obj10.sourceQuestContent = closure_128_1;
            const result = captureAdUserAction(8041).trackQuestContentClicked(obj10);
            const captureAdUserActionResult2 = captureAdUserAction(8041);
            obj3 = closure_128_4;
            obj4 = closure_128_4;
          }
          dependencyMap = 3;
          obj12 = tmp4(8063);
        }
      } catch (tmp36) {
        dependencyMap = tmp;
        throw tmp36;
      }
    }
  }), items1);
};
