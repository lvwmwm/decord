// Module ID: 17089
// Function ID: 17090
// Name: QuestBottomSheetHooks
// Dependencies: [5, 19, 6781, 17063, 17085, 5258, 9717, 17090, 9684, 9687, 6788, 7871, 6784, 2]
// Exports: useMobileActivityPressHandler, useWatchTaskPressHandler

// Module 17089 (QuestBottomSheetHooks)
import QuestConstants from "QuestConstants" /* 6781 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9684 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9687 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 17090 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1;

const QuestDockMode = QuestConstants.QuestDockMode;
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export function useWatchTaskPressHandler(questId) {
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
    let questContentPosition;
    let questContentPosition1;
    callback();
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
  }, items1);
}
export function useMobileActivityPressHandler(questId) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            callback();
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
          const obj6 = { type: tmp3(launchMobileActivity[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[10]).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp3(launchMobileActivity[11]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[12]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: id, questContentPosition };
          const captureAdUserAction = tmp3(launchMobileActivity[8]).captureAdUserAction;
          const tmp18 = tmp3(launchMobileActivity[8]);
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp11) {
        launchMobileActivity = 3;
        throw tmp11;
      }
    }
  }), items1);
}
