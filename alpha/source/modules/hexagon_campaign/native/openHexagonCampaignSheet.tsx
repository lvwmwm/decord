// Module ID: 16882
// Function ID: 16883
// Name: openHexagonCampaignSheet
// Dependencies: [5247, 16883, 2000, 2]
// Exports: openHexagonCampaignSheet

// Module 16882 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16883, dependencyMap.paths), HexagonCampaignSheet);
}
