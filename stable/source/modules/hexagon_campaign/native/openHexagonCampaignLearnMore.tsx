// Module ID: 16827
// Function ID: 16828
// Name: openHexagonCampaignLearnMore
// Dependencies: [5195, 5866, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16827 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import LinkingDefault from "Linking" /* 5866 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
}
