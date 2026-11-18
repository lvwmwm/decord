// Module ID: 15796
// Function ID: 15797
// Name: openHexagonCampaignLearnMore
// Dependencies: [4848, 5502, 2]
// Exports: openHexagonCampaignLearnMore

// Module 15796 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4848 */;
import LinkingDefault from "Linking" /* 5502 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
