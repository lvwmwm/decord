// Module ID: 20104
// Function ID: 20105
// Name: openStageAudienceSheet
// Dependencies: [6896, 5542, 12951, 2121, 2]
// Exports: default

// Module 20104 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6896 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12951, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
