// Module ID: 11437
// Function ID: 89005
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11437 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { INIT: 0, [0]: "INIT", REQUESTED: 1, [1]: "REQUESTED", PROMPT_SEEN: 2, [2]: "PROMPT_SEEN", PROMPT_SKIPPED: 3, [3]: "PROMPT_SKIPPED" };
obj = { MESSAGE_SENT: 0, [0]: "MESSAGE_SENT", INVITE_ACCEPTED: 1, [1]: "INVITE_ACCEPTED", FRIEND_REQUEST_SENT: 2, [2]: "FRIEND_REQUEST_SENT", DM_SPACE: 3, [3]: "DM_SPACE", CHANNEL_BANNER: 5, [5]: "CHANNEL_BANNER", POST_REACTION_BANNER: 6, [6]: "POST_REACTION_BANNER", GUILD_OPEN_BOTTOM_SHEET: 7, [7]: "GUILD_OPEN_BOTTOM_SHEET", CALL_DISCONNECT_BOTTOM_SHEET: 8, [8]: "CALL_DISCONNECT_BOTTOM_SHEET" };
obj = { permissionState: obj.INIT, promptLastSeen: { [obj.MESSAGE_SENT]: null, [obj.INVITE_ACCEPTED]: null, [obj.FRIEND_REQUEST_SENT]: null, [obj.DM_SPACE]: null, [obj.CHANNEL_BANNER]: null, [obj.POST_REACTION_BANNER]: null, [obj.GUILD_OPEN_BOTTOM_SHEET]: null, [obj.CALL_DISCONNECT_BOTTOM_SHEET]: null }, eligiblePromptTypes: new Set([]) };
let closure_11 = null;
let tmp3 = (DeviceSettingsStore) => {
  class PushNotificationPermissionStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PushNotificationPermissionStore);
      obj = closure_5(PushNotificationPermissionStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = PushNotificationPermissionStore;
  callback2(PushNotificationPermissionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(promptLastSeen) {
      let obj = {};
      const merged = Object.assign(promptLastSeen);
      let tmp2 = null;
      if (null != promptLastSeen) {
        tmp2 = promptLastSeen;
      }
      const merged1 = Object.assign(tmp2);
      obj = {};
      const merged2 = Object.assign(promptLastSeen.promptLastSeen);
      promptLastSeen = undefined;
      if (null != promptLastSeen) {
        promptLastSeen = promptLastSeen.promptLastSeen;
      }
      const merged3 = Object.assign(promptLastSeen);
      obj["promptLastSeen"] = obj;
      const items = [...closure_9.eligiblePromptTypes];
      let eligiblePromptTypes;
      if (null != promptLastSeen) {
        eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
      }
      if (null == eligiblePromptTypes) {
        eligiblePromptTypes = [];
      }
      HermesBuiltin.arraySpread(eligiblePromptTypes, tmp7);
      obj["eligiblePromptTypes"] = new Set(items.filter((arg0) => arg0 !== constants2.POST_REACTION_BANNER));
      const set = new Set(items.filter((arg0) => arg0 !== constants2.POST_REACTION_BANNER));
      PushNotificationPermissionStore(closure_1[5]).checkPermissions((sound) => {
        let _alert;
        let badge;
        ({ alert: _alert, badge } = sound);
        if (!_alert) {
          _alert = sound.sound;
        }
        if (!_alert) {
          _alert = badge;
        }
        if (_alert) {
          obj.permissionState = constants.REQUESTED;
        }
      });
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "permissionState",
    get() {
      return closure_10.permissionState;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "promptSeen",
    get() {
      const items = [, ];
      ({ PROMPT_SEEN: arr[0], PROMPT_SKIPPED: arr[1] } = closure_7);
      return items.includes(closure_10.permissionState);
    }
  };
  items[4] = {
    key: "authorizationStatus",
    get() {
      return closure_11;
    }
  };
  return callback(PushNotificationPermissionStore, items);
}(importDefault(dependencyMap[6]).DeviceSettingsStore);
tmp3.displayName = "PushNotificationPermissionStore";
tmp3.persistKey = "PushNotificationPermissionStoreKey_1";
const items = [
  (promptLastSeen) => {
    let obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(promptLastSeen);
    obj = {};
    const merged2 = Object.assign(obj.promptLastSeen);
    const merged3 = Object.assign(promptLastSeen.promptLastSeen);
    obj["promptLastSeen"] = obj;
    if (null == promptLastSeen.eligiblePromptTypes) {
      const _Set4 = Set;
      let eligiblePromptTypes = new Set([]);
    } else {
      const _Array = Array;
      if (Array.isArray(promptLastSeen.eligiblePromptTypes)) {
        const _Set3 = Set;
        eligiblePromptTypes = new Set(promptLastSeen.eligiblePromptTypes);
      } else {
        const _Set = Set;
        if (promptLastSeen.eligiblePromptTypes instanceof Set) {
          eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
        } else {
          const _Set2 = Set;
          eligiblePromptTypes = new Set([]);
        }
      }
    }
    obj["eligiblePromptTypes"] = eligiblePromptTypes;
    return obj;
  }
];
tmp3.migrations = items;
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  PUSH_NOTIFICATION_PERMISSION_SET_STATE: function setPushNotificationPermissionState(permissionState) {
    obj.permissionState = permissionState.permissionState;
  },
  PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN: function setPushPermissionReactivationSeen(promptType) {
    obj.promptLastSeen[promptType.promptType] = new Date();
    return true;
  },
  PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE: function setPromptTypeAsEligible(promptType) {
    obj.eligiblePromptTypes = new Set(obj.eligiblePromptTypes).add(promptType.promptType);
    return true;
  },
  PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE: function setNotificationAuthorizationStatus(authorizationStatus) {
    authorizationStatus = authorizationStatus.authorizationStatus;
  }
});
const obj1 = {
  PUSH_NOTIFICATION_PERMISSION_SET_STATE: function setPushNotificationPermissionState(permissionState) {
    obj.permissionState = permissionState.permissionState;
  },
  PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN: function setPushPermissionReactivationSeen(promptType) {
    obj.promptLastSeen[promptType.promptType] = new Date();
    return true;
  },
  PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE: function setPromptTypeAsEligible(promptType) {
    obj.eligiblePromptTypes = new Set(obj.eligiblePromptTypes).add(promptType.promptType);
    return true;
  },
  PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE: function setNotificationAuthorizationStatus(authorizationStatus) {
    authorizationStatus = authorizationStatus.authorizationStatus;
  }
};
const set = new Set([]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/native/PushNotificationPermissionStore.tsx");

export default tmp3;
export const PermissionStateType = obj;
export const PermissionPromptType = obj;
