// Module ID: 4674
// Function ID: 4675
// Name: AuthInviteStore
// Dependencies: [2055, 504, 573, 2]

// Module 4674 (AuthInviteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2055 */;

require = fn;
let closure_2 = {};
const Store = initializeDefault.Store;
class AuthInviteStore extends Store {
}
AuthInviteStore.prototype["getGuild"] = function getGuild(arg0) {
  return closure_2[arg0];
};
AuthInviteStore.displayName = "AuthInviteStore";
const authInviteStore = new AuthInviteStore(DispatcherDefault, {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      closure_2[guild.id] = GuildRecordUtils.fromInviteGuild(guild);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;
