// Module ID: 19729
// Function ID: 19730
// Name: openStageAudienceSheet
// Dependencies: [6764, 5374, 12055, 2118, 2]
// Exports: default

// Module 19729 (openStageAudienceSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6764 */;
import size from "module_2" /* 2 */;

const STAGE_AUDIENCE_SHEET_KEY = StageChannelsConstants.STAGE_AUDIENCE_SHEET_KEY;
const result = size.fileFinishedImporting("modules/stage_channels/native/openStageAudienceSheet.tsx");

export default function openStageAudienceSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(12055, dependencyMap.paths), STAGE_AUDIENCE_SHEET_KEY, obj2);
};
