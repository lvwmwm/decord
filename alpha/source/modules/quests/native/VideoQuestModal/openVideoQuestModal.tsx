// Module ID: 15399
// Function ID: 15400
// Name: openVideoQuestModal
// Dependencies: [7942, 15393, 1255, 4960, 15400, 1980, 11771, 2]
// Exports: default

// Module 15399 (openVideoQuestModal)
import v1All from "v1" /* 1255 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11771 */;
import QuestStore from "QuestStore" /* 7942 */;

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
      sourceQuestContent(15393)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  obj = QuestStore;
  const obj3 = sourceQuestContent(4960);
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
  const tmp8 = questId(1980)(15400, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj4, questId(11771).getVideoQuestModalKey(questId));
};
