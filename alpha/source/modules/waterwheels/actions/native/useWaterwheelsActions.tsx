// Module ID: 18933
// Function ID: 18934
// Name: useWaterwheelsActions
// Dependencies: [5, 19, 5011, 14206, 1072, 8009, 5837, 9007, 7593, 1113, 2534, 9019, 9810, 6961, 8033, 14215, 6957, 2]
// Exports: useWaterwheelsActions

// Module 18933 (useWaterwheelsActions)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6957 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8009 */;
import react_nativeDefault from "react-native" /* 8033 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 9007 */;
import NotificationUtilsDefault from "NotificationUtils" /* 14215 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14206 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c0, c1, closure_4, guild, type;

let AbortCodes;
let PlatformTypes;
function openErrorToast(text) {
  obj = ToastActionCreatorsDefault;
  const obj2 = { text };
  obj.open("waterwheels-action-error", obj2);
}
function requestNotifications() {
  return obj(...arguments);
}
let obj = function _requestNotifications() {
  let authorizationStatus;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (authorizationStatus.authorizationStatus !== constants.DENIED) {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: obj2.requestPermission(), done: false };
            obj2 = NotificationUtilsDefault;
            return obj5;
          } else {
            react_nativeDefault();
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp9) {
        c0 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _joinGuild() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    set = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj2;
      function isJoinFailureAlreadyShown(body) {
        if (body instanceof closure_1_0(closure_1_2[13]).JoinGuildRefusedError) {
          return true;
        } else {
          let code;
          if (body != null) {
            body = body.body;
            if (body != null) {
              code = body.code;
            }
          }
          const hasItem = null != code && set.has(code);
          return hasItem;
        }
      }
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              guild = guild.getGuild(closure_1);
              let joinedAt;
              if (guild != null) {
                joinedAt = guild.joinedAt;
              }
              if (null == joinedAt) {
                if (!set.has(closure_1)) {
                  set.add(closure_1);
                  c5 = 2;
                  c6 = 3;
                  c7 = 1;
                  const obj5 = { value: obj2.joinGuild(closure_1, { autoNavigate: false }), done: false };
                  obj2 = GuildActionCreatorsDefault;
                  return obj5;
                }
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            set.delete(closure_1);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              if (!isJoinFailureAlreadyShown(closure_4)) {
                const intl = closure_131_0(closure_131_2[9]).intl;
                closure_131_11(intl.string(closure_131_1(closure_131_2[10]).grYfmA));
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              set.delete(closure_1);
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
            }
            c5 = 0;
            set.delete(closure_1);
          }
          c7 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp33) {
          closure_4 = tmp33;
          if (0 === c5) {
            c7 = 3;
            throw tmp33;
          } else if (1 === tmp35) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function runGuarded() {
  return obj(...arguments);
}
obj = function _runGuarded() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      try {
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
            let closure_3 = tmp;
            let closure_2 = tmp2;
            closure_0 = closure_1;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj4 = { value: closure_0(), done: false };
            return obj4;
          }
        } else {
          if (1 === tmp5) {
            c4 = 0;
            closure_131_11(closure_0());
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp13) {
        if (0 === c4) {
          c6 = 3;
          throw tmp13;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AbortCodes, PlatformTypes } = Constants);
let closure_7 = NativePermissionConstants.NotificationAuthorizationStatus;
const items = [, , ];
({ USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: arr[0], TOO_MANY_USER_GUILDS: arr[1], GUILD_AT_CAPACITY: arr[2] } = AbortCodes);
let set = new Set(items);
new Set(Object.values(PlatformTypes));
const waterwheels = "waterwheels";
const result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions() {
  const useRef = react.useRef;
  set = new Set();
  let ref = useRef(set);
  return react.useCallback((type) => {
    let _location;
    function joinGuild() {
      return closure_1_14(...arguments);
    }
    ref = type;
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return joinGuild(ref.current, type.value.guild_id);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(() => {
        obj = ref(closure_2_2[8]);
        return obj.startLurking(closure_0.value.guild_id, {});
      }, () => {
        const intl = ref(closure_1_2[9]).intl;
        return intl.string(closure_1_1(closure_1_2[10]).d6U01J);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
      return runGuarded(() => {
        const provider = closure_0.value.provider;
        if (set.has(provider)) {
          obj = { platformType: provider, location: _location };
          closure_2_1(closure_2_2[12])(obj);
        }
      }, () => {
        const intl = ref(closure_1_2[9]).intl;
        return intl.string(closure_1_1(closure_1_2[10])["rdTp+3"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(() => {
        obj = ref(closure_2_2[11]);
        const obj2 = { href: closure_0.value.url };
        return obj.handleClick(obj2);
      }, () => {
        const intl = ref(closure_1_2[9]).intl;
        return intl.string(closure_1_1(closure_1_2[10])["4a9Wgk"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
      return runGuarded(requestNotifications, () => {
        const intl = ref(closure_1_2[9]).intl;
        return intl.string(closure_1_1(closure_1_2[10])["4BoMhv"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
      return Promise.resolve();
    } else {
      return Promise.resolve(type);
    }
  }, []);
}
