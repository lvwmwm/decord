// Module ID: 17735
// Function ID: 17736
// Name: EmailSettingsActionCreators
// Dependencies: [5, 17736, 1072, 6882, 1260, 5002, 572, 2]
// Exports: fetchEmailSettings, updateEmailSetting, updateMarketingEmailSettings

// Module 17735 (EmailSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6882 */;
import EmailSettingsConstants from "EmailSettingsConstants" /* 17736 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let category, closure_3, closure_4;

let obj = function _fetchEmailSettings() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let c4;
    let closure_1;
    let obj6;
    const obj4 = { url: constants.EMAIL_SETTINGS, trackedActionData: obj6, rejectWithError: true };
    obj6 = {
      event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_FETCH,
      properties(body) {
        let initialized;
        if (body != null) {
          body = body.body;
          if (body != null) {
            initialized = body.initialized;
          }
        }
        obj = closure_1_0(closure_1_2[5]);
        return obj.exact({ initialized });
      }
    };
    const get = TrackedHTTPUtilsDefault.get;
    await get(obj4);
    const obj5 = closure_129_1(closure_129_2[6]);
    obj5.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
    let closure_0 = await "HermesInternal";
    obj = closure_129_1(closure_129_2[6]);
    const obj9 = { type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: closure_0.body };
    obj.dispatch(obj9);
    return closure_0.body;
  });
  return obj(...arguments);
};
obj = function _updateEmailSetting() {
  obj = _asyncToGenerator(async (category, value) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj10;
      let obj11;
      let obj12;
      let obj6;
      let obj7;
      let obj9;
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
              category = undefined;
              const obj5 = { type: "EMAIL_SETTINGS_UPDATE", updates: obj6 };
              obj6 = {};
              obj6[category] = value;
              const obj8 = DispatcherDefault;
              obj8.dispatch(obj5);
              c5 = 1;
              const request = { url: constants.EMAIL_SETTINGS, body: obj7, trackedActionData: obj11, rejectWithError: true };
              obj7 = { settings: obj9 };
              obj9 = { categories: obj10 };
              obj10 = {};
              obj10[category] = value;
              obj11 = { event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE, properties: obj12 };
              const patch = TrackedHTTPUtilsDefault.patch;
              TrackedHTTPUtilsDefault;
              c6 = 2;
              c7 = 1;
              obj12 = { category, value };
              const obj13 = { value: patch(request), done: false };
              return obj13;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              const obj4 = closure_131_1(closure_131_2[6]);
              obj4.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              category = value;
              const obj15 = { type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: category.body };
              obj = closure_131_1(closure_131_2[6]);
              obj.dispatch(obj15);
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          closure_4 = tmp16;
          if (0 === c5) {
            c7 = 3;
            throw tmp16;
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
    let obj9;
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
            let closure_1 = tmp;
            body = undefined;
            const reduced = MarketingEmailCategories.reduce((acc, item) => {
              obj = {};
              const merged = Object.assign(acc);
              obj[item] = false;
              return obj;
            }, {});
            const obj5 = { type: "EMAIL_SETTINGS_UPDATE", updates: reduced };
            const obj8 = DispatcherDefault;
            obj8.dispatch(obj5);
            c3 = 1;
            const request = { url: constants.EMAIL_SETTINGS, body: obj6, trackedActionData: obj9, rejectWithError: true };
            obj6 = { settings: obj7 };
            obj7 = { categories: reduced };
            obj9 = { event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE, properties: { category: "marketing", value: false } };
            const patch = TrackedHTTPUtilsDefault.patch;
            c4 = 2;
            c5 = 1;
            const obj10 = { value: patch(request), done: false };
            return obj10;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj4 = closure_129_1(closure_129_2[6]);
            obj4.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            body = value;
            obj = closure_129_1(closure_129_2[6]);
            const obj12 = { type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: body.body };
            obj.dispatch(obj12);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        let closure_2 = tmp16;
        if (0 === c3) {
          c5 = 3;
          throw tmp16;
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
