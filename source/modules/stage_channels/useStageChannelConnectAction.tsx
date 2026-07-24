// Module ID: 10655
// Function ID: 83073
// Name: useStageChannelConnectAction
// Dependencies: [7560, 10654, 2]
// Exports: default, useStageChannelStartEvent

// Module 10655 (useStageChannelConnectAction)
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (importDefault(10654)(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: importDefault(7560)(id), isModerator: importDefault(10654)(id, true).moderator };
};
