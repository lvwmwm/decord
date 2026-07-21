// Module ID: 1316
// Function ID: 15346
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1316 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionClosedOrResumed() {
  clearInFlightTimeouts();
}
function clearInFlightTimeouts() {
  const values = Object.values(closure_12);
  const item = values.forEach((editInfo) => {
    if (null != editInfo.editInfo.timeout) {
      const _clearTimeout = clearTimeout;
      let dataVersion;
      clearTimeout(editInfo.editInfo.timeout);
      editInfo.editInfo.timeout = undefined;
      const _Number = Number;
      editInfo.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
      editInfo.editInfo.rateLimited = false;
      const versions = editInfo.proto.versions;
      if (null != versions) {
        dataVersion = versions.dataVersion;
      }
      let num = 0;
      if (null != dataVersion) {
        num = dataVersion;
      }
      editInfo.editInfo.offlineEditDataVersion = num;
    }
  });
}
function resetEditInfo_(editInfo) {
  if (null != editInfo.editInfo.timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(editInfo.editInfo.timeout);
  }
  editInfo.editInfo = createEmptyEditInfo();
}
function handleUserSettingsProtoUpdate(settings) {
  settings = settings.settings;
  const proto = settings.proto;
  let closure_13 = !settings.local;
  if (settings.resetEditInfo) {
    resetEditInfo_(tmp);
  }
  if (settings.partial) {
    tmp.proto = arg1(dependencyMap[9]).mergeTopLevelFields(tmp.ProtoClass, tmp.proto, proto);
    importDefault(dependencyMap[8])("string" !== typeof tmp.proto, "UserSettingsProto cannot be a string");
    const obj = arg1(dependencyMap[9]);
  } else {
    tmp.proto = proto;
    importDefault(dependencyMap[8])("string" !== typeof tmp.proto, "UserSettingsProto cannot be a string");
    tmp.editInfo.loaded = true;
    tmp.editInfo.loading = false;
  }
}
function loadFromCache(userSettings, limit) {
  limit = userSettings;
  if (null != userSettings) {
    const item = importDefault(dependencyMap[11]).forEach(closure_12, (ProtoClass) => {
      if (null != ProtoClass[Number(undefined, arg1)]) {
        let proto;
        if (null != tmp) {
          proto = tmp.proto;
        }
        let str = "";
        if (null != proto) {
          str = proto;
        }
        const b64ToProtoResult = ProtoClass(closure_2[9]).b64ToProto(ProtoClass.ProtoClass, str);
        if (null != b64ToProtoResult) {
          ProtoClass.proto = b64ToProtoResult;
          callback(closure_2[8])("string" !== typeof ProtoClass.proto, "UserSettingsProto cannot be a string");
          let protoToSave;
          if (null != tmp) {
            protoToSave = tmp.protoToSave;
          }
          let tmp7 = null;
          if (null != protoToSave) {
            tmp7 = protoToSave;
          }
          if (null != tmp7) {
            if (null != tmp.offlineEditDataVersion) {
              const b64ToProtoResult1 = ProtoClass(closure_2[9]).b64ToProto(ProtoClass.ProtoClass, tmp7);
              if (null != b64ToProtoResult1) {
                ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
              }
              const obj2 = ProtoClass(closure_2[9]);
            }
          }
        }
        const obj = ProtoClass(closure_2[9]);
      }
    });
    const arr = importDefault(dependencyMap[11]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const UserSettingsTypes = tmp2.UserSettingsTypes;
const createEmptyEditInfo = tmp2.createEmptyEditInfo;
let obj = { ProtoClass: arg1(dependencyMap[6]).PreloadedUserSettings };
const PreloadedUserSettings = arg1(dependencyMap[6]).PreloadedUserSettings;
obj.proto = PreloadedUserSettings.create();
obj.lazyLoaded = false;
obj.editInfo = createEmptyEditInfo();
obj = { ProtoClass: arg1(dependencyMap[7]).FrecencyUserSettings };
const FrecencyUserSettings = arg1(dependencyMap[7]).FrecencyUserSettings;
obj.proto = FrecencyUserSettings.create();
obj.lazyLoaded = true;
obj.editInfo = createEmptyEditInfo();
let closure_12 = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj };
let closure_13 = false;
let tmp3 = (PersistedStore) => {
  class UserSettingsProtoStore {
    constructor() {
      self = this;
      tmp = closure_3(this, UserSettingsProtoStore);
      obj = closure_6(UserSettingsProtoStore);
      tmp2 = closure_5;
      if (closure_14()) {
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
  const arg1 = UserSettingsProtoStore;
  callback2(UserSettingsProtoStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      callback5(arg0);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "computeState",
    value() {
      return callback(closure_2[11]).mapValues(closure_12, (ProtoClass) => {
        const obj = { proto: callback(closure_2[9]).protoToB64(ProtoClass.ProtoClass, ProtoClass.proto) };
        if (tmp) {
          obj.protoToSave = callback(closure_2[9]).protoToB64(ProtoClass.ProtoClass, ProtoClass.editInfo.protoToSave);
          obj.offlineEditDataVersion = ProtoClass.editInfo.offlineEditDataVersion;
          const obj3 = callback(closure_2[9]);
        }
        return obj;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasLoaded",
    value(arg0) {
      return closure_12[arg0].editInfo.loaded;
    }
  };
  items[4] = {
    key: "settings",
    get() {
      return closure_10.proto;
    }
  };
  items[5] = {
    key: "frecencyWithoutFetchingLatest",
    get() {
      return proto.proto;
    }
  };
  items[6] = {
    key: "wasMostRecentUpdateFromServer",
    get() {
      return closure_13;
    }
  };
  items[7] = {
    key: "getFullState",
    value() {
      return closure_12;
    }
  };
  items[8] = {
    key: "getGuildFolders",
    value() {
      const guildFolders = closure_10.proto.guildFolders;
      let folders;
      if (null != guildFolders) {
        folders = guildFolders.folders;
      }
      let mapped = null;
      if (null != folders) {
        mapped = folders.map((guildIds) => {
          let value;
          if (null != guildIds.id) {
            value = iter.value;
          }
          value = undefined;
          if (null != guildIds.color) {
            value = iter2.value;
          }
          const obj = { guildIds: guildIds.guildIds };
          let NumberResult;
          if (null != value) {
            const _Number = Number;
            NumberResult = Number(value);
          }
          obj.folderId = NumberResult;
          let value1;
          if (null != guildIds.name) {
            value1 = iter3.value;
          }
          obj.folderName = value1;
          let NumberResult1;
          if (null != value) {
            const _Number2 = Number;
            NumberResult1 = Number(value);
          }
          obj.folderColor = NumberResult1;
          return obj;
        });
      }
      return mapped;
    }
  };
  items[9] = {
    key: "getGuildRecentsDismissedAt",
    value(arg0) {
      if (null == arg0) {
        return 0;
      } else {
        const self = this;
        const guilds = this.settings.guilds;
        let prop;
        if (null != guilds) {
          if (null != guilds.guilds[arg0]) {
            prop = tmp2.guildRecentsDismissedAt;
          }
        }
        let num = 0;
        if (null != prop) {
          const Timestamp = UserSettingsProtoStore(closure_2[12]).Timestamp;
          num = Timestamp.toDate(prop).getTime();
          const toDateResult = Timestamp.toDate(prop);
        }
        return num;
      }
    }
  };
  items[10] = {
    key: "getDismissedGuildContent",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const self = this;
        const guilds = this.settings.guilds;
        let prop;
        if (null != guilds) {
          const guilds2 = guilds.guilds;
          if (null != guilds2) {
            if (null != guilds2[arg0]) {
              prop = tmp3.dismissedGuildContent;
            }
          }
        }
        tmp = prop;
      }
      return tmp;
    }
  };
  items[11] = {
    key: "getGuildDismissedContentState",
    value(arg0) {
      const guilds = this.settings.guilds;
      let prop;
      if (null != guilds) {
        const guilds2 = guilds.guilds;
        if (null != guilds2) {
          if (null != guilds2[arg0]) {
            prop = tmp3.guildDismissibleContentStates;
          }
        }
      }
      return prop;
    }
  };
  items[12] = {
    key: "getGuildsProto",
    value() {
      let guilds = this.settings.guilds;
      guilds = undefined;
      if (null != guilds) {
        guilds = guilds.guilds;
      }
      let tmp2 = null;
      if (null != guilds) {
        tmp2 = guilds;
      }
      return tmp2;
    }
  };
  items[13] = {
    key: "getDefaultGuildThemePreference",
    value() {
      const appearance = this.settings.appearance;
      let prop;
      if (null != appearance) {
        prop = appearance.defaultGuildThemePreference;
      }
      if (null == prop) {
        prop = UserSettingsProtoStore(closure_2[6]).GuildThemeSourcePreference.UNSPECIFIED;
      }
      return prop;
    }
  };
  items[14] = {
    key: "getGuildThemeSourcePreferenceOverride",
    value(arg0) {
      if (null == arg0) {
        let UNSPECIFIED = UserSettingsProtoStore(closure_2[6]).GuildThemeSourcePreference.UNSPECIFIED;
      } else {
        const self = this;
        const guilds = this.settings.guilds;
        UNSPECIFIED = undefined;
        if (null != guilds) {
          const guilds2 = guilds.guilds;
          if (null != guilds2) {
            if (null != guilds2[arg0]) {
              UNSPECIFIED = tmp2.guildThemeSourcePreference;
            }
          }
        }
        if (null == UNSPECIFIED) {
          UNSPECIFIED = UserSettingsProtoStore(closure_2[6]).GuildThemeSourcePreference.UNSPECIFIED;
        }
      }
      return UNSPECIFIED;
    }
  };
  items[15] = {
    key: "resolveGuildThemeSourcePreference",
    value(arg0) {
      const guildThemeSourcePreferenceOverride = this.getGuildThemeSourcePreferenceOverride(arg0);
      return UserSettingsProtoStore(closure_2[13]).resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, this.getDefaultGuildThemePreference());
    }
  };
  return callback(UserSettingsProtoStore, items);
}(importDefault(dependencyMap[14]).PersistedStore);
tmp3.displayName = "UserSettingsProtoStore";
tmp3.persistKey = "UserSettingsProtoStore-Cache";
obj = {
  CACHE_LOADED: function handleCacheLoaded(userSettings) {
    loadFromCache(userSettings.userSettings);
  },
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function handleUserSettingsProtoSaveStateUpdate(settings) {
    settings = settings.settings;
    importDefault(dependencyMap[8])(true, "this cannot run in the overlay");
    const merged = Object.assign(tmp2.editInfo);
    const merged1 = Object.assign(settings.changes);
    closure_12[settings.type].editInfo = {};
    return false;
  },
  CONNECTION_OPEN: function handleConnectionOpen(userSettingsProto) {
    let cleanupFuncs;
    let isDirty;
    let proto;
    userSettingsProto = userSettingsProto.userSettingsProto;
    if (null != userSettingsProto) {
      obj.proto = userSettingsProto;
      importDefault(dependencyMap[8])("string" !== typeof obj.proto, "UserSettingsProto cannot be a string");
    }
    const obj = arg1(dependencyMap[9]);
    ({ isDirty, proto, cleanupFuncs } = obj.runMigrations(obj.proto, importDefault(dependencyMap[10])[closure_8.PRELOADED_USER_SETTINGS]));
    if (isDirty) {
      resetEditInfo_(obj);
    }
    obj.proto = proto;
    importDefault(dependencyMap[8])("string" !== typeof obj.proto, "UserSettingsProto cannot be a string");
    obj.editInfo.triggeredMigrations = isDirty;
    obj.editInfo.cleanupFuncs = cleanupFuncs;
    obj.editInfo.loaded = true;
    const values = Object.values(closure_12);
    const item = values.forEach((lazyLoaded) => {
      if (lazyLoaded.lazyLoaded) {
        lazyLoaded.editInfo.loaded = false;
        lazyLoaded.editInfo.loading = false;
      }
    });
    clearInFlightTimeouts();
  },
  CONNECTION_CLOSED: handleConnectionClosedOrResumed,
  CONNECTION_RESUMED: handleConnectionClosedOrResumed,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(userSettingsProto) {
    const obj = arg1(dependencyMap[9]);
    obj.proto = obj.b64ToPreloadedUserSettingsProto(userSettingsProto.userSettingsProto);
    importDefault(dependencyMap[8])("string" !== typeof obj.proto, "UserSettingsProto cannot be a string");
  },
  LOGOUT: function handleLogout() {
    clearInFlightTimeouts();
    const values = Object.values(closure_12);
    const item = values.forEach((ProtoClass) => {
      ProtoClass = ProtoClass.ProtoClass;
      ProtoClass.proto = ProtoClass.create();
      ProtoClass.editInfo = callback();
    });
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[15]), obj);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default tmp3;
