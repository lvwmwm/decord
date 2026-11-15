// Module ID: 17355
// Function ID: 17356
// Name: openHexagonCampaignSheet
// Dependencies: [5406, 17356, 2118, 2]
// Exports: openHexagonCampaignSheet

// Module 17355 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17356, dependencyMap.paths), HexagonCampaignSheet);
}
