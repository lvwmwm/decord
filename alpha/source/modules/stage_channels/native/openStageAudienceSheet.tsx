// Module ID: 19521
// Function ID: 19522
// Name: openStageAudienceSheet
// Dependencies: [6769, 5226, 10280, 2119, 2]
// Exports: default

// Module 19521 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6769 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10280, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
