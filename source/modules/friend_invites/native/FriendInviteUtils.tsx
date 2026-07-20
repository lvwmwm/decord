// Module ID: 15842
// Function ID: 121248
// Name: handleInviteAccepted
// Dependencies: []
// Exports: acceptFriendInvite, revokeAllFriendInvites

// Module 15842 (handleInviteAccepted)
function handleInviteAccepted() {
  importDefault(dependencyMap[6]).wait(() => callback(closure_2[7])());
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  const obj = importDefault(dependencyMap[2]);
  importDefault(dependencyMap[2]).revokeFriendInvites().then(() => {
    let obj = callback2(closure_2[3]);
    obj = { key: "TOAST_FRIEND_INVITES_REVOKED" };
    const intl = callback(closure_2[4]).intl;
    obj.content = intl.string(callback(closure_2[4]).t.jSHEOQ);
    obj.icon = callback2(closure_2[5]);
    obj.open(obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  context = invite;
  if (tmp) {
    let dMFromUserId = null;
    if (friend.isFriend(invite.inviter.id)) {
      dMFromUserId = dMFromUserId.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      let obj = { forceTransition: true };
      importDefault(dependencyMap[2]).transitionToInvite(invite, obj);
      handleInviteAccepted();
      const obj3 = importDefault(dependencyMap[2]);
    } else {
      obj = importDefault(dependencyMap[2]);
      obj = {
        inviteKey: invite.code,
        context,
        callback() {
              let obj = callback(closure_2[3]);
              obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION" };
              const intl = arg0(closure_2[4]).intl;
              obj = {};
              const inviter = arg0.inviter;
              let username;
              if (null != inviter) {
                username = inviter.username;
              }
              obj.username = username;
              obj.content = intl.formatToPlainString(arg0(closure_2[4]).t.st2dcs, obj);
              obj.icon = callback(closure_2[5]);
              obj.open(obj);
              callback2();
            }
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
};
