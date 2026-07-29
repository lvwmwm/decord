// Module ID: 14148
// Function ID: 14149
// Name: openVideoQuestModal
// Dependencies: [514, 4395, 14149, 1959, 10500, 2]
// Exports: default

// Module 14148 (openVideoQuestModal)
const result = require("VideoQuestModalSteps").fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  let initialStep;
  let questContentPosition;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  ({ questContentPosition, initialStep } = questId);
  let obj = importAll(514);
  const v4Result = obj.v4();
  importAll = v4Result;
  obj = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      let obj = questId(outer1_3[4]);
      obj = { questId, sourceQuestContent, videoSessionId: closure_2 };
      return obj.handleVideoQuestModalClose(obj);
    },
    sourceQuestContent
  };
  const obj2 = sourceQuestContent(4395);
  const tmp2 = questId(1959)(14149, dependencyMap.paths);
  return obj2.pushLazy(tmp2, obj, questId(10500).getVideoQuestModalKey(questId));
};
