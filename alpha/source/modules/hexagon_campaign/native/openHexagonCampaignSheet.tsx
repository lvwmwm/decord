// Module ID: 16466
// Function ID: 16467
// Name: openHexagonCampaignSheet
// Dependencies: [5037, 16467, 2121, 2]
// Exports: openHexagonCampaignSheet

// Module 16466 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16467, dependencyMap.paths), HexagonCampaignSheet);
}
