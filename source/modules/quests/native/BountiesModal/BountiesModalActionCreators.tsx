// Module ID: 14327
// Function ID: 14328
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4572, 14328, 2007, 2]

// Module 14327 (BOUNTIES_MODAL_KEY)
const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(14328, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    importDefault(4572).popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
