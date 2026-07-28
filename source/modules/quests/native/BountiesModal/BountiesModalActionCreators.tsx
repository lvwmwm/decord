// Module ID: 14012
// Function ID: 107020
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4372, 14013, 1935, 2]

// Module 14012 (BOUNTIES_MODAL_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(14013, dependencyMap.paths), { bountyId, sourceQuestContent }, "BOUNTIES_MODAL");
  },
  hideModal() {
    importDefault(4372).popWithKey("BOUNTIES_MODAL");
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
