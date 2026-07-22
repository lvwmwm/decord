// Module ID: 10616
// Function ID: 82831
// Name: useStageChannelConnectAction
// Dependencies: []
// Exports: default, useStageChannelStartEvent

// Module 10616 (useStageChannelConnectAction)
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (importDefault(dependencyMap[1])(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: importDefault(dependencyMap[0])(id), isModerator: importDefault(dependencyMap[1])(id, true).moderator };
};
