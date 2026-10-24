// Module ID: 15869
// Function ID: 15870
// Name: openHexagonCampaignLearnMore
// Dependencies: [4996, 5660, 2]
// Exports: openHexagonCampaignLearnMore

// Module 15869 (openHexagonCampaignLearnMore)
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import LinkingDefault from "Linking" /* 5660 */;
import size from "module_2" /* 2 */;

let closure_2 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_LEARN_MORE_URL;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignLearnMore.tsx");

export const openHexagonCampaignLearnMore = function openHexagonCampaignLearnMore() {
  const obj = LinkingDefault;
  obj.openURL(closure_2);
};
