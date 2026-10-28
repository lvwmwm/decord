// Module ID: 16644
// Function ID: 16645
// Name: openHexagonCampaignSheet
// Dependencies: [5246, 16645, 1999, 2]
// Exports: openHexagonCampaignSheet

// Module 16644 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16645, dependencyMap.paths), HexagonCampaignSheet);
};
