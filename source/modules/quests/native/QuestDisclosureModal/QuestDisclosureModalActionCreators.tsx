// Module ID: 14110
// Function ID: 107848
// Dependencies: [5989, 8421, 8422, 8426, 5994, 5983, 4372, 14111, 1935, 2]

// Module 14110
let result = require("emitClickEventWithCreative").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require(5989) /* _createForOfIteratorHelperLoose */;
    let obj1 = require(8421) /* apexExperiment */;
    if (obj1.shouldMigrateToAdAnalyticsInterface(require(8421) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmp2Result = tmp2(8422);
      obj = { type: tmp2(8426).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp2(5994).AdCreativeType.QUEST, adCreativeId: quest.id };
      ({ ctaContent: obj6.questContentCTA, content: obj6.surfaceId, sourceQuestContent: obj6.sourceQuestContent, position: obj6.questContentPosition } = trackingCtx);
      tmp2Result.captureAdUserAction(obj);
    } else {
      tmp2Result = tmp2(5983);
      obj = { questId: quest.id };
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result = tmp2Result.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = importDefault(4372);
    if (null != cosponsorMetadata) {
      name = cosponsorMetadata.name;
    }
    obj1.cosponsorName = name;
    obj1.isVideoQuest = hasWatchVideoTasksResult;
    obj7.pushLazy(require(1935) /* maybeLoadBundle */(14111, dependencyMap.paths), obj1, "QUEST_DISCLOSURE_MODAL");
  },
  hideModal() {
    importDefault(4372).popWithKey("QUEST_DISCLOSURE_MODAL");
  }
};
