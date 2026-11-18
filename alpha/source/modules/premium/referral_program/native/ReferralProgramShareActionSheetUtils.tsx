// Module ID: 13962
// Function ID: 13963
// Name: ReferralProgramShareActionSheetUtils
// Dependencies: [4765, 9547, 2]
// Exports: buildReferralUserRow

// Module 13962 (ReferralProgramShareActionSheetUtils)
import UserRowConstants from "UserRowConstants" /* 9547 */;
import RelationshipStore from "RelationshipStore" /* 4765 */;
import size from "module_2" /* 2 */;

const UserRowModes = UserRowConstants.UserRowModes;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx");

export function buildReferralUserRow(selectedNotResendUsers) {
  let eligibleUsers;
  let resendUsers;
  let row;
  let selectedUserIds;
  ({ eligibleUsers, row, selectedUserIds, resendUsers } = selectedNotResendUsers);
  if (null != eligibleUsers[row]) {
    let tmp4 = selectedNotResendUsers.selectedNotResendUsers.length >= tmp;
    const hasItem = selectedUserIds.includes(tmp3.id);
    const obj = { type: RelationshipStore.getRelationshipType(eligibleUsers[row].id), user: eligibleUsers[row], onPress: tmp2, selected: hasItem, disabled: tmp4, mode: UserRowModes.TOGGLE, start: 0 === row, end: row === eligibleUsers.length - 1 };
    const hasItem1 = resendUsers.has(tmp3.id);
    if (tmp4) {
      tmp4 = !hasItem;
    }
    if (tmp4) {
      tmp4 = !hasItem1;
    }
    const element = { type: "user", props: obj };
    return element;
  }
}
