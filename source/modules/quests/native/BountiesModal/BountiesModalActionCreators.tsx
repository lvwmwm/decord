// Module ID: 13967
// Function ID: 106842
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4338, 13968, 1935, 2]

// Module 13967 (BOUNTIES_MODAL_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(13968, dependencyMap.paths), { bountyId, sourceQuestContent }, "BOUNTIES_MODAL");
  },
  hideModal() {
    importDefault(4338).popWithKey("BOUNTIES_MODAL");
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
