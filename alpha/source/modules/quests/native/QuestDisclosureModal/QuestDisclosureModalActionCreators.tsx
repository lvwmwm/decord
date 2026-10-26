// Module ID: 16456
// Function ID: 16457
// Name: QuestDisclosureModalActionCreators
// Dependencies: [6717, 7798, 9573, 9576, 16447, 6672, 16457, 2002, 2]

// Module 16456 (QuestDisclosureModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import AdCreativeType from "AdCreativeType" /* 6717 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7798 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9573 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9576 */;
import AdCreativeUtils from "AdCreativeUtils" /* 16447 */;
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
    const tmp7 = asyncRequire(16457, dependencyMap.paths);
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
    }
    const obj5 = { isTargetedDisclosure };
    const merged1 = Object.assign(tmp8);
    pushLazy(tmp7, obj5, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default obj;
