// Module ID: 15877
// Function ID: 121607
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15877 (_isNativeReflectConstruct)
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
let closure_8 = importDefault(dependencyMap[5]);
({ AnalyticsObjects: closure_9, StatusTypes: closure_10 } = arg1(dependencyMap[6]));
const timeout = new arg1(dependencyMap[7]).Timeout();
const timeout1 = new arg1(dependencyMap[7]).Timeout();
const timeout2 = new arg1(dependencyMap[7]).Timeout();
let tmp6 = (arg0) => {
  class CustomStatusManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, CustomStatusManager);
      items1 = [...items];
      obj = closure_6(CustomStatusManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      CustomStatusManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            },
        USER_SETTINGS_PROTO_UPDATE() {
              return tmp2Result.handleUserSettingsProtoUpdate();
            }
      };
      tmp2Result.handlePostConnectionOpen = () => {
        tmp2Result.handleCommonUpdates();
      };
      tmp2Result.handleUserSettingsProtoUpdate = () => {
        tmp2Result.handleCommonUpdates();
      };
      tmp2Result.handleCommonUpdates = () => {
        const result = tmp2Result.manageExpiringCustomStatus();
        tmp2Result.manageExpiringStatus();
        const result1 = tmp2Result.lazilyMigrateStatusCreatedAt();
        const result2 = tmp2Result.manageExpiringFocusMode();
      };
      tmp2Result.manageExpiringCustomStatus = () => {
        const CustomStatusSetting = tmp2Result(closure_2[8]).CustomStatusSetting;
        const setting = CustomStatusSetting.getSetting();
        if (null == setting) {
          closure_13.stop();
        } else {
          if (null != setting.expiresAtMs) {
            if ("0" !== setting.expiresAtMs) {
              const _Date = Date;
              const _Number = Number;
              const date = new Date(Number(setting.expiresAtMs));
              const _Date2 = Date;
              const time = date.getTime();
              const date1 = new Date();
              const diff = time - date1.getTime();
              if (diff > 0) {
                closure_13.start(diff, () => {
                  const CustomStatusSetting = callback(closure_2[8]).CustomStatusSetting;
                  CustomStatusSetting.updateSetting(undefined);
                }, true);
              } else {
                const CustomStatusSetting2 = tmp2Result(closure_2[8]).CustomStatusSetting;
                CustomStatusSetting2.updateSetting(undefined);
                closure_13.stop();
              }
            }
          }
          if (null != closure_13) {
            closure_13.stop();
          }
        }
      };
      tmp2Result.manageExpiringStatus = () => {
        const StatusExpiresAtSetting = tmp2Result(closure_2[8]).StatusExpiresAtSetting;
        const setting = StatusExpiresAtSetting.getSetting();
        if (null != setting) {
          if ("0" !== setting) {
            if (store.getStatus() !== constants2.ONLINE) {
              const _Date = Date;
              const _Number = Number;
              const date = new Date(Number(setting));
              const _Date2 = Date;
              const time = date.getTime();
              const date1 = new Date();
              const diff = time - date1.getTime();
              if (diff > 0) {
                closure_11.start(diff, () => {
                  let obj = { nextStatus: constants2.ONLINE, analyticsContext: { location: obj } };
                  obj = { object: constants.CUSTOM_STATUS_MANAGER };
                  callback(closure_2[9])(obj);
                }, true);
              } else {
                let obj = { nextStatus: constants2.ONLINE };
                obj = {};
                const obj1 = { object: constants.CUSTOM_STATUS_MANAGER };
                obj.location = obj1;
                obj.analyticsContext = obj;
                callback(closure_2[9])(obj);
                closure_11.stop();
              }
            }
          }
        }
        if (null != closure_11) {
          closure_11.stop();
        }
      };
      tmp2Result.lazilyMigrateStatusCreatedAt = () => {
        let tmp = store.getStatus() !== constants2.ONLINE;
        if (tmp) {
          const StatusCreatedAtSetting = tmp2Result(closure_2[8]).StatusCreatedAtSetting;
          tmp = null == StatusCreatedAtSetting.getSetting();
        }
        if (tmp) {
          const PreloadedUserSettingsActionCreators = tmp2Result(closure_2[10]).PreloadedUserSettingsActionCreators;
          PreloadedUserSettingsActionCreators.updateAsync("status", (arg0) => {
            const UInt64Value = callback(closure_2[11]).UInt64Value;
            arg0.statusCreatedAtMs = UInt64Value.create({ value: "" + Date.now() });
          }, tmp2Result(closure_2[10]).UserSettingsDelay.INFREQUENT_USER_ACTION);
        }
      };
      tmp2Result.manageExpiringFocusMode = () => {
        const FocusModeExpiresAtSetting = tmp2Result(closure_2[8]).FocusModeExpiresAtSetting;
        const setting = FocusModeExpiresAtSetting.getSetting();
        if (null != setting) {
          if ("0" !== setting) {
            const _Date = Date;
            const _Number = Number;
            const date = new Date(Number(setting));
            const _Date2 = Date;
            const time = date.getTime();
            const date1 = new Date();
            const diff = time - date1.getTime();
            if (diff > 0) {
              closure_12.start(diff, () => {
                callback(closure_2[12]).setFocusMode(false);
              }, true);
            } else {
              tmp2Result(closure_2[12]).setFocusMode(false);
              closure_12.stop();
              const obj3 = tmp2Result(closure_2[12]);
            }
          }
        }
        if (null != closure_12) {
          closure_12.stop();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = CustomStatusManager;
  callback2(CustomStatusManager, arg0);
  return callback(CustomStatusManager);
}(importDefault(dependencyMap[13]));
tmp6 = new tmp6();
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/custom_status/CustomStatusManager.tsx");

export default tmp6;
