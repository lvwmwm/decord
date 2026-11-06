// Module ID: 17264
// Function ID: 17265
// Name: openHexagonCampaignSheet
// Dependencies: [5404, 17265, 2118, 2]
// Exports: openHexagonCampaignSheet

// Module 17264 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17265, dependencyMap.paths), HexagonCampaignSheet);
}
