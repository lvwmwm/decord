// Module ID: 11969
// Function ID: 11970
// Name: GuildSettingsModalMembersActionCreators
// Dependencies: [1078, 577, 1275, 1119, 2]

// Module 11969 (GuildSettingsModalMembersActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import util from "util" /* 1119 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Endpoints: c3, ME: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default {
  startEditingRoles(id, id2) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 });
  },
  stopEditingRoles() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state });
  },
  updateMemberRoles(guildId, userId, roles) {
    function onEnd() {
      return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: React3.GUILD_MEMBER(guildId, userId), body: { roles }, oldFormErrors: true, rejectWithError: true };
    const obj2 = { roles };
    HTTP.patch(request).then(onEnd, onEnd);
  },
  startEditingNickname() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, userId, nick) {
    _require = userId;
    if (null == userId) {
      let GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, userId);
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: GUILD_MEMBER_NICKResult, body: { nick }, oldFormErrors: true, rejectWithError: null };
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj3 = require("HTTPUtils");
    HTTP.patch(request).then(() => {
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
    }, (status) => {
      const intl = util.intl;
      let stringResult = intl.string(util.t["5LO/Ss"]);
      if (null != closure_0) {
        const intl2 = tmp(1119).intl;
        stringResult = intl2.string(tmp(1119).t.rJfW6S);
      }
      if (403 === status.status) {
        const intl3 = tmp(1119).intl;
        stringResult = intl3.formatToMarkdownString(tmp(1119).t.Izf9jO, {});
      }
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE", error: stringResult });
    });
  }
};
