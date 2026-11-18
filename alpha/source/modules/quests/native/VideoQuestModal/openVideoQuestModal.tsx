// Module ID: 16574
// Function ID: 16575
// Name: openVideoQuestModal
// Dependencies: [8316, 16567, 1269, 6337, 16575, 2121, 10575, 2]
// Exports: default

// Module 16574 (openVideoQuestModal)
import v1All from "v1" /* 1269 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10575 */;
import QuestStore from "QuestStore" /* 8316 */;
import size from "module_2" /* 2 */;

let importAll;

const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  let initialStep;
  let questContentPosition;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let obj = QuestStore;
  ({ questContentPosition, initialStep } = questId);
  if (QuestStore.isQuestAccessSuspended) {
    const quest = obj.getQuest(questId);
    let completedAt;
    if (quest != null) {
      const userStatus = quest.userStatus;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
    }
    if (null == completedAt) {
      sourceQuestContent(16567)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6337).pushLazy;
  const obj3 = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      const obj = VideoQuestUtils;
      const obj2 = { questId, sourceQuestContent, videoSessionId: importAll };
      return obj.handleVideoQuestModalClose(obj2);
    },
    sourceQuestContent
  };
  sourceQuestContent(6337);
  const tmp9 = questId(2121)(16575, dependencyMap.paths);
  const obj4 = questId(10575);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
