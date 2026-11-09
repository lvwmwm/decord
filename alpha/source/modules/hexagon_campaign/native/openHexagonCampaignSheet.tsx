// Module ID: 17323
// Function ID: 17324
// Name: openHexagonCampaignSheet
// Dependencies: [5374, 17324, 2118, 2]
// Exports: openHexagonCampaignSheet

// Module 17323 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17324, dependencyMap.paths), HexagonCampaignSheet);
}
