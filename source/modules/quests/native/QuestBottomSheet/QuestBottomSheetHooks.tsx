// Module ID: 14069
// Function ID: 107642
// Name: useDismissSheetOrCollapseDock
// Dependencies: [5, 31, 4976, 14048, 14066, 4098, 10497, 14070, 9485, 9486, 9487, 6969, 6968, 4979, 6958, 2]
// Exports: useMobileActivityPressHandler, useWatchTaskPressHandler

// Module 14069 (useDismissSheetOrCollapseDock)
import showActionSheet from "showActionSheet";
import result from "result";
import { QuestDockMode } from "QuestsExperimentLocations";

const require = arg1;
function useDismissSheetOrCollapseDock() {
  setRestingQuestDockMode = React.useContext(setRestingQuestDockMode(14048).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = React.useContext(setRestingQuestDockMode(14066).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  return React.useCallback(() => {
    if (isInQuestBottomSheet) {
      isInQuestBottomSheet(outer1_2[5]).hideActionSheet("QuestBottomSheet");
      const obj = isInQuestBottomSheet(outer1_2[5]);
    } else {
      setRestingQuestDockMode(outer1_5.COLLAPSED);
    }
  }, items);
}
let result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let tmp = useDismissSheetOrCollapseDock();
  const dependencyMap = tmp;
  const questImpression = questId(10497).useQuestImpression();
  const items = [questId, tmp, questImpression, sourceQuestContent];
  return React.useCallback(() => {
    tmp = tmp();
    let obj = { questId };
    let questContentPosition;
    if (null != questImpression) {
      questContentPosition = questImpression.getQuestContentPosition();
    }
    obj.questContentPosition = questContentPosition;
    obj.sourceQuestContent = sourceQuestContent;
    sourceQuestContent(tmp[7])(obj);
    const tmp2 = sourceQuestContent(tmp[7]);
    if (obj2.shouldMigrateToAdAnalyticsInterface(questId(tmp[8]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      let tmp6Result = tmp6(tmp7[9]);
      obj = { type: tmp6(tmp7[10]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp6(tmp7[11]).AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: tmp6(tmp7[12]).QuestContentCTA.WATCH_VIDEO, surfaceId: tmp6(tmp7[13]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent };
      let id;
      if (null != questImpression) {
        id = questImpression.getId();
      }
      obj.impressionId = id;
      let questContentPosition1;
      if (null != questImpression) {
        questContentPosition1 = questImpression.getQuestContentPosition();
      }
      obj.questContentPosition = questContentPosition1;
      tmp6Result.captureAdUserAction(obj);
    } else {
      tmp6Result = tmp6(tmp7[14]);
      obj = { questId, questContent: tmp6(tmp7[13]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp6(tmp7[12]).QuestContentCTA.WATCH_VIDEO };
      let questContentPosition2;
      if (null != questImpression) {
        questContentPosition2 = questImpression.getQuestContentPosition();
      }
      obj.questContentPosition = questContentPosition2;
      let id1;
      if (null != questImpression) {
        id1 = questImpression.getId();
      }
      obj.impressionId = id1;
      obj.sourceQuestContent = sourceQuestContent;
      const result = tmp6Result.trackQuestContentClicked(obj);
    }
  }, items);
};
export const useMobileActivityPressHandler = function useMobileActivityPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  const tmp2 = useDismissSheetOrCollapseDock();
  const callback = tmp2;
  const questImpression = questId(launchMobileActivity[6]).useQuestImpression();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [questId, tmp2, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(callback(tmp), items);
};
