// Module ID: 17721
// Function ID: 17722
// Name: FriendInviteUtils
// Dependencies: [2041, 4405, 8649, 4454, 1115, 9621, 573, 11483, 2]
// Exports: acceptFriendInvite, revokeAllFriendInvites

// Module 17721 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8649 */;
import _modDef9621 from "module_9621" /* 9621 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  InstantInviteActionCreatorsDefault.revokeFriendInvites().then(() => {
    const obj2 = { key: "TOAST_FRIEND_INVITES_REVOKED", content: null, icon: null };
    const intl = util.intl;
    obj2.content = intl.string(util.t.jSHEOQ);
    obj2.icon = _modDef9621;
    ToastActionCreatorsDefault.open(obj2);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  if (tmp) {
    let dMFromUserId = null;
    if (RelationshipStore.isFriend(invite.inviter.id)) {
      dMFromUserId = ChannelStore.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      InstantInviteActionCreatorsDefault.transitionToInvite(invite, { forceTransition: true });
      DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
    } else {
      let obj2 = {
        inviteKey: invite.code,
        context,
        callback() {
              const intl = util.intl;
              const inviter = invite.inviter;
              let username;
              if (inviter != null) {
                username = inviter.username;
              }
              const obj = ToastActionCreatorsDefault;
              obj.open({ key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef9621 });
              const obj2 = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef9621 };
              DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
            }
      };
      const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
};
