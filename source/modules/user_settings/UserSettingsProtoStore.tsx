// Module ID: 1316
// Function ID: 15348
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 662, 1282, 1317, 44, 1318, 1319, 22, 1312, 1320, 566, 686, 2]

// Module 1316 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import closure_4 from "_callSuper";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import MAX_FAVORITES from "MAX_FAVORITES";
import { PreloadedUserSettings } from "_callSuper";
import { FrecencyUserSettings } from "_callSuper";

const require = arg1;
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
    tmp.proto = require(1318) /* _createForOfIteratorHelperLoose */.mergeTopLevelFields(tmp.ProtoClass, tmp.proto, proto);
    importDefault(44)("string" !== typeof tmp.proto, "UserSettingsProto cannot be a string");
    const obj = require(1318) /* _createForOfIteratorHelperLoose */;
  } else {
    tmp.proto = proto;
    importDefault(44)("string" !== typeof tmp.proto, "UserSettingsProto cannot be a string");
    tmp.editInfo.loaded = true;
    tmp.editInfo.loading = false;
  }
}
function loadFromCache(userSettings, limit) {
  let closure_0 = userSettings;
  if (null != userSettings) {
    const item = importDefault(22).forEach(closure_12, (ProtoClass) => {
      const tmp = userSettings[Number(undefined, arg1)];
      if (null != tmp) {
        let proto;
        if (null != tmp) {
          proto = tmp.proto;
        }
        let str = "";
        if (null != proto) {
          str = proto;
        }
        const b64ToProtoResult = userSettings(outer1_2[9]).b64ToProto(ProtoClass.ProtoClass, str);
        if (null != b64ToProtoResult) {
          ProtoClass.proto = b64ToProtoResult;
          outer1_1(outer1_2[8])("string" !== typeof ProtoClass.proto, "UserSettingsProto cannot be a string");
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
              const b64ToProtoResult1 = userSettings(outer1_2[9]).b64ToProto(ProtoClass.ProtoClass, tmp7);
              if (null != b64ToProtoResult1) {
                ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
              }
              const obj2 = userSettings(outer1_2[9]);
            }
          }
        }
        const obj = userSettings(outer1_2[9]);
      }
    });
    const arr = importDefault(22);
  }
}
const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const createEmptyEditInfo = MAX_FAVORITES.createEmptyEditInfo;
let obj = { ProtoClass: require("_callSuper").PreloadedUserSettings };
obj.proto = PreloadedUserSettings.create();
obj.lazyLoaded = false;
obj.editInfo = createEmptyEditInfo();
obj = { ProtoClass: require("_callSuper").FrecencyUserSettings };
obj.proto = FrecencyUserSettings.create();
obj.lazyLoaded = true;
obj.editInfo = createEmptyEditInfo();
let closure_12 = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj };
let c13 = false;
let tmp3 = ((PersistedStore) => {
  class UserSettingsProtoStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, UserSettingsProtoStore);
      obj = outer1_6(UserSettingsProtoStore);
      tmp2 = outer1_5;
      if (outer1_14()) {
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
  callback2(UserSettingsProtoStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      outer1_17(arg0);
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
      return outer1_1(outer1_2[11]).mapValues(outer1_12, (ProtoClass) => {
        const obj = { proto: UserSettingsProtoStore(outer2_2[9]).protoToB64(ProtoClass.ProtoClass, ProtoClass.proto) };
        if (tmp) {
          obj.protoToSave = UserSettingsProtoStore(outer2_2[9]).protoToB64(ProtoClass.ProtoClass, ProtoClass.editInfo.protoToSave);
          obj.offlineEditDataVersion = ProtoClass.editInfo.offlineEditDataVersion;
          const obj3 = UserSettingsProtoStore(outer2_2[9]);
        }
        return obj;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasLoaded",
    value(arg0) {
      return outer1_12[arg0].editInfo.loaded;
    }
  };
  items[4] = {
    key: "settings",
    get() {
      return outer1_10.proto;
    }
  };
  items[5] = {
    key: "frecencyWithoutFetchingLatest",
    get() {
      return outer1_11.proto;
    }
  };
  items[6] = {
    key: "wasMostRecentUpdateFromServer",
    get() {
      return outer1_13;
    }
  };
  items[7] = {
    key: "getFullState",
    value() {
      return outer1_12;
    }
  };
  items[8] = {
    key: "getGuildFolders",
    value() {
      const guildFolders = outer1_10.proto.guildFolders;
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
          const Timestamp = UserSettingsProtoStore(outer1_2[12]).Timestamp;
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
        prop = UserSettingsProtoStore(outer1_2[6]).GuildThemeSourcePreference.UNSPECIFIED;
      }
      return prop;
    }
  };
  items[14] = {
    key: "getGuildThemeSourcePreferenceOverride",
    value(arg0) {
      if (null == arg0) {
        let UNSPECIFIED = UserSettingsProtoStore(outer1_2[6]).GuildThemeSourcePreference.UNSPECIFIED;
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
          UNSPECIFIED = UserSettingsProtoStore(outer1_2[6]).GuildThemeSourcePreference.UNSPECIFIED;
        }
      }
      return UNSPECIFIED;
    }
  };
  items[15] = {
    key: "resolveGuildThemeSourcePreference",
    value(arg0) {
      const guildThemeSourcePreferenceOverride = this.getGuildThemeSourcePreferenceOverride(arg0);
      return UserSettingsProtoStore(outer1_2[13]).resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, this.getDefaultGuildThemePreference());
    }
  };
  return callback(UserSettingsProtoStore, items);
})(require("initialize").PersistedStore);
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
    importDefault(44)(true, "this cannot run in the overlay");
    const merged = Object.assign(tmp2.editInfo);
    const merged1 = Object.assign(settings.changes);
    dependencyMap[settings.type].editInfo = {};
    return false;
  },
  CONNECTION_OPEN: function handleConnectionOpen(userSettingsProto) {
    let cleanupFuncs;
    let isDirty;
    let proto;
    userSettingsProto = userSettingsProto.userSettingsProto;
    if (null != userSettingsProto) {
      obj.proto = userSettingsProto;
      importDefault(44)("string" !== typeof obj.proto, "UserSettingsProto cannot be a string");
    }
    obj = require(1318) /* _createForOfIteratorHelperLoose */;
    ({ isDirty, proto, cleanupFuncs } = obj.runMigrations(obj.proto, importDefault(1319)[UserSettingsTypes.PRELOADED_USER_SETTINGS]));
    if (isDirty) {
      resetEditInfo_(obj);
    }
    obj.proto = proto;
    importDefault(44)("string" !== typeof obj.proto, "UserSettingsProto cannot be a string");
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
    const obj = require(1318) /* _createForOfIteratorHelperLoose */;
    obj.proto = obj.b64ToPreloadedUserSettingsProto(userSettingsProto.userSettingsProto);
    importDefault(44)("string" !== typeof obj.proto, "UserSettingsProto cannot be a string");
  },
  LOGOUT: function handleLogout() {
    clearInFlightTimeouts();
    const values = Object.values(closure_12);
    const item = values.forEach((ProtoClass) => {
      ProtoClass = ProtoClass.ProtoClass;
      ProtoClass.proto = ProtoClass.create();
      ProtoClass.editInfo = outer1_9();
    });
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default tmp3;
