// Module ID: 14166
// Function ID: 14167
// Name: openVideoQuestModal
// Dependencies: [514, 4399, 14167, 1959, 10514, 2]
// Exports: default

// Module 14166 (openVideoQuestModal)
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
  const obj2 = sourceQuestContent(4399);
  const tmp2 = questId(1959)(14167, dependencyMap.paths);
  return obj2.pushLazy(tmp2, obj, questId(10514).getVideoQuestModalKey(questId));
};
