// Module ID: 1279
// Function ID: 14432
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1279 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const UserSettingsSections = arg1(dependencyMap[5]).UserSettingsSections;
let closure_9 = {};
let tmp2 = (PersistedStore) => {
  class SelectivelySyncedUserSettingsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SelectivelySyncedUserSettingsStore);
      obj = closure_6(SelectivelySyncedUserSettingsStore);
      tmp2 = closure_5;
      if (closure_10()) {
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
  const arg1 = SelectivelySyncedUserSettingsStore;
  callback2(SelectivelySyncedUserSettingsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldSync",
    value(arg0) {
      let shouldSync;
      if (null != closure_9[arg0]) {
        shouldSync = tmp.shouldSync;
      }
      return false !== shouldSync;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTextSettings",
    value() {
      const text = closure_9.text;
      let settings;
      if (null != text) {
        settings = text.settings;
      }
      return settings;
    }
  };
  items[4] = {
    key: "getAppearanceSettings",
    value() {
      const appearance = closure_9.appearance;
      let settings;
      if (null != appearance) {
        settings = appearance.settings;
      }
      return settings;
    }
  };
  return callback(SelectivelySyncedUserSettingsStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "SelectivelySyncedUserSettingsStore";
tmp2.persistKey = "SelectivelySyncedUserSettingsStore";
const items = [
  () => {
    const Storage = arg1(dependencyMap[7]).Storage;
    let obj = Storage.get("UserSettingsSync");
    if (null == obj) {
      obj = {};
    }
    const Storage2 = arg1(dependencyMap[7]).Storage;
    let value = Storage2.get("UserSettingsStore");
    if (null == value) {
      value = {};
    }
    const Storage3 = arg1(dependencyMap[7]).Storage;
    Storage3.remove("UserSettingsSync");
    obj = {};
    if (false === obj[closure_8.TEXT]) {
      const obj1 = { shouldSync: false, settings: importDefault(dependencyMap[8]).pick(value, ["<string:351879424>", "<string:2587951106>", "<string:1358954782>", "<string:30630721>", "<string:358826240>", "<string:3946905601>", "<string:1090519390>", "discord_protos.discord_users.v1.UIDensity"]) };
      obj.text = obj1;
      const obj5 = importDefault(dependencyMap[8]);
    }
    if (false === obj[closure_8.APPEARANCE]) {
      const obj2 = { shouldSync: false, settings: importDefault(dependencyMap[8]).pick(value, [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000168595226376143, 97450544832197950000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 131126.12365913394]) };
      obj.appearance = obj2;
      const obj7 = importDefault(dependencyMap[8]);
    }
    return obj;
  },
  (appearance) => {
    let theme;
    if (null != appearance) {
      appearance = appearance.appearance;
      if (null != appearance) {
        const settings = appearance.settings;
        if (null != settings) {
          theme = settings.theme;
        }
      }
    }
    if ("amoled" === theme) {
      let obj = {};
      const merged = Object.assign(appearance);
      obj = {};
      const merged1 = Object.assign(appearance.appearance);
      obj = {};
      const merged2 = Object.assign(appearance.appearance.settings);
      obj["theme"] = "midnight";
      obj["settings"] = obj;
      obj["appearance"] = obj;
      return obj;
    }
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate(changes) {
    let settings;
    let shouldSync;
    changes = changes.changes;
    for (const key10009 in changes) {
      let tmp12 = key10009;
      ({ shouldSync, settings } = changes[key10009]);
      if (true !== shouldSync) {
        if (false === shouldSync) {
          let tmp2 = closure_9;
          let obj = { shouldSync };
          shouldSync = {};
          obj.settings = shouldSync;
          closure_9[key10009] = obj;
        }
        let tmp3 = closure_9;
        let tmp4 = closure_9[key10009];
        shouldSync = undefined;
        if (null != tmp4) {
          shouldSync = tmp4.shouldSync;
        }
        let tmp6 = tmp4;
        if (false !== shouldSync) {
          continue;
        } else {
          let tmp7 = settings;
          let tmp8 = tmp4;
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp10 = tmp4;
            let tmp11 = keys[shouldSync];
            while (tmp11 !== undefined) {
              let tmp13 = tmp11;
              let tmp14 = closure_9;
              closure_9[key10009].settings[tmp11] = settings[tmp11];
              // continue
            }
          }
          continue;
        }
        continue;
      } else {
        let tmp = closure_9;
        delete r1[r8];
        // continue
      }
      continue;
    }
  },
  LOGOUT: function handleLogOut() {
    let closure_9 = {};
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/SelectivelySyncedUserSettingsStore.tsx");

export default tmp2;
