// Module ID: 15380
// Function ID: 15381
// Name: openVideoQuestModal
// Dependencies: [7944, 15374, 1259, 4961, 15381, 1984, 11636, 2]
// Exports: default

// Module 15380 (openVideoQuestModal)
import v1All from "v1" /* 1259 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11636 */;
import QuestStore from "QuestStore" /* 7944 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
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
      sourceQuestContent(15374)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  obj = QuestStore;
  const obj3 = sourceQuestContent(4961);
  const obj4 = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      return VideoQuestUtils.handleVideoQuestModalClose({ questId, sourceQuestContent, videoSessionId: v4Result });
    },
    sourceQuestContent
  };
  const tmp8 = questId(1984)(15381, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj4, questId(11636).getVideoQuestModalKey(questId));
};
