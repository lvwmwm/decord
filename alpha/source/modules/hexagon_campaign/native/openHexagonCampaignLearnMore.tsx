// Module ID: 16739
// Function ID: 16740
// Name: openHexagonCampaignLearnMore
// Dependencies: [5195, 5864, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16739 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import LinkingDefault from "Linking" /* 5864 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
