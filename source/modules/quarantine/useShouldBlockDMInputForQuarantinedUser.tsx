// Module ID: 11855
// Function ID: 11856
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [4561, 676, 11697, 589, 2]
// Exports: default

// Module 11855 (useShouldBlockDMInputForQuarantinedUser)
import reinjectEphemerals from "reinjectEphemerals";
import { UserFlags } from "ME";

const require = arg1;
const result = require("MAX_MESSAGES_ALLOWED_FOR_GREETING").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require(11697).useShowConvoStarterInDM(channel);
  _require(589);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
