// Module ID: 10658
// Function ID: 82886
// Name: useStageChannelConnectAction
// Dependencies: [6692, 10657, 2]
// Exports: default, useStageChannelStartEvent

// Module 10658 (useStageChannelConnectAction)
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (importDefault(10657)(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: importDefault(6692)(id), isModerator: importDefault(10657)(id, true).moderator };
};
