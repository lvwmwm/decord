// Module ID: 16411
// Function ID: 16412
// Name: openHexagonCampaignSheet
// Dependencies: [5242, 16412, 2002, 2]
// Exports: openHexagonCampaignSheet

// Module 16411 (openHexagonCampaignSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const HexagonCampaignSheet = "HexagonCampaignSheet";
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/openHexagonCampaignSheet.tsx");

export const HEXAGON_CAMPAIGN_SHEET_KEY = "HexagonCampaignSheet";
export const openHexagonCampaignSheet = function openHexagonCampaignSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16412, dependencyMap.paths), HexagonCampaignSheet);
};
