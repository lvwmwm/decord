// Module ID: 15205
// Function ID: 15206
// Name: openVideoQuestModal
// Dependencies: [7379, 15198, 1278, 5940, 15206, 1999, 10604, 2]
// Exports: default

// Module 15205 (openVideoQuestModal)
import v1All from "v1" /* 1278 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10604 */;
import QuestStore from "QuestStore" /* 7379 */;
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
      sourceQuestContent(15198)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(5940).pushLazy;
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
  sourceQuestContent(5940);
  const tmp9 = questId(1999)(15206, dependencyMap.paths);
  const obj4 = questId(10604);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
