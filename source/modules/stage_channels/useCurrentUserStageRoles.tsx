// Module ID: 12489
// Function ID: 12490
// Name: useCurrentUserStageRoles
// Dependencies: [1218, 4990, 589, 2]
// Exports: default

// Module 12489 (useCurrentUserStageRoles)
import fetchFingerprint from "fetchFingerprint";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [buildStageChannelUserRoles, fetchFingerprint];
  const items1 = [arg0, flag];
  return _require(flag[2]).useStateFromStoresObject(items, () => outer1_3.getPermissionsForUser(outer1_2.getId(), closure_0, flag), items1);
};
