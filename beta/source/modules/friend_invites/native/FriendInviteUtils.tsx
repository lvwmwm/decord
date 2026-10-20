// Module ID: 18434
// Function ID: 18435
// Name: FriendInviteUtils
// Dependencies: [2068, 4855, 8770, 4904, 1128, 584, 10951, 2]
// Exports: acceptFriendInvite, revokeAllFriendInvites

// Module 18434 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8770 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = InstantInviteActionCreatorsDefault;
  const revokeFriendInvitesResult = obj.revokeFriendInvites();
  revokeFriendInvitesResult.then(() => {
    let intl;
    const obj = { text: intl.string(intl2.t.jSHEOQ), variant: "success" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open("TOAST_FRIEND_INVITES_REVOKED", obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  const f135102 = () => closure_1_1(closure_1_2[6])();
  let tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
  if (tmp) {
    let dMFromUserId = null;
    if (RelationshipStore.isFriend(invite.inviter.id)) {
      dMFromUserId = ChannelStore.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      const obj3 = InstantInviteActionCreatorsDefault;
      obj3.transitionToInvite(invite, { forceTransition: true });
      const obj4 = DispatcherDefault;
      obj4.wait(f135102);
    } else {
      let obj = InstantInviteActionCreatorsDefault;
      const obj2 = {
        inviteKey: invite.code,
        context,
        callback() {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              const intl = intl2.intl;
              const formatToPlainString = intl.formatToPlainString;
              const inviter = invite.inviter;
              let username;
              const st2dcs = intl2.t.st2dcs;
              if (inviter != null) {
                username = inviter.username;
              }
              const obj = { text: formatToPlainString(st2dcs, { username }), variant: "success" };
              open("FRIEND_INVITE_ACCEPT_CONFIRMATION", obj);
              const tmpResult = DispatcherDefault;
              tmpResult.wait(f135102);
            }
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
};
