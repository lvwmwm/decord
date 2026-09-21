// Module ID: 12560
// Function ID: 12561
// Name: NotificationPermissionUtil
// Dependencies: [32, 5, 19, 17, 12558, 12559, 1078, 4967, 9556, 1245, 12561, 12567, 558, 568, 12568, 504, 2]
// Exports: enableProvisionalPushNotification, requestPushNotificationPermission

// Module 12560 (NotificationPermissionUtil)
import c from "c" /* 568 */;
import RegionalTeenUtils from "RegionalTeenUtils" /* 12568 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12558 */;

const initialize = tmp(504);
require = fn;
let closure_11 = async function _requestPushNotificationPermission(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = action_type;
          closure_131_1 = action_location;
          closure_131_2 = dependencyMap;
          closure_131_3 = undefined;
          const NativePermissionManager = NativeModules.NativePermissionManager;
          c5 = 1;
          c6 = 1;
          const obj6 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_131_3 = value;
        if (closure_131_3 === closure_132_10.DENIED) {
          closure_132_1(closure_132_2[8])();
          const obj8 = { action_type: closure_132_8.TO_SETTINGS, action_location: closure_131_1 };
          closure_132_1(closure_132_2[9]).track(closure_132_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj8);
          closure_131_2();
          c6 = 3;
          const obj3 = closure_132_1(closure_132_2[9]);
        } else if (closure_131_3 !== closure_132_10.AUTHORIZED) {
          const permission = closure_132_1(closure_132_2[11]).requestPermission((permission_granted) => {
            action_location(1245).track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type, action_location, permission_granted });
            dependencyMap();
          });
          const obj = closure_132_1(closure_132_2[11]);
        }
        const result = closure_132_0(closure_132_2[10]).updateNotificationAuthorizationStatus(closure_131_3);
        closure_131_2();
        const obj2 = closure_132_0(closure_132_2[10]);
      }
    } catch (tmp36) {
      c6 = tmp;
      throw tmp36;
    }
  }
};
let closure_12 = async function _enableProvisionalPushNotification(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
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
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp4;
          let NativePermissionManager = NativeModules.NativePermissionManager;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        if (value === closure_129_10.UNDETERMINED) {
          const DCDProvisionalNotificationUtils = closure_129_6.DCDProvisionalNotificationUtils;
          let result = DCDProvisionalNotificationUtils.registerProvisionalNotification((arg0) => {
            let str = "denied";
            if (arg0) {
              str = "accepted";
            }
            closure_1_1(closure_1_2[9]).track(constants.PERMISSIONS_ACKED, { type: "provisional_notification", action: str });
            const NativePermissionManager = closure_1_6.NativePermissionManager;
            const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
            notificationAuthorizationStatus.then((result) => {
              if (null != result) {
                result = closure_1_0(dependencyMap[10]).updateNotificationAuthorizationStatus(result);
                const obj = closure_1_0(dependencyMap[10]);
              }
            });
          });
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const EventActionType = fn(12559).EventActionType;
const AnalyticEvents = fn(1078).AnalyticEvents;
let closure_10 = fn(4967).NotificationAuthorizationStatus;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanSeePushNotificationNudge() {
  const cResult = c.c(8);
  const isTeenInStrictCountry = RegionalTeenUtils.useIsTeenInStrictCountry();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PushNotificationPermissionStore];
    const fn = function c() {
      return authorizationStatus.authorizationStatus;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const obj4 = noop;
  const tmpResult = initialize;
  [tmp10, require] = noop.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        NativePermissionManager = NativeModules.NativePermissionManager;
        notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
        nextPromise = notificationAuthorizationStatus.then((result) => {
          if (null != result) {
            result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
            const obj = require("PushNotificationActionCreators");
          }
          closure_1_0(true);
        });
        return;
      }
    }
    const items1 = [];
    cResult[2] = N;
    cResult[3] = items1;
    let tmp12 = items1;
    const tmp11 = N;
  } else {
    class N {
      constructor() {
        NativePermissionManager = NativeModules.NativePermissionManager;
        notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
        nextPromise = notificationAuthorizationStatus.then((result) => {
          if (null != result) {
            result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
            const obj = require("PushNotificationActionCreators");
          }
          closure_1_0(true);
        });
        return;
      }
    }
    tmp12 = cResult[3];
  }
  const effect = obj4.useEffect(tmp11, tmp12);
  if (cResult[4] === stateFromStores) {
    class N {
      constructor() {
        NativePermissionManager = NativeModules.NativePermissionManager;
        notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
        nextPromise = notificationAuthorizationStatus.then((result) => {
          if (null != result) {
            result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
            const obj = require("PushNotificationActionCreators");
          }
          closure_1_0(true);
        });
        return;
      }
    }
  }
  let hasItem = tmp10;
  if (tmp10) {
    class N {
      constructor() {
        NativePermissionManager = NativeModules.NativePermissionManager;
        notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
        nextPromise = notificationAuthorizationStatus.then((result) => {
          if (null != result) {
            result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
            const obj = require("PushNotificationActionCreators");
          }
          closure_1_0(true);
        });
        return;
      }
    }
  }
  if (hasItem) {
    class N {
      constructor() {
        NativePermissionManager = NativeModules.NativePermissionManager;
        notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
        nextPromise = notificationAuthorizationStatus.then((result) => {
          if (null != result) {
            result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
            const obj = require("PushNotificationActionCreators");
          }
          closure_1_0(true);
        });
        return;
      }
    }
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    class N {
      constructor() {
        NativePermissionManager = NativeModules.NativePermissionManager;
        notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
        nextPromise = notificationAuthorizationStatus.then((result) => {
          if (null != result) {
            result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
            const obj = require("PushNotificationActionCreators");
          }
          closure_1_0(true);
        });
        return;
      }
    }
    const items2 = [, , ];
    ({ DENIED: arr3[0], PROVISIONAL: arr3[1], UNDETERMINED: arr3[2] } = closure_10);
    hasItem = items2.includes(stateFromStores);
  }
  cResult[4] = stateFromStores;
  cResult[5] = tmp10;
  cResult[6] = isTeenInStrictCountry;
  cResult[7] = hasItem;
}) : (function useCanSeePushNotificationNudge() {
  const isTeenInStrictCountry = RegionalTeenUtils.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  [tmp4, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((result) => {
      if (null != result) {
        result = require("PushNotificationActionCreators").updateNotificationAuthorizationStatus(result);
        const obj = require("PushNotificationActionCreators");
      }
      closure_1_0(true);
    });
  }, []);
  if (hasItem) {
    hasItem = !isTeenInStrictCountry;
  }
  if (hasItem) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    const items1 = [, , ];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_10);
    hasItem = items1.includes(stateFromStores);
  }
  return hasItem;
});
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(2);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  _require = tmp2[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      closure_0 = asyncGeneratorStep(async (arg0, value) => {
        if (c2 === 2) {
          c2 = 3;
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
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const NativePermissionManager = NativeModules.NativePermissionManager;
                c1 = 1;
                c2 = 1;
                const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              if (value !== constants.AUTHORIZED) {
                tmp4(true);
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            c2 = tmp;
            throw tmp11;
          }
        }
      });
      (function shouldShowReactivationPrompts() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp3 = fn;
    tmp4 = items;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const effect = noop.useEffect(tmp3, tmp4);
  return tmp2[0];
}) : (() => {
  [tmp2, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    closure_0 = async function _shouldShowReactivationPrompts2(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
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
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const NativePermissionManager = NativeModules.NativePermissionManager;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value !== constants.AUTHORIZED) {
              tmp4(true);
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    };
    !(function shouldShowReactivationPrompts() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, []);
  return tmp2;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useShowReactivationPrompt = tmp2;
export const enableProvisionalPushNotification = function enableProvisionalPushNotification() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useCanSeePushNotificationNudge = tmp3;
export const useShouldShowPushNotificationNudgeByPromptType = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowPushNotificationNudgeByPromptType(arg0) {
  const cResult = c.c(6);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PushNotificationPermissionStore];
    const fn = function n() {
      return state.getState().eligiblePromptTypes;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === arg0) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  let hasItem = tmp4;
  if (tmp4) {
    hasItem = stateFromStores.has(arg0);
  }
  cResult[2] = stateFromStores;
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = hasItem;
  tmp8 = hasItem;
}) : (function useShouldShowPushNotificationNudgeByPromptType(arg0) {
  let hasItem = closure_13();
  const items = [PushNotificationPermissionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores.has(arg0);
  }
  return hasItem;
});
