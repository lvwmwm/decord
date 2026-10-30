// Module ID: 15528
// Function ID: 15529
// Name: NotifSettingsProtoStore
// Dependencies: [15529, 1234, 504, 572, 2]
// Exports: createPendingEdit

// Module 15528 (NotifSettingsProtoStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1234 */;
import notification_settings from "notification_settings" /* 15529 */;
import size from "module_2" /* 2 */;

let _undefined, _undefined2, closure_2;

let DeclarativeSettings = notification_settings.DeclarativeSettings;
const React2 = DeclarativeSettings.create();
let _false;
let React3;
let c5 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class NotifSettingsProtoStore extends PersistedStore {
  initialize(proto) {
    let num;
    if (null != proto) {
      const b64ToProto2 = user_settings_UserSettingsUtils.b64ToProto;
      proto = proto.proto;
      user_settings_UserSettingsUtils;
      const DeclarativeSettings2 = notification_settings.DeclarativeSettings;
      if (proto == null) {
        proto = null;
      }
      const b64ToProto2Result = b64ToProto2(DeclarativeSettings2, proto);
      if (null != b64ToProto2Result) {
        closure_2 = b64ToProto2Result;
      }
      const b64ToProto = user_settings_UserSettingsUtils.b64ToProto;
      let protoToSave = proto.protoToSave;
      user_settings_UserSettingsUtils;
      const DeclarativeSettings = tmp6(15529).DeclarativeSettings;
      if (protoToSave == null) {
        protoToSave = null;
      }
      const b64ToProtoResult = b64ToProto(DeclarativeSettings, protoToSave);
      if (null != b64ToProtoResult) {
        const obj = { partialSettings: b64ToProtoResult, offlineEditDataVersion: num };
        num = proto.offlineEditDataVersion;
        if (num == null) {
          num = 0;
        }
        let c4 = obj;
      }
    }
  }
  getState() {
    let obj2;
    const obj = { proto: obj2.protoToB64(notification_settings.DeclarativeSettings, closure_2) };
    let tmp3 = _undefined;
    obj2 = user_settings_UserSettingsUtils;
    if (_undefined == null) {
      tmp3 = _undefined2;
    }
    if (null != tmp3) {
      if (null != _undefined) {
        let partialSettings;
        if (null != _undefined2) {
          const DeclarativeSettings = tmp(15529).DeclarativeSettings;
          const cloneResult = DeclarativeSettings.clone(_undefined.partialSettings);
          const DeclarativeSettings2 = tmp(15529).DeclarativeSettings;
          DeclarativeSettings2.mergePartial(cloneResult, _undefined2.partialSettings);
          partialSettings = cloneResult;
        }
        const tmpResult = user_settings_UserSettingsUtils;
        obj.protoToSave = tmpResult.protoToB64(notification_settings.DeclarativeSettings, partialSettings);
        obj.offlineEditDataVersion = tmp3.offlineEditDataVersion;
      }
      partialSettings = tmp3.partialSettings;
    }
    return obj;
  }
  getOrCreatePendingEdit() {
    let DeclarativeSettings;
    let num;
    let tmp = c4;
    if (c4 == null) {
      const obj = { partialSettings: DeclarativeSettings.create(), offlineEditDataVersion: num };
      DeclarativeSettings = notification_settings.DeclarativeSettings;
      const versions = closure_2.versions;
      num = undefined;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
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
      tmp = closure_2.values[arg0];
    }
    return tmp;
  }
}
const prototype = NotifSettingsProtoStore.prototype;
Object.defineProperty(prototype, "hasLoaded", {
  get: function hasLoaded() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "pendingEdit", {
  get: function pendingEdit() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "applyingEdit", {
  get: function applyingEdit() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "isApplyingEdit", {
  get: function isApplyingEdit() {
    return null != this.applyingEdit;
  },
  set: undefined
});
NotifSettingsProtoStore.displayName = "NotifSettingsProtoStore";
NotifSettingsProtoStore.persistKey = "NotifSettingsProtoStore-Cache";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    let declarativeSettings;
    notificationSettings = notificationSettings.notificationSettings;
    if (null != notificationSettings.declarativeSettings) {
      declarativeSettings = notificationSettings.declarativeSettings;
    }
    const versions = declarativeSettings.versions;
    let num;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    const tmp = null != _undefined2 && _undefined2.offlineEditDataVersion !== num;
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
    const tmp8 = null != _undefined && _undefined.offlineEditDataVersion !== num;
    if (tmp8) {
      _undefined = undefined;
    }
    c5 = true;
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
      closure_2 = declarativeSettings;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function handleDeclarativeNotificationSettingsUpdate(resetAnyPending) {
    let declarativeSettings;
    let resetApplyingEdit;
    ({ declarativeSettings, resetApplyingEdit } = resetAnyPending);
    let tmp = null != declarativeSettings;
    resetAnyPending = resetAnyPending.resetAnyPending;
    if (!tmp) {
      tmp = null != resetApplyingEdit;
    }
    if (tmp) {
      if (resetApplyingEdit === c3) {
        if (null != declarativeSettings) {
          closure_2 = declarativeSettings;
        }
        c3 = undefined;
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
      if (null != c3) {
        return false;
      } else {
        c3 = edit;
        let c4;
      }
    } else {
      c4 = edit;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED: function handleEditSkipped(edit) {
    if (edit.edit !== c3) {
      return false;
    } else {
      c3 = undefined;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED: function handleEditApplyFailed(edit) {
    let cloneResult;
    edit = edit.edit;
    if (edit !== c3) {
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
      c3 = undefined;
    }
  },
  LOGOUT: function handleLogout() {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    closure_2 = DeclarativeSettings.create();
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
    let c3;
    c5 = false;
  }
};
const notifSettingsProtoStore = new NotifSettingsProtoStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;
export function createPendingEdit() {
  let DeclarativeSettings;
  let num;
  const obj = { partialSettings: DeclarativeSettings.create(), offlineEditDataVersion: num };
  DeclarativeSettings = notification_settings.DeclarativeSettings;
  const versions = closure_2.versions;
  num = undefined;
  if (versions != null) {
    num = versions.dataVersion;
  }
  if (num == null) {
    num = 0;
  }
  return obj;
}
