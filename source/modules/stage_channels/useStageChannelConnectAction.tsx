// Module ID: 10819
// Function ID: 10820
// Name: useStageChannelConnectAction
// Dependencies: [7817, 10818, 2]
// Exports: default, useStageChannelStartEvent

// Module 10819 (useStageChannelConnectAction)
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (importDefault(10818)(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: importDefault(7817)(id), isModerator: importDefault(10818)(id, true).moderator };
};
