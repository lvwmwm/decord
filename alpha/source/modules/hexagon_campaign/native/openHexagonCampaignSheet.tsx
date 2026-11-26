// Module ID: 16607
// Function ID: 16608
// Name: openHexagonCampaignSheet
// Dependencies: [5257, 16608, 2120, 2]
// Exports: openHexagonCampaignSheet

// Module 16607 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16608, dependencyMap.paths), HexagonCampaignSheet);
}
