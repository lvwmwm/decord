// Module ID: 6771
// Function ID: 53147
// Name: maybeFetchCollectiblesForInvoices
// Dependencies: [5, 6772, 6770, 653, 6773, 686, 507, 675, 1332, 1282, 1318, 2]
// Exports: getLinkCodeForCurrentUser, removeLinkForUserId, shareIarWithParents, updateLinkForUserId

// Module 6771 (maybeFetchCollectiblesForInvoices)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FamilyCenterAction } from "items";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
function maybeFetchCollectiblesForInvoices() {
  return _maybeFetchCollectiblesForInvoices(...arguments);
}
async function _maybeFetchCollectiblesForInvoices(arg0, arg1) {
  let set;
  set = new Set();
  const item = arg0.forEach((invoice_items) => {
    if (null != invoice_items.invoice_items) {
      if (invoice_items.invoice_items.length > 0) {
        const first = invoice_items.invoice_items[0];
        if (null != first.sku_id) {
          set.add(first.sku_id);
        }
      }
    }
  });
  yield Promise.all(Array.from(set).map((skuId) => outer3_0(outer3_2[4]).maybeFetchCollectiblesProduct(skuId)));
}
function maybeFetchCollectiblesForGifts() {
  return _maybeFetchCollectiblesForGifts(...arguments);
}
async function _maybeFetchCollectiblesForGifts(arg0, arg1) {
  let set;
  set = new Set();
  const item = arg0.forEach((sku_id) => {
    if (null != sku_id.sku_id) {
      set.add(sku_id.sku_id);
    }
  });
  yield Promise.all(Array.from(set).map((skuId) => outer3_0(outer3_2[4]).maybeFetchCollectiblesProduct(skuId)));
}
async function _updateLinkForUserId(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_7.FAMILY_CENTER_LINKED_USERS, body: obj };
  obj = { linked_user_id: arg0, link_status: arg1, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const obj3 = outer2_0(outer2_2[6]);
  yield HTTP.patch(obj).then((body) => {
    body = body.body;
    outer3_1(outer3_2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: body });
    return body;
  });
}
async function _removeLinkForUserId(arg0, arg1) {
  let closure_0 = arg0;
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_7.FAMILY_CENTER_LINKED_USERS, body: obj };
  obj = { linked_user_id: arg0, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const obj3 = outer2_0(outer2_2[6]);
  yield HTTP.del(obj).then((body) => {
    body = body.body;
    let obj = outer3_1(outer3_2[5]);
    obj = { type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId: closure_0 };
    obj.dispatch(obj);
    return body;
  });
}
async function _getLinkCodeForCurrentUser() {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  const obj = { url: outer2_7.FAMILY_CENTER_LINK_CODE, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  yield value.then((body) => {
    body = body.body;
    const link_code = body.link_code;
    outer3_1(outer3_2[5]).dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: link_code, expiresAt: body.expires_at });
    return link_code;
  });
}
async function _shareIarWithParents() {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  yield HTTP.post({ url: outer2_7.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: true });
}
({ AnalyticEvents: closure_6, Endpoints: closure_7 } = ME);
let result = require("items").fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default {
  initialPageLoad() {
    return callback(async () => {
      let age_group;
      let linked_users;
      let users;
      let obj = outer2_1(outer2_2[5]);
      obj.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
      const HTTP = outer2_0(outer2_2[6]).HTTP;
      obj = { url: outer2_7.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.get(obj).body;
      const teen_audit_log = body.teen_audit_log;
      obj = {};
      let teen_user_id;
      ({ linked_users, users, age_group } = body);
      if (null != teen_audit_log) {
        teen_user_id = teen_audit_log.teen_user_id;
      }
      obj.teenId = teen_user_id;
      let range_start_id;
      if (null != teen_audit_log) {
        range_start_id = teen_audit_log.range_start_id;
      }
      obj.rangeStartId = range_start_id;
      let totals;
      if (null != teen_audit_log) {
        totals = teen_audit_log.totals;
      }
      if (null == totals) {
        totals = {};
      }
      obj.totals = totals;
      let actions;
      if (null != teen_audit_log) {
        actions = teen_audit_log.actions;
      }
      if (null == actions) {
        actions = [];
      }
      obj.actions = actions;
      users = undefined;
      if (null != teen_audit_log) {
        users = teen_audit_log.users;
      }
      if (null == users) {
        users = [];
      }
      obj.users = users;
      let guilds;
      if (null != teen_audit_log) {
        guilds = teen_audit_log.guilds;
      }
      if (null == guilds) {
        guilds = [];
      }
      obj.guilds = guilds;
      let top_user_activities;
      if (null != teen_audit_log) {
        top_user_activities = teen_audit_log.top_user_activities;
      }
      if (null == top_user_activities) {
        top_user_activities = [];
      }
      obj.topUserActivities = top_user_activities;
      let top_guild_activities;
      if (null != teen_audit_log) {
        top_guild_activities = teen_audit_log.top_guild_activities;
      }
      if (null == top_guild_activities) {
        top_guild_activities = [];
      }
      obj.topGuildActivities = top_guild_activities;
      let amount;
      if (null != teen_audit_log) {
        const total_spend = teen_audit_log.total_spend;
        if (null != total_spend) {
          amount = total_spend.amount;
        }
      }
      let tmp5 = null;
      if (null != amount) {
        tmp5 = amount;
      }
      obj.totalSpendAmount = tmp5;
      let currency;
      if (null != teen_audit_log) {
        const total_spend2 = teen_audit_log.total_spend;
        if (null != total_spend2) {
          currency = total_spend2.currency;
        }
      }
      let tmp7 = null;
      if (null != currency) {
        tmp7 = currency;
      }
      obj.totalSpendCurrency = tmp7;
      const spending_limit = body.spending_limit;
      let tmp8 = null;
      if (null != spending_limit) {
        tmp8 = spending_limit;
      }
      obj.spendingLimit = tmp8;
      const monthly_purchases = body.monthly_purchases;
      let tmp9 = null;
      if (null != monthly_purchases) {
        tmp9 = monthly_purchases;
      }
      obj.monthlyPurchases = tmp9;
      let invoices;
      if (null != teen_audit_log) {
        invoices = teen_audit_log.invoices;
      }
      if (null == invoices) {
        invoices = [];
      }
      obj.invoices = invoices;
      let gifts;
      if (null != teen_audit_log) {
        gifts = teen_audit_log.gifts;
      }
      if (null == gifts) {
        gifts = [];
      }
      obj.gifts = gifts;
      let tmp10 = null != obj.invoices;
      if (tmp10) {
        tmp10 = obj.invoices.length > 0;
      }
      if (tmp10) {
        yield outer2_8(obj.invoices);
      }
      let tmp13 = null != obj.gifts;
      if (tmp13) {
        tmp13 = obj.gifts.length > 0;
      }
      if (tmp13) {
        yield outer2_10(obj.gifts);
      }
      const obj3 = outer2_0(outer2_2[6]);
      outer2_1(outer2_2[5]).dispatch({ type: "FAMILY_CENTER_INITIAL_LOAD", familyCenterTeenActivity: obj, linkedUsers: linked_users, users, ageGroup: age_group });
      if (tmp17) {
        const obj1 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: obj.teenId, restrictedSchedule: body.restricted_schedule };
        outer2_1(outer2_2[5]).dispatch(obj1);
        const obj7 = outer2_1(outer2_2[5]);
      }
      return obj;
    })();
  },
  fetchLinkedUsers() {
    return callback(async () => {
      const HTTP = outer2_0(outer2_2[6]).HTTP;
      let obj = { url: outer2_7.FAMILY_CENTER_LINKED_USERS, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.get(obj).body;
      obj = { linkedUsers: body.linked_users, users: body.users };
      const obj2 = outer2_0(outer2_2[6]);
      obj = { type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" };
      const merged = Object.assign(obj);
      outer2_1(outer2_2[5]).dispatch(obj);
      return obj;
    })();
  },
  getConnectionPrerequisites(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(async () => {
      const HTTP = callback(outer2_2[6]).HTTP;
      obj = { url: outer2_7.FAMILY_CENTER_CONNECTION_PREREQUISITES, query: obj, rejectWithError: true };
      obj = { teen_id: outer1_0, link_code: outer1_1 };
      return yield HTTP.get(obj).body;
    })();
  },
  setPendingConnection(teenId, linkCode) {
    let obj = importDefault(686);
    obj = { type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId, linkCode };
    obj.dispatch(obj);
  },
  clearPendingConnection() {
    importDefault(686).dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
  },
  requestLink(userId, linkCode) {
    let closure_0 = userId;
    let closure_1 = linkCode;
    return callback(async () => {
      const HTTP = callback(outer2_2[6]).HTTP;
      obj = { url: outer2_7.FAMILY_CENTER_LINKED_USERS, body: obj };
      obj = { recipient_id: outer1_0, code: outer1_1, rejectWithError: callback(outer2_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.post(obj).body;
      obj = { linkedUsers: body.linked_users, users: body.users };
      const obj3 = callback(outer2_2[6]);
      const merged = Object.assign(obj);
      callback2(outer2_2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" });
      return obj;
    })();
  },
  fetchTeenActivity(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let obj = outer2_1(outer2_2[5]);
      obj.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
      const result = outer2_7.FAMILY_CENTER_TEEN_ACTIVITY(outer1_0);
      const HTTP = callback(outer2_2[6]).HTTP;
      obj = { url: result, rejectWithError: callback(outer2_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.get(obj).body;
      const teen_audit_log = body.teen_audit_log;
      obj = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, totals: teen_audit_log.totals, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds };
      let top_user_activities = teen_audit_log.top_user_activities;
      if (null == top_user_activities) {
        top_user_activities = [];
      }
      obj.topUserActivities = top_user_activities;
      let top_guild_activities = teen_audit_log.top_guild_activities;
      if (null == top_guild_activities) {
        top_guild_activities = [];
      }
      obj.topGuildActivities = top_guild_activities;
      let amount;
      if (null != teen_audit_log) {
        const total_spend = teen_audit_log.total_spend;
        if (null != total_spend) {
          amount = total_spend.amount;
        }
      }
      let tmp4 = null;
      if (null != amount) {
        tmp4 = amount;
      }
      obj.totalSpendAmount = tmp4;
      let currency;
      if (null != teen_audit_log) {
        const total_spend2 = teen_audit_log.total_spend;
        if (null != total_spend2) {
          currency = total_spend2.currency;
        }
      }
      let tmp6 = null;
      if (null != currency) {
        tmp6 = currency;
      }
      obj.totalSpendCurrency = tmp6;
      const spending_limit = body.spending_limit;
      let tmp7 = null;
      if (null != spending_limit) {
        tmp7 = spending_limit;
      }
      obj.spendingLimit = tmp7;
      const monthly_purchases = body.monthly_purchases;
      let tmp8 = null;
      if (null != monthly_purchases) {
        tmp8 = monthly_purchases;
      }
      obj.monthlyPurchases = tmp8;
      let invoices;
      if (null != teen_audit_log) {
        invoices = teen_audit_log.invoices;
      }
      if (null == invoices) {
        invoices = [];
      }
      obj.invoices = invoices;
      let gifts;
      if (null != teen_audit_log) {
        gifts = teen_audit_log.gifts;
      }
      if (null == gifts) {
        gifts = [];
      }
      obj.gifts = gifts;
      invoices = obj.invoices;
      if (invoices) {
        invoices = obj.invoices.length > 0;
      }
      if (invoices) {
        yield outer2_8(obj.invoices);
      }
      gifts = obj.gifts;
      if (gifts) {
        gifts = obj.gifts.length > 0;
      }
      if (gifts) {
        yield outer2_10(obj.gifts);
      }
      const obj3 = callback(outer2_2[6]);
      outer2_1(outer2_2[5]).dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: obj });
      if (null != body.restricted_schedule) {
        const obj1 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: outer1_0, restrictedSchedule: body.restricted_schedule };
        outer2_1(outer2_2[5]).dispatch(obj1);
        const obj6 = outer2_1(outer2_2[5]);
      }
      return obj;
    })();
  },
  fetchMoreTeenActivity(selectedTeenId, arg1, startId, event_id) {
    let closure_0 = selectedTeenId;
    let closure_1 = arg1;
    let closure_2 = startId;
    const callback = event_id;
    return callback(async () => {
      const HTTP = callback(507).HTTP;
      let obj = { url: outer2_7.FAMILY_CENTER_TEEN_ACTIVITY_MORE(outer1_0, outer1_1, outer1_2, outer1_3), rejectWithError: callback(507).rejectWithMigratedError() };
      const teen_audit_log = yield HTTP.get(obj).body.teen_audit_log;
      obj = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds };
      let top_user_activities = teen_audit_log.top_user_activities;
      if (null == top_user_activities) {
        top_user_activities = [];
      }
      obj.topUserActivities = top_user_activities;
      let top_guild_activities = teen_audit_log.top_guild_activities;
      if (null == top_guild_activities) {
        top_guild_activities = [];
      }
      obj.topGuildActivities = top_guild_activities;
      let amount;
      if (null != teen_audit_log) {
        const total_spend = teen_audit_log.total_spend;
        if (null != total_spend) {
          amount = total_spend.amount;
        }
      }
      let tmp2 = null;
      if (null != amount) {
        tmp2 = amount;
      }
      obj.totalSpendAmount = tmp2;
      let currency;
      if (null != teen_audit_log) {
        const total_spend2 = teen_audit_log.total_spend;
        if (null != total_spend2) {
          currency = total_spend2.currency;
        }
      }
      let tmp4 = null;
      if (null != currency) {
        tmp4 = currency;
      }
      obj.totalSpendCurrency = tmp4;
      let invoices;
      if (null != teen_audit_log) {
        invoices = teen_audit_log.invoices;
      }
      if (null == invoices) {
        invoices = [];
      }
      obj.invoices = invoices;
      let gifts;
      if (null != teen_audit_log) {
        gifts = teen_audit_log.gifts;
      }
      if (null == gifts) {
        gifts = [];
      }
      obj.gifts = gifts;
      const obj2 = callback(507);
      obj = { action: outer2_5.LoadMore, selected_teen_id: outer1_0, action_display_type: outer1_1 };
      callback2(675).track(outer2_6.FAMILY_CENTER_ACTION, obj);
      const obj4 = callback2(675);
      callback2(686).dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: obj });
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    let obj = importDefault(686);
    obj = { type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS };
    obj.dispatch(obj);
  },
  fetchTeenSettingsAndConsents(id) {
    const _require = id;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: _require(507).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      let consents;
      let settings;
      ({ settings, consents } = body.body);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId: closure_0, settings, consents };
      obj.dispatch(obj);
    });
  },
  updateTeenSettings(arg0, closure_0, arg2) {
    closure_0 = arg0;
    let closure_1 = closure_0;
    let closure_2 = arg2;
    return callback(async () => {
      let obj = callback(1332);
      const protoFieldClass = obj.getProtoFieldClass(callback(1282).PreloadedUserSettings, outer1_1);
      const settings = outer2_4.getSettings(outer1_0);
      let tmp3;
      if (null != settings) {
        tmp3 = settings[outer1_1];
      }
      let obj1 = callback(1332);
      const modifiedProto = obj1.createModifiedProto(tmp3, outer1_2, protoFieldClass, callback(1282).PreloadedUserSettings, outer1_1);
      if (null != modifiedProto) {
        const HTTP = callback(507).HTTP;
        obj = { url: outer2_7.FAMILY_CENTER_TEEN_SETTINGS(outer1_0) };
        obj = { settings: callback(1318).protoToB64(callback(1282).PreloadedUserSettings, modifiedProto) };
        obj.body = obj;
        const obj7 = callback(1318);
        obj.rejectWithError = callback(507).rejectWithMigratedError();
        const obj8 = callback(507);
        obj1 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: outer1_0, settings: yield HTTP.patch(obj).body.settings };
        callback2(686).dispatch(obj1);
        const obj3 = callback2(686);
      }
    })();
  },
  updateTeenConsents(selectedTeenId, items1, items2) {
    const _require = selectedTeenId;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_7.FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId), body: obj };
    obj = { grant: items1, revoke: items2, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.patch(obj).then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: closure_0, consents: body.body };
      obj.dispatch(obj);
    });
  }
};
export const updateLinkForUserId = function updateLinkForUserId(arg0, ACTIVE) {
  return _updateLinkForUserId(...arguments);
};
export const removeLinkForUserId = function removeLinkForUserId(arg0) {
  return _removeLinkForUserId(...arguments);
};
export const getLinkCodeForCurrentUser = function getLinkCodeForCurrentUser() {
  return _getLinkCodeForCurrentUser(...arguments);
};
export const shareIarWithParents = function shareIarWithParents() {
  return _shareIarWithParents(...arguments);
};
