// Module ID: 10967
// Function ID: 85390
// Dependencies: [0, 0, 0, 0, 0]

// Module 10967
import result from "result";
import result from "result";

({ Endpoints: closure_3, ME: closure_4 } = result);
result = result.fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default {
  startEditingRoles(id, id2) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 };
    obj.dispatch(obj);
  },
  stopEditingRoles() {
    importDefault(dependencyMap[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state };
    obj.dispatch(obj);
  },
  updateMemberRoles(guildId, userId, roles) {
    function onEnd() {
      return callback(closure_2[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    let obj = importDefault(dependencyMap[1]);
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: closure_3.GUILD_MEMBER(guildId, userId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { roles };
    HTTP.patch(obj).then(onEnd, onEnd);
  },
  startEditingNickname() {
    importDefault(dependencyMap[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, userId, nick) {
    const require = userId;
    if (null == userId) {
      let GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, userId);
    }
    let obj = importDefault(dependencyMap[1]);
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: GUILD_MEMBER_NICKResult };
    obj = { nick };
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = require(dependencyMap[2]).rejectWithMigratedError();
    const obj4 = require(dependencyMap[2]);
    HTTP.patch(obj).then(() => {
      callback(closure_2[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
    }, (status) => {
      const intl = arg1(closure_2[3]).intl;
      let stringResult = intl.string(arg1(closure_2[3]).t.5LO/Ss);
      if (null != arg1) {
        const intl2 = arg1(closure_2[3]).intl;
        stringResult = intl2.string(arg1(closure_2[3]).t.rJfW6S);
      }
      if (403 === status.status) {
        const intl3 = arg1(closure_2[3]).intl;
        stringResult = intl3.formatToMarkdownString(arg1(closure_2[3]).t.Izf9jO, {});
      }
      let obj = callback(closure_2[1]);
      obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE", error: stringResult };
      obj.dispatch(obj);
    });
  }
};
