// Module ID: 14643
// Function ID: 14644
// Name: openVideoQuestModal
// Dependencies: [7120, 14637, 1267, 5040, 14644, 1987, 10699, 2]
// Exports: default

// Module 14643 (openVideoQuestModal)
import v1All from "v1" /* 1267 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10699 */;
import QuestStore from "QuestStore" /* 7120 */;
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
      sourceQuestContent(14637)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(5040).pushLazy;
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
  sourceQuestContent(5040);
  const tmp9 = questId(1987)(14644, dependencyMap.paths);
  const obj4 = questId(10699);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
