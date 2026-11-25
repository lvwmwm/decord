// Module ID: 16666
// Function ID: 16667
// Name: openVideoQuestModal
// Dependencies: [8323, 16659, 1268, 6099, 16667, 2119, 9947, 2]
// Exports: default

// Module 16666 (openVideoQuestModal)
import v1All from "v1" /* 1268 */;
import VideoQuestUtils from "VideoQuestUtils" /* 9947 */;
import QuestStore from "QuestStore" /* 8323 */;
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
      sourceQuestContent(16659)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(6099).pushLazy;
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
  sourceQuestContent(6099);
  const tmp9 = questId(2119)(16667, dependencyMap.paths);
  const obj4 = questId(9947);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
