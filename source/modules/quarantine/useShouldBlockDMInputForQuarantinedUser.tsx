// Module ID: 11455
// Function ID: 89260
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default

// Module 11455 (useShouldBlockDMInputForQuarantinedUser)
import __exportStarResult1 from "__exportStarResult1";
import { UserFlags } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  const showConvoStarterInDM = channel(dependencyMap[2]).useShowConvoStarterInDM(channel);
  channel(dependencyMap[3]);
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
