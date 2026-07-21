// Module ID: 10971
// Function ID: 85392
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10971 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleStopEditingRoles() {
  let closure_7 = null;
  let closure_8 = false;
  let closure_9 = null;
  let closure_10 = null;
  let closure_11 = null;
}
function handleChangeNicknameSuccess() {
  let closure_9 = null;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const FormStates = arg1(dependencyMap[6]).FormStates;
let closure_7 = null;
let closure_8 = false;
let closure_9 = null;
let closure_10 = null;
let closure_11 = null;
let tmp2 = (Store) => {
  class GuildSettingsModalMembersStore {
    constructor() {
      self = this;
      tmp = GuildSettingsModalMembersStore(this, GuildSettingsModalMembersStore);
      obj = closure_3(GuildSettingsModalMembersStore);
      tmp2 = closure_2;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GuildSettingsModalMembersStore;
  callback2(GuildSettingsModalMembersStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "isSubmitting",
    get() {
      return closure_7 === constants.SUBMITTING;
    }
  };
  items[1] = obj;
  obj = {
    key: "isEditing",
    get() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "roles",
    get() {
      return closure_11;
    }
  };
  items[4] = {
    key: "memberId",
    get() {
      return closure_10;
    }
  };
  items[5] = {
    key: "nicknameError",
    get() {
      return closure_9;
    }
  };
  return callback(GuildSettingsModalMembersStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GuildSettingsModalMembersStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING: function handleStartEditingRoles(userId) {
    userId = userId.userId;
    const member = member.getMember(userId.guildId, userId);
    if (null == member) {
      return false;
    } else {
      const OPEN = FormStates.OPEN;
      let closure_8 = true;
      let closure_10 = userId;
      const roles = member.roles;
    }
  },
  GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING: handleStopEditingRoles,
  GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE: handleStopEditingRoles,
  GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE: function handleToggleRole(roleId) {
    roleId = roleId.roleId;
    let closure_0 = roleId;
    if (null == closure_11) {
      return false;
    } else {
      if (tmp) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
        items[arraySpreadResult] = roleId;
        const sum = arraySpreadResult + 1;
        let found = items;
      } else {
        found = arr.filter((arg0) => arg0 !== roleId);
      }
      closure_11 = found;
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
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersStore.tsx");

export default tmp2;
