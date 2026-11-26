// Module ID: 17732
// Function ID: 17733
// Name: openVideoQuestModal
// Dependencies: [8808, 17725, 1269, 6838, 17733, 2121, 15251, 2]
// Exports: default

// Module 17732 (openVideoQuestModal)
import v1All from "v1" /* 1269 */;
import VideoQuestUtils from "VideoQuestUtils" /* 15251 */;
import QuestStore from "QuestStore" /* 8808 */;
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
      sourceQuestContent(17725)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6838).pushLazy;
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
  sourceQuestContent(6838);
  const tmp9 = questId(2121)(17733, dependencyMap.paths);
  const obj4 = questId(15251);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
