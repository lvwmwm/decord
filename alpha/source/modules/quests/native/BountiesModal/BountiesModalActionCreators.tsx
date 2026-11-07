// Module ID: 17228
// Function ID: 17229
// Name: BountiesModalActionCreators
// Dependencies: [6799, 17229, 2118, 2]

// Module 17228 (BountiesModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
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
    obj.pushLazy(asyncRequire(17229, dependencyMap.paths), { bountyId, sourceQuestContent, variant, bounty }, BOUNTIES_MODAL);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(BOUNTIES_MODAL);
  }
};
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default obj;
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
