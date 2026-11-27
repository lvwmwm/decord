// Module ID: 16706
// Function ID: 16707
// Name: QuestDisclosureModalActionCreators
// Dependencies: [6878, 8390, 9858, 9862, 16695, 6130, 16707, 2120, 2]

// Module 16706 (QuestDisclosureModalActionCreators)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import AdCreativeType from "AdCreativeType" /* 6878 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8390 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9858 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9862 */;
import AdCreativeUtils from "AdCreativeUtils" /* 16695 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let obj = {
  showModal(isTargetedDisclosure) {
    let creative;
    let gamePublisher;
    let gameTitle;
    let name;
    let tmp8;
    let tmpResult;
    let trackingCtx;
    ({ creative, trackingCtx } = isTargetedDisclosure);
    isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    const tmp3 = captureAdUserAction2;
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const captureAdUserAction = tmp3.captureAdUserAction;
    const obj2 = AdCreativeUtils;
    const merged = Object.assign(obj2.getCreativeAnalyticsParams(creative));
    ({ ctaContent: obj.questContentCTA, content: obj.surfaceId, sourceQuestContent: obj.sourceQuestContent, position: obj.questContentPosition } = trackingCtx);
    captureAdUserAction(obj);
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const type = creative.type;
    ModalActionCreatorsDefault;
    const tmp7 = asyncRequire(16707, dependencyMap.paths);
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj3 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, gamePublisher, gameTitle, cosponsorName: name, isVideoQuest: tmpResult.hasWatchVideoTasks(creative.quest) };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      name = undefined;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      tmp8 = obj3;
      tmpResult = QuestTaskUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      tmp8 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      const obj4 = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      tmp8 = { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, gamePublisher: creative.playable.advertiserName };
      const obj5 = { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, gamePublisher: creative.playable.advertiserName };
    }
    const obj6 = { isTargetedDisclosure };
    const merged1 = Object.assign(tmp8);
    pushLazy(tmp7, obj6, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default obj;
