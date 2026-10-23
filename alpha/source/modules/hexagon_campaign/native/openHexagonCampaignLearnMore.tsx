// Module ID: 15845
// Function ID: 15846
// Name: openHexagonCampaignLearnMore
// Dependencies: [4994, 5658, 2]
// Exports: openHexagonCampaignLearnMore

// Module 15845 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4994 */;
import LinkingDefault from "Linking" /* 5658 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export const openHexagonCampaignLearnMore = function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
};
