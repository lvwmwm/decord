// Module ID: 16480
// Function ID: 16481
// Name: openHexagonCampaignLearnMore
// Dependencies: [5039, 5709, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16480 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import LinkingDefault from "Linking" /* 5709 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
