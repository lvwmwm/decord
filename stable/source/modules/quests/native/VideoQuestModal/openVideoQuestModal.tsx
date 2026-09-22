// Module ID: 15205
// Function ID: 15206
// Name: openVideoQuestModal
// Dependencies: [7805, 15199, 1254, 4839, 15206, 1896, 11649, 2]
// Exports: default

// Module 15205 (openVideoQuestModal)
import v1All from "v1" /* 1254 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11649 */;
import QuestStore from "QuestStore" /* 7805 */;

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
      sourceQuestContent(15199)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  obj = QuestStore;
  const obj3 = sourceQuestContent(4839);
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
  const tmp8 = questId(1896)(15206, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj4, questId(11649).getVideoQuestModalKey(questId));
};
