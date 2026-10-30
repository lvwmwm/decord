// Module ID: 11814
// Function ID: 11815
// Name: useStageChannelConnectAction
// Dependencies: [7935, 11813, 2]
// Exports: default, useStageChannelStartEvent

// Module 11814 (useStageChannelConnectAction)
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 7935 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 11813 */;
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
