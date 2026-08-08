// Module ID: 10913
// Function ID: 10914
// Name: useMyCurrentStageChannelRole
// Dependencies: [1218, 1960, 5139, 589, 2]
// Exports: default

// Module 10913 (useMyCurrentStageChannelRole)
import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";

const require = arg1;
const result = require("buildStageChannelUserRoles").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint, handleConnectionOpen, buildStageChannelUserRoles];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const id = outer1_2.getId();
    let permissionsForUser = null;
    if (outer1_3.getVoiceChannelId() === closure_0) {
      permissionsForUser = outer1_4.getPermissionsForUser(id, tmp2);
    }
    return permissionsForUser;
  }, items1);
};
