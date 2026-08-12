// Module ID: 14314
// Function ID: 14315
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4549, 14315, 2007, 2]

// Module 14314 (BOUNTIES_MODAL_KEY)
const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(14315, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    importDefault(4549).popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
