// Module ID: 10735
// Function ID: 10736
// Name: useStageChannelConnectAction
// Dependencies: [7821, 10734, 2]
// Exports: default, useStageChannelStartEvent

// Module 10735 (useStageChannelConnectAction)
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (importDefault(10734)(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: importDefault(7821)(id), isModerator: importDefault(10734)(id, true).moderator };
};
