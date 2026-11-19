// Module ID: 19419
// Function ID: 19420
// Name: openStageAudienceSheet
// Dependencies: [6379, 5006, 10842, 2121, 2]
// Exports: default

// Module 19419 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6379 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10842, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
