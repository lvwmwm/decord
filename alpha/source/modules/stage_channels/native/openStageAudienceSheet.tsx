// Module ID: 19950
// Function ID: 19951
// Name: openStageAudienceSheet
// Dependencies: [6843, 5489, 12861, 2118, 2]
// Exports: default

// Module 19950 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6843 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12861, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
