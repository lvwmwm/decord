// Module ID: 7835
// Function ID: 62449
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7835 (_isNativeReflectConstruct)
let FormStates;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleFormOpen() {
  const CLOSED = FormStates.OPEN;
  let closure_17 = {};
}
function handleFormClose() {
  const CLOSED = FormStates.CLOSED;
  let closure_17 = {};
}
function handleResetTryItOutChanges() {
  let closure_14 = obj;
}
function handleResetPendingChanges() {
  let closure_13 = {};
  let closure_17 = {};
}
function handleReset() {
  handleResetPendingChanges();
  handleResetTryItOutChanges();
  handleFormClose();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
({ BIO_MAX_LENGTH: closure_5, FormStates } = tmp2);
({ ME: closure_7, UserSettingsSections: closure_8 } = tmp2);
let closure_9 = {};
let obj = {};
let closure_11 = {};
const items = [...arg1(dependencyMap[8]).PSEUDO_GUILD_IDS, arg1(dependencyMap[6]).FAVORITES_RAW_GUILD_ID, arg1(dependencyMap[7]).NOTIFICATIONS_INBOX_RAW_GUILD_ID];
const set = new Set(items);
let closure_13 = {};
let closure_15;
const CLOSED = FormStates.CLOSED;
let closure_17 = {};
let tmp4 = (Store) => {
  class UserProfileSettingsStore {
    constructor() {
      self = this;
      tmp = UserProfileSettingsStore(this, UserProfileSettingsStore);
      obj = closure_3(UserProfileSettingsStore);
      tmp2 = closure_2;
      if (closure_18()) {
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
  let closure_0 = UserProfileSettingsStore;
  callback2(UserProfileSettingsStore, Store);
  let obj = {
    key: "selectedGuildId",
    get() {
      return closure_15;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getFormState",
    value() {
      return closure_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "getErrors",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_7;
      }
      let tmp3 = closure_17[tmp];
      if (null == tmp3) {
        tmp3 = closure_11;
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPendingChanges",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_7;
      }
      let tmp3 = closure_13[tmp];
      if (null == tmp3) {
        tmp3 = closure_9;
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "getTryItOutChanges",
    value() {
      return closure_14;
    }
  };
  items[5] = {
    key: "hasUnsavedChanges",
    value() {
      const values = Object.values(closure_13);
      return values.some((arg0) => {
        const values = Object.values(arg0);
        return values.some((arg0) => undefined !== arg0);
      });
    }
  };
  items[6] = {
    key: "showNotice",
    value() {
      const self = this;
      let values = Object.values(this.getPendingChanges(closure_7));
      const tmp = !values.some((arg0) => undefined !== arg0);
      let someResult = !tmp;
      if (tmp) {
        const _Object = Object;
        values = Object.values(self.getPendingChanges(closure_15));
        someResult = values.some((arg0) => undefined !== arg0);
      }
      return someResult;
    }
  };
  items[7] = {
    key: "canSubmit",
    value() {
      const self = this;
      const items = [closure_7, closure_15];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let pendingChanges = self.getPendingChanges(items[num]);
          if (undefined !== pendingChanges.pendingBio) {
            let tmp2 = closure_5;
            if (pendingChanges.pendingBio.length > closure_5) {
              break;
            }
          }
          num = num + 1;
        }
        return false;
      }
      return true;
    }
  };
  return callback(UserProfileSettingsStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp4.displayName = "UserProfileSettingsStore";
obj = {
  USER_SETTINGS_MODAL_INIT: handleFormOpen,
  USER_SETTINGS_MODAL_OPEN: handleFormOpen,
  USER_SETTINGS_MODAL_SET_SECTION: function handleSectionChange(section) {
    if (section.section !== constants.ACCOUNT) {
      return false;
    } else {
      const CLOSED = FormStates.OPEN;
      let closure_17 = {};
    }
  },
  USER_PROFILE_SETTINGS_INIT: function handleInit(guildId) {
    guildId = guildId.guildId;
    let tmp;
    if (null != guildId) {
      if (!set.has(guildId)) {
        tmp = guildId;
      }
    }
    let closure_15 = tmp;
    const CLOSED = FormStates.OPEN;
    let closure_17 = {};
  },
  USER_PROFILE_SETTINGS_SET_GUILD: function handleSetGuild(guildId) {
    guildId = guildId.guildId;
    let tmp;
    if (null != guildId) {
      if (!set.has(guildId)) {
        tmp = guildId;
      }
    }
    let closure_15 = tmp;
    let closure_17 = {};
  },
  USER_PROFILE_SETTINGS_CLOSE: handleFormClose,
  USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: handleReset,
  USER_PROFILE_SETTINGS_SUBMIT: function handleFormSubmit() {
    const CLOSED = FormStates.SUBMITTING;
    let closure_17 = {};
  },
  USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function handleFormSubmitSuccess(guildId) {
    guildId = guildId.guildId;
    if (CLOSED !== FormStates.SUBMITTING) {
      return false;
    } else {
      const CLOSED = FormStates.OPEN;
      if (null == guildId) {
        guildId = closure_7;
      }
      closure_17[guildId] = closure_11;
    }
  },
  USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(arg0) {
    let errors;
    let guildId;
    ({ guildId, errors } = arg0);
    if (CLOSED !== FormStates.SUBMITTING) {
      return false;
    } else {
      const CLOSED = FormStates.OPEN;
      if (null == guildId) {
        guildId = closure_7;
      }
      if (null == errors) {
        errors = closure_11;
      }
      closure_17[guildId] = errors;
    }
  },
  USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function handleSetPendingChanges(arg0) {
    let guildId;
    let type;
    ({ type, guildId } = arg0);
    let obj = Object.create(null);
    obj.type = 0;
    obj.guildId = 0;
    const merged = Object.assign(arg0, obj);
    let tmp4 = guildId;
    if (null == guildId) {
      tmp4 = closure_7;
    }
    obj = {};
    if (null == guildId) {
      guildId = closure_7;
    }
    const merged1 = Object.assign(closure_13[guildId]);
    const merged2 = Object.assign(merged);
    closure_13[tmp4] = obj;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function handleSetTryItOutAvatar(avatar) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tryItOutAvatar"] = avatar.avatar;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function handleSetTryItOutAvatarDecoration(avatarDecoration) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tryItOutAvatarDecoration"] = avatarDecoration.avatarDecoration;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function handleSetTryItOutProfileEffect(profileEffect) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tryItOutProfileEffect"] = profileEffect.profileEffect;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function handleSetTryItOutBanner(banner) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tryItOutBanner"] = banner.banner;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function handleSetTryItOutThemeColors(themeColors) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tryItOutThemeColors"] = themeColors.themeColors;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function handleSetTryItOutDisplayNameStyles(displayNameStyles) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["tryItOutDisplayNameStyles"] = displayNameStyles.displayNameStyles;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function handleSetTryItOutPreset(arg0) {
    let avatarDecoration;
    let banner;
    let displayNameStyles;
    let themeColors;
    const obj = {};
    ({ banner, themeColors, avatarDecoration, displayNameStyles } = arg0);
    const merged = Object.assign(obj);
    obj["tryItOutBanner"] = banner;
    obj["tryItOutThemeColors"] = themeColors;
    obj["tryItOutAvatarDecoration"] = avatarDecoration;
    obj["tryItOutDisplayNameStyles"] = displayNameStyles;
  },
  USER_PROFILE_SETTINGS_CLEAR_ERRORS: function handleResetErrors() {
    let closure_17 = {};
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: function handleResetPendingAccountChanges() {
    const entries = Object.entries(closure_13);
    closure_13 = Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      const obj = {};
      const merged = Object.assign(tmp2);
      obj["pendingGlobalName"] = undefined;
      obj["pendingNickname"] = undefined;
      obj["pendingDisplayNameStyles"] = undefined;
      obj["pendingAvatar"] = undefined;
      obj["pendingAvatarDecoration"] = undefined;
      obj["pendingNameplate"] = undefined;
      items[1] = obj;
      return items;
    }));
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: function handleResetPendingProfileChanges() {
    const entries = Object.entries(closure_13);
    closure_13 = Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      const obj = {};
      const merged = Object.assign(tmp2);
      obj["pendingPronouns"] = undefined;
      obj["pendingProfileEffect"] = undefined;
      obj["pendingProfileFrame"] = undefined;
      obj["pendingBanner"] = undefined;
      obj["pendingBannerOriginalMd5"] = undefined;
      obj["pendingAccentColor"] = undefined;
      obj["pendingThemeColors"] = undefined;
      obj["pendingBio"] = undefined;
      items[1] = obj;
      return items;
    }));
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: handleResetPendingChanges,
  USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: handleResetTryItOutChanges,
  USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function handleResetPendingLegacyUsernameDisabled() {
    let obj = closure_13[closure_7];
    if (null == obj) {
      obj = {};
    }
    let prop;
    if (null != obj) {
      prop = obj.pendingLegacyUsernameDisabled;
    }
    if (undefined === prop) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(closure_13[closure_7]);
      obj["pendingLegacyUsernameDisabled"] = undefined;
      closure_13[closure_7] = obj;
    }
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: function handleResetPendingPrimaryGuildChanges() {
    let obj = closure_13[closure_7];
    if (null == obj) {
      obj = {};
    }
    let prop;
    if (null != obj) {
      prop = obj.pendingPrimaryGuildId;
    }
    if (undefined === prop) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(closure_13[closure_7]);
      obj["pendingPrimaryGuildId"] = undefined;
      closure_13[closure_7] = obj;
    }
  },
  USER_PROFILE_UPDATE_FAILURE: function handleProfileUpdateFailure(arg0) {
    let errors;
    let guildId;
    ({ guildId, errors } = arg0);
    const CLOSED = FormStates.OPEN;
    if (null == guildId) {
      guildId = closure_7;
    }
    if (null == errors) {
      errors = closure_11;
    }
    closure_17[guildId] = errors;
  },
  LOGOUT: handleReset
};
tmp4 = new tmp4(importDefault(dependencyMap[10]), obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_profile/UserProfileSettingsStore.tsx");

export default tmp4;
export const IGNORE_GUILD_IDS = set;
