// Module ID: 16556
// Function ID: 16557
// Name: openHexagonCampaignSheet
// Dependencies: [5226, 16557, 2119, 2]
// Exports: openHexagonCampaignSheet

// Module 16556 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16557, dependencyMap.paths), HexagonCampaignSheet);
}
