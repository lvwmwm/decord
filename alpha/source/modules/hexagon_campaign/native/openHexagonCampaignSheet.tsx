// Module ID: 17005
// Function ID: 17006
// Name: openHexagonCampaignSheet
// Dependencies: [5258, 17006, 1994, 2]
// Exports: openHexagonCampaignSheet

// Module 17005 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17006, dependencyMap.paths), HexagonCampaignSheet);
}
