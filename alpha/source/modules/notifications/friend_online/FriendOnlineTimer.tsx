// Module ID: 20083
// Function ID: 20084
// Name: FriendOnlineTimer
// Dependencies: [5, 502, 6920, 20084, 1071, 1082, 1088, 1284, 1241, 572, 7484, 4738, 2]

// Module 20083 (FriendOnlineTimer)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 1082 */;
import DurationsDefault from "Durations" /* 1088 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import UserSettings from "UserSettings" /* 4738 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6920 */;
import FriendOnlineTimerStore from "FriendOnlineTimerStore" /* 20084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _reportSessionMeaningfullyOnline() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let status;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            status = tmp4;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.USER_MEANINGFULLY_ONLINE, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.post(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            status = closure_2;
            const obj7 = { tags: { app_context: "session_timer" } };
            const obj3 = closure_129_1(closure_129_2[8]);
            obj3.captureException(status, obj7);
            c5 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          const obj9 = { type: "FRIEND_ONLINE_TIMER_REPORTED", timestampMs: Date.now() };
          const _Date = Date;
          const dispatch = closure_129_1(closure_129_2[9]).dispatch;
          const tmp17 = closure_129_1(closure_129_2[9]);
          dispatch(obj9);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        closure_2 = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const StatusTypes = Constants2.StatusTypes;
let closure_9 = 5 * DurationsDefault.Millis.MINUTE;
class FriendOnlineTimerManager extends AutomaticLifecycleManager {
  constructor() {
    let authenticated;
    let cooldownElapsed;
    let status;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.timerId = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.start();
      },
      CONNECTION_RESUMED() {
        return require.start();
      },
      CONNECTION_CLOSED() {
        return require.clear();
      },
      CONNECTION_INTERRUPTED() {
        return require.clear();
      },
      LOGOUT() {
        return require.clear();
      },
      SELF_PRESENCE_STORE_UPDATE() {
        return require.start();
      }
    };
    applyArgumentsResult.start = function start() {
      let isAuthenticatedResult = AuthenticationStore.isAuthenticated();
      if (isAuthenticatedResult) {
        const NotifyFriendsOnComeOnline = UserSettings.NotifyFriendsOnComeOnline;
        isAuthenticatedResult = NotifyFriendsOnComeOnline.getSetting();
      }
      if (isAuthenticatedResult) {
        isAuthenticatedResult = FriendOnlineTimerStore.isCooldownElapsed();
      }
      if (isAuthenticatedResult) {
        isAuthenticatedResult = null == require.timerId;
      }
      if (isAuthenticatedResult) {
        let items = [, ];
        ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
        isAuthenticatedResult = items.includes(SelfPresenceStore.getStatus());
      }
      if (isAuthenticatedResult) {
        const _setTimeout = setTimeout;
        require.timerId = setTimeout(() => {
          function reportSessionMeaningfullyOnline() {
            return closure_1_10(...arguments);
          }
          closure_1_0.timerId = null;
          let isAuthenticatedResult = authenticated.isAuthenticated();
          if (isAuthenticatedResult) {
            const items = [, ];
            ({ ONLINE: arr[0], STREAMING: arr[1] } = StatusTypes);
            isAuthenticatedResult = items.includes(status.getStatus());
          }
          if (isAuthenticatedResult) {
            isAuthenticatedResult = cooldownElapsed.isCooldownElapsed();
          }
          if (isAuthenticatedResult) {
            reportSessionMeaningfullyOnline();
          }
        }, closure_9);
      }
    };
    applyArgumentsResult.clear = function clear() {
      if (null != require.timerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(require.timerId);
        require.timerId = null;
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {

  }
  _terminate() {
    this.clear();
  }
}
const prototype = FriendOnlineTimerManager.prototype;
const friendOnlineTimerManager = new FriendOnlineTimerManager();
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimer.tsx");

export default friendOnlineTimerManager;
