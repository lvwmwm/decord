// Module ID: 14224
// Function ID: 14225
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [6196, 1072, 14040, 504, 2]
// Exports: default

// Module 14224 (useShouldBlockDMInputForQuarantinedUser)
import Constants from "Constants" /* 1072 */;
import MessageStore from "MessageStore" /* 6196 */;
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
