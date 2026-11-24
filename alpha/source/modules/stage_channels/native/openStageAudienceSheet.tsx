// Module ID: 19410
// Function ID: 19411
// Name: openStageAudienceSheet
// Dependencies: [6674, 5131, 10181, 2119, 2]
// Exports: default

// Module 19410 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6674 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(10181, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
