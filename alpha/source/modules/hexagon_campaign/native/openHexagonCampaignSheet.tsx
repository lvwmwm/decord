// Module ID: 17240
// Function ID: 17241
// Name: openHexagonCampaignSheet
// Dependencies: [5382, 17241, 2123, 2]
// Exports: openHexagonCampaignSheet

// Module 17240 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17241, dependencyMap.paths), HexagonCampaignSheet);
}
