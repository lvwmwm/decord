// Module ID: 11325
// Function ID: 11326
// Name: getGroupDMRecipientLimit
// Dependencies: [1392, 11326, 1087, 1394, 1991, 11327, 2]
// Exports: default

// Module 11325 (getGroupDMRecipientLimit)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import GroupDMConstants from "GroupDMConstants" /* 11326 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
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
        const tmp2Result = tmp2(11327);
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
      }
    }
    tmp5 = React3;
  }
  return tmp5;
};
