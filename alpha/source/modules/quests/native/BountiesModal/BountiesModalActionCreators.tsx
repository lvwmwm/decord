// Module ID: 16048
// Function ID: 16049
// Name: BountiesModalActionCreators
// Dependencies: [6190, 16049, 2002, 2]

// Module 16048 (BountiesModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
let obj = {
  showModal(arg0) {
    let bounty;
    let bountyId;
    let sourceQuestContent;
    let variant;
    ({ bountyId, sourceQuestContent, variant, bounty } = arg0);
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(16049, dependencyMap.paths), { bountyId, sourceQuestContent, variant, bounty }, BOUNTIES_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(BOUNTIES_MODAL);
  }
};
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default obj;
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
