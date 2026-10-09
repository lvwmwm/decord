// Module ID: 15303
// Function ID: 15304
// Name: QuestDisclosureModalActionCreators
// Dependencies: [5986, 7406, 15292, 7421, 7410, 7420, 7400, 5941, 15304, 2000, 2]

// Module 15303 (QuestDisclosureModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import AnalyticsActions from "AnalyticsActions" /* 7400 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7406 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7410 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7420 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7421 */;
import AdCreativeUtils from "AdCreativeUtils" /* 15292 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let obj = {
  showModal(isTargetedDisclosure) {
    let creative;
    let gamePublisher;
    let gameTitle;
    let name;
    let tmp13;
    let tmpResult6;
    let trackingCtx;
    ({ creative, trackingCtx } = isTargetedDisclosure);
    isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    const obj = AdCreativeUtils;
    const creativeAnalyticsParams = obj.getCreativeAnalyticsParams(creative);
    const obj2 = AdAnalyticsInterfaceExperiment;
    const tmp2 = dependencyMap;
    if (obj2.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      const merged = Object.assign(creativeAnalyticsParams);
      ({ ctaContent: obj7.questContentCTA, content: obj7.surfaceId, sourceQuestContent: obj7.sourceQuestContent, position: obj7.questContentPosition } = trackingCtx);
      captureAdUserAction(obj3);
    } else if (creativeAnalyticsParams.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const obj5 = { questId: creativeAnalyticsParams.adCreativeId, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ content: obj6.questContent, ctaContent: obj6.questContentCTA, position: obj6.questContentPosition, sourceQuestContent: obj6.sourceQuestContent } = trackingCtx);
      const tmpResult4 = AnalyticsActions;
      const result = tmpResult4.trackQuestContentClicked(obj5);
    } else {
      const obj8 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ adCreativeId: obj4.adContentId, adCreativeType: obj4.adCreativeType } = creativeAnalyticsParams);
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const tmpResult5 = AnalyticsActions;
      const result1 = tmpResult5.trackAdContentClicked(obj8);
    }
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const type = creative.type;
    ModalActionCreatorsDefault;
    const tmp12 = asyncRequire(15304, tmp2.paths);
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj9 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, gamePublisher, gameTitle, cosponsorName: name, isVideoQuest: tmpResult6.hasWatchVideoTasks(creative.quest) };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      name = undefined;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      tmp13 = obj9;
      tmpResult6 = QuestTaskUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      tmp13 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      const obj10 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
    }
    const obj11 = { isTargetedDisclosure };
    const merged1 = Object.assign(tmp13);
    pushLazy(tmp12, obj11, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};
let result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default obj;
