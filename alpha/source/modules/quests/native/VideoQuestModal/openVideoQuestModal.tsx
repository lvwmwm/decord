// Module ID: 16545
// Function ID: 16546
// Name: openVideoQuestModal
// Dependencies: [8224, 16538, 1268, 6004, 16546, 2119, 9848, 2]
// Exports: default

// Module 16545 (openVideoQuestModal)
import v1All from "v1" /* 1268 */;
import VideoQuestUtils from "VideoQuestUtils" /* 9848 */;
import QuestStore from "QuestStore" /* 8224 */;
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
      sourceQuestContent(16538)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6004).pushLazy;
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
  sourceQuestContent(6004);
  const tmp9 = questId(2119)(16546, dependencyMap.paths);
  const obj4 = questId(9848);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
