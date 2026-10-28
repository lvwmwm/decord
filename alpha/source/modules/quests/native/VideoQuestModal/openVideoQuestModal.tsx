// Module ID: 16740
// Function ID: 16741
// Name: openVideoQuestModal
// Dependencies: [7811, 16733, 1278, 6707, 16741, 1999, 14365, 2]
// Exports: default

// Module 16740 (openVideoQuestModal)
import v1All from "v1" /* 1278 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14365 */;
import QuestStore from "QuestStore" /* 7811 */;
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
      sourceQuestContent(16733)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6707).pushLazy;
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
  sourceQuestContent(6707);
  const tmp9 = questId(1999)(16741, dependencyMap.paths);
  const obj4 = questId(14365);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
