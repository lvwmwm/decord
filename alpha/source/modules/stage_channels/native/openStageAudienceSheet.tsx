// Module ID: 19600
// Function ID: 19601
// Name: openStageAudienceSheet
// Dependencies: [6800, 5257, 10323, 2120, 2]
// Exports: default

// Module 19600 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6800 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10323, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
