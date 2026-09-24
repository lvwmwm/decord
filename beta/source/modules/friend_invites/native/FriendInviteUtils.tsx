// Module ID: 17735
// Function ID: 17736
// Name: FriendInviteUtils
// Dependencies: [2045, 4441, 8686, 4490, 1119, 9649, 577, 11507, 2]
// Exports: acceptFriendInvite, revokeAllFriendInvites

// Module 17735 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 577 */;
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8686 */;
import _modDef9649 from "module_9649" /* 9649 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;

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
    obj2.icon = _modDef9649;
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
              obj.open({ key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef9649 });
              const obj2 = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef9649 };
              DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
            }
      };
      const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
};
