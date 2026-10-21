// Module ID: 16292
// Function ID: 16293
// Name: openVideoQuestModal
// Dependencies: [7751, 16285, 1281, 6651, 16293, 2002, 14029, 2]
// Exports: default

// Module 16292 (openVideoQuestModal)
import v1All from "v1" /* 1281 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14029 */;
import QuestStore from "QuestStore" /* 7751 */;
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
      sourceQuestContent(16285)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6651).pushLazy;
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
  sourceQuestContent(6651);
  const tmp9 = questId(2002)(16293, dependencyMap.paths);
  const obj4 = questId(14029);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
