// Module ID: 10694
// Function ID: 10695
// Name: useStageChannelConnectAction
// Dependencies: [7716, 10693, 2]
// Exports: default, useStageChannelStartEvent

// Module 10694 (useStageChannelConnectAction)
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (importDefault(10693)(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: importDefault(7716)(id), isModerator: importDefault(10693)(id, true).moderator };
};
