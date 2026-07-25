// Module ID: 14065
// Function ID: 107670
// Dependencies: [5955, 9406, 9407, 9408, 5960, 5949, 4338, 14066, 1935, 2]

// Module 14065
let result = require("emitClickEventWithCreative").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require(5955) /* _createForOfIteratorHelperLoose */;
    let obj1 = require(9406) /* apexExperiment */;
    if (obj1.shouldMigrateToAdAnalyticsInterface(require(9406) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmp2Result = tmp2(9407);
      obj = { type: tmp2(9408).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp2(5960).AdCreativeType.QUEST, adCreativeId: quest.id };
      ({ ctaContent: obj6.questContentCTA, content: obj6.surfaceId, sourceQuestContent: obj6.sourceQuestContent, position: obj6.questContentPosition } = trackingCtx);
      tmp2Result.captureAdUserAction(obj);
    } else {
      tmp2Result = tmp2(5949);
      obj = { questId: quest.id };
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result = tmp2Result.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = importDefault(4338);
    if (null != cosponsorMetadata) {
      name = cosponsorMetadata.name;
    }
    obj1.cosponsorName = name;
    obj1.isVideoQuest = hasWatchVideoTasksResult;
    obj7.pushLazy(require(1935) /* maybeLoadBundle */(14066, dependencyMap.paths), obj1, "QUEST_DISCLOSURE_MODAL");
  },
  hideModal() {
    importDefault(4338).popWithKey("QUEST_DISCLOSURE_MODAL");
  }
};
