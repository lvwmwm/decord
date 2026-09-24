// Module ID: 9790
// Function ID: 9791
// Name: useStageChannelConnectAction
// Dependencies: [558, 568, 8704, 9786, 2]

// Module 9790 (useStageChannelConnectAction)
import c from "c" /* 568 */;
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 8704 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9786 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelConnectAction = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const tmp2 = useStateChannelIsLiveDefault(arg0);
  const moderator = useCurrentUserStageRolesDefault(arg0, true).moderator;
  if (cResult[0] === tmp2) {
    if (cResult[1] === moderator) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { isLive: tmp2, isModerator: moderator };
  cResult[0] = tmp2;
  cResult[1] = moderator;
  cResult[2] = obj2;
  tmp3 = obj2;
}) : ((arg0) => ({ isLive: useStateChannelIsLiveDefault(arg0), isModerator: useCurrentUserStageRolesDefault(arg0, true).moderator }));
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  if (!tmp) {
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
}) : ((arg0) => {
  if (!tmp) {
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
});
export { ChannelConnectAction };
export const useStageChannelStartEvent = tmp2;
