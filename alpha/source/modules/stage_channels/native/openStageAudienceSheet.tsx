// Module ID: 20152
// Function ID: 20153
// Name: openStageAudienceSheet
// Dependencies: [6904, 5546, 11582, 2121, 2]
// Exports: default

// Module 20152 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6904 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(11582, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
