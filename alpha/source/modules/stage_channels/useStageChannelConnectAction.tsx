// Module ID: 10783
// Function ID: 10784
// Name: useStageChannelConnectAction
// Dependencies: [6378, 10782, 2]
// Exports: default, useStageChannelStartEvent

// Module 10783 (useStageChannelConnectAction)
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 6378 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 10782 */;
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
