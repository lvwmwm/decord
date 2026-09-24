// Module ID: 11930
// Function ID: 11931
// Name: getGroupDMRecipientLimit
// Dependencies: [1372, 11931, 1074, 1374, 1969, 11932, 2]
// Exports: default

// Module 11930 (getGroupDMRecipientLimit)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1969 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
let closure_3 = fn(11931).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1074);
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useNitroCapExperiment;
  if (flag === undefined) {
    flag = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    let tmp5 = hasOwnProperty;
  } else {
    if (flag) {
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
        tmp2Result = tmp2(11932);
      }
      obj3 = PremiumTypeUtils;
      tmp2 = require;
    }
    tmp5 = React4;
  }
  return tmp5;
};
