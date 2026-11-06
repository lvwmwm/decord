// Module ID: 17365
// Function ID: 17366
// Name: openVideoQuestModal
// Dependencies: [7945, 17358, 1266, 6824, 17366, 2118, 14886, 2]
// Exports: default

// Module 17365 (openVideoQuestModal)
import v1All from "v1" /* 1266 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14886 */;
import QuestStore from "QuestStore" /* 7945 */;
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
      sourceQuestContent(17358)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6824).pushLazy;
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
  sourceQuestContent(6824);
  const tmp9 = questId(2118)(17366, dependencyMap.paths);
  const obj4 = questId(14886);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
