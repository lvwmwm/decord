// Module ID: 18017
// Function ID: 18018
// Name: CustomStatusManager
// Dependencies: [5759, 1085, 2060, 6807, 2041, 12572, 2046, 1240, 12571, 2]

// Module 18017 (CustomStatusManager)
import UserSettings from "UserSettings" /* 2041 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2046 */;
import Timers from "Timers" /* 2060 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5759 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticsObjects: closure_4, StatusTypes: hasOwnProperty } = Constants);
const timeout = new Timers.Timeout();
const timeout1 = new Timers.Timeout();
const timeout2 = new Timers.Timeout();
class CustomStatusManager extends AutomaticLifecycleManager {
  constructor() {
    let constants2;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      },
      USER_SETTINGS_PROTO_UPDATE() {
        return require.handleUserSettingsProtoUpdate();
      }
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      require.handleCommonUpdates();
    };
    applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate() {
      require.handleCommonUpdates();
    };
    applyArgumentsResult.handleCommonUpdates = function handleCommonUpdates() {
      const result = require.manageExpiringCustomStatus();
      require.manageExpiringStatus();
      const result1 = require.lazilyMigrateStatusCreatedAt();
      const result2 = require.manageExpiringFocusMode();
    };
    applyArgumentsResult.manageExpiringCustomStatus = function manageExpiringCustomStatus() {
      let CustomStatusSetting = UserSettings.CustomStatusSetting;
      const setting = CustomStatusSetting.getSetting();
      const tmp = require;
      const tmp2 = dependencyMap;
      if (null == setting) {
        timeout2.stop();
      } else {
        if (null != setting.expiresAtMs) {
          if ("0" !== setting.expiresAtMs) {
            const _Date = Date;
            const _Number = Number;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(Number(setting.expiresAtMs));
            const time = date.getTime();
            const date1 = new Date();
            const diff = time - date1.getTime();
            if (diff > 0) {
              timeout2.start(diff, () => {
                const CustomStatusSetting = closure_1_0(closure_1_2[4]).CustomStatusSetting;
                CustomStatusSetting.updateSetting(undefined);
              }, true);
            } else {
              const CustomStatusSetting2 = tmp(tmp2[4]).CustomStatusSetting;
              CustomStatusSetting2.updateSetting(undefined);
              timeout2.stop();
            }
          }
        }
        const obj = timeout2;
        if (null != timeout2) {
          obj.stop();
        }
      }
    };
    applyArgumentsResult.manageExpiringStatus = function manageExpiringStatus() {
      let obj3;
      let obj4;
      const StatusExpiresAtSetting = UserSettings.StatusExpiresAtSetting;
      const setting = StatusExpiresAtSetting.getSetting();
      const tmp = dependencyMap;
      if (null != setting) {
        if ("0" !== setting) {
          if (SelfPresenceStore.getStatus() !== constants2.ONLINE) {
            const _Date = Date;
            const _Number = Number;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(Number(setting));
            const time = date.getTime();
            const date1 = new Date();
            const diff = time - date1.getTime();
            if (diff > 0) {
              timeout.start(diff, () => {
                let obj2;
                let obj3;
                const obj = { nextStatus: constants2.ONLINE, analyticsContext: obj2 };
                obj2 = { location: obj3 };
                obj3 = { object: constants.CUSTOM_STATUS_MANAGER };
                closure_1_1(closure_1_2[5])(obj);
              }, true);
            } else {
              let obj2 = { nextStatus: tmp4.ONLINE, analyticsContext: obj3 };
              obj3 = { location: obj4 };
              obj4 = { object: constants.CUSTOM_STATUS_MANAGER };
              require("setUserStatus")(obj2);
              timeout.stop();
            }
          }
        }
      }
      let obj = timeout;
      if (null != timeout) {
        obj.stop();
      }
    };
    applyArgumentsResult.lazilyMigrateStatusCreatedAt = function lazilyMigrateStatusCreatedAt() {
      let tmp = SelfPresenceStore.getStatus() !== constants2.ONLINE;
      if (tmp) {
        const StatusCreatedAtSetting = UserSettings.StatusCreatedAtSetting;
        tmp = null == StatusCreatedAtSetting.getSetting();
      }
      if (tmp) {
        const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
        PreloadedUserSettingsActionCreators.updateAsync("status", async (arg0) => {
          const UInt64Value = closure_1_0(closure_1_2[7]).UInt64Value;
          const obj = { value: "" + Date.now() };
          arg0.statusCreatedAtMs = UInt64Value.create(obj);
        }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
      }
    };
    applyArgumentsResult.manageExpiringFocusMode = function manageExpiringFocusMode() {
      const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
      const setting = FocusModeExpiresAtSetting.getSetting();
      const tmp = require;
      const tmp2 = dependencyMap;
      if (null != setting) {
        if ("0" !== setting) {
          const _Date = Date;
          const _Number = Number;
          const self = this;
          const self2 = this;
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          const date = new Date(Number(setting));
          const time = date.getTime();
          const date1 = new Date();
          const diff = time - date1.getTime();
          if (diff > 0) {
            timeout1.start(diff, () => {
              const obj = closure_1_0(closure_1_2[8]);
              obj.setFocusMode(false);
            }, true);
          } else {
            const tmpResult = tmp(tmp2[8]);
            tmpResult.setFocusMode(false);
            timeout1.stop();
          }
        }
      }
      let obj = timeout1;
      if (null != timeout1) {
        obj.stop();
      }
    };
    return applyArgumentsResult;
  }
}
const customStatusManager = new CustomStatusManager();
let result = size.fileFinishedImporting("modules/custom_status/CustomStatusManager.tsx");

export default customStatusManager;
