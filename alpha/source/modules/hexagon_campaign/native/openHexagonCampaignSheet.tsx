// Module ID: 17276
// Function ID: 17277
// Name: openHexagonCampaignSheet
// Dependencies: [5384, 17277, 2123, 2]
// Exports: openHexagonCampaignSheet

// Module 17276 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17277, dependencyMap.paths), HexagonCampaignSheet);
}
