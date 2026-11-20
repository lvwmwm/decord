// Module ID: 16388
// Function ID: 16389
// Name: openVideoQuestModal
// Dependencies: [8284, 16381, 1268, 6310, 16389, 2119, 10495, 2]
// Exports: default

// Module 16388 (openVideoQuestModal)
import v1All from "v1" /* 1268 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10495 */;
import QuestStore from "QuestStore" /* 8284 */;
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
      sourceQuestContent(16381)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6310).pushLazy;
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
  sourceQuestContent(6310);
  const tmp9 = questId(2119)(16389, dependencyMap.paths);
  const obj4 = questId(10495);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
