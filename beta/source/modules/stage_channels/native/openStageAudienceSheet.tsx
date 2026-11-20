// Module ID: 20109
// Function ID: 20110
// Name: openStageAudienceSheet
// Dependencies: [6896, 5542, 12953, 2121, 2]
// Exports: default

// Module 20109 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6896 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12953, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
