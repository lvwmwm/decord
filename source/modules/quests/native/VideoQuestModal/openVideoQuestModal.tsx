// Module ID: 14020
// Function ID: 107327
// Name: openVideoQuestModal
// Dependencies: [491, 4337, 14021, 1934, 10474, 2]
// Exports: default

// Module 14020 (openVideoQuestModal)
const result = require("VideoQuestModalSteps").fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  let initialStep;
  let questContentPosition;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  ({ questContentPosition, initialStep } = questId);
  let obj = importAll(491);
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
  const obj2 = sourceQuestContent(4337);
  const tmp2 = questId(1934)(14021, dependencyMap.paths);
  return obj2.pushLazy(tmp2, obj, questId(10474).getVideoQuestModalKey(questId));
};
