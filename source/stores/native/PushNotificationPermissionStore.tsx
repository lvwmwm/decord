// Module ID: 11478
// Function ID: 89301
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10667, 566, 686, 2]

// Module 11478 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { INIT: 0, [0]: "INIT", REQUESTED: 1, [1]: "REQUESTED", PROMPT_SEEN: 2, [2]: "PROMPT_SEEN", PROMPT_SKIPPED: 3, [3]: "PROMPT_SKIPPED" };
obj = { MESSAGE_SENT: 0, [0]: "MESSAGE_SENT", INVITE_ACCEPTED: 1, [1]: "INVITE_ACCEPTED", FRIEND_REQUEST_SENT: 2, [2]: "FRIEND_REQUEST_SENT", DM_SPACE: 3, [3]: "DM_SPACE", CHANNEL_BANNER: 5, [5]: "CHANNEL_BANNER", POST_REACTION_BANNER: 6, [6]: "POST_REACTION_BANNER", GUILD_OPEN_BOTTOM_SHEET: 7, [7]: "GUILD_OPEN_BOTTOM_SHEET", CALL_DISCONNECT_BOTTOM_SHEET: 8, [8]: "CALL_DISCONNECT_BOTTOM_SHEET" };
obj = { permissionState: obj.INIT, promptLastSeen: { [obj.MESSAGE_SENT]: null, [obj.INVITE_ACCEPTED]: null, [obj.FRIEND_REQUEST_SENT]: null, [obj.DM_SPACE]: null, [obj.CHANNEL_BANNER]: null, [obj.POST_REACTION_BANNER]: null, [obj.GUILD_OPEN_BOTTOM_SHEET]: null, [obj.CALL_DISCONNECT_BOTTOM_SHEET]: null } };
let set = new Set([]);
obj.eligiblePromptTypes = set;
let c11 = null;
let tmp3 = ((DeviceSettingsStore) => {
  class PushNotificationPermissionStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PushNotificationPermissionStore);
      obj = outer1_5(PushNotificationPermissionStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PushNotificationPermissionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(promptLastSeen) {
      let obj = {};
      const merged = Object.assign(outer1_9);
      let tmp2 = null;
      if (null != promptLastSeen) {
        tmp2 = promptLastSeen;
      }
      const merged1 = Object.assign(tmp2);
      obj = {};
      const merged2 = Object.assign(outer1_9.promptLastSeen);
      promptLastSeen = undefined;
      if (null != promptLastSeen) {
        promptLastSeen = promptLastSeen.promptLastSeen;
      }
      const merged3 = Object.assign(promptLastSeen);
      obj["promptLastSeen"] = obj;
      const items = [...outer1_9.eligiblePromptTypes];
      let eligiblePromptTypes;
      if (null != promptLastSeen) {
        eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
      }
      if (null == eligiblePromptTypes) {
        eligiblePromptTypes = [];
      }
      HermesBuiltin.arraySpread(eligiblePromptTypes, tmp7);
      obj["eligiblePromptTypes"] = new Set(items.filter((arg0) => arg0 !== outer2_8.POST_REACTION_BANNER));
      const outer1_10 = obj;
      const set = new Set(items.filter((arg0) => arg0 !== outer2_8.POST_REACTION_BANNER));
      PushNotificationPermissionStore(outer1_1[5]).checkPermissions((sound) => {
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
          outer2_10.permissionState = outer2_7.REQUESTED;
        }
      });
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "permissionState",
    get() {
      return outer1_10.permissionState;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "promptSeen",
    get() {
      const items = [, ];
      ({ PROMPT_SEEN: arr[0], PROMPT_SKIPPED: arr[1] } = outer1_7);
      return items.includes(outer1_10.permissionState);
    }
  };
  items[4] = {
    key: "authorizationStatus",
    get() {
      return outer1_11;
    }
  };
  return callback(PushNotificationPermissionStore, items);
})(require("initialize").DeviceSettingsStore);
tmp3.displayName = "PushNotificationPermissionStore";
tmp3.persistKey = "PushNotificationPermissionStoreKey_1";
let items = [
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
tmp3 = new tmp3(require("dispatcher"), {
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
let result = set.fileFinishedImporting("stores/native/PushNotificationPermissionStore.tsx");

export default tmp3;
export const PermissionStateType = obj;
export const PermissionPromptType = obj;
