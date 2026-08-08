// Module ID: 12722
// Function ID: 12723
// Name: buildReferralUserRow
// Dependencies: [3938, 9620, 2]
// Exports: buildReferralUserRow

// Module 12722 (buildReferralUserRow)
import upsertRelationship from "upsertRelationship";
import { UserRowModes } from "UserRowModes";

const result = require("set").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx");

export const buildReferralUserRow = function buildReferralUserRow(selectedNotResendUsers) {
  let eligibleUsers;
  let resendUsers;
  let row;
  let selectedUserIds;
  ({ eligibleUsers, row, selectedUserIds, resendUsers } = selectedNotResendUsers);
  if (null != eligibleUsers[row]) {
    let tmp4 = selectedNotResendUsers.selectedNotResendUsers.length >= tmp;
    const hasItem = selectedUserIds.includes(tmp3.id);
    let obj = { type: null, user: null, onPress: null, selected: null, disabled: null, mode: null, start: null, end: null };
    const hasItem1 = resendUsers.has(tmp3.id);
    obj[0] = relationshipType.getRelationshipType(tmp3.id);
    obj[1] = tmp3;
    obj[2] = tmp2;
    obj[3] = hasItem;
    if (tmp4) {
      tmp4 = !hasItem;
    }
    if (tmp4) {
      tmp4 = !hasItem1;
    }
    obj = { type: "user", props: null };
    obj[4] = tmp4;
    obj[5] = UserRowModes.TOGGLE;
    obj[6] = 0 === row;
    obj[7] = row === eligibleUsers.length - 1;
    obj[1] = obj;
    return obj;
  }
};
