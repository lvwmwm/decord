// Module ID: 15882
// Function ID: 15883
// Name: openHexagonCampaignLearnMore
// Dependencies: [4938, 5592, 2]
// Exports: openHexagonCampaignLearnMore

// Module 15882 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4938 */;
import LinkingDefault from "Linking" /* 5592 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
