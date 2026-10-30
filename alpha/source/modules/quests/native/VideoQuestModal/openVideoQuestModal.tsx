// Module ID: 17032
// Function ID: 17033
// Name: openVideoQuestModal
// Dependencies: [7839, 17025, 1267, 6738, 17033, 1995, 14632, 2]
// Exports: default

// Module 17032 (openVideoQuestModal)
import v1All from "v1" /* 1267 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14632 */;
import QuestStore from "QuestStore" /* 7839 */;
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
      sourceQuestContent(17025)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6738).pushLazy;
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
  sourceQuestContent(6738);
  const tmp9 = questId(1995)(17033, dependencyMap.paths);
  const obj4 = questId(14632);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
