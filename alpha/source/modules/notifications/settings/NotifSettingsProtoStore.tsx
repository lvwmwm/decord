// Module ID: 15801
// Function ID: 15802
// Name: NotifSettingsProtoStore
// Dependencies: [1231, 502, 15802, 15804, 1233, 504, 572, 2]
// Exports: createPendingEdit

// Module 15801 (NotifSettingsProtoStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 15802 */;
import EffectiveNotifSettings from "EffectiveNotifSettings" /* 15804 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let _undefined, _undefined2, assignment, c4, c5, closure_9, effectiveFetchedAt;

function hasValidEffectiveSettings() {
  let tmp = null != effectiveSettings && !c14 && null != assignment && c4 === assignment;
  if (tmp) {
    let str = "control";
    const arm = effectiveSettings.arm;
    if (enabled) {
      str = "treatment";
    }
    tmp = arm === str;
  }
  if (tmp) {
    tmp = effectiveSettings.account_id === AuthenticationStore.getId();
  }
  if (tmp) {
    let tmp11 = null != c10;
    if (!tmp11) {
      const versions = closure_9.versions;
      let num;
      const declarative_data_version = effectiveSettings.declarative_data_version;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      tmp11 = declarative_data_version >= num;
    }
    tmp = tmp11;
  }
  if (tmp) {
    const obj = EffectiveNotifSettings;
    tmp = c3 === obj.legacySourceFingerprint(effectiveSettings, UserSettingsProtoStore.settings);
  }
  return tmp;
}
function acceptEffectiveSettings(effectiveSettings) {
  let tmp = effectiveSettings.account_id === AuthenticationStore.getId();
  if (tmp) {
    const versions = closure_9.versions;
    let num;
    const declarative_data_version = effectiveSettings.declarative_data_version;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    let tmp4 = declarative_data_version >= num;
    if (tmp4) {
      let account_id;
      if (effectiveSettings != null) {
        account_id = effectiveSettings.account_id;
      }
      let tmp8 = !(account_id === effectiveSettings.account_id && effectiveSettings.declarative_data_version < effectiveSettings.declarative_data_version);
      const tmp6 = account_id === effectiveSettings.account_id && effectiveSettings.declarative_data_version < effectiveSettings.declarative_data_version;
      if (tmp8) {
        const versions2 = UserSettingsProtoStore.settings.versions;
        let num2;
        const legacy_data_version = effectiveSettings.legacy_data_version;
        const tmp9 = UserSettingsProtoStore;
        if (versions2 != null) {
          num2 = versions2.dataVersion;
        }
        if (num2 == null) {
          num2 = 0;
        }
        if (legacy_data_version >= num2) {
          const _Date = Date;
          let c13 = Date.now();
          const obj = EffectiveNotifSettings;
          let c3 = obj.legacySourceFingerprint(effectiveSettings, tmp9.settings);
          c4 = assignment;
          c14 = false;
          c5 = undefined;
          c15 = false;
        }
        tmp8 = tmp10;
      }
      tmp4 = tmp8;
    }
    tmp = tmp4;
  }
  return tmp;
}
let DeclarativeSettings = notification_settings.DeclarativeSettings;
const React4 = DeclarativeSettings.create();
let authStore;
let unpackModuleId;
let c12 = false;
let c14 = false;
let c15 = false;
let closure_16 = 0;
let enabled = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class NotifSettingsProtoStore extends PersistedStore {
  initialize(effectiveSettings) {
    let num2;
    let str;
    this.waitFor(AuthenticationStore, UserSettingsProtoStore);
    if (null != effectiveSettings) {
      const obj2 = EffectiveNotifSettings;
      let c2 = obj2.parseEffectiveNotifSettings(effectiveSettings.effectiveSettings);
      let num = effectiveSettings.effectiveFetchedAt;
      if (num == null) {
        num = 0;
      }
      let c13 = num;
      let c3 = effectiveSettings.effectiveSourceFingerprint;
      let prop;
      if (typeof effectiveSettings.effectiveSettingsAssignment === "string") {
        prop = effectiveSettings.effectiveSettingsAssignment;
      }
      c4 = prop;
      c14 = null == prop;
      const b64ToProto = user_settings_UserSettingsUtils.b64ToProto;
      let proto = effectiveSettings.proto;
      user_settings_UserSettingsUtils;
      const DeclarativeSettings = tmp9(15802).DeclarativeSettings;
      if (proto == null) {
        proto = null;
      }
      const b64ToProtoResult = b64ToProto(DeclarativeSettings, proto);
      if (null != b64ToProtoResult) {
        closure_9 = b64ToProtoResult;
      }
      const b64ToProto2 = user_settings_UserSettingsUtils.b64ToProto;
      let protoToSave = effectiveSettings.protoToSave;
      user_settings_UserSettingsUtils;
      const DeclarativeSettings2 = tmp9(15802).DeclarativeSettings;
      if (protoToSave == null) {
        protoToSave = null;
      }
      const b64ToProto2Result = b64ToProto2(DeclarativeSettings2, protoToSave);
      if (null != b64ToProto2Result) {
        const obj = { partialSettings: b64ToProto2Result, offlineEditDataVersion: num2, versionSource: str };
        num2 = effectiveSettings.offlineEditDataVersion;
        if (num2 == null) {
          num2 = 0;
        }
        str = "proto";
        if ("effective" === effectiveSettings.offlineEditVersionSource) {
          str = "effective";
        }
        let c11 = obj;
      }
    }
  }
  getState() {
    let obj2;
    let tmp3;
    const obj = { proto: obj2.protoToB64(notification_settings.DeclarativeSettings, closure_9), effectiveSettings, effectiveFetchedAt, effectiveSourceFingerprint, effectiveSettingsAssignment: tmp3 };
    tmp3 = undefined;
    obj2 = user_settings_UserSettingsUtils;
    if (!c14) {
      tmp3 = c4;
    }
    let tmp4 = _undefined;
    if (_undefined == null) {
      tmp4 = _undefined2;
    }
    if (null != tmp4) {
      if (null != _undefined) {
        let partialSettings;
        if (null != _undefined2) {
          const DeclarativeSettings = tmp(15802).DeclarativeSettings;
          const cloneResult = DeclarativeSettings.clone(_undefined.partialSettings);
          const DeclarativeSettings2 = tmp(15802).DeclarativeSettings;
          DeclarativeSettings2.mergePartial(cloneResult, _undefined2.partialSettings);
          partialSettings = cloneResult;
        }
        const tmpResult = user_settings_UserSettingsUtils;
        obj.protoToSave = tmpResult.protoToB64(notification_settings.DeclarativeSettings, partialSettings);
        ({ offlineEditDataVersion: obj.offlineEditDataVersion, versionSource: obj.offlineEditVersionSource } = tmp4);
      }
      partialSettings = tmp4.partialSettings;
    }
    return obj;
  }
  ownsEffectiveRequest(c1) {
    return c5 === c1;
  }
  getEffectiveSetting(arg0) {
    let closure_0 = arg0;
    if (hasValidEffectiveSettings()) {
      const _Object = Object;
      const values = Object.values(effectiveSettings.preferences);
      return values.find((setting_id) => setting_id.setting_id === closure_0);
    }
  }
  getOptimisticSetting(arg0) {
    let tmp;
    if (_undefined2 != null) {
      tmp = _undefined2.partialSettings.values[arg0];
    }
    if (tmp == null) {
      let tmp2;
      if (_undefined != null) {
        tmp2 = _undefined.partialSettings.values[arg0];
      }
      tmp = tmp2;
    }
    return tmp;
  }
  getOrCreatePendingEdit(arg0) {
    let DeclarativeSettings;
    let num;
    let str;
    let tmp = c11;
    if (c11 == null) {
      const obj = { partialSettings: DeclarativeSettings.create(), offlineEditDataVersion: num, versionSource: str };
      DeclarativeSettings = notification_settings.DeclarativeSettings;
      num = arg0;
      if (arg0 == null) {
        const versions = closure_9.versions;
        let dataVersion;
        if (versions != null) {
          dataVersion = versions.dataVersion;
        }
        num = dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      str = "proto";
      if (null != arg0) {
        str = "effective";
      }
      tmp = obj;
    }
    return tmp;
  }
  getSetting(arg0) {
    let tmp;
    if (_undefined2 != null) {
      const partialSettings = _undefined2.partialSettings;
      if (partialSettings != null) {
        tmp = partialSettings.values[arg0];
      }
    }
    if (tmp == null) {
      let tmp2;
      if (_undefined != null) {
        const partialSettings2 = _undefined.partialSettings;
        if (partialSettings2 != null) {
          tmp2 = partialSettings2.values[arg0];
        }
      }
      tmp = tmp2;
    }
    if (tmp == null) {
      tmp = closure_9.values[arg0];
    }
    return tmp;
  }
}
const prototype = NotifSettingsProtoStore.prototype;
Object.defineProperty(prototype, "hasLoaded", {
  get: function hasLoaded() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "pendingEdit", {
  get: function pendingEdit() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "applyingEdit", {
  get: function applyingEdit() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "isApplyingEdit", {
  get: function isApplyingEdit() {
    return null != this.applyingEdit;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasValidEffectiveSettings", {
  get: function hasValidEffectiveSettings() {
    return hasValidEffectiveSettings();
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveSettingsStale", {
  get: function isEffectiveSettingsStale() {
    const tmp = hasValidEffectiveSettings();
    let tmp2 = !tmp;
    if (tmp) {
      const _Date = Date;
      tmp2 = Date.now() - c13 > 300000;
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveSettingsLoading", {
  get: function isEffectiveSettingsLoading() {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveSettingsScreenOpen", {
  get: function isEffectiveSettingsScreenOpen() {
    return closure_16 > 0;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectiveSettingsScreenCount", {
  get: function effectiveSettingsScreenCount() {
    return closure_16;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveTreatment", {
  get: function isEffectiveTreatment() {
    return enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectiveAssignment", {
  get: function effectiveAssignment() {
    return assignment;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectiveDataVersion", {
  get: function effectiveDataVersion() {
    let tmp;
    if (hasValidEffectiveSettings()) {
      let prop;
      if (effectiveSettings != null) {
        prop = effectiveSettings.declarative_data_version;
      }
      tmp = prop;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "dataVersion", {
  get: function dataVersion() {
    const versions = closure_9.versions;
    let num;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
NotifSettingsProtoStore.displayName = "NotifSettingsProtoStore";
NotifSettingsProtoStore.persistKey = "NotifSettingsProtoStore-Cache";
const items = [
  (offlineEditVersionSource) => {
    let str;
    let tmp = offlineEditVersionSource;
    if (null != offlineEditVersionSource) {
      const obj = { offlineEditVersionSource: str, effectiveFetchedAt };
      const merged = Object.assign(offlineEditVersionSource);
      str = offlineEditVersionSource.offlineEditVersionSource;
      if (str == null) {
        str = "proto";
      }
      ({ effectiveSettings: obj.effectiveSettings, effectiveFetchedAt } = offlineEditVersionSource);
      if (effectiveFetchedAt == null) {
        effectiveFetchedAt = 0;
      }
      ({ effectiveSourceFingerprint: obj.effectiveSourceFingerprint, effectiveSettingsAssignment: obj.effectiveSettingsAssignment } = offlineEditVersionSource);
      tmp = obj;
    }
    return tmp;
  }
];
NotifSettingsProtoStore.migrations = items;
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    let declarativeSettings;
    notificationSettings = notificationSettings.notificationSettings;
    c5 = undefined;
    c15 = false;
    if (null != notificationSettings.declarativeSettings) {
      declarativeSettings = notificationSettings.declarativeSettings;
    }
    let tmp = null != _undefined2;
    if (tmp) {
      const versions = declarativeSettings.versions;
      let num;
      const offlineEditDataVersion = _undefined2.offlineEditDataVersion;
      const tmp3 = _undefined2;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      let tmp5 = num;
      if ("proto" !== tmp3.versionSource) {
        let bound;
        if (null != effectiveSettings) {
          if (effectiveSettings.account_id === AuthenticationStore.getId()) {
            const _Math = Math;
            bound = Math.max(num, effectiveSettings.declarative_data_version);
          }
        }
        tmp5 = bound;
      }
      tmp = offlineEditDataVersion !== tmp5;
    }
    if (tmp) {
      let timeout;
      if (_undefined2 != null) {
        timeout = _undefined2.timeout;
      }
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_undefined2.timeout);
        _undefined2.timeout = undefined;
      }
      _undefined2 = undefined;
    }
    let tmp17 = null != _undefined;
    if (tmp17) {
      const versions2 = declarativeSettings.versions;
      let num2;
      const offlineEditDataVersion2 = _undefined.offlineEditDataVersion;
      const tmp19 = _undefined;
      if (versions2 != null) {
        num2 = versions2.dataVersion;
      }
      if (num2 == null) {
        num2 = 0;
      }
      let tmp21 = num2;
      if ("proto" !== tmp19.versionSource) {
        let bound1;
        if (null != effectiveSettings) {
          if (effectiveSettings.account_id === AuthenticationStore.getId()) {
            const _Math2 = Math;
            bound1 = Math.max(num2, effectiveSettings.declarative_data_version);
          }
        }
        tmp21 = bound1;
      }
      tmp17 = offlineEditDataVersion2 !== tmp21;
    }
    if (tmp17) {
      _undefined = undefined;
    }
    c12 = true;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let timeout;
    if (_undefined2 != null) {
      timeout = _undefined2.timeout;
    }
    if (null == timeout) {
      return false;
    } else {
      let timeout1;
      if (_undefined2 != null) {
        timeout1 = _undefined2.timeout;
      }
      if (null != timeout1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_undefined2.timeout);
        _undefined2.timeout = undefined;
      }
    }
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    const declarativeSettings = settings.settings.declarativeSettings;
    if (null == declarativeSettings) {
      return false;
    } else {
      closure_9 = declarativeSettings;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function handleDeclarativeNotificationSettingsUpdate(resetAnyPending) {
    let declarativeSettings;
    let effectiveSettingsAssignment;
    let resetApplyingEdit;
    ({ declarativeSettings, resetApplyingEdit, effectiveSettings, effectiveSettingsAssignment } = resetAnyPending);
    let tmp = null != declarativeSettings;
    resetAnyPending = resetAnyPending.resetAnyPending;
    if (!tmp) {
      tmp = null != resetApplyingEdit;
    }
    if (tmp) {
      if (resetApplyingEdit === c10) {
        if (null != effectiveSettings) {
          const versions = closure_9.versions;
          let num;
          const declarative_data_version = effectiveSettings.declarative_data_version;
          if (versions != null) {
            num = versions.dataVersion;
          }
          if (num == null) {
            num = 0;
          }
          if (declarative_data_version < num) {
            c10 = undefined;
          }
        }
        if (null != declarativeSettings) {
          closure_9 = declarativeSettings;
        }
        c10 = undefined;
        const tmp5 = null != effectiveSettings && null != effectiveSettingsAssignment && effectiveSettingsAssignment === assignment;
        if (tmp5) {
          acceptEffectiveSettings(effectiveSettings);
        }
        if (resetAnyPending) {
          let timeout;
          if (_undefined2 != null) {
            timeout = _undefined2.timeout;
          }
          if (null != timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(_undefined2.timeout);
            _undefined2.timeout = undefined;
          }
          _undefined2 = undefined;
        }
      }
      tmp = tmp3;
    }
    return tmp;
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT: function handleEdit(edit) {
    edit = edit.edit;
    if (true === edit.isApplying) {
      if (null != c10) {
        return false;
      } else {
        c10 = edit;
        let c11;
      }
    } else {
      c11 = edit;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED: function handleEditSkipped(edit) {
    if (edit.edit !== c10) {
      return false;
    } else {
      c10 = undefined;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED: function handleEditApplyFailed(edit) {
    let cloneResult;
    edit = edit.edit;
    if (edit !== c10) {
      return false;
    } else {
      if (tmp) {
        let timeout;
        if (_undefined2 != null) {
          timeout = tmp16.timeout;
        }
        if (null != timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(_undefined2.timeout);
          _undefined2.timeout = undefined;
        }
        _undefined2 = undefined;
      } else {
        let tmp2 = edit;
        if (null != _undefined2) {
          const obj = { partialSettings: cloneResult };
          const merged = Object.assign(_undefined2);
          const DeclarativeSettings = notification_settings.DeclarativeSettings;
          cloneResult = DeclarativeSettings.clone(edit.partialSettings);
          const DeclarativeSettings2 = notification_settings.DeclarativeSettings;
          DeclarativeSettings2.mergePartial(cloneResult, _undefined2.partialSettings);
          tmp2 = obj;
        }
        _undefined2 = tmp2;
      }
      c10 = undefined;
    }
  },
  LOGOUT: function handleLogout() {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    closure_9 = DeclarativeSettings.create();
    let timeout;
    if (_undefined2 != null) {
      timeout = _undefined2.timeout;
    }
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(_undefined2.timeout);
      _undefined2.timeout = undefined;
    }
    _undefined2 = undefined;
    let c10;
    c12 = false;
    let c2;
    let c13 = 0;
    let c3;
    c4 = undefined;
    c14 = false;
    c5 = undefined;
    c15 = false;
    closure_16 = 0;
    enabled = false;
    assignment = undefined;
  },
  USER_SETTINGS_PROTO_UPDATE() {
    if (null != c2) {
      const obj = EffectiveNotifSettings;
      if (c3 !== obj.legacySourceFingerprint(c2, UserSettingsProtoStore.settings)) {
        c14 = true;
        c5 = undefined;
        c15 = false;
      }
    }
    return false;
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_START(requestId) {
    requestId = requestId.requestId;
    c15 = true;
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_SUCCESS(requestId) {
    if (requestId.requestId !== c5) {
      return false;
    } else {
      c15 = false;
      c5 = undefined;
      acceptEffectiveSettings(tmp);
    }
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_FAILURE(requestId) {
    if (requestId.requestId !== c5) {
      return false;
    } else {
      c5 = undefined;
      c15 = false;
    }
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN() {
    closure_16 = closure_16 + 1;
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE() {
    closure_16 = Math.max(0, closure_16 - 1);
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE(arg0) {
    ({ enabled, assignment } = arg0);
    let tmp = null != assignment && assignment !== assignment;
    if (!tmp) {
      tmp = null == assignment || c4 !== assignment;
      const tmp3 = null == assignment || c4 !== assignment;
    }
    if (!tmp) {
      let arm;
      if (effectiveSettings != null) {
        arm = effectiveSettings.arm;
      }
      let str = "control";
      if (enabled) {
        str = "treatment";
      }
      tmp = arm !== str;
    }
    if (tmp) {
      c14 = true;
      c5 = undefined;
      c15 = false;
    }
  }
};
const notifSettingsProtoStore = new NotifSettingsProtoStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;
export function createPendingEdit(arg0) {
  let DeclarativeSettings;
  let num;
  let str;
  const obj = { partialSettings: DeclarativeSettings.create(), offlineEditDataVersion: num, versionSource: str };
  DeclarativeSettings = notification_settings.DeclarativeSettings;
  num = arg0;
  if (arg0 == null) {
    const versions = closure_9.versions;
    let dataVersion;
    if (versions != null) {
      dataVersion = versions.dataVersion;
    }
    num = dataVersion;
  }
  if (num == null) {
    num = 0;
  }
  str = "proto";
  if (null != arg0) {
    str = "effective";
  }
  return obj;
}
