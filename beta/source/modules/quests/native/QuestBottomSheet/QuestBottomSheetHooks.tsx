// Module ID: 14654
// Function ID: 14655
// Name: QuestBottomSheetHooks
// Dependencies: [5, 19, 5756, 14628, 14651, 4800, 10711, 14655, 7153, 7142, 7152, 5763, 7141, 5759, 7131, 2]
// Exports: useMobileActivityPressHandler, useWatchTaskPressHandler

// Module 14654 (QuestBottomSheetHooks)
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 14655 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1;

const QuestDockMode = QuestConstants.QuestDockMode;
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  let callback;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const setRestingQuestDockMode = react.useContext(questId(callback[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(questId(callback[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  callback = react.useCallback(() => {
    const tmp = isInQuestBottomSheet;
    if (tmp) {
      const obj = sourceQuestContent(launchMobileActivity[5]);
      obj.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
  }, items);
  let obj = questId(callback[6]);
  const questImpression = obj.useQuestImpression();
  const items1 = [questId, callback, questImpression, sourceQuestContent];
  return react.useCallback(() => {
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let questContentPosition2;
    callback();
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
  }, items1);
};
export const useMobileActivityPressHandler = function useMobileActivityPressHandler(questId) {
  let questImpression;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let launchMobileActivity = questId.launchMobileActivity;
  const setRestingQuestDockMode = questImpression.useContext(questId(launchMobileActivity[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = questImpression.useContext(questId(launchMobileActivity[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  const callback = questImpression.useCallback(() => {
    const tmp = isInQuestBottomSheet;
    if (tmp) {
      const obj = sourceQuestContent(launchMobileActivity[5]);
      obj.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
  }, items);
  let obj = questId(launchMobileActivity[6]);
  questImpression = obj.useQuestImpression();
  const items1 = [questId, callback, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(callback(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
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
            callback();
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
          const obj11 = tmp3(launchMobileActivity[8]);
          if (obj11.shouldMigrateToAdAnalyticsInterface(tmp3(launchMobileActivity[8]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            const obj10 = { type: tmp3(launchMobileActivity[10]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[11]).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp3(launchMobileActivity[12]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[13]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: id, questContentPosition };
            const captureAdUserAction = tmp3(launchMobileActivity[9]).captureAdUserAction;
            const tmp46Result = tmp3(launchMobileActivity[9]);
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
            const obj = { questId: closure_128_0, questContent: tmp3(launchMobileActivity[13]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp3(launchMobileActivity[12]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: questContentPosition1, impressionId: id1, sourceQuestContent: closure_128_1 };
            const trackQuestContentClicked = tmp3(launchMobileActivity[14]).trackQuestContentClicked;
            const tmp4 = tmp3(launchMobileActivity[14]);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp36) {
        launchMobileActivity = 3;
        throw tmp36;
      }
    }
  }), items1);
};
