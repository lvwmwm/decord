// Module ID: 16435
// Function ID: 16436
// Name: openVideoQuestModal
// Dependencies: [7774, 16428, 1281, 6670, 16436, 2002, 14103, 2]
// Exports: default

// Module 16435 (openVideoQuestModal)
import v1All from "v1" /* 1281 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14103 */;
import QuestStore from "QuestStore" /* 7774 */;
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
      sourceQuestContent(16428)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6670).pushLazy;
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
  sourceQuestContent(6670);
  const tmp9 = questId(2002)(16436, dependencyMap.paths);
  const obj4 = questId(14103);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
