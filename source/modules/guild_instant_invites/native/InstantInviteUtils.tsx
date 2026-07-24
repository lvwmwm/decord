// Module ID: 10210
// Function ID: 78839
// Name: useInviteActions
// Dependencies: [5, 1348, 1849, 653, 1212, 10203, 10211, 8376, 7000, 5490, 3830, 8526, 7540, 3831, 2]
// Exports: useInviteActions

// Module 10210 (useInviteActions)
import getMore from "get more";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { InstantInviteSources } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  invite = invite.invite;
  const onInviteRevoked = invite.onInviteRevoked;
  let dependencyMap;
  let callback;
  channel = channel.getChannel(invite.channel.id);
  let isPrivateResult;
  if (null != channel) {
    isPrivateResult = channel.isPrivate();
  }
  callback = isPrivateResult;
  let obj = {};
  let intl = invite(1212).intl;
  obj.label = intl.string(invite(1212).t.RDE0Sc);
  obj.iconSource = onInviteRevoked(10203).share;
  obj.action = function action() {
    onInviteRevoked(10211)(() => {
      let obj = invite(8376);
      obj = {};
      let tmp;
      if (!outer1_3) {
        tmp = onInviteRevoked(7000)(outer1_0.code);
      }
      obj.url = tmp;
      let formatToPlainStringResult;
      if (outer1_3) {
        const intl = invite(1212).intl;
        obj = {};
        const currentUser = outer2_5.getCurrentUser();
        let username;
        if (null != currentUser) {
          username = currentUser.username;
        }
        let str = "";
        if (null != username) {
          str = username;
        }
        obj.username = str;
        obj.link = onInviteRevoked(7000)(outer1_0.code);
        formatToPlainStringResult = intl.formatToPlainString(invite(1212).t["+zWvOQ"], obj);
      }
      obj.message = formatToPlainStringResult;
      let str2 = "Guild Instant Invite";
      if (outer1_3) {
        str2 = outer2_6.GROUP_DM;
      }
      return obj.showShareActionSheet(obj, str2);
    });
  };
  const items = [obj, , ];
  obj = {};
  const intl2 = invite(1212).intl;
  obj.label = intl2.string(invite(1212).t.OpuAlK);
  obj.iconSource = onInviteRevoked(10203).copy;
  obj.action = function action() {
    if (c3) {
      let tmpResult = tmp(tmp2[11]);
      tmpResult.handleCopy(invite.code, invite.channel, outer1_6.GROUP_DM, false);
    } else {
      tmpResult = tmp(tmp2[9]);
      tmpResult.copy(onInviteRevoked(tmp2[8])(invite.code));
      const result = tmp(tmp2[10]).presentCopiedToClipboard();
      const tmpResult1 = tmp(tmp2[10]);
    }
  };
  items[1] = obj;
  const obj1 = {};
  const intl3 = invite(1212).intl;
  obj1.label = intl3.string(invite(1212).t.v6Yazx);
  obj1.iconSource = onInviteRevoked(10203).revoke;
  obj1.variant = "destructive";
  // CreateGeneratorClosureLongIndex (0x67)
  dependencyMap = callback(tmp);
  obj1.action = function() {
    return dependencyMap(...arguments);
  };
  items[2] = obj1;
  return items;
};
