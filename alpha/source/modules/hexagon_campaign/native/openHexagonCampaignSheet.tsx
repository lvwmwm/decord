// Module ID: 16354
// Function ID: 16355
// Name: openHexagonCampaignSheet
// Dependencies: [5208, 16355, 2002, 2]
// Exports: openHexagonCampaignSheet

// Module 16354 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16355, dependencyMap.paths), HexagonCampaignSheet);
};
