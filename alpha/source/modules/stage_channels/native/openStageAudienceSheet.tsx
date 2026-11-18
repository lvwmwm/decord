// Module ID: 19423
// Function ID: 19424
// Name: openStageAudienceSheet
// Dependencies: [6408, 5037, 10864, 2121, 2]
// Exports: default

// Module 19423 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6408 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10864, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
