// Module ID: 15751
// Function ID: 15752
// Name: openHexagonCampaignLearnMore
// Dependencies: [4819, 5473, 2]
// Exports: openHexagonCampaignLearnMore

// Module 15751 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4819 */;
import LinkingDefault from "Linking" /* 5473 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
