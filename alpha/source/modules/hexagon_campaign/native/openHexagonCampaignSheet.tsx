// Module ID: 16279
// Function ID: 16280
// Name: openHexagonCampaignSheet
// Dependencies: [5008, 16280, 2119, 2]
// Exports: openHexagonCampaignSheet

// Module 16279 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16280, dependencyMap.paths), HexagonCampaignSheet);
}
