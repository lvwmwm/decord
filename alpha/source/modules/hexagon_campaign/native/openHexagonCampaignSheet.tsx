// Module ID: 16416
// Function ID: 16417
// Name: openHexagonCampaignSheet
// Dependencies: [5211, 16417, 1999, 2]
// Exports: openHexagonCampaignSheet

// Module 16416 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16417, dependencyMap.paths), HexagonCampaignSheet);
};
