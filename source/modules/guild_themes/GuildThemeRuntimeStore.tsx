// Module ID: 4014
// Function ID: 33372
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4014 (_isNativeReflectConstruct)
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
  return arg1(dependencyMap[10]).cloneGuildTheme(guildTheme);
}
function clearSelectedGuildThemeSnapshot() {
  let flag = null != closure_11;
  if (flag) {
    closure_11 = null;
    flag = true;
  }
  return flag;
}
function setSelectedGuildThemeSnapshot(guildId, cloneGuildThemeResult, hasThemeFeature) {
  guildId = undefined;
  if (null != _null) {
    guildId = _null.guildId;
  }
  let flag = guildId !== guildId;
  if (!flag) {
    let obj = cloneGuildThemeResult(dependencyMap[11]);
    flag = !obj.isEqual(_null.guildTheme, cloneGuildThemeResult);
  }
  if (!flag) {
    flag = _null.hasThemeFeature !== hasThemeFeature;
  }
  if (flag) {
    obj = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature };
    const _null = obj;
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
    const obj = arg1(dependencyMap[10]);
    tmp = setSelectedGuildThemeSnapshot(guildId, arg1(dependencyMap[10]).cloneGuildTheme(guildId.guildTheme), guildHasThemeFeature(guildId));
    const cloneGuildThemeResult = arg1(dependencyMap[10]).cloneGuildTheme(guildId.guildTheme);
  }
  return tmp;
}
function syncSnapshotOnFeatureTransition(id) {
  if (null != closure_11) {
    if (id === tmp.guildId) {
      const tmp13 = guildHasThemeFeature(id);
      if (tmp13 === tmp.hasThemeFeature) {
        return false;
      } else {
        let tmp9 = !tmp13;
        if (tmp13) {
          const stateForGuild = stateForGuild.getStateForGuild(id);
          let tmp4;
          if (null != stateForGuild) {
            const unlockedPowerups = stateForGuild.unlockedPowerups;
            if (null != unlockedPowerups) {
              tmp4 = unlockedPowerups[closure_0(undefined, closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const GuildFeatures = arg1(dependencyMap[8]).GuildFeatures;
let closure_11 = null;
let closure_12 = null;
let tmp2 = (Store) => {
  class GuildThemeRuntimeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildThemeRuntimeStore);
      obj = closure_5(GuildThemeRuntimeStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildThemeRuntimeStore;
  callback2(GuildThemeRuntimeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8, closure_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGuildThemeSnapshot",
    value(arg0) {
      let tmp = null;
      if (arg0 !== closure_12) {
        let guildId;
        if (null != closure_11) {
          guildId = closure_11.guildId;
        }
        let guildTheme;
        if (arg0 === guildId) {
          guildTheme = closure_11.guildTheme;
        }
        tmp = guildTheme;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(GuildThemeRuntimeStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp2.displayName = "GuildThemeRuntimeStore";
tmp2 = new tmp2(importDefault(dependencyMap[13]), {
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
    let tmp = guild.id !== closure_12;
    if (!tmp) {
      tmp = guildHasThemeFeature(guild.id);
    }
    let flag = false;
    if (!tmp) {
      closure_12 = null;
      flag = true;
    }
    if (syncSnapshotOnFeatureTransition(guild.id)) {
      flag = true;
    }
    return flag;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleThemePowerupAdded(entitlements) {
    entitlements = entitlements.entitlements;
    let tmp = closure_12 === entitlements.guildId;
    if (tmp) {
      const tmp2 = !entitlements.some((sku_id) => sku_id.sku_id === callback(closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
      let flag = !tmp2;
      if (!tmp2) {
        closure_12 = null;
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
    const tmp = !entitlements.some((sku_id) => sku_id.sku_id === callback(closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
    let tmp2 = !tmp;
    if (!tmp) {
      guildId = undefined;
      if (null != _null) {
        guildId = _null.guildId;
      }
      let flag = guildId === guildId;
      if (flag) {
        flag = closure_12 !== guildId;
      }
      if (flag) {
        closure_12 = guildId;
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
    let closure_12 = null;
    return clearSelectedGuildThemeSnapshot() || null != closure_12;
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_themes/GuildThemeRuntimeStore.tsx");

export default tmp2;
