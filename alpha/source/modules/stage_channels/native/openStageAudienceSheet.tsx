// Module ID: 19758
// Function ID: 19759
// Name: openStageAudienceSheet
// Dependencies: [6766, 5376, 12064, 2118, 2]
// Exports: default

// Module 19758 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6766 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12064, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
