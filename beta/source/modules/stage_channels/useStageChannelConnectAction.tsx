// Module ID: 10850
// Function ID: 10851
// Name: useStageChannelConnectAction
// Dependencies: [6499, 10849, 2]
// Exports: default, useStageChannelStartEvent

// Module 10850 (useStageChannelConnectAction)
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 6499 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 10849 */;
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
