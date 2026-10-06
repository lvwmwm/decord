// Module ID: 10694
// Function ID: 10695
// Name: guild_instant_invites/InstantInviteUtils
// Dependencies: [5, 2051, 1377, 1085, 1126, 10687, 10695, 8048, 7268, 6695, 4573, 9494, 8064, 4574, 2]
// Exports: useInviteActions

// Module 10694 (guild_instant_invites/InstantInviteUtils)
import Constants from "Constants" /* 1085 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import getInviteURLDefault from "getInviteURL" /* 7268 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import baseRestDefault from "baseRest" /* 10695 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let c3, c4, closure_2, currentUser, dependencyMap;

let _asyncToGenerator = _asyncToGenerator_mod;
const InstantInviteSources = Constants.InstantInviteSources;
let result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  let intl;
  let intl2;
  let intl3;
  invite = invite.invite;
  let onInviteRevoked = invite.onInviteRevoked;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  const channel = ChannelStore.getChannel(invite.channel.id);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  _asyncToGenerator = isPrivateResult;
  let obj = {
    label: intl.string(invite(1126).t.RDE0Sc),
    iconSource: onInviteRevoked(10687).share,
    action() {
      const tmp = baseRestDefault(() => {
        let formatToPlainStringResult;
        let tmp5;
        const showShareActionSheet = invite(closure_2[7]).showShareActionSheet;
        invite(closure_2[7]);
        if (!closure_1_3) {
          tmp5 = onInviteRevoked(tmp2[8])(closure_1_0.code);
        }
        const obj = { url: tmp5, message: formatToPlainStringResult };
        formatToPlainStringResult = undefined;
        if (closure_1_3) {
          const intl = tmp(tmp2[4]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const prop = tmp(tmp2[4]).t["+zWvOQ"];
          currentUser = currentUser.getCurrentUser();
          let str;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "";
          }
          const obj2 = { username: str, link: onInviteRevoked(closure_2[8])(closure_1_0.code) };
          formatToPlainStringResult = formatToPlainString(prop, obj2);
        }
        let str2 = "Guild Instant Invite";
        if (closure_1_3) {
          str2 = constants.GROUP_DM;
        }
        return showShareActionSheet(obj, str2);
      });
    }
  };
  intl = invite(1126).intl;
  const items = [obj, , ];
  let obj2 = {
    label: intl2.string(invite(1126).t.OpuAlK),
    iconSource: onInviteRevoked(10687).copy,
    action() {
      if (c3) {
        const tmpResult = instant_invite_InstantInviteUtils;
        tmpResult.handleCopy(invite.code, invite.channel, InstantInviteSources.GROUP_DM, false);
      } else {
        const tmpResult2 = ClipboardUtils;
        tmpResult2.copy(getInviteURLDefault(invite.code));
        const obj2 = ToastUtils;
        const result = obj2.presentCopiedToClipboard();
      }
    }
  };
  intl2 = invite(1126).intl;
  items[1] = obj2;
  let obj3 = {
    label: intl3.string(invite(1126).t.v6Yazx),
    iconSource: onInviteRevoked(10687).revoke,
    variant: "destructive",
    action: function() {
      return closure_2(...arguments);
    }
  };
  intl3 = invite(1126).intl;
  dependencyMap = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let intl;
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === onInviteRevoked) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            const obj3 = onInviteRevoked(closure_2[12]);
            onInviteRevoked = 2;
            c4 = 1;
            const obj5 = { value: obj3.revokeInvite(invite), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
            const obj6 = { key: "ERROR_ANOTHER_TRY", content: intl.string(tmp(closure_2[4]).t.CKsXk3) };
            const open = onInviteRevoked(closure_2[13]).open;
            const tmp14 = onInviteRevoked(closure_2[13]);
            intl = tmp(closure_2[4]).intl;
            open(obj6);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_128_1 != null) {
              tmp6(closure_128_0);
            }
            c3 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (0 === c3) {
          c4 = 3;
          throw tmp22;
        } else {
          onInviteRevoked = 1;
        }
      }
    }
  });
  items[2] = obj3;
  return items;
};
