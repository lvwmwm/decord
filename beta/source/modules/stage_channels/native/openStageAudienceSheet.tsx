// Module ID: 19767
// Function ID: 19768
// Name: openStageAudienceSheet
// Dependencies: [6796, 5406, 12087, 2118, 2]
// Exports: default

// Module 19767 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6796 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12087, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
