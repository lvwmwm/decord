// Module ID: 12366
// Function ID: 12367
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [4743, 673, 12198, 586, 2]
// Exports: default

// Module 12366 (useShouldBlockDMInputForQuarantinedUser)
import closure_2 from "reinjectEphemerals" /* 4743 */;
import { UserFlags } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require(12198).useShowConvoStarterInDM(channel);
  _require(586);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
