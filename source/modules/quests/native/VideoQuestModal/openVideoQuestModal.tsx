// Module ID: 13906
// Function ID: 105171
// Name: openVideoQuestModal
// Dependencies: []
// Exports: default

// Module 13906 (openVideoQuestModal)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  let initialStep;
  let questContentPosition;
  questId = questId.questId;
  const require = questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const importDefault = sourceQuestContent;
  ({ questContentPosition, initialStep } = questId);
  let obj = importAll(dependencyMap[0]);
  const v4Result = obj.v4();
  const importAll = v4Result;
  obj = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      let obj = questId(closure_3[4]);
      obj = { questId, sourceQuestContent, videoSessionId: v4Result };
      return obj.handleVideoQuestModalClose(obj);
    },
    sourceQuestContent
  };
  const obj2 = importDefault(dependencyMap[1]);
  const tmp2 = require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths);
  return obj2.pushLazy(tmp2, obj, require(dependencyMap[4]).getVideoQuestModalKey(questId));
};
