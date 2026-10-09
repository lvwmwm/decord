// Module ID: 15318
// Function ID: 15319
// Name: openVideoQuestModal
// Dependencies: [7384, 15311, 1279, 5941, 15319, 2000, 12916, 2]
// Exports: default

// Module 15318 (openVideoQuestModal)
import v1All from "v1" /* 1279 */;
import VideoQuestUtils from "VideoQuestUtils" /* 12916 */;
import QuestStore from "QuestStore" /* 7384 */;
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
      sourceQuestContent(15311)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(5941).pushLazy;
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
  sourceQuestContent(5941);
  const tmp9 = questId(2000)(15319, dependencyMap.paths);
  const obj4 = questId(12916);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
