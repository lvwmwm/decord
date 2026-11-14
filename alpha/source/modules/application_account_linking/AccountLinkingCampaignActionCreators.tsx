// Module ID: 19836
// Function ID: 19837
// Name: AccountLinkingCampaignActionCreators
// Dependencies: [5, 1388, 19831, 7920, 16217, 1285, 572, 2]
// Exports: dismissAccountLinkingCampaign, fetchAccountLinkingCampaignDetectableApps, fetchAccountLinkingCampaigns

// Module 19836 (AccountLinkingCampaignActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import ApplicationAccountLinkingConstants from "ApplicationAccountLinkingConstants" /* 7920 */;
import LocalAppDetectionTypes from "LocalAppDetectionTypes" /* 16217 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1388 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;
import size from "module_2" /* 2 */;

let c7, c8, closure_4;

function toDetectableAppName(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (set.has(arg0)) {
      tmp = arg0;
    }
  }
  return tmp;
}
function toAccountLinkingCampaign(campaignId) {
  let num;
  let target_type_2_detectable_app_name;
  let tmp;
  obj = { campaignId: campaignId.campaign_id, applicationId: campaignId.application_id, orbCount: campaignId.orb_count, endAtUnixS: num, targetType1Eligible: null, targetType2DetectableAppName: tmp };
  num = campaignId.end_at_unix_s;
  if (num == null) {
    num = 0;
  }
  ({ target_type_1_eligible: obj.targetType1Eligible, target_type_2_detectable_app_name } = campaignId);
  tmp = null;
  if (null != target_type_2_detectable_app_name) {
    tmp = null;
    if (set.has(target_type_2_detectable_app_name)) {
      tmp = target_type_2_detectable_app_name;
    }
  }
  return obj;
}
function retryAfterMs(retryAfter) {
  if (null != retryAfter) {
    if (typeof retryAfter === "object") {
      if ("retryAfter" in retryAfter) {
        retryAfter = retryAfter.retryAfter;
        if (typeof retryAfter === "number") {
          const _Number = Number;
          if (Number.isFinite(retryAfter)) {
            if (retryAfter > 0) {
              return 1000 * retryAfter;
            }
          }
        }
      }
    }
  }
  return 0;
}
let obj = function _fetchAccountLinkingCampaignDetectableApps() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        let closure_2;
        let closure_1;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            closure_2 = tmp4;
            closure_1 = undefined;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.ACCOUNT_LINKING_CAMPAIGN_DETECTABLE_APPS, rejectWithError: true };
            c6 = 2;
            c7 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_2 = closure_4;
          if (closure_0 != null) {
            tmp14(closure_131_10(closure_2));
          }
          c7 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = value;
          const body = closure_1.body;
          let detectable_apps;
          if (body != null) {
            detectable_apps = body.detectable_apps;
          }
          closure_1 = detectable_apps;
          if (detectable_apps == null) {
            closure_1 = [];
          }
          const mapped = closure_1.map(closure_131_8);
          c5 = 0;
          c7 = 3;
          obj = { value: mapped.filter((item) => null != item), done: true };
          return obj;
        }
      } catch (tmp24) {
        closure_4 = tmp24;
        if (0 === c5) {
          c7 = 3;
          throw tmp24;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchAccountLinkingCampaigns() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_5;
    let keys;
    let keys1;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c8 === 2) {
      c8 = 3;
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
      let tmp33;
      let c6;
      try {
        let body;
        let sessionGeneration;
        let obj4;
        let id;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            body = tmp;
            sessionGeneration = tmp4;
            closure_1 = undefined;
            obj4 = closure_0;
            if (closure_0 === undefined) {
              obj4 = {};
            }
            id = undefined;
            sessionGeneration = undefined;
            body = undefined;
            tmp33 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const currentUser = closure_132_4.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            sessionGeneration = closure_132_5.getSessionGeneration();
            if (null == id) {
              c8 = 3;
              return { value: null, done: true };
            } else {
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[5]).HTTP;
              const request = { url: closure_132_6.ACCOUNT_LINKING_CAMPAIGNS, query: obj6, rejectWithError: true };
              obj6 = { installed_detectable_apps: keys.filter((item) => true === closure_1_0[item]), not_installed_detectable_apps: keys1.filter((item) => false === closure_1_0[item]) };
              const _Object = Object;
              const get = HTTP.get;
              keys = Object.keys(obj4);
              const _Object2 = Object;
              keys1 = Object.keys(obj4);
              c7 = 3;
              c8 = 1;
              const obj7 = { value: get(request), done: false };
              return obj7;
            }
          }
        } else if (2 === c7) {
          c6 = 0;
          closure_6 = tmp33;
          if (closure_1 != null) {
            tmp21(closure_132_10(closure_6));
          }
          c8 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value;
          const currentUser1 = closure_132_4.getCurrentUser();
          let id1;
          if (currentUser1 != null) {
            id1 = currentUser1.id;
          }
          if (id1 === id) {
            if (closure_132_5.getSessionGeneration() === sessionGeneration) {
              body = body.body;
              let campaigns;
              if (body != null) {
                campaigns = body.campaigns;
              }
              let closure_2 = campaigns;
              if (campaigns == null) {
                closure_2 = [];
              }
              tmp33 = closure_2.map(closure_132_9);
              const obj9 = { type: "ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS", campaigns: tmp33, sessionGeneration };
              obj = closure_132_1(closure_132_2[6]);
              obj.dispatch(obj9);
              c6 = 0;
              c8 = 3;
              const obj10 = { value: tmp33, done: true };
              return obj10;
            }
          }
          c6 = 0;
          c8 = 3;
          return { value: null, done: true };
        }
      } catch (tmp33) {
        if (0 === c6) {
          c8 = 3;
          throw tmp33;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_6 = ApplicationAccountLinkingConstants.AccountLinkingCampaignEndpoints;
const set = new Set(Object.values(LocalAppDetectionTypes.DetectableAppNames));
const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingCampaignActionCreators.tsx");

export function fetchAccountLinkingCampaignDetectableApps() {
  return obj(...arguments);
}
export function fetchAccountLinkingCampaigns() {
  return obj(...arguments);
}
export function dismissAccountLinkingCampaign(campaignId) {
  obj = DispatcherDefault;
  const obj2 = { type: "ACCOUNT_LINKING_CAMPAIGN_DISMISS", campaignId };
  obj.dispatch(obj2);
  const HTTP = HTTPUtils.HTTP;
  const obj3 = { url: closure_6.ACCOUNT_LINKING_CAMPAIGN_DISMISS(campaignId), rejectWithError: false };
  HTTP.post(obj3);
}
