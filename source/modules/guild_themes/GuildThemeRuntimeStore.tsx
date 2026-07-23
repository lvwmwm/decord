// Module ID: 4016
// Function ID: 33383
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4017, 1838, 3947, 653, 4021, 1837, 22, 566, 686, 2]

// Module 4016 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function guildHasThemeFeature(guildId) {
  const guild = store.getGuild(guildId);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_THEME);
  }
  return true === hasItem;
}
function readGuildTheme(id) {
  let guildTheme;
  const guild = store.getGuild(id);
  if (null != guild) {
    guildTheme = guild.guildTheme;
  }
  return require(1837) /* cloneCustomUserThemeSettings */.cloneGuildTheme(guildTheme);
}
function clearSelectedGuildThemeSnapshot() {
  let flag = null != c11;
  if (flag) {
    c11 = null;
    flag = true;
  }
  return flag;
}
function setSelectedGuildThemeSnapshot(guildId, cloneGuildThemeResult, hasThemeFeature) {
  guildId = undefined;
  if (null != obj) {
    guildId = obj.guildId;
  }
  let flag = guildId !== guildId;
  if (!flag) {
    obj = require(22) /* apply */;
    flag = !obj.isEqual(obj.guildTheme, cloneGuildThemeResult);
  }
  if (!flag) {
    flag = obj.hasThemeFeature !== hasThemeFeature;
  }
  if (flag) {
    obj = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature };
    flag = true;
  }
  return flag;
}
function snapshotSelectedGuildId(guildId) {
  if (null == guildId) {
    let tmp5 = clearSelectedGuildThemeSnapshot();
  } else {
    tmp5 = setSelectedGuildThemeSnapshot(guildId, readGuildTheme(guildId), guildHasThemeFeature(guildId));
    const tmp3 = readGuildTheme(guildId);
  }
  return tmp5;
}
function snapshotSelectedGuild() {
  return snapshotSelectedGuildId(store2.getGuildId());
}
function snapshotSelectedGuildAfterSelectedGuildChange(guildId) {
  guildId = undefined;
  if (null != _null) {
    guildId = _null.guildId;
  }
  if (guildId !== guildId) {
    return false;
  } else {
    const guildId1 = store2.getGuildId();
    let tmp4 = guildId1 !== guildId;
    if (tmp4) {
      tmp4 = snapshotSelectedGuildId(guildId1);
    }
    return tmp4;
  }
}
function handleSavedGuildTheme(guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === store2.getGuildId();
  if (tmp) {
    const obj = require(1837) /* cloneCustomUserThemeSettings */;
    tmp = setSelectedGuildThemeSnapshot(guildId, require(1837) /* cloneCustomUserThemeSettings */.cloneGuildTheme(guildId.guildTheme), guildHasThemeFeature(guildId));
    const cloneGuildThemeResult = require(1837) /* cloneCustomUserThemeSettings */.cloneGuildTheme(guildId.guildTheme);
  }
  return tmp;
}
function syncSnapshotOnFeatureTransition(id) {
  if (null != c11) {
    if (id === tmp.guildId) {
      const tmp13 = guildHasThemeFeature(id);
      if (tmp13 === tmp.hasThemeFeature) {
        return false;
      } else {
        let tmp9 = !tmp13;
        if (tmp13) {
          stateForGuild = stateForGuild.getStateForGuild(id);
          let tmp4;
          if (null != stateForGuild) {
            const unlockedPowerups = stateForGuild.unlockedPowerups;
            if (null != unlockedPowerups) {
              tmp4 = unlockedPowerups[require(undefined, 4021) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_GUILD_THEME_SKU_ID];
            }
          }
          let tmp7 = null != tmp4;
          if (tmp7) {
            const guildTheme = tmp.guildTheme;
            let enabled;
            if (null != guildTheme) {
              enabled = guildTheme.enabled;
            }
            tmp7 = true !== enabled;
          }
          tmp9 = tmp7;
        }
        if (tmp9) {
          let guildTheme2 = readGuildTheme(id);
        } else {
          guildTheme2 = tmp.guildTheme;
        }
        return setSelectedGuildThemeSnapshot(id, guildTheme2, tmp13);
      }
    }
  }
  return false;
}
let c11 = null;
let c12 = null;
let tmp2 = ((Store) => {
  class GuildThemeRuntimeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildThemeRuntimeStore);
      obj = outer1_5(GuildThemeRuntimeStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildThemeRuntimeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8, outer1_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGuildThemeSnapshot",
    value(arg0) {
      let tmp = null;
      if (arg0 !== outer1_12) {
        let guildId;
        if (null != outer1_11) {
          guildId = outer1_11.guildId;
        }
        let guildTheme;
        if (arg0 === guildId) {
          guildTheme = outer1_11.guildTheme;
        }
        tmp = guildTheme;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(GuildThemeRuntimeStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildThemeRuntimeStore";
tmp2 = new tmp2(require("dispatcher"), {
  CACHE_LOADED: snapshotSelectedGuild,
  CACHE_LOADED_LAZY: snapshotSelectedGuild,
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (null == guildId) {
      let tmp2 = clearSelectedGuildThemeSnapshot();
    } else {
      guildId = undefined;
      if (null != _null) {
        guildId = _null.guildId;
      }
      tmp2 = guildId !== guildId;
      if (tmp2) {
        tmp2 = snapshotSelectedGuildId(guildId);
      }
    }
    return tmp2;
  },
  CONNECTION_OPEN: snapshotSelectedGuild,
  GUILD_DELETE: function handleGuildDelete(guild) {
    return snapshotSelectedGuildAfterSelectedGuildChange(guild.guild.id);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    return snapshotSelectedGuildAfterSelectedGuildChange(guildId.guildId);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let tmp = guild.id !== c12;
    if (!tmp) {
      tmp = guildHasThemeFeature(guild.id);
    }
    let flag = false;
    if (!tmp) {
      c12 = null;
      flag = true;
    }
    if (syncSnapshotOnFeatureTransition(guild.id)) {
      flag = true;
    }
    return flag;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleThemePowerupAdded(entitlements) {
    entitlements = entitlements.entitlements;
    let tmp = c12 === entitlements.guildId;
    if (tmp) {
      const tmp2 = !entitlements.some((sku_id) => sku_id.sku_id === outer1_0(outer1_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
      let flag = !tmp2;
      if (!tmp2) {
        c12 = null;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleThemePowerupRemoved(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    const tmp = !entitlements.some((sku_id) => sku_id.sku_id === outer1_0(outer1_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
    let tmp2 = !tmp;
    if (!tmp) {
      guildId = undefined;
      if (null != _null) {
        guildId = _null.guildId;
      }
      let flag = guildId === guildId;
      if (flag) {
        flag = guildId !== guildId;
      }
      if (flag) {
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: handleSavedGuildTheme,
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: handleSavedGuildTheme,
  OVERLAY_INITIALIZE: snapshotSelectedGuild,
  LOGOUT: function handleConnectionReset() {
    let c12 = null;
    return clearSelectedGuildThemeSnapshot() || null != c12;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_themes/GuildThemeRuntimeStore.tsx");

export default tmp2;
