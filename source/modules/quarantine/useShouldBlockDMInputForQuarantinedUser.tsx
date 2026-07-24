// Module ID: 11495
// Function ID: 89555
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [4349, 653, 11400, 566, 2]
// Exports: default

// Module 11495 (useShouldBlockDMInputForQuarantinedUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserFlags } from "ME";

const require = arg1;
const result = require("MAX_MESSAGES_ALLOWED_FOR_GREETING").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require(11400).useShowConvoStarterInDM(channel);
  _require(566);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
