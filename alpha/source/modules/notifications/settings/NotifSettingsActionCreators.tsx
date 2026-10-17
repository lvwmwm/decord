// Module ID: 17034
// Function ID: 17035
// Name: NotifSettingsActionCreators
// Dependencies: [5, 14755, 1087, 3, 584, 1248, 14756, 1297, 1104, 2]
// Exports: schedulePersistPendingEditsIfNeeded, updateNotifSettingRadioValue, updateNotifSettingToggleValue

// Module 17034 (NotifSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1248 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import notification_settings from "notification_settings" /* 14756 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 14755 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c6, c7, constants;

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
  let logger;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    function reload() {
      return closure_1_11(...arguments);
    }
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      let resetAnyPending;
      try {
        let dataVersion;
        let minRescheduleDelayMillis;
        let body2;
        let versions;
        let shouldAbandonEdit;
        let pendingEdit2;
        let pendingEdit;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            dataVersion = undefined;
            minRescheduleDelayMillis = undefined;
            body2 = undefined;
            resetAnyPending = undefined;
            versions = undefined;
            constants = undefined;
            shouldAbandonEdit = undefined;
            pendingEdit2 = undefined;
            pendingEdit = NotifSettingsProtoStore.pendingEdit;
            if (null != pendingEdit) {
              const _clearTimeout = clearTimeout;
              clearTimeout(pendingEdit.timeout);
              pendingEdit.timeout = undefined;
              const obj5 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: pendingEdit, isApplying: true };
              const obj7 = DispatcherDefault;
              obj7.dispatch(obj5);
              if (NotifSettingsProtoStore.applyingEdit !== pendingEdit) {
                logger.log("Failed to take ownership of apply; current is", NotifSettingsProtoStore.applyingEdit);
                skipEdit(pendingEdit);
                c7 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const obj12 = user_settings_UserSettingsUtils;
                const protoToB64Result = obj12.protoToB64(notification_settings.DeclarativeSettings, pendingEdit.partialSettings);
                if (null != protoToB64Result) {
                  if ("" !== protoToB64Result) {
                    minRescheduleDelayMillis = 0;
                    c5 = 1;
                    const HTTP = HTTPUtils.HTTP;
                    const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: obj6, rejectWithError: true };
                    obj6 = { declarative_settings_proto: protoToB64Result, required_data_version: pendingEdit.offlineEditDataVersion };
                    c6 = 2;
                    c7 = 1;
                    const obj8 = { value: HTTP.patch(request), done: false };
                    return obj8;
                  }
                }
                logger.log("Not persisting proto because there is nothing to change");
                skipEdit(pendingEdit);
                c7 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            let body = resetAnyPending;
            let tmp34;
            if (body instanceof closure_131_0(closure_131_2[7]).HTTPResponseError) {
              tmp34 = body;
            }
            constants = tmp34;
            let status;
            if (constants != null) {
              status = constants.status;
            }
            shouldAbandonEdit = 400 === status;
            const obj9 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED", edit: pendingEdit, shouldAbandonEdit };
            const obj4 = closure_131_1(closure_131_2[4]);
            obj4.dispatch(obj9);
            let status1;
            if (constants != null) {
              status1 = constants.status;
            }
            if (429 !== status1) {
              const tmp65 = shouldAbandonEdit;
              if (tmp65) {
                let tmp75;
                body = body.body;
                let code;
                if (body != null) {
                  code = body.code;
                }
                if (code === closure_131_5.INVALID_USER_SETTINGS_BYTES) {
                  closure_131_7.log("Reloading due to invalid data");
                  reload();
                  tmp75 = body;
                }
                throw tmp75;
              }
              closure_131_7.log("Unknown notif settings error %s", body);
              tmp75 = body;
            } else {
              closure_131_7.log("Rate limited, scheduling retry");
              const retryAfter = constants.retryAfter;
              let c1 = retryAfter;
              if (retryAfter == null) {
                c1 = 60;
              }
              minRescheduleDelayMillis = c1 * closure_131_1(closure_131_2[8]).Millis.SECOND;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            body2 = value.body;
            resetAnyPending = body2.declarative_settings_out_of_date;
            const tmp105 = resetAnyPending;
            if (tmp105) {
              closure_131_7.log("Proto was out of date, discarding changes");
            }
            obj = closure_131_0(closure_131_2[5]);
            versions = obj.b64ToProto(closure_131_0(closure_131_2[6]).DeclarativeSettings, body2.declarative_settings_proto);
            dataVersion = undefined;
            if (versions != null) {
              versions = versions.versions;
              if (versions != null) {
                dataVersion = versions.dataVersion;
              }
            }
            let declarativeSettings = versions;
            const dispatch = closure_131_1(closure_131_2[4]).dispatch;
            const tmp20 = closure_131_1(closure_131_2[4]);
            if (versions == null) {
              declarativeSettings = undefined;
            }
            const obj11 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings, resetApplyingEdit: pendingEdit, resetAnyPending };
            dispatch(obj11);
            c5 = 0;
          }
          pendingEdit2 = closure_131_4.pendingEdit;
          if (null != pendingEdit2) {
            if (null != dataVersion) {
              pendingEdit2.offlineEditDataVersion = dataVersion;
            }
            const obj13 = { minRescheduleDelayMillis };
            closure_131_12(pendingEdit2, obj13);
          }
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp95) {
        resetAnyPending = tmp95;
        if (0 === c5) {
          c7 = 3;
          throw tmp95;
        } else {
          c6 = 1;
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
        return { value: "IconComponent", done: null };
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
            const HTTP = HTTPUtils.HTTP;
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
function updateNotifSettingValue(GAMING_DEFAULT, arg1) {
  let cloneResult;
  let createNew;
  let update;
  ({ createNew, update } = arg1);
  const orCreatePendingEdit = NotifSettingsProtoStore.getOrCreatePendingEdit();
  const setting = NotifSettingsProtoStore.getSetting(GAMING_DEFAULT);
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
    orCreatePendingEdit.partialSettings.values[GAMING_DEFAULT] = cloneResult;
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
    const obj2 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: orCreatePendingEdit };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
({ AbortCodes: hasOwnProperty, Endpoints: metroRequire } = Constants);
const tmp3 = new LoggerDefault("NotifSettingsActionCreators");
let closure_7 = tmp3;
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

export const schedulePersistPendingEditsIfNeeded = function schedulePersistPendingEditsIfNeeded() {
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
};
export const updateNotifSettingToggleValue = function updateNotifSettingToggleValue(GAMING_DEFAULT, toggle) {
  obj = {
    createNew() {
      const DeclarativeNotifSetting = toggle(dependencyMap[6]).DeclarativeNotifSetting;
      obj = DeclarativeNotifSetting.create();
      obj.toggle = true;
      return obj;
    },
    update(toggle) {
      toggle.toggle = toggle;
      return toggle.toggle !== toggle;
    }
  };
  updateNotifSettingValue(GAMING_DEFAULT, obj);
};
export const updateNotifSettingRadioValue = function updateNotifSettingRadioValue(GAMING_DEFAULT, arg1) {
  let closure_0 = arg1;
  obj = {
    update(radio) {
      radio.radio = radio;
      return radio.radio !== radio;
    }
  };
  updateNotifSettingValue(GAMING_DEFAULT, obj);
};
