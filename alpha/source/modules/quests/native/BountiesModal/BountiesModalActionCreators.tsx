// Module ID: 16529
// Function ID: 16530
// Name: BountiesModalActionCreators
// Dependencies: [6130, 16530, 2120, 2]

// Module 16529 (BountiesModalActionCreators)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
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
    obj.pushLazy(asyncRequire(16530, dependencyMap.paths), { bountyId, sourceQuestContent, variant, bounty }, BOUNTIES_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(BOUNTIES_MODAL);
  }
};
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default obj;
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
