// Module ID: 19377
// Function ID: 19378
// Name: openStageAudienceSheet
// Dependencies: [6500, 5127, 10909, 2119, 2]
// Exports: default

// Module 19377 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6500 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10909, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
