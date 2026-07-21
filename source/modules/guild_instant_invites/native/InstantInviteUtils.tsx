// Module ID: 10171
// Function ID: 78584
// Name: useInviteActions
// Dependencies: []
// Exports: useInviteActions

// Module 10171 (useInviteActions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const InstantInviteSources = arg1(dependencyMap[3]).InstantInviteSources;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUtils.tsx");

export const useInviteActions = function useInviteActions(invite) {
  invite = invite.invite;
  const arg1 = invite;
  const importDefault = invite.onInviteRevoked;
  let closure_2;
  let callback;
  const channel = channel.getChannel(invite.channel.id);
  let isPrivateResult;
  if (null != channel) {
    isPrivateResult = channel.isPrivate();
  }
  callback = isPrivateResult;
  let obj = {};
  const intl = arg1(closure_2[4]).intl;
  obj.label = intl.string(arg1(closure_2[4]).t.RDE0Sc);
  obj.iconSource = importDefault(closure_2[5]).share;
  obj.action = function action() {
    onInviteRevoked(closure_2[6])(() => {
      let obj = lib(closure_2[7]);
      obj = {};
      let tmp;
      if (!closure_3) {
        tmp = callback(closure_2[8])(lib.code);
      }
      obj.url = tmp;
      let formatToPlainStringResult;
      if (closure_3) {
        const intl = lib(closure_2[4]).intl;
        obj = {};
        const currentUser = currentUser.getCurrentUser();
        let username;
        if (null != currentUser) {
          username = currentUser.username;
        }
        let str = "";
        if (null != username) {
          str = username;
        }
        obj.username = str;
        obj.link = callback(closure_2[8])(lib.code);
        formatToPlainStringResult = intl.formatToPlainString(lib(closure_2[4]).t.+zWvOQ, obj);
      }
      obj.message = formatToPlainStringResult;
      let str2 = "Guild Instant Invite";
      if (closure_3) {
        str2 = constants.GROUP_DM;
      }
      return obj.showShareActionSheet(obj, str2);
    });
  };
  const items = [obj, , ];
  obj = {};
  const intl2 = arg1(closure_2[4]).intl;
  obj.label = intl2.string(arg1(closure_2[4]).t.OpuAlK);
  obj.iconSource = importDefault(closure_2[5]).copy;
  obj.action = function action() {
    if (isPrivateResult) {
      let tmpResult = tmp(tmp2[11]);
      tmpResult.handleCopy(invite.code, invite.channel, constants.GROUP_DM, false);
    } else {
      tmpResult = tmp(tmp2[9]);
      tmpResult.copy(onInviteRevoked(tmp2[8])(invite.code));
      const result = tmp(tmp2[10]).presentCopiedToClipboard();
      const tmpResult1 = tmp(tmp2[10]);
    }
  };
  items[1] = obj;
  const obj1 = {};
  const intl3 = arg1(closure_2[4]).intl;
  obj1.label = intl3.string(arg1(closure_2[4]).t.v6Yazx);
  obj1.iconSource = importDefault(closure_2[5]).revoke;
  obj1.variant = "destructive";
  // CreateGeneratorClosureLongIndex (0x67)
  closure_2 = callback(tmp);
  obj1.action = function() {
    return callback(...arguments);
  };
  items[2] = obj1;
  return items;
};
