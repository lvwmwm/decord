// Module ID: 14138
// Function ID: 14139
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [6181, 1072, 13954, 504, 2]
// Exports: default

// Module 14138 (useShouldBlockDMInputForQuarantinedUser)
import Constants from "Constants" /* 1072 */;
import MessageStore from "MessageStore" /* 6181 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserFlags = Constants.UserFlags;
const result = size.fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  _require = channel;
  const obj = require("useShowConvoStarterInDM");
  const showConvoStarterInDM = obj.useShowConvoStarterInDM(channel);
  require("get initialized");
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
