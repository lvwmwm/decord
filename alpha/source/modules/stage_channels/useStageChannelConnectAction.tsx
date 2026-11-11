// Module ID: 12819
// Function ID: 12820
// Name: useStageChannelConnectAction
// Dependencies: [6842, 12818, 2]
// Exports: default, useStageChannelStartEvent

// Module 12819 (useStageChannelConnectAction)
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 6842 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 12818 */;
import size from "module_2" /* 2 */;

const ChannelConnectAction = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  const tmp = useStateChannelIsLiveDefault(arg0);
  if (!tmp) {
    let NORMAL;
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export { ChannelConnectAction };
export function useStageChannelStartEvent(id) {
  const obj = { isLive: useStateChannelIsLiveDefault(id), isModerator: useCurrentUserStageRolesDefault(id, true).moderator };
  return obj;
}
