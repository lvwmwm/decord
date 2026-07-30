// Module ID: 14028
// Function ID: 14029
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4395, 14029, 1959, 2]

// Module 14028 (BOUNTIES_MODAL_KEY)
const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(14029, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    importDefault(4395).popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
