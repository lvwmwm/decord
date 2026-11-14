// Module ID: 17626
// Function ID: 17627
// Name: openHexagonCampaignSheet
// Dependencies: [5552, 17627, 2121, 2]
// Exports: openHexagonCampaignSheet

// Module 17626 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17627, dependencyMap.paths), HexagonCampaignSheet);
}
