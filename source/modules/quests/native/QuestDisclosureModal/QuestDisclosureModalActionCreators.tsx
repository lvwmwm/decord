// Module ID: 14054
// Function ID: 107543
// Dependencies: [6964, 9485, 9486, 9487, 6969, 6958, 4337, 14055, 1934, 2]

// Module 14054
let result = require("emitClickEventWithCreative").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require(6964) /* _createForOfIteratorHelperLoose */;
    let obj1 = require(9485) /* apexExperiment */;
    if (obj1.shouldMigrateToAdAnalyticsInterface(require(9485) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmp2Result = tmp2(9486);
      obj = { type: tmp2(9487).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp2(6969).AdCreativeType.QUEST, adCreativeId: quest.id };
      ({ ctaContent: obj6.questContentCTA, content: obj6.surfaceId, sourceQuestContent: obj6.sourceQuestContent, position: obj6.questContentPosition } = trackingCtx);
      tmp2Result.captureAdUserAction(obj);
    } else {
      tmp2Result = tmp2(6958);
      obj = { questId: quest.id };
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result = tmp2Result.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = importDefault(4337);
    if (null != cosponsorMetadata) {
      name = cosponsorMetadata.name;
    }
    obj1.cosponsorName = name;
    obj1.isVideoQuest = hasWatchVideoTasksResult;
    obj7.pushLazy(require(1934) /* maybeLoadBundle */(14055, dependencyMap.paths), obj1, "QUEST_DISCLOSURE_MODAL");
  },
  hideModal() {
    importDefault(4337).popWithKey("QUEST_DISCLOSURE_MODAL");
  }
};
