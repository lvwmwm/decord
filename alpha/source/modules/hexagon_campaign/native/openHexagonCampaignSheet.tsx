// Module ID: 16457
// Function ID: 16458
// Name: openHexagonCampaignSheet
// Dependencies: [5006, 16458, 2121, 2]
// Exports: openHexagonCampaignSheet

// Module 16457 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16458, dependencyMap.paths), HexagonCampaignSheet);
}
