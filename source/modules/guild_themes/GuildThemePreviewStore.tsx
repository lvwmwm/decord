// Module ID: 4011
// Function ID: 33298
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4011 (_isNativeReflectConstruct)
let GuildThemePreviewOrigin;
let GuildThemePreviewOwner;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function clearAwaitingGuildUpdateTimeout() {
  timeout.stop();
}
function handleEnd() {
  let tmp = null == closure_10.guildId;
  if (tmp) {
    tmp = !timeout.isStarted();
  }
  let flag = !tmp;
  if (!tmp) {
    clearAwaitingGuildUpdateTimeout();
    closure_10 = {};
    flag = true;
  }
  return flag;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ GuildThemePreviewOrigin, GuildThemePreviewOwner } = arg1(dependencyMap[6]));
const timeout = new arg1(dependencyMap[7]).Timeout();
let closure_10 = {};
let tmp4 = (Store) => {
  class GuildThemePreviewStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildThemePreviewStore);
      obj = closure_6(GuildThemePreviewStore);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildThemePreviewStore;
  callback2(GuildThemePreviewStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "guildId",
    get() {
      return closure_10.guildId;
    }
  };
  items[1] = obj;
  obj = {
    key: "draft",
    get() {
      return closure_10.draft;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "original",
    get() {
      return closure_10.original;
    }
  };
  items[4] = {
    key: "draftEnabled",
    get() {
      return closure_10.draftEnabled;
    }
  };
  items[5] = {
    key: "originalEnabled",
    get() {
      return closure_10.originalEnabled;
    }
  };
  items[6] = {
    key: "origin",
    get() {
      return closure_10.origin;
    }
  };
  items[7] = {
    key: "owner",
    get() {
      return closure_10.owner;
    }
  };
  items[8] = {
    key: "isActive",
    get() {
      return null != closure_10.guildId;
    }
  };
  items[9] = {
    key: "isSaving",
    get() {
      return closure_10.isSaving;
    }
  };
  items[10] = {
    key: "isAwaitingGuildUpdate",
    get() {
      return closure_10.isAwaitingGuildUpdate;
    }
  };
  items[11] = {
    key: "saveError",
    get() {
      return closure_10.saveError;
    }
  };
  items[12] = {
    key: "hasChanges",
    value() {
      let tmp = null != closure_10.guildId;
      if (tmp) {
        let tmp4 = closure_10.draftEnabled !== closure_10.originalEnabled;
        if (!tmp4) {
          tmp4 = !GuildThemePreviewStore(closure_2[10]).isEqual(closure_10.draft, closure_10.original);
          const obj = GuildThemePreviewStore(closure_2[10]);
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return callback(GuildThemePreviewStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp4.displayName = "GuildThemePreviewStore";
tmp4 = new tmp4(importDefault(dependencyMap[8]), {
  GUILD_THEME_PREVIEW_START: function handleStart(owner) {
    let draft;
    let draftEnabled;
    let guildId;
    let origin;
    let original;
    let originalEnabled;
    owner = owner.owner;
    ({ guildId, draft, original, draftEnabled, originalEnabled, origin } = owner);
    clearAwaitingGuildUpdateTimeout();
    const obj = { guildId, draft: arg1(dependencyMap[9]).cloneGuildThemeSettings(draft) };
    const obj2 = arg1(dependencyMap[9]);
    obj.original = arg1(dependencyMap[9]).cloneGuildThemeSettings(original);
    obj.draftEnabled = draftEnabled;
    obj.originalEnabled = originalEnabled;
    obj.origin = origin;
    if (null == owner) {
      owner = closure_10.owner;
    }
    obj.owner = owner;
    obj.isSaving = false;
    obj.isAwaitingGuildUpdate = false;
    obj.saveError = null;
    closure_10 = obj;
  },
  GUILD_THEME_PREVIEW_SELECT_PRESET: function handleSelectPreset(arg0) {
    if (null == closure_10.guildId) {
      return false;
    } else {
      let obj = { presetId: tmp, customUserThemeSettings: undefined };
      let flag = !arg1(dependencyMap[10]).isEqual(closure_10.draft, obj);
      if (!flag) {
        flag = !closure_10.draftEnabled;
      }
      if (flag) {
        clearAwaitingGuildUpdateTimeout();
        obj = {};
        const merged = Object.assign(closure_10);
        obj["draft"] = obj;
        obj["draftEnabled"] = true;
        obj["isAwaitingGuildUpdate"] = false;
        obj["saveError"] = null;
        closure_10 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function handleUpdateCustom(colors) {
    colors = colors.colors;
    if (null == closure_10.guildId) {
      return false;
    } else {
      let obj = { presetId: undefined };
      obj = {};
      const items = [];
      HermesBuiltin.arraySpread(colors, 0);
      obj.colors = items;
      obj.gradientColorStops = [];
      obj.gradientAngle = tmp;
      obj.baseMix = tmp2;
      obj.customUserThemeSettings = obj;
      let flag = !arg1(dependencyMap[10]).isEqual(closure_10.draft, obj);
      if (!flag) {
        flag = !closure_10.draftEnabled;
      }
      if (flag) {
        clearAwaitingGuildUpdateTimeout();
        obj = {};
        const merged = Object.assign(closure_10);
        obj["draft"] = obj;
        obj["draftEnabled"] = true;
        obj["isAwaitingGuildUpdate"] = false;
        obj["saveError"] = null;
        closure_10 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function handleTransferOwnership(owner) {
    owner = owner.owner;
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = closure_10.owner !== owner;
    }
    if (flag) {
      const obj = {};
      const merged = Object.assign(closure_10);
      obj["owner"] = owner;
      closure_10 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_THEME_PREVIEW_END: handleEnd,
  GUILD_THEME_PREVIEW_SAVE_START: function handleSaveStart() {
    clearAwaitingGuildUpdateTimeout();
    const obj = {};
    const merged = Object.assign(closure_10);
    obj["isSaving"] = true;
    obj["isAwaitingGuildUpdate"] = false;
    obj["saveError"] = null;
    closure_10 = obj;
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: function handleSaveSuccess(guildTheme) {
    guildTheme = guildTheme.guildTheme;
    if (null != closure_10.guildId) {
      if (tmp === closure_10.guildId) {
        let themeSettings;
        if (null != guildTheme) {
          themeSettings = guildTheme.themeSettings;
        }
        let tmp3 = null;
        if (null != themeSettings) {
          tmp3 = themeSettings;
        }
        let enabled;
        if (null != guildTheme) {
          enabled = guildTheme.enabled;
        }
        const obj = {};
        const merged = Object.assign(closure_10);
        obj["draft"] = arg1(dependencyMap[9]).cloneGuildThemeSettings(tmp3);
        const obj2 = arg1(dependencyMap[9]);
        obj["original"] = arg1(dependencyMap[9]).cloneGuildThemeSettings(tmp3);
        obj["draftEnabled"] = null != enabled && enabled;
        obj["originalEnabled"] = null != enabled && enabled;
        obj["isSaving"] = false;
        obj["isAwaitingGuildUpdate"] = true;
        obj["saveError"] = null;
        closure_10 = obj;
        function scheduleAwaitingGuildUpdateTimeout() {
          callback();
          closure_9.start(10000, () => {
            if (obj.isAwaitingGuildUpdate) {
              let obj = callback(closure_2[8]);
              obj = { type: "GUILD_THEME_PREVIEW_END" };
              obj.dispatch(obj);
            }
          });
        }();
        return true;
      }
    }
    return false;
  },
  GUILD_THEME_PREVIEW_SAVE_FAILURE: function handleSaveFailure(error) {
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = tmp === closure_10.guildId;
    }
    if (flag) {
      clearAwaitingGuildUpdateTimeout();
      const obj = {};
      const merged = Object.assign(closure_10);
      obj["isSaving"] = false;
      obj["isAwaitingGuildUpdate"] = false;
      obj["saveError"] = error.error;
      closure_10 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function handleSettingsSaveSuccess(arg0) {
    let tmp2 = null != closure_10.guildId;
    if (tmp2) {
      tmp2 = tmp === closure_10.guildId;
    }
    if (tmp2) {
      tmp2 = handleEnd();
    }
    return tmp2;
  },
  USER_SETTINGS_MODAL_OPEN: handleEnd,
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = tmp !== closure_10.guildId;
    }
    if (flag) {
      handleEnd();
      flag = true;
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = guild.guild.id === closure_10.guildId;
    }
    if (flag) {
      handleEnd();
      flag = true;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    let tmp = user.user.id === id.getId();
    if (tmp) {
      let flag = null != closure_10.guildId;
      if (flag) {
        flag = user.guildId === closure_10.guildId;
      }
      if (flag) {
        handleEnd();
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let tmp = !closure_10.isAwaitingGuildUpdate;
    if (!tmp) {
      tmp = null == closure_10.guildId;
    }
    if (!tmp) {
      tmp = guild.id !== closure_10.guildId;
    }
    let tmp5 = !tmp;
    if (!tmp) {
      let tmp6 = undefined !== guild.theme;
      if (tmp6) {
        const fromServerGuildThemeResult = arg1(dependencyMap[9]).fromServerGuildTheme(guild.theme);
        let enabled;
        if (null != fromServerGuildThemeResult) {
          enabled = fromServerGuildThemeResult.enabled;
        }
        let themeSettings;
        if (null != fromServerGuildThemeResult) {
          themeSettings = fromServerGuildThemeResult.themeSettings;
        }
        let tmp14 = null;
        if (null != themeSettings) {
          tmp14 = themeSettings;
        }
        let isEqualResult = (null != enabled && enabled) === closure_10.originalEnabled;
        if (isEqualResult) {
          isEqualResult = arg1(dependencyMap[10]).isEqual(tmp14, closure_10.original);
          const obj2 = arg1(dependencyMap[10]);
        }
        let flag = !tmp20;
        if (!!isEqualResult) {
          handleEnd();
          flag = true;
        }
        tmp6 = flag;
        const obj = arg1(dependencyMap[9]);
        const tmp12 = null != enabled && enabled;
      }
      tmp5 = tmp6;
    }
    return tmp5;
  },
  LOGOUT: handleEnd
});
const obj = {
  GUILD_THEME_PREVIEW_START: function handleStart(owner) {
    let draft;
    let draftEnabled;
    let guildId;
    let origin;
    let original;
    let originalEnabled;
    owner = owner.owner;
    ({ guildId, draft, original, draftEnabled, originalEnabled, origin } = owner);
    clearAwaitingGuildUpdateTimeout();
    const obj = { guildId, draft: arg1(dependencyMap[9]).cloneGuildThemeSettings(draft) };
    const obj2 = arg1(dependencyMap[9]);
    obj.original = arg1(dependencyMap[9]).cloneGuildThemeSettings(original);
    obj.draftEnabled = draftEnabled;
    obj.originalEnabled = originalEnabled;
    obj.origin = origin;
    if (null == owner) {
      owner = closure_10.owner;
    }
    obj.owner = owner;
    obj.isSaving = false;
    obj.isAwaitingGuildUpdate = false;
    obj.saveError = null;
    closure_10 = obj;
  },
  GUILD_THEME_PREVIEW_SELECT_PRESET: function handleSelectPreset(arg0) {
    if (null == closure_10.guildId) {
      return false;
    } else {
      let obj = { presetId: tmp, customUserThemeSettings: undefined };
      let flag = !arg1(dependencyMap[10]).isEqual(closure_10.draft, obj);
      if (!flag) {
        flag = !closure_10.draftEnabled;
      }
      if (flag) {
        clearAwaitingGuildUpdateTimeout();
        obj = {};
        const merged = Object.assign(closure_10);
        obj["draft"] = obj;
        obj["draftEnabled"] = true;
        obj["isAwaitingGuildUpdate"] = false;
        obj["saveError"] = null;
        closure_10 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function handleUpdateCustom(colors) {
    colors = colors.colors;
    if (null == closure_10.guildId) {
      return false;
    } else {
      let obj = { presetId: undefined };
      obj = {};
      const items = [];
      HermesBuiltin.arraySpread(colors, 0);
      obj.colors = items;
      obj.gradientColorStops = [];
      obj.gradientAngle = tmp;
      obj.baseMix = tmp2;
      obj.customUserThemeSettings = obj;
      let flag = !arg1(dependencyMap[10]).isEqual(closure_10.draft, obj);
      if (!flag) {
        flag = !closure_10.draftEnabled;
      }
      if (flag) {
        clearAwaitingGuildUpdateTimeout();
        obj = {};
        const merged = Object.assign(closure_10);
        obj["draft"] = obj;
        obj["draftEnabled"] = true;
        obj["isAwaitingGuildUpdate"] = false;
        obj["saveError"] = null;
        closure_10 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function handleTransferOwnership(owner) {
    owner = owner.owner;
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = closure_10.owner !== owner;
    }
    if (flag) {
      const obj = {};
      const merged = Object.assign(closure_10);
      obj["owner"] = owner;
      closure_10 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_THEME_PREVIEW_END: handleEnd,
  GUILD_THEME_PREVIEW_SAVE_START: function handleSaveStart() {
    clearAwaitingGuildUpdateTimeout();
    const obj = {};
    const merged = Object.assign(closure_10);
    obj["isSaving"] = true;
    obj["isAwaitingGuildUpdate"] = false;
    obj["saveError"] = null;
    closure_10 = obj;
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: function handleSaveSuccess(guildTheme) {
    guildTheme = guildTheme.guildTheme;
    if (null != closure_10.guildId) {
      if (tmp === closure_10.guildId) {
        let themeSettings;
        if (null != guildTheme) {
          themeSettings = guildTheme.themeSettings;
        }
        let tmp3 = null;
        if (null != themeSettings) {
          tmp3 = themeSettings;
        }
        let enabled;
        if (null != guildTheme) {
          enabled = guildTheme.enabled;
        }
        const obj = {};
        const merged = Object.assign(closure_10);
        obj["draft"] = arg1(dependencyMap[9]).cloneGuildThemeSettings(tmp3);
        const obj2 = arg1(dependencyMap[9]);
        obj["original"] = arg1(dependencyMap[9]).cloneGuildThemeSettings(tmp3);
        obj["draftEnabled"] = null != enabled && enabled;
        obj["originalEnabled"] = null != enabled && enabled;
        obj["isSaving"] = false;
        obj["isAwaitingGuildUpdate"] = true;
        obj["saveError"] = null;
        closure_10 = obj;
        function scheduleAwaitingGuildUpdateTimeout() {
          callback();
          closure_9.start(10000, () => {
            if (obj.isAwaitingGuildUpdate) {
              let obj = callback(closure_2[8]);
              obj = { type: "GUILD_THEME_PREVIEW_END" };
              obj.dispatch(obj);
            }
          });
        }();
        return true;
      }
    }
    return false;
  },
  GUILD_THEME_PREVIEW_SAVE_FAILURE: function handleSaveFailure(error) {
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = tmp === closure_10.guildId;
    }
    if (flag) {
      clearAwaitingGuildUpdateTimeout();
      const obj = {};
      const merged = Object.assign(closure_10);
      obj["isSaving"] = false;
      obj["isAwaitingGuildUpdate"] = false;
      obj["saveError"] = error.error;
      closure_10 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function handleSettingsSaveSuccess(arg0) {
    let tmp2 = null != closure_10.guildId;
    if (tmp2) {
      tmp2 = tmp === closure_10.guildId;
    }
    if (tmp2) {
      tmp2 = handleEnd();
    }
    return tmp2;
  },
  USER_SETTINGS_MODAL_OPEN: handleEnd,
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = tmp !== closure_10.guildId;
    }
    if (flag) {
      handleEnd();
      flag = true;
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let flag = null != closure_10.guildId;
    if (flag) {
      flag = guild.guild.id === closure_10.guildId;
    }
    if (flag) {
      handleEnd();
      flag = true;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    let tmp = user.user.id === id.getId();
    if (tmp) {
      let flag = null != closure_10.guildId;
      if (flag) {
        flag = user.guildId === closure_10.guildId;
      }
      if (flag) {
        handleEnd();
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let tmp = !closure_10.isAwaitingGuildUpdate;
    if (!tmp) {
      tmp = null == closure_10.guildId;
    }
    if (!tmp) {
      tmp = guild.id !== closure_10.guildId;
    }
    let tmp5 = !tmp;
    if (!tmp) {
      let tmp6 = undefined !== guild.theme;
      if (tmp6) {
        const fromServerGuildThemeResult = arg1(dependencyMap[9]).fromServerGuildTheme(guild.theme);
        let enabled;
        if (null != fromServerGuildThemeResult) {
          enabled = fromServerGuildThemeResult.enabled;
        }
        let themeSettings;
        if (null != fromServerGuildThemeResult) {
          themeSettings = fromServerGuildThemeResult.themeSettings;
        }
        let tmp14 = null;
        if (null != themeSettings) {
          tmp14 = themeSettings;
        }
        let isEqualResult = (null != enabled && enabled) === closure_10.originalEnabled;
        if (isEqualResult) {
          isEqualResult = arg1(dependencyMap[10]).isEqual(tmp14, closure_10.original);
          const obj2 = arg1(dependencyMap[10]);
        }
        let flag = !tmp20;
        if (!!isEqualResult) {
          handleEnd();
          flag = true;
        }
        tmp6 = flag;
        const obj = arg1(dependencyMap[9]);
        const tmp12 = null != enabled && enabled;
      }
      tmp5 = tmp6;
    }
    return tmp5;
  },
  LOGOUT: handleEnd
};
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_themes/GuildThemePreviewStore.tsx");

export default tmp4;
export { GuildThemePreviewOrigin };
export { GuildThemePreviewOwner };
