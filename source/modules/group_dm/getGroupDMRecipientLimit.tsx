// Module ID: 15443
// Function ID: 118762
// Name: getGroupDMRecipientLimit
// Dependencies: [1849, 653, 2]
// Exports: default

// Module 15443 (getGroupDMRecipientLimit)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_1;
let closure_2;
({ MAX_GROUP_DM_PARTICIPANTS: closure_1, MAX_GROUP_DM_STAFF_PARTICIPANTS: closure_2 } = ME);
const result = require("set").fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit(userLimit) {
  currentUser = currentUser.getCurrentUser();
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
