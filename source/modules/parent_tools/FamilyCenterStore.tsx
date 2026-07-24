// Module ID: 6769
// Function ID: 53052
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 3811, 1196, 1849, 6770, 1387, 21, 6771, 6827, 6828, 2]

// Module 6769 (_isNativeReflectConstruct)
import getCountryCodeByCountryName from "getCountryCodeByCountryName";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import { getCountryCodeByAlpha2 } from "getCountryCodeByCountryName";
import closure_10 from "_isNativeReflectConstruct";
import items from "items";
import tmp4 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getDefaultSelectedTab() {
  let pathname;
  if (null != window) {
    const _location = window.location;
    if (null != _location) {
      pathname = _location.pathname;
    }
  }
  if (pathname === constants.FAMILY_CENTER_MY_FAMILY) {
    let ACTIVITY = constants2.REQUESTS;
  } else {
    let pathname1;
    if (null != window) {
      const _location2 = window.location;
      if (null != _location2) {
        pathname1 = _location2.pathname;
      }
    }
    if (pathname1 === constants.FAMILY_CENTER_SETTINGS) {
      ACTIVITY = constants2.SETTINGS;
    } else {
      ACTIVITY = constants2.ACTIVITY;
    }
  }
  return ACTIVITY;
}
function freshTeenActivityWithMap() {
  const map = new Map();
  const result = map.set(constants3.USER_ADD, new Map());
  const map1 = new Map();
  const result1 = map.set(constants3.GUILD_ADD, new Map());
  const map2 = new Map();
  const result2 = map.set(constants3.USER_INTERACTION, new Map());
  const map3 = new Map();
  const result3 = map.set(constants3.GUILD_INTERACTION, new Map());
  const map4 = new Map();
  const result4 = map.set(constants3.USER_CALLED, new Map());
  const map5 = new Map();
  const result5 = map.set(constants3.TOTAL_VOICE_MINUTES, new Map());
  const map6 = new Map();
  const result6 = map.set(constants3.PURCHASES, new Map());
  const map7 = new Map();
  const result7 = map.set(constants3.GIFTS, new Map());
  return map;
}
function freshTeenActivityTotals() {
  return { [closure_14.USER_ADD]: 0, [closure_14.GUILD_ADD]: 0, [closure_14.USER_INTERACTION]: 0, [closure_14.GUILD_INTERACTION]: 0, [closure_14.USER_CALLED]: 0, [closure_14.TOTAL_VOICE_MINUTES]: 0, [closure_14.PURCHASES]: 0, [closure_14.GIFTS]: 0 };
}
function processLinkedUsers(linkedUsers) {
  let items = linkedUsers;
  if (linkedUsers === undefined) {
    items = [];
  }
  if (items.length > 0) {
    let reduced = items.reduce((arg0, user_id) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  let c18 = true;
  return reduced;
}
function processTeenActivityTotals(totals) {
  if (undefined !== totals) {
    let closure_20 = totals;
  }
}
function processTeenActions(actions, arg1) {
  if (arg1) {
    let tmp2 = closure_19;
  } else {
    tmp2 = freshTeenActivityWithMap();
  }
  const require = tmp2;
  const item = actions.forEach((display_type) => {
    const value = tmp2.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_19 = tmp2;
  return tmp2;
}
function processGuilds(guilds) {
  closure_37 = guilds.reduce((arg0, approximate_member_count) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj = {};
    const merged1 = Object.assign(outer1_0(outer1_2[10]).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
    approximate_member_count = approximate_member_count.approximate_member_count;
    let num = 0;
    if (null != approximate_member_count) {
      num = approximate_member_count;
    }
    obj["approximateMemberCount"] = num;
    obj[approximate_member_count.id] = obj;
    return obj;
  }, closure_37);
}
function processInvoices(invoices) {
  let closure_34 = invoices.reduce((arg0, invoice_items) => {
    let sku_id;
    let subscription_plan_id;
    if (null != invoice_items.invoice_items) {
      if (invoice_items.invoice_items.length > 0) {
        ({ sku_id, subscription_plan_id } = invoice_items.invoice_items[0]);
        if (!tmp) {
          const obj = { sku_id, subscription_plan_id };
          ({ total: obj.total, currency: obj.currency } = invoice_items);
          arg0[invoice_items.id] = obj;
        }
        tmp = null == sku_id && null == subscription_plan_id;
      }
    }
    return arg0;
  }, {});
}
function processGifts(gifts) {
  let closure_35 = gifts.reduce((arg0, entitlement_id) => {
    arg0[entitlement_id.entitlement_id] = entitlement_id;
    return arg0;
  }, {});
}
function handleFetchStart() {
  let c25 = true;
}
function handleInitialLoad(linkedUsers) {
  let ageGroup;
  let c15;
  let c16;
  let familyCenterTeenActivity;
  let gifts;
  let guilds;
  let invoices;
  let monthlyPurchases;
  let spendingLimit;
  let topGuildActivities;
  let topUserActivities;
  let totalSpendAmount;
  let totalSpendCurrency;
  let totals;
  ({ familyCenterTeenActivity, ageGroup } = linkedUsers);
  ({ spendingLimit, monthlyPurchases, invoices, gifts, teenId: c15, rangeStartId: c16 } = familyCenterTeenActivity);
  ({ guilds, totals, topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
  processTeenActions(familyCenterTeenActivity.actions);
  processTeenActivityTotals(totals);
  processGuilds(guilds);
  processLinkedUsers(linkedUsers.linkedUsers);
  if (null != invoices) {
    processInvoices(invoices);
  }
  if (null != gifts) {
    processGifts(gifts);
  }
  let tmp9 = null;
  if (null != spendingLimit) {
    tmp9 = spendingLimit;
  }
  let c32 = tmp9;
  let tmp10 = null;
  if (null != monthlyPurchases) {
    tmp10 = monthlyPurchases;
  }
  let c33 = tmp10;
  let tmp11 = null;
  if (null != ageGroup) {
    tmp11 = ageGroup;
  }
  let c36 = tmp11;
  let c25 = false;
  let closure_26 = importDefault(21).fromTimestamp(Date.now());
  let c24 = true;
}
function handleLinkedUserFetch(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleRequestLinkSuccess(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  let c15;
  let c16;
  let gifts;
  let guilds;
  let invoices;
  let monthlyPurchases;
  let spendingLimit;
  let topGuildActivities;
  let topUserActivities;
  let totalSpendAmount;
  let totalSpendCurrency;
  let totals;
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined === familyCenterTeenActivity) {
    return false;
  } else {
    ({ invoices, gifts, spendingLimit, monthlyPurchases, teenId: c15, rangeStartId: c16 } = familyCenterTeenActivity);
    ({ totals, guilds, topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
    processTeenActions(familyCenterTeenActivity.actions);
    processTeenActivityTotals(totals);
    processGuilds(guilds);
    if (null != invoices) {
      processInvoices(invoices);
    }
    if (null != gifts) {
      processGifts(gifts);
    }
    let c25 = false;
    const _Date = Date;
    let closure_26 = importDefault(21).fromTimestamp(Date.now());
    let tmp8 = null;
    if (null != spendingLimit) {
      tmp8 = spendingLimit;
    }
    let c32 = tmp8;
    let tmp9 = null;
    if (null != monthlyPurchases) {
      tmp9 = monthlyPurchases;
    }
    let c33 = tmp9;
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  processTeenActions(familyCenterTeenActivity.actions, true);
  processGuilds(familyCenterTeenActivity.guilds);
}
function handleUserLinkStatusUpdate(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleUserLinkRemove(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleLinkCodeFetch(arg0) {
  let c21;
  let c22;
  ({ linkCode: c21, expiresAt: c22 } = arg0);
}
function handleTabSelect(tab) {
  tab = tab.tab;
}
function handleCurrentUserUpdate(user) {
  user = user.user;
  let users2;
  if (undefined === user.linked_users) {
    return false;
  } else {
    users2 = users.getUsers();
    const linked_users = user.linked_users;
    if (linked_users.some((arg0) => undefined === table[arg0.user_id])) {
      const _Object = Object;
      if (user.linked_users.length > Object.keys(closure_17).length) {
        const linkedUsers = importDefault(6771).fetchLinkedUsers();
        const obj = importDefault(6771);
      }
    }
    processLinkedUsers(user.linked_users);
  }
}
function handleConnectionOpen(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (null == linkedUsers) {
    return false;
  } else {
    processLinkedUsers(linkedUsers);
  }
}
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    const tmp2 = getCountryCodeByAlpha2(countryCode);
    let tmp3 = null;
    if (null != tmp2) {
      tmp3 = tmp2;
    }
    let c27 = tmp3;
  }
}
function reset() {
  let c15 = null;
  let c16 = null;
  let closure_17 = {};
  let c21 = null;
  let c22 = null;
  let closure_19 = freshTeenActivityWithMap();
  let closure_20 = freshTeenActivityTotals();
  let closure_37 = {};
  let c25 = false;
  let c26 = null;
  let closure_23 = getDefaultSelectedTab();
  let c18 = false;
  let closure_28 = [];
  let closure_29 = [];
  let c30 = null;
  let c31 = null;
  let c32 = null;
  let c33 = null;
  let closure_34 = {};
  let closure_35 = {};
  let c36 = null;
  let c24 = false;
}
({ FAMILY_CENTER_REFETCH_COOLDOWN: closure_11, FAMILY_CENTER_SUB_ROUTES: closure_12, FamilyCenterSubPages: closure_13, TeenActionDisplayType: closure_14 } = items);
let c15 = null;
let c16 = null;
let closure_17 = {};
let c18 = false;
let closure_19 = freshTeenActivityWithMap();
let closure_20 = freshTeenActivityTotals();
let c21 = null;
let c22 = null;
let closure_23 = getDefaultSelectedTab();
let c24 = false;
let c25 = false;
let c26 = null;
let c27 = null;
let closure_28 = [];
let closure_29 = [];
let c30 = null;
let c31 = null;
let c32 = null;
let c33 = null;
let closure_34 = {};
let closure_35 = {};
let c36 = null;
let closure_37 = {};
tmp4.displayName = "FamilyCenterStore";
tmp4.LATEST_SNAPSHOT_VERSION = 3;
tmp4 = new tmp4();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/FamilyCenterStore.tsx");

export default tmp4;
