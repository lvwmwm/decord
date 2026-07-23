// Module ID: 8363
// Function ID: 66655
// Name: canViewInviteModal
// Dependencies: [653, 2]
// Exports: canViewInviteModal

// Module 8363 (canViewInviteModal)
import { Permissions } from "ME";

const result = require("set").fileFinishedImporting("modules/instant_invite/canViewInviteModal.tsx");

export const canViewInviteModal = function canViewInviteModal(closure_6, guild, closure_0, stageInstanceByChannel) {
  let tmp = guild;
  if (null != closure_0) {
    tmp = closure_0;
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
