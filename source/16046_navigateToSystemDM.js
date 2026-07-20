// Module ID: 16046
// Function ID: 123281
// Name: navigateToSystemDM
// Dependencies: []
// Exports: default

// Module 16046 (navigateToSystemDM)
let closure_2 = importDefault(dependencyMap[0]);
const SYSTEM_USER = arg1(dependencyMap[1]).SYSTEM_USER;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = dMFromUserId.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = importDefault(dependencyMap[2]).selectPrivateChannel(dMFromUserId);
    const obj = importDefault(dependencyMap[2]);
  }
};
