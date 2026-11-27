// Module ID: 16614
// Function ID: 16615
// Name: openHexagonCampaignSheet
// Dependencies: [5257, 16615, 2120, 2]
// Exports: openHexagonCampaignSheet

// Module 16614 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16615, dependencyMap.paths), HexagonCampaignSheet);
}
