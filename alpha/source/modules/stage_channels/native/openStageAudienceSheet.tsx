// Module ID: 19239
// Function ID: 19240
// Name: openStageAudienceSheet
// Dependencies: [6381, 5008, 10784, 2119, 2]
// Exports: default

// Module 19239 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6381 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10784, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
