// Module ID: 9041
// Function ID: 9042
// Name: canViewInviteModal
// Dependencies: [1086, 2]
// Exports: canViewInviteModal

// Module 9041 (canViewInviteModal)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/instant_invite/canViewInviteModal.tsx");

export const canViewInviteModal = function canViewInviteModal(PermissionStore, guild, defaultChannel, stageInstanceByChannel) {
  let tmp = defaultChannel;
  if (defaultChannel == null) {
    tmp = guild;
  }
  let canResult = null != tmp && PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, tmp);
  if (!canResult) {
    canResult = null != guild && null != guild.vanityURLCode;
  }
  if (!canResult) {
    let invite_code;
    if (stageInstanceByChannel != null) {
      invite_code = stageInstanceByChannel.invite_code;
    }
    canResult = null != invite_code;
  }
  return canResult;
};
