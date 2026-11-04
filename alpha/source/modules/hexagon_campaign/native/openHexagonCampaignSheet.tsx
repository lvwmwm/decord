// Module ID: 17252
// Function ID: 17253
// Name: openHexagonCampaignSheet
// Dependencies: [5382, 17253, 2123, 2]
// Exports: openHexagonCampaignSheet

// Module 17252 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17253, dependencyMap.paths), HexagonCampaignSheet);
}
