// Module ID: 14163
// Function ID: 14164
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4490, 14164, 1988, 2]

// Module 14163 (BOUNTIES_MODAL_KEY)
const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(14164, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    importDefault(4490).popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
