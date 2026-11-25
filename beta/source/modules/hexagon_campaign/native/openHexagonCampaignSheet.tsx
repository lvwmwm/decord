// Module ID: 16410
// Function ID: 16411
// Name: openHexagonCampaignSheet
// Dependencies: [5127, 16411, 2119, 2]
// Exports: openHexagonCampaignSheet

// Module 16410 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16411, dependencyMap.paths), HexagonCampaignSheet);
}
