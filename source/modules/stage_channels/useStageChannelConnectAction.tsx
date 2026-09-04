// Module ID: 9603
// Function ID: 9604
// Name: useStageChannelConnectAction
// Dependencies: [8326, 9599, 2]
// Exports: default, useStageChannelStartEvent

// Module 9603 (useStageChannelConnectAction)
import set from "set" /* 2 */;
import useStageChannelIsLiveDefault from "useStageChannelIsLive" /* 8326 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9599 */;

const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = set.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: useStageChannelIsLiveDefault(id), isModerator: useCurrentUserStageRolesDefault(id, true).moderator };
};
