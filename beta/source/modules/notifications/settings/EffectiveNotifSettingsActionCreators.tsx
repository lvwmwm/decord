// Module ID: 18336
// Function ID: 18337
// Name: EffectiveNotifSettingsActionCreators
// Dependencies: [5, 502, 15889, 1072, 559, 15903, 572, 1282, 15892, 2]
// Exports: cancelEffectiveNotifSettingsRetry, retryEffectiveNotifSettings

// Module 18336 (EffectiveNotifSettingsActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 15903 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15889 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, id, sum;

function scheduleRetry() {
  obj = closure_8;
  if (closure_8.fails < 5) {
    obj.fail(() => {
      closure_1_8.cancel();
      fetchEffectiveNotifSettings();
    });
  }
}
function fetchEffectiveNotifSettings() {
  return obj(...arguments);
}
let obj = function _fetchEffectiveNotifSettings() {
  obj = _asyncToGenerator(async function(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let requestId;
        let body;
        let snapshot;
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
            let closure_0 = tmp4;
            id = undefined;
            requestId = undefined;
            body = undefined;
            snapshot = undefined;
            const obj14 = DeclarativeNotificationSettingsRedesignExperiment;
            if (obj14.isDeclarativeNotificationSettingsRedesignEnabled("fetchEffectiveNotifSettings")) {
              id = id.getId();
              if (null != id) {
                if (!NotifSettingsProtoStore.isApplyingEdit) {
                  if (!closure_2_8.pending) {
                    if (closure_2_8.fails < 5) {
                      sum = sum + 1;
                      requestId = sum;
                      const obj6 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_START", requestId: sum };
                      const obj7 = DispatcherDefault;
                      obj7.dispatch(obj6);
                      c3 = 2;
                      const HTTP = HTTPUtils.HTTP;
                      const obj8 = { url: "" + constants.ACCOUNT_NOTIFICATION_SETTINGS + "/effective", rejectWithError: true };
                      const _HermesInternal = HermesInternal;
                      const get = HTTP.get;
                      c4 = 3;
                      c5 = 1;
                      const obj9 = { value: get(obj8), done: false };
                      return obj9;
                    }
                  }
                }
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const tmp64 = closure_2;
          if (c3 === requestId) {
            c3 = undefined;
          }
          throw tmp64;
        } else {
          if (2 === c4) {
            c3 = 1;
            if (closure_129_6.ownsEffectiveRequest(requestId)) {
              const obj10 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_FAILURE", requestId };
              const obj5 = closure_129_1(closure_129_2[6]);
              obj5.dispatch(obj10);
              closure_129_10();
            } else {
              c3 = 0;
              if (c3 === requestId) {
                c3 = undefined;
              }
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (c3 === requestId) {
              c3 = undefined;
            }
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            body = value.body;
            if (closure_129_6.ownsEffectiveRequest(requestId)) {
              if (id.getId() === id) {
                const obj13 = closure_129_0(closure_129_2[5]);
                if (obj13.isDeclarativeNotificationSettingsRedesignEnabled("effectiveNotifSettingsResponse")) {
                  obj = closure_129_0(closure_129_2[8]);
                  snapshot = obj.parseEffectiveNotifSettings(body);
                  if (null != snapshot) {
                    if (snapshot.account_id === id) {
                      const obj12 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_SUCCESS", requestId, snapshot };
                      const obj2 = closure_129_1(closure_129_2[6]);
                      obj2.dispatch(obj12);
                      if (closure_129_6.hasValidEffectiveSettings) {
                        closure_129_8.succeed();
                      } else {
                        closure_129_10();
                      }
                      c3 = 1;
                    }
                  }
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = new Error("Invalid effective notification settings response");
                  throw error;
                }
              }
              c3 = 0;
              if (c3 === requestId) {
                c3 = undefined;
              }
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              c3 = 0;
              if (c3 === requestId) {
                c3 = undefined;
              }
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
          c3 = 0;
          if (c3 === requestId) {
            c3 = undefined;
          }
        }
        c5 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp82) {
        closure_2 = tmp82;
        if (0 === c3) {
          c5 = 3;
          throw tmp82;
        } else if (1 === tmp84) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_8 = new BackoffDefault(1000, 60000);
let c9 = 0;
const tmp2 = new BackoffDefault(1000, 60000);
const result = size.fileFinishedImporting("modules/notifications/settings/EffectiveNotifSettingsActionCreators.tsx");

export function cancelEffectiveNotifSettingsRetry() {
  closure_8.succeed();
}
export function retryEffectiveNotifSettings() {
  closure_8.succeed();
  return fetchEffectiveNotifSettings();
}
export { fetchEffectiveNotifSettings };
