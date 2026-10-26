// Module ID: 16377
// Function ID: 16378
// Name: openHexagonCampaignSheet
// Dependencies: [5210, 16378, 2002, 2]
// Exports: openHexagonCampaignSheet

// Module 16377 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16378, dependencyMap.paths), HexagonCampaignSheet);
};
