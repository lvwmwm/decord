// Module ID: 16164
// Function ID: 16165
// Name: openVideoQuestModal
// Dependencies: [7656, 16157, 1281, 6190, 16165, 2002, 13898, 2]
// Exports: default

// Module 16164 (openVideoQuestModal)
import v1All from "v1" /* 1281 */;
import VideoQuestUtils from "VideoQuestUtils" /* 13898 */;
import QuestStore from "QuestStore" /* 7656 */;
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
      sourceQuestContent(16157)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6190).pushLazy;
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
  sourceQuestContent(6190);
  const tmp9 = questId(2002)(16165, dependencyMap.paths);
  const obj4 = questId(13898);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
