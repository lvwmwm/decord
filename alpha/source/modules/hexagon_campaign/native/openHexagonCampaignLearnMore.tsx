// Module ID: 16787
// Function ID: 16788
// Name: openHexagonCampaignLearnMore
// Dependencies: [5165, 5834, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16787 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5165 */;
import LinkingDefault from "Linking" /* 5834 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
