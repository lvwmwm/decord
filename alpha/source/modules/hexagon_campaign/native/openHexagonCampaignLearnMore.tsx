// Module ID: 16375
// Function ID: 16376
// Name: openHexagonCampaignLearnMore
// Dependencies: [5030, 5698, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16375 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5030 */;
import LinkingDefault from "Linking" /* 5698 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
