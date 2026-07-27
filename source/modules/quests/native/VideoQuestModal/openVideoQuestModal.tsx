// Module ID: 14082
// Function ID: 107782
// Name: openVideoQuestModal
// Dependencies: [491, 4338, 14083, 1935, 10438, 2]
// Exports: default

// Module 14082 (openVideoQuestModal)
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
  const obj2 = sourceQuestContent(4338);
  const tmp2 = questId(1935)(14083, dependencyMap.paths);
  return obj2.pushLazy(tmp2, obj, questId(10438).getVideoQuestModalKey(questId));
};
