// Module ID: 16743
// Function ID: 16744
// Name: openHexagonCampaignLearnMore
// Dependencies: [5168, 5846, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16743 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5168 */;
import LinkingDefault from "Linking" /* 5846 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
