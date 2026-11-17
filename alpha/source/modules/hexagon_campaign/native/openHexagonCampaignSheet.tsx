// Module ID: 17664
// Function ID: 17665
// Name: openHexagonCampaignSheet
// Dependencies: [5546, 17665, 2121, 2]
// Exports: openHexagonCampaignSheet

// Module 17664 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17665, dependencyMap.paths), HexagonCampaignSheet);
}
