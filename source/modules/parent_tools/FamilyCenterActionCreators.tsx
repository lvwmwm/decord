// Module ID: 6766
// Function ID: 53096
// Name: maybeFetchCollectiblesForInvoices
// Dependencies: []
// Exports: getLinkCodeForCurrentUser, removeLinkForUserId, shareIarWithParents, updateLinkForUserId

// Module 6766 (maybeFetchCollectiblesForInvoices)
function maybeFetchCollectiblesForInvoices() {
  return _maybeFetchCollectiblesForInvoices(...arguments);
}
async function _maybeFetchCollectiblesForInvoices(arr, arg1) {
  let set;
  set = new Set();
  const item = arr.forEach((invoice_items) => {
    if (null != invoice_items.invoice_items) {
      if (invoice_items.invoice_items.length > 0) {
        const first = invoice_items.invoice_items[0];
        if (null != first.sku_id) {
          set.add(first.sku_id);
        }
      }
    }
  });
  yield Promise.all(Array.from(set).map((skuId) => set(closure_2[4]).maybeFetchCollectiblesProduct(skuId)));
}
function maybeFetchCollectiblesForGifts() {
  return _maybeFetchCollectiblesForGifts(...arguments);
}
async function _maybeFetchCollectiblesForGifts(arr, arg1) {
  let set;
  set = new Set();
  const item = arr.forEach((sku_id) => {
    if (null != sku_id.sku_id) {
      set.add(sku_id.sku_id);
    }
  });
  yield Promise.all(Array.from(set).map((skuId) => set(closure_2[4]).maybeFetchCollectiblesProduct(skuId)));
}
async function _updateLinkForUserId(linked_user_id, link_status, arg2) {
  const HTTP = callback(closure_2[6]).HTTP;
  let obj = { url: constants.FAMILY_CENTER_LINKED_USERS, body: obj };
  obj = { linked_user_id, link_status, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const obj3 = callback(closure_2[6]);
  yield HTTP.patch(obj).then((body) => {
    body = body.body;
    callback(closure_2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: body });
    return body;
  });
}
async function _removeLinkForUserId(linked_user_id, arg1) {
  const HTTP = linked_user_id(closure_2[6]).HTTP;
  let obj = { url: constants.FAMILY_CENTER_LINKED_USERS, body: obj };
  obj = { linked_user_id, rejectWithError: linked_user_id(closure_2[6]).rejectWithMigratedError() };
  const obj3 = linked_user_id(closure_2[6]);
  yield HTTP.del(obj).then((body) => {
    body = body.body;
    let obj = callback(closure_2[5]);
    obj = { type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId: body };
    obj.dispatch(obj);
    return body;
  });
}
async function _getLinkCodeForCurrentUser() {
  const HTTP = callback(closure_2[6]).HTTP;
  const obj = { url: constants.FAMILY_CENTER_LINK_CODE, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  yield value.then((body) => {
    body = body.body;
    const link_code = body.link_code;
    callback(closure_2[5]).dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: link_code, expiresAt: body.expires_at });
    return link_code;
  });
}
async function _shareIarWithParents() {
  const HTTP = callback(closure_2[6]).HTTP;
  yield HTTP.post({ url: constants.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: true });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FamilyCenterAction = arg1(dependencyMap[2]).FamilyCenterAction;
({ AnalyticEvents: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[3]));
const obj = {
  initialPageLoad() {
    return callback(async () => {
      let age_group;
      let linked_users;
      let users;
      let obj = callback2(closure_2[5]);
      obj.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
      const HTTP = callback(closure_2[6]).HTTP;
      obj = { url: constants.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
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
        yield closure_8(obj.invoices);
      }
      let tmp13 = null != obj.gifts;
      if (tmp13) {
        tmp13 = obj.gifts.length > 0;
      }
      if (tmp13) {
        yield closure_10(obj.gifts);
      }
      const obj3 = callback(closure_2[6]);
      callback2(closure_2[5]).dispatch({ type: "FAMILY_CENTER_INITIAL_LOAD", familyCenterTeenActivity: obj, linkedUsers: linked_users, users, ageGroup: age_group });
      if (tmp17) {
        const obj1 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: obj.teenId, restrictedSchedule: body.restricted_schedule };
        callback2(closure_2[5]).dispatch(obj1);
        const obj7 = callback2(closure_2[5]);
      }
      return obj;
    })();
  },
  fetchLinkedUsers() {
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: constants.FAMILY_CENTER_LINKED_USERS, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.get(obj).body;
      obj = { linkedUsers: body.linked_users, users: body.users };
      const obj2 = callback(closure_2[6]);
      obj = { type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" };
      const merged = Object.assign(obj);
      callback2(closure_2[5]).dispatch(obj);
      return obj;
    })();
  },
  getConnectionPrerequisites(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: constants.FAMILY_CENTER_CONNECTION_PREREQUISITES, query: obj, rejectWithError: true };
      obj = { teen_id: callback, link_code: closure_1 };
      return yield HTTP.get(obj).body;
    })();
  },
  setPendingConnection(teenId, linkCode) {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId, linkCode };
    obj.dispatch(obj);
  },
  clearPendingConnection() {
    importDefault(dependencyMap[5]).dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
  },
  requestLink(userId, linkCode) {
    linkCode = userId;
    const importDefault = linkCode;
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: constants.FAMILY_CENTER_LINKED_USERS, body: obj };
      obj = { recipient_id: callback, code: callback2, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.post(obj).body;
      obj = { linkedUsers: body.linked_users, users: body.users };
      const obj3 = callback(closure_2[6]);
      const merged = Object.assign(obj);
      callback2(closure_2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" });
      return obj;
    })();
  },
  fetchTeenActivity(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      let obj = callback2(closure_2[5]);
      obj.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
      const result = closure_7.FAMILY_CENTER_TEEN_ACTIVITY(callback);
      const HTTP = callback(closure_2[6]).HTTP;
      obj = { url: result, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
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
        yield closure_8(obj.invoices);
      }
      gifts = obj.gifts;
      if (gifts) {
        gifts = obj.gifts.length > 0;
      }
      if (gifts) {
        yield closure_10(obj.gifts);
      }
      const obj3 = callback(closure_2[6]);
      callback2(closure_2[5]).dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: obj });
      if (null != body.restricted_schedule) {
        const obj1 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: callback, restrictedSchedule: body.restricted_schedule };
        callback2(closure_2[5]).dispatch(obj1);
        const obj6 = callback2(closure_2[5]);
      }
      return obj;
    })();
  },
  fetchMoreTeenActivity(selectedTeenId, arg1, startId, event_id) {
    arg1 = selectedTeenId;
    const importDefault = arg1;
    const dependencyMap = startId;
    const callback = event_id;
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: closure_7.FAMILY_CENTER_TEEN_ACTIVITY_MORE(callback, callback2, closure_2, closure_3), rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
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
      const obj2 = callback(closure_2[6]);
      obj = { action: LoadMore.LoadMore, selected_teen_id: callback, action_display_type: callback2 };
      callback2(closure_2[7]).track(constants.FAMILY_CENTER_ACTION, obj);
      const obj4 = callback2(closure_2[7]);
      callback2(closure_2[5]).dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: obj });
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS };
    obj.dispatch(obj);
  },
  fetchTeenSettingsAndConsents(id) {
    const arg1 = id;
    const HTTP = arg1(dependencyMap[6]).HTTP;
    const obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: arg1(dependencyMap[6]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      let consents;
      let settings;
      ({ settings, consents } = body.body);
      let obj = callback(closure_2[5]);
      obj = { type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId: body, settings, consents };
      obj.dispatch(obj);
    });
  },
  updateTeenSettings(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    return callback(async () => {
      let obj = callback(closure_2[8]);
      const protoFieldClass = obj.getProtoFieldClass(callback(closure_2[9]).PreloadedUserSettings, callback2);
      const settings = settings.getSettings(callback);
      let tmp3;
      if (null != settings) {
        tmp3 = settings[closure_1];
      }
      let obj1 = callback(closure_2[8]);
      const modifiedProto = obj1.createModifiedProto(tmp3, closure_2, protoFieldClass, callback(closure_2[9]).PreloadedUserSettings, callback2);
      if (null != modifiedProto) {
        const HTTP = callback(closure_2[6]).HTTP;
        obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS(callback) };
        obj = { settings: callback(closure_2[10]).protoToB64(callback(closure_2[9]).PreloadedUserSettings, modifiedProto) };
        obj.body = obj;
        const obj7 = callback(closure_2[10]);
        obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
        const obj8 = callback(closure_2[6]);
        obj1 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: callback, settings: yield HTTP.patch(obj).body.settings };
        callback2(closure_2[5]).dispatch(obj1);
        const obj3 = callback2(closure_2[5]);
      }
    })();
  },
  updateTeenConsents(selectedTeenId, items1, items2) {
    items1 = selectedTeenId;
    const HTTP = items1(dependencyMap[6]).HTTP;
    let obj = { url: closure_7.FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId), body: obj };
    obj = { grant: items1, revoke: items2, rejectWithError: items1(dependencyMap[6]).rejectWithMigratedError() };
    const obj3 = items1(dependencyMap[6]);
    return HTTP.patch(obj).then((body) => {
      let obj = callback(closure_2[5]);
      obj = { type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: body, consents: body.body };
      obj.dispatch(obj);
    });
  }
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default obj;
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
