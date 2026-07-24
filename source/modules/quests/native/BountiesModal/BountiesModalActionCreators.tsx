// Module ID: 13956
// Function ID: 106715
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4337, 13957, 1934, 2]

// Module 13956 (BOUNTIES_MODAL_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    let bountyId;
    let sourceQuestContent;
    ({ bountyId, sourceQuestContent } = arg0);
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(13957, dependencyMap.paths), { bountyId, sourceQuestContent }, "BOUNTIES_MODAL");
  },
  hideModal() {
    importDefault(4337).popWithKey("BOUNTIES_MODAL");
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
