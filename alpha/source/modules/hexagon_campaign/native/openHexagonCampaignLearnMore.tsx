// Module ID: 16138
// Function ID: 16139
// Name: openHexagonCampaignLearnMore
// Dependencies: [5029, 5696, 2]
// Exports: openHexagonCampaignLearnMore

// Module 16138 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import LinkingDefault from "Linking" /* 5696 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export const openHexagonCampaignLearnMore = function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
};
