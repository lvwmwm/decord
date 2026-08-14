// Module ID: 14444
// Function ID: 14445
// Name: openVideoQuestModal
// Dependencies: [514, 4572, 14445, 2007, 10576, 2]
// Exports: default

// Module 14444 (openVideoQuestModal)
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
  const obj2 = sourceQuestContent(4572);
  const tmp2 = questId(2007)(14445, dependencyMap.paths);
  return obj2.pushLazy(tmp2, obj, questId(10576).getVideoQuestModalKey(questId));
};
