// Module ID: 17908
// Function ID: 17909
// Name: FriendInviteUtils
// Dependencies: [2064, 4719, 8480, 4768, 1126, 5006, 584, 10590, 2]
// Exports: acceptFriendInvite, revokeAllFriendInvites

// Module 17908 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import AssetRegistryDefault from "AssetRegistry" /* 5006 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8480 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = InstantInviteActionCreatorsDefault;
  const revokeFriendInvitesResult = obj.revokeFriendInvites();
  revokeFriendInvitesResult.then(() => {
    let intl;
    const obj = { key: "TOAST_FRIEND_INVITES_REVOKED", content: intl.string(intl2.t.jSHEOQ), icon: AssetRegistryDefault };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  const f132637 = () => closure_1_1(closure_1_2[7])();
  const tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
  if (tmp) {
    let dMFromUserId = null;
    if (RelationshipStore.isFriend(invite.inviter.id)) {
      dMFromUserId = ChannelStore.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      const obj3 = InstantInviteActionCreatorsDefault;
      obj3.transitionToInvite(invite, { forceTransition: true });
      const obj4 = DispatcherDefault;
      obj4.wait(f132637);
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
              const obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: formatToPlainString(st2dcs, { username }), icon: AssetRegistryDefault };
              open(obj);
              const tmpResult = DispatcherDefault;
              tmpResult.wait(f132637);
            }
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
};
