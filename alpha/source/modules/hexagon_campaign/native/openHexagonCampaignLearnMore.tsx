// Module ID: 16825
// Function ID: 16826
// Name: openHexagonCampaignLearnMore
// Dependencies: [5167, 5836, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16825 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5167 */;
import LinkingDefault from "Linking" /* 5836 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
