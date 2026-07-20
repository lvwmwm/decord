// Module ID: 13775
// Function ID: 104157
// Name: BOUNTIES_MODAL_KEY
// Dependencies: []

// Module 13775 (BOUNTIES_MODAL_KEY)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), { bountyId, sourceQuestContent }, "BOUNTIES_MODAL");
  },
  hideModal() {
    importDefault(dependencyMap[0]).popWithKey("BOUNTIES_MODAL");
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
