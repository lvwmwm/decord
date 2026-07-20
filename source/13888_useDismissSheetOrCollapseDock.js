// Module ID: 13888
// Function ID: 105068
// Name: useDismissSheetOrCollapseDock
// Dependencies: []
// Exports: useMobileActivityPressHandler, useWatchTaskPressHandler

// Module 13888 (useDismissSheetOrCollapseDock)
function useDismissSheetOrCollapseDock() {
  const setRestingQuestDockMode = React.useContext(arg1(dependencyMap[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const arg1 = setRestingQuestDockMode;
  const isInQuestBottomSheet = React.useContext(arg1(dependencyMap[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  const importDefault = isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  return React.useCallback(() => {
    if (isInQuestBottomSheet) {
      isInQuestBottomSheet(closure_2[5]).hideActionSheet("QuestBottomSheet");
      const obj = isInQuestBottomSheet(closure_2[5]);
    } else {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
  }, items);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const QuestDockMode = arg1(dependencyMap[2]).QuestDockMode;
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  questId = questId.questId;
  const arg1 = questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const importDefault = sourceQuestContent;
  const tmp = useDismissSheetOrCollapseDock();
  const dependencyMap = tmp;
  const questImpression = arg1(dependencyMap[6]).useQuestImpression();
  let closure_3 = questImpression;
  const items = [questId, tmp, questImpression, sourceQuestContent];
  return React.useCallback(() => {
    const tmp = tmp();
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
  const arg1 = questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const importDefault = sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  const dependencyMap = launchMobileActivity;
  const tmp2 = useDismissSheetOrCollapseDock();
  const callback = tmp2;
  const questImpression = arg1(dependencyMap[6]).useQuestImpression();
  const React = questImpression;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [questId, tmp2, launchMobileActivity, questImpression, sourceQuestContent];
  return React.useCallback(callback(tmp), items);
};
