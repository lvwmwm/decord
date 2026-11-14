// Module ID: 20102
// Function ID: 20103
// Name: openStageAudienceSheet
// Dependencies: [6906, 5552, 12951, 2121, 2]
// Exports: default

// Module 20102 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6906 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12951, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
