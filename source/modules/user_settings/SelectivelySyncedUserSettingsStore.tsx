// Module ID: 1279
// Function ID: 14437
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 587, 22, 686, 2]

// Module 1279 (_isNativeReflectConstruct)
import initialize from "initialize";
import Storage from "Storage";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { UserSettingsSections } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = {};
let tmp2 = ((PersistedStore) => {
  class SelectivelySyncedUserSettingsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SelectivelySyncedUserSettingsStore);
      obj = outer1_6(SelectivelySyncedUserSettingsStore);
      tmp2 = outer1_5;
      if (outer1_10()) {
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
  callback2(SelectivelySyncedUserSettingsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const outer1_9 = obj;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldSync",
    value(arg0) {
      let shouldSync;
      if (null != outer1_9[arg0]) {
        shouldSync = tmp.shouldSync;
      }
      return false !== shouldSync;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTextSettings",
    value() {
      const text = outer1_9.text;
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
      const appearance = outer1_9.appearance;
      let settings;
      if (null != appearance) {
        settings = appearance.settings;
      }
      return settings;
    }
  };
  return callback(SelectivelySyncedUserSettingsStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "SelectivelySyncedUserSettingsStore";
tmp2.persistKey = "SelectivelySyncedUserSettingsStore";
let items = [
  () => {
    const Storage = require(587) /* Storage */.Storage;
    let obj = Storage.get("UserSettingsSync");
    if (null == obj) {
      obj = {};
    }
    const Storage2 = require(587) /* Storage */.Storage;
    let value = Storage2.get("UserSettingsStore");
    if (null == value) {
      value = {};
    }
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove("UserSettingsSync");
    obj = {};
    if (false === obj[UserSettingsSections.TEXT]) {
      const obj1 = { shouldSync: false, settings: importDefault(22).pick(value, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay", "defaultReactionEmoji"]) };
      obj.text = obj1;
      const obj5 = importDefault(22);
    }
    if (false === obj[UserSettingsSections.APPEARANCE]) {
      const obj2 = { shouldSync: false, settings: importDefault(22).pick(value, ["theme", "clientThemeSettings", "developerMode"]) };
      obj.appearance = obj2;
      const obj7 = importDefault(22);
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
tmp2 = new tmp2(require("dispatcher"), {
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate(changes) {
    let settings;
    let shouldSync;
    changes = changes.changes;
    for (const key10009 in changes) {
      let tmp14 = key10009;
      ({ shouldSync, settings } = changes[key10009]);
      if (true !== shouldSync) {
        if (false === shouldSync) {
          let tmp4 = dependencyMap;
          let obj = { shouldSync };
          shouldSync = {};
          obj.settings = shouldSync;
          dependencyMap[key10009] = obj;
        }
        let tmp5 = dependencyMap;
        let tmp6 = dependencyMap[key10009];
        shouldSync = undefined;
        if (null != tmp6) {
          shouldSync = tmp6.shouldSync;
        }
        let tmp8 = tmp6;
        if (false !== shouldSync) {
          continue;
        } else {
          let tmp9 = settings;
          let tmp10 = tmp6;
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp12 = tmp6;
            let tmp13 = keys[shouldSync];
            while (tmp13 !== undefined) {
              let tmp15 = tmp13;
              let tmp16 = dependencyMap;
              dependencyMap[key10009].settings[tmp13] = settings[tmp13];
              continue;
            }
          }
          continue;
        }
        continue;
      } else {
        let tmp3 = dependencyMap;
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
  },
  LOGOUT: function handleLogOut() {
    let closure_9 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/SelectivelySyncedUserSettingsStore.tsx");

export default tmp2;
