// Module ID: 16385
// Function ID: 16386
// Name: openVideoQuestModal
// Dependencies: [7761, 16378, 1281, 6657, 16386, 2002, 14079, 2]
// Exports: default

// Module 16385 (openVideoQuestModal)
import v1All from "v1" /* 1281 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14079 */;
import QuestStore from "QuestStore" /* 7761 */;
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
      sourceQuestContent(16378)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6657).pushLazy;
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
  sourceQuestContent(6657);
  const tmp9 = questId(2002)(16386, dependencyMap.paths);
  const obj4 = questId(14079);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
