// Module ID: 10982
// Function ID: 85466
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1917, 653, 566, 686, 2]

// Module 10982 (_isNativeReflectConstruct)
import ME from "ME";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FormStates } from "ME";

function _isNativeReflectConstruct() {
  let ME = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return ME;
  }
  const result = _isNativeReflectConstruct();
}
function handleStopEditingRoles() {
  let c7 = null;
  let c8 = false;
  let c9 = null;
  let c10 = null;
  let c11 = null;
}
function handleChangeNicknameSuccess() {
  let c9 = null;
}
let c7 = null;
let c8 = false;
let c9 = null;
let c10 = null;
let c11 = null;
let tmp2 = ((Store) => {
  class GuildSettingsModalMembersStore {
    constructor() {
      self = this;
      tmp = GuildSettingsModalMembersStore(this, GuildSettingsModalMembersStore);
      obj = outer1_3(GuildSettingsModalMembersStore);
      tmp2 = outer1_2;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildSettingsModalMembersStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "isSubmitting",
    get() {
      return outer1_7 === outer1_6.SUBMITTING;
    }
  };
  items[1] = obj;
  obj = {
    key: "isEditing",
    get() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "roles",
    get() {
      return outer1_11;
    }
  };
  items[4] = {
    key: "memberId",
    get() {
      return outer1_10;
    }
  };
  items[5] = {
    key: "nicknameError",
    get() {
      return outer1_9;
    }
  };
  return callback(GuildSettingsModalMembersStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildSettingsModalMembersStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING: function handleStartEditingRoles(userId) {
    userId = userId.userId;
    member = member.getMember(userId.guildId, userId);
    if (null == member) {
      return false;
    } else {
      const OPEN = FormStates.OPEN;
      let c8 = true;
      const roles = member.roles;
    }
  },
  GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING: handleStopEditingRoles,
  GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE: handleStopEditingRoles,
  GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE: function handleToggleRole(roleId) {
    roleId = roleId.roleId;
    if (null == found) {
      return false;
    } else if (tmp) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
      items[arraySpreadResult] = roleId;
      const sum = arraySpreadResult + 1;
      found = items;
    } else {
      found = arr.filter((arg0) => arg0 !== roleId);
    }
  },
  GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE: function handleSaveRoles() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME: handleChangeNicknameSuccess,
  GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS: handleChangeNicknameSuccess,
  GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE: function handleChangeNicknameFailure(error) {
    error = error.error;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersStore.tsx");

export default tmp2;
