// Module ID: 12108
// Function ID: 12109
// Name: getGroupDMRecipientLimit
// Dependencies: [1387, 12109, 1071, 1389, 2109, 12110, 2]
// Exports: default

// Module 12108 (getGroupDMRecipientLimit)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2109 */;
import GroupDMConstants from "GroupDMConstants" /* 12109 */;
import UserStore from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
  let tmp5;
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
    tmp5 = hasOwnProperty;
  } else {
    if (flag) {
      const obj3 = PremiumTypeUtils;
      const tmp2 = require;
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        const tmp2Result = tmp2(12110);
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
      }
    }
    tmp5 = React3;
  }
  return tmp5;
};
