// Module ID: 17628
// Function ID: 17629
// Name: openHexagonCampaignSheet
// Dependencies: [5542, 17629, 2121, 2]
// Exports: openHexagonCampaignSheet

// Module 17628 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17629, dependencyMap.paths), HexagonCampaignSheet);
}
