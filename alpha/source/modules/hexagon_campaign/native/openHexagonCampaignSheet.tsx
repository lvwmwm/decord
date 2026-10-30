// Module ID: 16936
// Function ID: 16937
// Name: openHexagonCampaignSheet
// Dependencies: [5253, 16937, 1995, 2]
// Exports: openHexagonCampaignSheet

// Module 16936 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16937, dependencyMap.paths), HexagonCampaignSheet);
}
