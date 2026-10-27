// Module ID: 16511
// Function ID: 16512
// Name: openVideoQuestModal
// Dependencies: [7777, 16504, 1278, 6673, 16512, 1999, 14142, 2]
// Exports: default

// Module 16511 (openVideoQuestModal)
import v1All from "v1" /* 1278 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14142 */;
import QuestStore from "QuestStore" /* 7777 */;
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
      sourceQuestContent(16504)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6673).pushLazy;
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
  sourceQuestContent(6673);
  const tmp9 = questId(1999)(16512, dependencyMap.paths);
  const obj4 = questId(14142);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
