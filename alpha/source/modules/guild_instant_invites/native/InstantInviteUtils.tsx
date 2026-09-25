// Module ID: 10394
// Function ID: 10395
// Name: guild_instant_invites/InstantInviteUtils
// Dependencies: [5, 2044, 1372, 1074, 1115, 10387, 10395, 7801, 7173, 6605, 4524, 9264, 7818, 4525, 2]
// Exports: useInviteActions

// Module 10394 (guild_instant_invites/InstantInviteUtils)
import ToastUtils from "ToastUtils" /* 4524 */;
import getInviteURLDefault from "getInviteURL" /* 7173 */;
import _modDef10395 from "module_10395" /* 10395 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const InstantInviteSources = fn(1074).InstantInviteSources;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  invite = invite.invite;
  const onInviteRevoked = invite.onInviteRevoked;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  const channel = ChannelStore.getChannel(invite.channel.id);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  asyncGeneratorStep = isPrivateResult;
  const obj = { label: null, iconSource: null, action: null };
  let intl = invite(1115).intl;
  obj.label = intl.string(invite(1115).t.RDE0Sc);
  obj.iconSource = onInviteRevoked(10387).share;
  obj.action = function action() {
    _modDef10395(() => {
      let tmp4;
      if (!closure_1_3) {
        tmp4 = onInviteRevoked(tmp2[8])(closure_1_0.code);
      }
      const obj2 = { url: tmp4, message: null };
      let formatToPlainStringResult;
      if (closure_1_3) {
        const intl = tmp(tmp2[4]).intl;
        currentUser = currentUser.getCurrentUser();
        let str;
        if (currentUser != null) {
          str = currentUser.username;
        }
        if (str == null) {
          str = "";
        }
        const obj3 = { username: str, link: onInviteRevoked(tmp2[8])(closure_1_0.code) };
        formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[4]).t["+zWvOQ"], obj3);
      }
      obj2.message = formatToPlainStringResult;
      let str2 = "Guild Instant Invite";
      if (closure_1_3) {
        str2 = constants.GROUP_DM;
      }
      return invite(closure_2[7]).showShareActionSheet(obj2, str2);
    });
  };
  const items = [obj, , ];
  let obj2 = { label: null, iconSource: null, action: null };
  const intl2 = invite(1115).intl;
  obj2.label = intl2.string(invite(1115).t.OpuAlK);
  obj2.iconSource = onInviteRevoked(10387).copy;
  obj2.action = function action() {
    if (c3) {
      const tmpResult = tmp(9264);
      tmpResult.handleCopy(invite.code, invite.channel, InstantInviteSources.GROUP_DM, false);
    } else {
      tmp(6605).copy(getInviteURLDefault(invite.code));
      const tmpResult2 = tmp(6605);
      const result = ToastUtils.presentCopiedToClipboard();
    }
  };
  items[1] = obj2;
  let obj3 = { label: null, iconSource: null, variant: "destructive", action: null };
  const intl3 = invite(1115).intl;
  obj3.label = intl3.string(invite(1115).t.v6Yazx);
  obj3.iconSource = onInviteRevoked(10387).revoke;
  dependencyMap = asyncGeneratorStep(async () => {
    await v2(tmp24[12]).revokeInvite(invite);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { key: "ERROR_ANOTHER_TRY", content: null };
      const intl = tmp3(tmp24[4]).intl;
      obj7.content = intl.string(tmp3(tmp24[4]).t.CKsXk3);
      v2(tmp24[13]).open(obj7);
      c4 = 3;
      v2(tmp24[13]);
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      if (closure_128_1 != null) {
        tmp9(closure_128_0);
      }
      c3 = 0;
    }
    return arg1;
  });
  obj3.action = function() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[2] = obj3;
  return items;
};
