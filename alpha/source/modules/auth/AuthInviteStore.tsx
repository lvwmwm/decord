// Module ID: 4980
// Function ID: 4981
// Name: AuthInviteStore
// Dependencies: [2078, 504, 584, 2]

// Module 4980 (AuthInviteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2078 */;
import size from "module_2" /* 2 */;

const React2 = {};
const Store = get_initializedDefault.Store;
class AuthInviteStore extends Store {
  getGuild(arg0) {
    return closure_2[arg0];
  }
}
const prototype = AuthInviteStore.prototype;
AuthInviteStore.displayName = "AuthInviteStore";
let obj = {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      const id = guild.id;
      const obj = GuildRecordUtils;
      closure_2[id] = obj.fromInviteGuild(guild);
    }
  }
};
const authInviteStore = new AuthInviteStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;
