// Module ID: 17118
// Function ID: 17119
// Name: EmailSettingsActionCreators
// Dependencies: [5, 15236, 17119, 1071, 572, 6135, 1264, 4904, 17120, 2]
// Exports: fetchEmailSettings, updateEmailSetting, updateMarketingEmailSettings

// Module 17118 (EmailSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6135 */;
import EmailSettingsConstants from "EmailSettingsConstants" /* 17119 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15236 */;
import size from "module_2" /* 2 */;

let c4, closure_3, closure_4;

let obj = function _fetchEmailSettings() {
  let isFetching;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj7;
    if (c4 === 2) {
      c4 = 3;
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
      let c2;
      try {
        let closure_0;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            if (!isFetching.isFetching) {
              const obj6 = DispatcherDefault;
              obj6.dispatch({ type: "EMAIL_SETTINGS_FETCH_START" });
              c2 = 1;
              const obj4 = { url: constants.EMAIL_SETTINGS, trackedActionData: obj7, rejectWithError: true };
              obj7 = {
                event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties(body) {
                            let initialized;
                            if (body != null) {
                              body = body.body;
                              if (body != null) {
                                initialized = body.initialized;
                              }
                            }
                            obj = closure_1_0(closure_1_2[7]);
                            return obj.exact({ initialized });
                          }
              };
              const get = TrackedHTTPUtilsDefault.get;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: get(obj4), done: false };
              return obj8;
            }
          }
        } else if (1 === c3) {
          c2 = 0;
          const obj5 = closure_129_1(closure_129_2[4]);
          obj5.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_0 = value;
          obj = closure_129_1(closure_129_2[4]);
          const obj10 = { type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: closure_0.body };
          obj.dispatch(obj10);
          c2 = 0;
          c4 = 3;
          const obj11 = { value: closure_0.body, done: true };
          return obj11;
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp25) {
        if (0 === c2) {
          c4 = 3;
          throw tmp25;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getPreviousCategories(arg0) {
  obj = {};
  const categories = EmailSettingsStore.getEmailSettings().categories;
  const keys = Object.keys(arg0);
  for (const item10014 of keys) {
    obj[item10014] = categories[item10014];
    continue;
  }
  return obj;
}
obj = function _updateEmailSetting() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj11;
      let obj12;
      let obj13;
      let obj7;
      let obj8;
      let obj9;
      let tmp9;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let previous;
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
              closure_2 = tmp9;
              previous = undefined;
              value = undefined;
              const obj5 = {};
              obj5[previous] = value;
              previous = getPreviousCategories(obj5);
              const obj6 = { type: "EMAIL_SETTINGS_UPDATE", updates: obj7 };
              obj7 = {};
              obj7[previous] = value;
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj6);
              c5 = 1;
              const request = { url: constants.EMAIL_SETTINGS, body: obj8, trackedActionData: obj12, rejectWithError: true };
              obj8 = { settings: obj9 };
              obj9 = { categories: obj11 };
              obj11 = {};
              obj11[previous] = value;
              obj12 = { event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE, properties: obj13 };
              const patch = TrackedHTTPUtilsDefault.patch;
              TrackedHTTPUtilsDefault;
              c6 = 2;
              c7 = 1;
              obj13 = { category: previous, value };
              const obj14 = { value: patch(request), done: false };
              return obj14;
            }
          } else {
            if (1 === tmp4) {
              c5 = 0;
              const obj15 = { type: "EMAIL_SETTINGS_UPDATE_FAILURE", previous };
              const obj4 = closure_131_1(closure_131_2[4]);
              obj4.dispatch(obj15);
              closure_131_1(closure_131_2[8])();
              tmp9 = closure_131_1;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              const obj17 = { type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: value.body };
              obj = closure_131_1(closure_131_2[4]);
              obj.dispatch(obj17);
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp21) {
          closure_4 = tmp21;
          if (0 === c5) {
            c7 = 3;
            throw tmp21;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updateMarketingEmailSettings() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    let obj7;
    let obj8;
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
        let body;
        let previous;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            body = undefined;
            const reduced = MarketingEmailCategories.reduce((acc, item) => {
              obj = {};
              const merged = Object.assign(acc);
              obj[item] = false;
              return obj;
            }, {});
            previous = getPreviousCategories(reduced);
            const obj5 = { type: "EMAIL_SETTINGS_UPDATE", updates: reduced };
            const obj9 = DispatcherDefault;
            obj9.dispatch(obj5);
            c3 = 1;
            const request = { url: constants.EMAIL_SETTINGS, body: obj6, trackedActionData: obj8, rejectWithError: true };
            obj6 = { settings: obj7 };
            obj7 = { categories: reduced };
            obj8 = { event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE, properties: { category: "marketing", value: false } };
            const patch = TrackedHTTPUtilsDefault.patch;
            c4 = 2;
            c5 = 1;
            const obj10 = { value: patch(request), done: false };
            return obj10;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
            const obj11 = { type: "EMAIL_SETTINGS_UPDATE_FAILURE", previous };
            const obj4 = closure_129_1(closure_129_2[4]);
            obj4.dispatch(obj11);
            closure_129_1(closure_129_2[8])();
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            body = value;
            obj = closure_129_1(closure_129_2[4]);
            const obj13 = { type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: body.body };
            obj.dispatch(obj13);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        let closure_2 = tmp21;
        if (0 === c3) {
          c5 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const MarketingEmailCategories = EmailSettingsConstants.MarketingEmailCategories;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsActionCreators.tsx");

export function fetchEmailSettings() {
  return obj(...arguments);
}
export function updateEmailSetting() {
  return obj(...arguments);
}
export function updateMarketingEmailSettings() {
  return obj(...arguments);
}
