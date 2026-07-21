// Module ID: 11454
// Function ID: 89235
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: []
// Exports: default

// Module 11454 (useShouldBlockDMInputForQuarantinedUser)
let closure_2 = importDefault(dependencyMap[0]);
const UserFlags = arg1(dependencyMap[1]).UserFlags;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

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
