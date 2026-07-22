// Module ID: 13890
// Function ID: 105064
// Dependencies: [910884864, 131072, 528154624, 419430400, 2550136859, 3607101442, 3909091368, 3707764772, 671088676, 905969691]

// Module 13890
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require(dependencyMap[0]);
    let obj1 = require(dependencyMap[1]);
    if (obj1.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[1]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmp2Result = tmp2(tmp3[2]);
      obj = { type: tmp2(tmp3[3]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp2(tmp3[4]).AdCreativeType.QUEST, adCreativeId: quest.id };
      ({ ctaContent: obj6.questContentCTA, content: obj6.surfaceId, sourceQuestContent: obj6.sourceQuestContent, position: obj6.questContentPosition } = trackingCtx);
      tmp2Result.captureAdUserAction(obj);
    } else {
      tmp2Result = tmp2(tmp3[5]);
      obj = { questId: quest.id };
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result = tmp2Result.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = importDefault(dependencyMap[6]);
    if (null != cosponsorMetadata) {
      name = cosponsorMetadata.name;
    }
    obj1.cosponsorName = name;
    obj1.isVideoQuest = hasWatchVideoTasksResult;
    obj7.pushLazy(require(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), obj1, "QUEST_DISCLOSURE_MODAL");
  },
  hideModal() {
    importDefault(dependencyMap[6]).popWithKey("QUEST_DISCLOSURE_MODAL");
  }
};
