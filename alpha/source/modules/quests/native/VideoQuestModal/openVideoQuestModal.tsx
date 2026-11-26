// Module ID: 16717
// Function ID: 16718
// Name: openVideoQuestModal
// Dependencies: [8374, 16710, 1269, 6130, 16718, 2120, 9989, 2]
// Exports: default

// Module 16717 (openVideoQuestModal)
import v1All from "v1" /* 1269 */;
import VideoQuestUtils from "VideoQuestUtils" /* 9989 */;
import QuestStore from "QuestStore" /* 8374 */;
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
      sourceQuestContent(16710)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6130).pushLazy;
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
  sourceQuestContent(6130);
  const tmp9 = questId(2120)(16718, dependencyMap.paths);
  const obj4 = questId(9989);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
