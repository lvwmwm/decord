// Module ID: 15318
// Function ID: 116545
// Name: getGroupDMRecipientLimit
// Dependencies: []
// Exports: default

// Module 15318 (getGroupDMRecipientLimit)
let closure_0 = importDefault(dependencyMap[0]);
({ MAX_GROUP_DM_PARTICIPANTS: closure_1, MAX_GROUP_DM_STAFF_PARTICIPANTS: closure_2 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit(userLimit) {
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.isStaff()) {
      userLimit = closure_2;
    }
    return userLimit;
  }
  if (null != userLimit) {
    if (userLimit.userLimit > 0) {
      userLimit = userLimit.userLimit;
    }
  }
  userLimit = closure_1;
};
