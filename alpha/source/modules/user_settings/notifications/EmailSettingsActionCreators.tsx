// Module ID: 17762
// Function ID: 17763
// Name: EmailSettingsActionCreators
// Dependencies: [5, 15884, 17763, 1072, 6885, 1260, 5004, 572, 17764, 2]
// Exports: fetchEmailSettings, updateEmailSetting, updateMarketingEmailSettings

// Module 17762 (EmailSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6885 */;
import EmailSettingsConstants from "EmailSettingsConstants" /* 17763 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15884 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4;

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
        obj = closure_1_0(closure_1_2[6]);
        return obj.exact({ initialized });
      }
    };
    const get = TrackedHTTPUtilsDefault.get;
    await get(obj4);
    const obj5 = closure_129_1(closure_129_2[7]);
    obj5.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
    let closure_0 = await "HermesInternal";
    obj = closure_129_1(closure_129_2[7]);
    const obj9 = { type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: closure_0.body };
    obj.dispatch(obj9);
    return closure_0.body;
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
              const obj4 = closure_131_1(closure_131_2[7]);
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
              obj = closure_131_1(closure_131_2[7]);
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
            const obj4 = closure_129_1(closure_129_2[7]);
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
            obj = closure_129_1(closure_129_2[7]);
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
