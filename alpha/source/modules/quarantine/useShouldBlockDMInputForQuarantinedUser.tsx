// Module ID: 14238
// Function ID: 14239
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [6199, 1072, 14054, 504, 2]
// Exports: default

// Module 14238 (useShouldBlockDMInputForQuarantinedUser)
import Constants from "Constants" /* 1072 */;
import MessageStore from "MessageStore" /* 6199 */;
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
