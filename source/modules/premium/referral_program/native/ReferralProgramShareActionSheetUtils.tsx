// Module ID: 12372
// Function ID: 96183
// Name: buildReferralUserRow
// Dependencies: [3767, 8818, 2]
// Exports: buildReferralUserRow

// Module 12372 (buildReferralUserRow)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
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
    let obj = { type: "user" };
    obj = {};
    const hasItem1 = resendUsers.has(tmp3.id);
    obj.type = relationshipType.getRelationshipType(tmp3.id);
    obj.user = tmp3;
    obj.onPress = tmp2;
    obj.selected = hasItem;
    if (tmp4) {
      tmp4 = !hasItem;
    }
    if (tmp4) {
      tmp4 = !hasItem1;
    }
    obj.disabled = tmp4;
    obj.mode = UserRowModes.TOGGLE;
    obj.start = 0 === row;
    obj.end = row === eligibleUsers.length - 1;
    obj.props = obj;
    return obj;
  }
};
