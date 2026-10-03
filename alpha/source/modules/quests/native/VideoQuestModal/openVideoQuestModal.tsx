// Module ID: 14924
// Function ID: 14925
// Name: openVideoQuestModal
// Dependencies: [7187, 14917, 1266, 5093, 14925, 1987, 10940, 2]
// Exports: default

// Module 14924 (openVideoQuestModal)
import v1All from "v1" /* 1266 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10940 */;
import QuestStore from "QuestStore" /* 7187 */;
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
      sourceQuestContent(14917)();
    }
  }
  let obj2 = v1All;
  const v4Result = obj2.v4();
  importAll = v4Result;
  const pushLazy = sourceQuestContent(5093).pushLazy;
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
  sourceQuestContent(5093);
  const tmp9 = questId(1987)(14925, dependencyMap.paths);
  const obj4 = questId(10940);
  return pushLazy(tmp9, obj3, obj4.getVideoQuestModalKey(questId));
};
