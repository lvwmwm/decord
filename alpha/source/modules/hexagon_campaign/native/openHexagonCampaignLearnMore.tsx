// Module ID: 16430
// Function ID: 16431
// Name: openHexagonCampaignLearnMore
// Dependencies: [5034, 5704, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16430 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import LinkingDefault from "Linking" /* 5704 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
