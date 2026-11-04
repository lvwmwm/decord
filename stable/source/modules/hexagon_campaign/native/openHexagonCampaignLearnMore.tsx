// Module ID: 15908
// Function ID: 15909
// Name: openHexagonCampaignLearnMore
// Dependencies: [5028, 5692, 2]
// Exports: openHexagonCampaignLearnMore

// Module 15908 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import LinkingDefault from "Linking" /* 5692 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export const openHexagonCampaignLearnMore = function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
};
