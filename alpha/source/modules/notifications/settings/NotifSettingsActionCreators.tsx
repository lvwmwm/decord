// Module ID: 18228
// Function ID: 18229
// Name: NotifSettingsActionCreators
// Dependencies: [5, 15801, 1072, 3, 572, 1233, 15802, 1282, 15804, 1089, 15815, 15800, 2]
// Exports: schedulePersistPendingEditsIfNeeded, updateNotifSettingRadioValue, updateNotifSettingToggleValue

// Module 18228 (NotifSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 15800 */;
import notification_settings from "notification_settings" /* 15802 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15801 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, c8, c9, dependencyMap, logger;

let hasOwnProperty;
let metroRequire;
function skipEdit(edit) {
  obj = DispatcherDefault;
  const obj2 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED", edit };
  obj.dispatch(obj2);
}
function persistPendingEdit() {
  return obj(...arguments);
}
let obj = function _persistPendingEdit() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let obj7;
    function reload() {
      return closure_1_11(...arguments);
    }
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c7;
      let versions;
      try {
        let offlineEditDataVersion;
        let minRescheduleDelayMillis;
        let effectiveAssignment;
        let status;
        let resetAnyPending;
        let shouldAbandonEdit;
        let pendingEdit2;
        let pendingEdit;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            offlineEditDataVersion = undefined;
            minRescheduleDelayMillis = undefined;
            effectiveAssignment = undefined;
            status = undefined;
            resetAnyPending = undefined;
            versions = undefined;
            logger = undefined;
            shouldAbandonEdit = undefined;
            pendingEdit2 = undefined;
            pendingEdit = NotifSettingsProtoStore.pendingEdit;
            if (null != pendingEdit) {
              const _clearTimeout = clearTimeout;
              clearTimeout(pendingEdit.timeout);
              pendingEdit.timeout = undefined;
              const obj6 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: pendingEdit, isApplying: true };
              const obj8 = DispatcherDefault;
              obj8.dispatch(obj6);
              if (NotifSettingsProtoStore.applyingEdit !== pendingEdit) {
                status = logger;
                logger.log("Unable to take ownership of notification settings apply");
                skipEdit(pendingEdit);
                c9 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const obj13 = require("user_settings/UserSettingsUtils");
                const protoToB64Result = obj13.protoToB64(require("notification_settings").DeclarativeSettings, pendingEdit.partialSettings);
                if (null != protoToB64Result) {
                  if ("" !== protoToB64Result) {
                    minRescheduleDelayMillis = 0;
                    effectiveAssignment = NotifSettingsProtoStore.effectiveAssignment;
                    c7 = 1;
                    const HTTP = require("HTTPUtils").HTTP;
                    const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: obj7, rejectWithError: true };
                    obj7 = { declarative_settings_proto: protoToB64Result, required_data_version: pendingEdit.offlineEditDataVersion };
                    c8 = 2;
                    c9 = 1;
                    const obj9 = { value: HTTP.patch(request), done: false };
                    return obj9;
                  }
                }
                status = logger;
                logger.log("Not persisting proto because there is nothing to change");
                skipEdit(pendingEdit);
                c9 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
        } else {
          if (1 === tmp4) {
            status = versions;
            c7 = 0;
            let body = versions;
            if (closure_133_4.applyingEdit !== pendingEdit) {
              c9 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              status = closure_133_0;
              let tmp45;
              if (body instanceof closure_133_0(closure_133_2[7]).HTTPResponseError) {
                tmp45 = body;
              }
              logger = tmp45;
              status = undefined;
              if (logger != null) {
                status = logger.status;
              }
              shouldAbandonEdit = 400 === status;
              const obj10 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED", edit: pendingEdit, shouldAbandonEdit };
              const obj5 = closure_133_1(closure_133_2[4]);
              obj5.dispatch(obj10);
              status = logger == null;
              let status1;
              if (!status) {
                status1 = logger.status;
              }
              if (429 !== status1) {
                const tmp76 = shouldAbandonEdit;
                if (tmp76) {
                  let tmp84;
                  body = body.body;
                  status = body == null;
                  let code;
                  if (!status) {
                    code = body.code;
                  }
                  if (code === closure_133_5.INVALID_USER_SETTINGS_BYTES) {
                    closure_133_7.log("Reloading due to invalid data");
                    status = reload();
                    tmp84 = body;
                  }
                  throw tmp84;
                }
                status = closure_133_7;
                closure_133_7.log("Unable to save notification settings");
                tmp84 = body;
              } else {
                status = closure_133_7;
                closure_133_7.log("Rate limited, scheduling retry");
                const retryAfter = logger.retryAfter;
                let c3 = retryAfter;
                if (retryAfter == null) {
                  c3 = 60;
                }
                status = c3;
                minRescheduleDelayMillis = c3 * closure_133_1(closure_133_2[9]).Millis.SECOND;
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            status = value.body;
            if (closure_133_4.applyingEdit !== pendingEdit) {
              c7 = 0;
              c9 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              resetAnyPending = status.declarative_settings_out_of_date;
              const tmp114 = resetAnyPending;
              if (tmp114) {
                closure_133_7.log("Proto was out of date, discarding changes");
              }
              obj = closure_133_0(closure_133_2[5]);
              versions = obj.b64ToProto(closure_133_0(closure_133_2[6]).DeclarativeSettings, status.declarative_settings_proto);
              status = undefined;
              if (versions != null) {
                versions = versions.versions;
                if (versions != null) {
                  status = versions.dataVersion;
                }
              }
              offlineEditDataVersion = status;
              status = closure_133_1(closure_133_2[4]).dispatch;
              let declarativeSettings = versions;
              const tmp20 = closure_133_1(closure_133_2[4]);
              if (versions == null) {
                declarativeSettings = undefined;
              }
              const obj12 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings, resetApplyingEdit: pendingEdit, resetAnyPending, effectiveSettings: obj3.parseEffectiveNotifSettings(status.effective_settings), effectiveSettingsAssignment: effectiveAssignment };
              obj3 = closure_133_0(closure_133_2[8]);
              status(obj12);
              let c1 = offlineEditDataVersion;
              const _Math = Math;
              if (offlineEditDataVersion == null) {
                c1 = 0;
              }
              status = closure_133_4.dataVersion;
              const effectiveDataVersion = closure_133_4.effectiveDataVersion;
              let c2 = effectiveDataVersion;
              const tmp34 = c1;
              if (effectiveDataVersion == null) {
                c2 = 0;
              }
              offlineEditDataVersion = max(tmp34, status, c2);
              c7 = 0;
            }
          }
          pendingEdit2 = closure_133_4.pendingEdit;
          if (null != pendingEdit2) {
            if (null != offlineEditDataVersion) {
              status = offlineEditDataVersion;
              pendingEdit2.offlineEditDataVersion = offlineEditDataVersion;
              if (offlineEditDataVersion > closure_133_4.dataVersion) {
                pendingEdit2.versionSource = "effective";
              }
            }
            status = closure_133_12;
            const obj14 = { minRescheduleDelayMillis };
            closure_133_12(pendingEdit2, obj14);
          }
        }
        c9 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp100) {
        versions = tmp100;
        if (0 === c7) {
          c9 = 3;
          throw tmp100;
        } else {
          c8 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _reload() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            orCreatePendingEdit = undefined;
            closure_1 = undefined;
            value = undefined;
            orCreatePendingEdit = orCreatePendingEdit.getOrCreatePendingEdit();
            const obj4 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: orCreatePendingEdit, isApplying: true };
            const obj12 = DispatcherDefault;
            obj12.dispatch(obj4);
            c4 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj5 = { url: constants.ACCOUNT_NOTIFICATION_DECLARATIVE_SETTINGS, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.get(obj5), done: false };
            return obj7;
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj8 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED", edit: orCreatePendingEdit, shouldAbandonEdit: true };
          const obj6 = closure_130_1(closure_130_2[4]);
          obj6.dispatch(obj8);
          throw closure_3;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_1 = value.body.declarative_settings_proto;
            const obj11 = closure_130_0(closure_130_2[5]);
            value = obj11.b64ToProto(closure_130_0(closure_130_2[6]).DeclarativeSettings, closure_1);
            let declarativeSettings = value;
            const dispatch = closure_130_1(closure_130_2[4]).dispatch;
            const tmp37 = closure_130_1(closure_130_2[4]);
            if (value == null) {
              const DeclarativeSettings = closure_130_0(closure_130_2[6]).DeclarativeSettings;
              declarativeSettings = DeclarativeSettings.create();
            }
            const obj10 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings, resetApplyingEdit: orCreatePendingEdit, resetAnyPending: true };
            c5 = 3;
            c6 = 1;
            const obj13 = { value: dispatch(obj10), done: false };
            return obj13;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp21) {
        closure_3 = tmp21;
        if (0 === c4) {
          c6 = 3;
          throw tmp21;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function scheduleEditIfNeeded(timeout, minRescheduleDelayMillis) {
  const isApplyingEdit = null != timeout.timeout || NotifSettingsProtoStore.isApplyingEdit;
  if (!isApplyingEdit) {
    let num = minRescheduleDelayMillis.minRescheduleDelayMillis;
    const _setTimeout = setTimeout;
    const tmp4 = persistPendingEdit;
    if (num == null) {
      num = 10;
    }
    timeout.timeout = _setTimeout(tmp4, num);
  }
}
function updateNotifSettingValue(updatedSettingId, createNew, arg2) {
  let cloneResult;
  createNew = createNew.createNew;
  const update = createNew.update;
  const orCreatePendingEdit = NotifSettingsProtoStore.getOrCreatePendingEdit(arg2);
  const setting = NotifSettingsProtoStore.getSetting(updatedSettingId);
  const tmp = NotifSettingsProtoStore;
  if (null != setting) {
    const DeclarativeNotifSetting2 = notification_settings.DeclarativeNotifSetting;
    cloneResult = DeclarativeNotifSetting2.clone(setting);
  } else {
    cloneResult = undefined;
    if (createNew != null) {
      cloneResult = createNew();
    }
    if (cloneResult == null) {
      const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
      cloneResult = DeclarativeNotifSetting.create();
    }
  }
  if (update(cloneResult)) {
    orCreatePendingEdit.partialSettings.values[updatedSettingId] = cloneResult;
    const tmp9 = null != orCreatePendingEdit.timeout || tmp.isApplyingEdit;
    if (!tmp9) {
      let num = {}.minRescheduleDelayMillis;
      const _setTimeout = setTimeout;
      const tmp11 = persistPendingEdit;
      if (num == null) {
        num = 10;
      }
      orCreatePendingEdit.timeout = _setTimeout(tmp11, num);
    }
    const obj2 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: orCreatePendingEdit, updatedSettingId };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
({ AbortCodes: hasOwnProperty, Endpoints: metroRequire } = Constants);
let tmp3 = new LoggerDefault("NotifSettingsActionCreators");
let closure_7 = tmp3;
let result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

export function schedulePersistPendingEditsIfNeeded() {
  const pendingEdit = NotifSettingsProtoStore.pendingEdit;
  if (null != pendingEdit) {
    const tmp2 = null != pendingEdit.timeout || tmp.isApplyingEdit;
    if (!tmp2) {
      let num = {}.minRescheduleDelayMillis;
      const _setTimeout = setTimeout;
      const tmp4 = persistPendingEdit;
      if (num == null) {
        num = 10;
      }
      pendingEdit.timeout = _setTimeout(tmp4, num);
    }
  }
}
export function updateNotifSettingToggleValue(CALLS, toggle) {
  _require = CALLS;
  obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("updateNotifSettingToggleValue");
  dependencyMap = result;
  if (dependencyMap) {
    let tmp2 = NotifSettingsProtoStore;
  }
  let closure_3 = null != NotifSettingsProtoStore.getSetting(CALLS);
  let obj2 = {
    createNew() {
      const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
      const obj2 = DeclarativeNotifSetting.create();
      obj = settings_NotifSettingsUtils;
      let flag = obj.getNotifSettingToggleValue(CALLS, dependencyMap);
      if (flag == null) {
        flag = false;
      }
      obj2.toggle = flag;
      return obj2;
    },
    update(toggle) {
      toggle.toggle = toggle;
      let tmp2 = dependencyMap;
      toggle = toggle.toggle;
      const tmp = toggle;
      if (dependencyMap) {
        tmp2 = !closure_3;
      }
      if (!tmp2) {
        tmp2 = toggle !== tmp;
      }
      return tmp2;
    }
  };
  let effectiveDataVersion;
  const tmp3 = NotifSettingsProtoStore;
  const tmp4 = updateNotifSettingValue;
  if (result) {
    effectiveDataVersion = tmp3.effectiveDataVersion;
  }
  tmp4(CALLS, obj2, effectiveDataVersion);
}
export function updateNotifSettingRadioValue(updatedSettingId, arg1) {
  let closure_0 = arg1;
  obj = {
    update(radio) {
      radio.radio = radio;
      return radio.radio !== radio;
    }
  };
  updateNotifSettingValue(updatedSettingId, obj);
}
