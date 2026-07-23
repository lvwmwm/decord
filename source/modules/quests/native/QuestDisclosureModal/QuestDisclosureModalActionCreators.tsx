// Module ID: 14004
// Function ID: 107220
// Dependencies: [6965, 9449, 9450, 9451, 6970, 6959, 4337, 14005, 1934, 2]

// Module 14004
let result = require("emitClickEventWithCreative").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require(6965) /* _createForOfIteratorHelperLoose */;
    let obj1 = require(9449) /* apexExperiment */;
    if (obj1.shouldMigrateToAdAnalyticsInterface(require(9449) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmp2Result = tmp2(9450);
      obj = { type: tmp2(9451).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp2(6970).AdCreativeType.QUEST, adCreativeId: quest.id };
      ({ ctaContent: obj6.questContentCTA, content: obj6.surfaceId, sourceQuestContent: obj6.sourceQuestContent, position: obj6.questContentPosition } = trackingCtx);
      tmp2Result.captureAdUserAction(obj);
    } else {
      tmp2Result = tmp2(6959);
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
    obj7.pushLazy(require(1934) /* maybeLoadBundle */(14005, dependencyMap.paths), obj1, "QUEST_DISCLOSURE_MODAL");
  },
  hideModal() {
    importDefault(4337).popWithKey("QUEST_DISCLOSURE_MODAL");
  }
};
