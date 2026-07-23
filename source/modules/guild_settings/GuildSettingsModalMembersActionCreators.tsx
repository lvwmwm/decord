// Module ID: 10983
// Function ID: 85485
// Dependencies: [653, 686, 507, 1212, 2]

// Module 10983
import ME from "ME";

let closure_3;
let closure_4;
({ Endpoints: closure_3, ME: closure_4 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default {
  startEditingRoles(id, id2) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 };
    obj.dispatch(obj);
  },
  stopEditingRoles() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state };
    obj.dispatch(obj);
  },
  updateMemberRoles(guildId, userId, roles) {
    function onEnd() {
      return outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    let obj = importDefault(686);
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_3.GUILD_MEMBER(guildId, userId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { roles };
    HTTP.patch(obj).then(onEnd, onEnd);
  },
  startEditingNickname() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, userId, nick) {
    const _require = userId;
    if (null == userId) {
      let GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, userId);
    }
    let obj = importDefault(686);
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = _require(507).HTTP;
    obj = { url: GUILD_MEMBER_NICKResult };
    obj = { nick };
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    const obj4 = _require(507);
    HTTP.patch(obj).then(() => {
      outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
    }, (status) => {
      const intl = userId(outer1_2[3]).intl;
      let stringResult = intl.string(userId(outer1_2[3]).t["5LO/Ss"]);
      if (null != userId) {
        const intl2 = userId(outer1_2[3]).intl;
        stringResult = intl2.string(userId(outer1_2[3]).t.rJfW6S);
      }
      if (403 === status.status) {
        const intl3 = userId(outer1_2[3]).intl;
        stringResult = intl3.formatToMarkdownString(userId(outer1_2[3]).t.Izf9jO, {});
      }
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE", error: stringResult };
      obj.dispatch(obj);
    });
  }
};
