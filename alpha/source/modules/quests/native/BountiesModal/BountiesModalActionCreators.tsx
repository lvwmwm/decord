// Module ID: 16317
// Function ID: 16318
// Name: BountiesModalActionCreators
// Dependencies: [6429, 16318, 2119, 2]

// Module 16317 (BountiesModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
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
    obj.pushLazy(asyncRequire(16318, dependencyMap.paths), { bountyId, sourceQuestContent, variant, bounty }, BOUNTIES_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(BOUNTIES_MODAL);
  }
};
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default obj;
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
