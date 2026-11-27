// Module ID: 16101
// Function ID: 16102
// Name: openHexagonCampaignLearnMore
// Dependencies: [5068, 5722, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16101 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5068 */;
import LinkingDefault from "Linking" /* 5722 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
