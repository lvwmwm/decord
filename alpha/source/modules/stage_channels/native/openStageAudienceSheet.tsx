// Module ID: 19647
// Function ID: 19648
// Name: openStageAudienceSheet
// Dependencies: [6789, 5404, 12064, 2118, 2]
// Exports: default

// Module 19647 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6789 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12064, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
