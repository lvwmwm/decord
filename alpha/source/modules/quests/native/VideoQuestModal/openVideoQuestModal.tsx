// Module ID: 15755
// Function ID: 15756
// Name: openVideoQuestModal
// Dependencies: [7397, 15748, 1279, 5939, 15756, 2000, 13497, 2]
// Exports: default

// Module 15755 (openVideoQuestModal)
import v1All from "v1" /* 1279 */;
import VideoQuestUtils from "VideoQuestUtils" /* 13497 */;
import QuestStore from "QuestStore" /* 7397 */;
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
      sourceQuestContent(15748)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(5939).pushLazy;
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
  sourceQuestContent(5939);
  const tmp9 = questId(2000)(15756, dependencyMap.paths);
  const obj4 = questId(13497);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
