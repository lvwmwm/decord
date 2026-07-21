// Module ID: 8356
// Function ID: 66595
// Name: canViewInviteModal
// Dependencies: []
// Exports: canViewInviteModal

// Module 8356 (canViewInviteModal)
const Permissions = require(dependencyMap[0]).Permissions;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/instant_invite/canViewInviteModal.tsx");

export const canViewInviteModal = function canViewInviteModal(closure_6, guild, defaultChannel, stageInstanceByChannel) {
  let tmp = guild;
  if (null != defaultChannel) {
    tmp = defaultChannel;
  }
  let canResult = null != tmp;
  if (canResult) {
    canResult = closure_6.can(Permissions.CREATE_INSTANT_INVITE, tmp);
  }
  if (!canResult) {
    canResult = null != guild && null != guild.vanityURLCode;
    const tmp4 = null != guild && null != guild.vanityURLCode;
  }
  if (!canResult) {
    let invite_code;
    if (null != stageInstanceByChannel) {
      invite_code = stageInstanceByChannel.invite_code;
    }
    canResult = null != invite_code;
  }
  return canResult;
};
