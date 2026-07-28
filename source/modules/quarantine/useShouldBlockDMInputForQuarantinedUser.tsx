// Module ID: 11497
// Function ID: 89343
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [4384, 653, 11402, 566, 2]
// Exports: default

// Module 11497 (useShouldBlockDMInputForQuarantinedUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserFlags } from "ME";

const require = arg1;
const result = require("MAX_MESSAGES_ALLOWED_FOR_GREETING").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const _require = channel;
  const showConvoStarterInDM = _require(11402).useShowConvoStarterInDM(channel);
  _require(566);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
