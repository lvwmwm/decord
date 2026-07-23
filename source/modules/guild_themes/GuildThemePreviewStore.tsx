// Module ID: 4013
// Function ID: 33305
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 4014, 4015, 686, 1837, 22, 566, 2]

// Module 4013 (_isNativeReflectConstruct)
import closure_3 from "GuildThemePreviewOrigin";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildThemePreviewOrigin from "GuildThemePreviewOrigin";

let GuildThemePreviewOrigin;
let GuildThemePreviewOwner;
const require = arg1;
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
    closure_10 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
    flag = true;
  }
  return flag;
}
({ GuildThemePreviewOrigin, GuildThemePreviewOwner } = GuildThemePreviewOrigin);
const timeout = new require("_createForOfIteratorHelperLoose").Timeout();
let closure_10 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
let tmp4 = ((Store) => {
  class GuildThemePreviewStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildThemePreviewStore);
      obj = outer1_6(GuildThemePreviewStore);
      tmp2 = outer1_5;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildThemePreviewStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "guildId",
    get() {
      return outer1_10.guildId;
    }
  };
  items[1] = obj;
  obj = {
    key: "draft",
    get() {
      return outer1_10.draft;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "original",
    get() {
      return outer1_10.original;
    }
  };
  items[4] = {
    key: "draftEnabled",
    get() {
      return outer1_10.draftEnabled;
    }
  };
  items[5] = {
    key: "originalEnabled",
    get() {
      return outer1_10.originalEnabled;
    }
  };
  items[6] = {
    key: "origin",
    get() {
      return outer1_10.origin;
    }
  };
  items[7] = {
    key: "owner",
    get() {
      return outer1_10.owner;
    }
  };
  items[8] = {
    key: "isActive",
    get() {
      return null != outer1_10.guildId;
    }
  };
  items[9] = {
    key: "isSaving",
    get() {
      return outer1_10.isSaving;
    }
  };
  items[10] = {
    key: "isAwaitingGuildUpdate",
    get() {
      return outer1_10.isAwaitingGuildUpdate;
    }
  };
  items[11] = {
    key: "saveError",
    get() {
      return outer1_10.saveError;
    }
  };
  items[12] = {
    key: "hasChanges",
    value() {
      let tmp = null != outer1_10.guildId;
      if (tmp) {
        let tmp4 = outer1_10.draftEnabled !== outer1_10.originalEnabled;
        if (!tmp4) {
          tmp4 = !GuildThemePreviewStore(outer1_2[10]).isEqual(outer1_10.draft, outer1_10.original);
          const obj = GuildThemePreviewStore(outer1_2[10]);
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return callback(GuildThemePreviewStore, items);
})(require("initialize").Store);
tmp4.displayName = "GuildThemePreviewStore";
tmp4 = new tmp4(require("dispatcher"), {
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
    const obj = { guildId, draft: require(1837) /* cloneCustomUserThemeSettings */.cloneGuildThemeSettings(draft) };
    const obj2 = require(1837) /* cloneCustomUserThemeSettings */;
    obj.original = require(1837) /* cloneCustomUserThemeSettings */.cloneGuildThemeSettings(original);
    obj.draftEnabled = draftEnabled;
    obj.originalEnabled = originalEnabled;
    obj.origin = origin;
    if (null == owner) {
      owner = obj.owner;
    }
    obj.owner = owner;
    obj.isSaving = false;
    obj.isAwaitingGuildUpdate = false;
    obj.saveError = null;
  },
  GUILD_THEME_PREVIEW_SELECT_PRESET: function handleSelectPreset(arg0) {
    if (null == obj.guildId) {
      return false;
    } else {
      obj = { presetId: tmp, customUserThemeSettings: undefined };
      let flag = !require(22) /* apply */.isEqual(obj.draft, obj);
      if (!flag) {
        flag = !obj.draftEnabled;
      }
      if (flag) {
        clearAwaitingGuildUpdateTimeout();
        obj = {};
        const merged = Object.assign(obj);
        obj["draft"] = obj;
        obj["draftEnabled"] = true;
        obj["isAwaitingGuildUpdate"] = false;
        obj["saveError"] = null;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function handleUpdateCustom(colors) {
    colors = colors.colors;
    if (null == obj.guildId) {
      return false;
    } else {
      obj = { presetId: undefined };
      obj = {};
      const items = [];
      HermesBuiltin.arraySpread(colors, 0);
      obj.colors = items;
      obj.gradientColorStops = [];
      obj.gradientAngle = tmp;
      obj.baseMix = tmp2;
      obj.customUserThemeSettings = obj;
      let flag = !require(22) /* apply */.isEqual(obj.draft, obj);
      if (!flag) {
        flag = !obj.draftEnabled;
      }
      if (flag) {
        clearAwaitingGuildUpdateTimeout();
        obj = {};
        const merged = Object.assign(obj);
        obj["draft"] = obj;
        obj["draftEnabled"] = true;
        obj["isAwaitingGuildUpdate"] = false;
        obj["saveError"] = null;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function handleTransferOwnership(owner) {
    owner = owner.owner;
    let flag = null != obj.guildId;
    if (flag) {
      flag = obj.owner !== owner;
    }
    if (flag) {
      obj = {};
      const merged = Object.assign(obj);
      obj["owner"] = owner;
      flag = true;
    }
    return flag;
  },
  GUILD_THEME_PREVIEW_END: handleEnd,
  GUILD_THEME_PREVIEW_SAVE_START: function handleSaveStart() {
    clearAwaitingGuildUpdateTimeout();
    const obj = {};
    const merged = Object.assign(obj);
    obj["isSaving"] = true;
    obj["isAwaitingGuildUpdate"] = false;
    obj["saveError"] = null;
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: function handleSaveSuccess(guildTheme) {
    guildTheme = guildTheme.guildTheme;
    if (null != obj.guildId) {
      if (tmp === obj.guildId) {
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
        obj = {};
        const merged = Object.assign(obj);
        obj["draft"] = require(1837) /* cloneCustomUserThemeSettings */.cloneGuildThemeSettings(tmp3);
        const obj2 = require(1837) /* cloneCustomUserThemeSettings */;
        obj["original"] = require(1837) /* cloneCustomUserThemeSettings */.cloneGuildThemeSettings(tmp3);
        obj["draftEnabled"] = null != enabled && enabled;
        obj["originalEnabled"] = null != enabled && enabled;
        obj["isSaving"] = false;
        obj["isAwaitingGuildUpdate"] = true;
        obj["saveError"] = null;
        (function scheduleAwaitingGuildUpdateTimeout() {
          outer1_12();
          outer1_9.start(10000, () => {
            if (obj.isAwaitingGuildUpdate) {
              obj = outer2_1(outer2_2[8]);
              obj = { type: "GUILD_THEME_PREVIEW_END" };
              obj.dispatch(obj);
            }
          });
        })();
        return true;
      }
    }
    return false;
  },
  GUILD_THEME_PREVIEW_SAVE_FAILURE: function handleSaveFailure(error) {
    let flag = null != obj.guildId;
    if (flag) {
      flag = tmp === obj.guildId;
    }
    if (flag) {
      clearAwaitingGuildUpdateTimeout();
      obj = {};
      const merged = Object.assign(obj);
      obj["isSaving"] = false;
      obj["isAwaitingGuildUpdate"] = false;
      obj["saveError"] = error.error;
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
        const fromServerGuildThemeResult = require(1837) /* cloneCustomUserThemeSettings */.fromServerGuildTheme(guild.theme);
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
          isEqualResult = require(22) /* apply */.isEqual(tmp14, closure_10.original);
          const obj2 = require(22) /* apply */;
        }
        let flag = !tmp20;
        if (!!isEqualResult) {
          handleEnd();
          flag = true;
        }
        tmp6 = flag;
        const obj = require(1837) /* cloneCustomUserThemeSettings */;
        const tmp12 = null != enabled && enabled;
      }
      tmp5 = tmp6;
    }
    return tmp5;
  },
  LOGOUT: handleEnd
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_themes/GuildThemePreviewStore.tsx");

export default tmp4;
export { GuildThemePreviewOrigin };
export { GuildThemePreviewOwner };
