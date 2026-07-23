// Module ID: 15978
// Function ID: 123532
// Name: handleInviteAccepted
// Dependencies: [1348, 3767, 7460, 3831, 1212, 10332, 686, 10886, 2]
// Exports: acceptFriendInvite, revokeAllFriendInvites

// Module 15978 (handleInviteAccepted)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function handleInviteAccepted() {
  importDefault(686).wait(() => outer1_1(outer1_2[7])());
}
let result = require("generateAcceptInviteOptions").fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = importDefault(7460);
  importDefault(7460).revokeFriendInvites().then(() => {
    let obj = outer1_1(outer1_2[3]);
    obj = { key: "TOAST_FRIEND_INVITES_REVOKED" };
    const intl = outer1_0(outer1_2[4]).intl;
    obj.content = intl.string(outer1_0(outer1_2[4]).t.jSHEOQ);
    obj.icon = outer1_1(outer1_2[5]);
    obj.open(obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  let closure_0 = invite;
  if (tmp) {
    let dMFromUserId = null;
    if (friend.isFriend(invite.inviter.id)) {
      dMFromUserId = dMFromUserId.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      let obj = { forceTransition: true };
      importDefault(7460).transitionToInvite(invite, obj);
      handleInviteAccepted();
      const obj3 = importDefault(7460);
    } else {
      obj = importDefault(7460);
      obj = {
        inviteKey: invite.code,
        context,
        callback() {
              let obj = outer1_1(outer1_2[3]);
              obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION" };
              const intl = invite(outer1_2[4]).intl;
              obj = {};
              const inviter = invite.inviter;
              let username;
              if (null != inviter) {
                username = inviter.username;
              }
              obj.username = username;
              obj.content = intl.formatToPlainString(invite(outer1_2[4]).t.st2dcs, obj);
              obj.icon = outer1_1(outer1_2[5]);
              obj.open(obj);
              outer1_5();
            }
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
};
