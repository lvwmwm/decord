// Module ID: 14128
// Function ID: 14129
// Dependencies: [6006, 8442, 8443, 8447, 6011, 6000, 4395, 14129, 1959, 2]

// Module 14128
const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = require("emitClickEventWithCreative").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    let gamePublisher;
    let gameTitle;
    let quest;
    let trackingCtx;
    ({ quest, trackingCtx } = isTargetedDisclosure);
    ({ gamePublisher, gameTitle } = quest.config.messages);
    let obj = require(6006) /* getApplicationIdsByTaskTypes */;
    let obj1 = require(8442) /* apexExperiment */;
    if (obj1.shouldMigrateToAdAnalyticsInterface(require(8442) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      let tmpResult = tmp(8443);
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null };
      obj[0] = tmp(8447).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(6011).AdCreativeType.QUEST;
      obj[2] = quest.id;
      ({ ctaContent: obj6[3], content: obj6[4], sourceQuestContent: obj6[5], position: obj6[6] } = trackingCtx);
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = tmp(6000);
      obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      obj[0] = quest.id;
      ({ content: obj4[1], ctaContent: obj4[2], position: obj4[3], sourceQuestContent: obj4[4] } = trackingCtx);
      const result = tmpResult.trackQuestContentClicked(obj);
    }
    const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(quest);
    const tmp2 = dependencyMap;
    obj1 = { gamePublisher, gameTitle, isTargetedDisclosure: isTargetedDisclosure.isTargetedDisclosure, cosponsorName: null, isVideoQuest: null };
    const cosponsorMetadata = quest.config.cosponsorMetadata;
    let name;
    const obj7 = importDefault(4395);
    if (cosponsorMetadata != null) {
      name = cosponsorMetadata.name;
    }
    obj1[3] = name;
    obj1[4] = hasWatchVideoTasksResult;
    obj7.pushLazy(require(1959) /* asyncRequireImpl */(14129, tmp2.paths), obj1, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    importDefault(4395).popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};
