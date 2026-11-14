// Module ID: 17104
// Function ID: 17105
// Name: openHexagonCampaignLearnMore
// Dependencies: [5331, 6012, 2]
// Exports: openHexagonCampaignLearnMore

// Module 17104 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5331 */;
import LinkingDefault from "Linking" /* 6012 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
