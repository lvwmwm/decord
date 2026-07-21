// Module ID: 6764
// Function ID: 52987
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6764 (_isNativeReflectConstruct)
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
  let closure_17 = reduced;
  let closure_18 = true;
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
  arg1 = tmp2;
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
    const merged1 = Object.assign(callback(closure_2[10]).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
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
        const tmp = null == sku_id && null == subscription_plan_id;
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
  let closure_25 = true;
}
function handleInitialLoad(linkedUsers) {
  let ageGroup;
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
  ({ spendingLimit, monthlyPurchases, invoices, gifts, teenId: closure_15, rangeStartId: closure_16 } = familyCenterTeenActivity);
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
  let closure_28 = topUserActivities;
  let closure_29 = topGuildActivities;
  let closure_30 = totalSpendAmount;
  let closure_31 = totalSpendCurrency;
  let tmp9 = null;
  if (null != spendingLimit) {
    tmp9 = spendingLimit;
  }
  let closure_32 = tmp9;
  let tmp10 = null;
  if (null != monthlyPurchases) {
    tmp10 = monthlyPurchases;
  }
  let closure_33 = tmp10;
  let tmp11 = null;
  if (null != ageGroup) {
    tmp11 = ageGroup;
  }
  let closure_36 = tmp11;
  let closure_25 = false;
  let closure_26 = importDefault(dependencyMap[11]).fromTimestamp(Date.now());
  let closure_24 = true;
}
function handleLinkedUserFetch(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleRequestLinkSuccess(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
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
    ({ invoices, gifts, spendingLimit, monthlyPurchases, teenId: closure_15, rangeStartId: closure_16 } = familyCenterTeenActivity);
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
    let closure_28 = topUserActivities;
    let closure_29 = topGuildActivities;
    let closure_25 = false;
    const _Date = Date;
    let closure_26 = importDefault(dependencyMap[11]).fromTimestamp(Date.now());
    let closure_30 = totalSpendAmount;
    let closure_31 = totalSpendCurrency;
    let tmp8 = null;
    if (null != spendingLimit) {
      tmp8 = spendingLimit;
    }
    let closure_32 = tmp8;
    let tmp9 = null;
    if (null != monthlyPurchases) {
      tmp9 = monthlyPurchases;
    }
    let closure_33 = tmp9;
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
  ({ linkCode: closure_21, expiresAt: closure_22 } = arg0);
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
    if (linked_users.some((arg0) => undefined === closure_0[arg0.user_id])) {
      const _Object = Object;
      if (user.linked_users.length > Object.keys(closure_17).length) {
        const linkedUsers = importDefault(dependencyMap[12]).fetchLinkedUsers();
        const obj = importDefault(dependencyMap[12]);
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
    let closure_27 = tmp3;
  }
}
function reset() {
  let closure_15 = null;
  let closure_16 = null;
  let closure_17 = {};
  let closure_21 = null;
  let closure_22 = null;
  let closure_19 = freshTeenActivityWithMap();
  let closure_20 = freshTeenActivityTotals();
  let closure_37 = {};
  let closure_25 = false;
  let closure_26 = null;
  let closure_23 = getDefaultSelectedTab();
  let closure_18 = false;
  let closure_28 = [];
  let closure_29 = [];
  let closure_30 = null;
  let closure_31 = null;
  let closure_32 = null;
  let closure_33 = null;
  let closure_34 = {};
  let closure_35 = {};
  let closure_36 = null;
  let closure_24 = false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const getCountryCodeByAlpha2 = arg1(dependencyMap[6]).getCountryCodeByAlpha2;
let closure_10 = importDefault(dependencyMap[8]);
const importDefaultResult = importDefault(dependencyMap[7]);
({ FAMILY_CENTER_REFETCH_COOLDOWN: closure_11, FAMILY_CENTER_SUB_ROUTES: closure_12, FamilyCenterSubPages: closure_13, TeenActionDisplayType: closure_14 } = arg1(dependencyMap[9]));
let closure_15 = null;
let closure_16 = null;
let closure_17 = {};
let closure_18 = false;
let closure_19 = freshTeenActivityWithMap();
let closure_20 = freshTeenActivityTotals();
let closure_21 = null;
let closure_22 = null;
let closure_23 = getDefaultSelectedTab();
let closure_24 = false;
let closure_25 = false;
let closure_26 = null;
let closure_27 = null;
let closure_28 = [];
let closure_29 = [];
let closure_30 = null;
let closure_31 = null;
let closure_32 = null;
let closure_33 = null;
let closure_34 = {};
let closure_35 = {};
let closure_36 = null;
let closure_37 = {};
let tmp4 = (importDefaultResult) => {
  class FamilyCenterStore {
    constructor() {
      self = this;
      tmp = closure_3(this, FamilyCenterStore);
      obj = {
        CONNECTION_OPEN: closure_59,
        CURRENT_USER_UPDATE: closure_58,
        CACHE_LOADED_LAZY() {
              return tmp2Result.loadCache();
            },
        FAMILY_CENTER_INITIAL_LOAD: closure_49,
        FAMILY_CENTER_FETCH_START: closure_48,
        FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: closure_50,
        FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: closure_52,
        FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: closure_53,
        FAMILY_CENTER_REQUEST_LINK_SUCCESS: closure_51,
        FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: closure_54,
        FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: closure_55,
        FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: closure_56,
        FAMILY_CENTER_HANDLE_TAB_SELECT: closure_57,
        SET_LOCATION_METADATA: closure_60,
        LOGOUT: closure_61
      };
      items = [];
      items[0] = obj;
      obj2 = closure_6(FamilyCenterStore);
      tmp2 = closure_5;
      if (closure_38()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      FamilyCenterStore = tmp2Result;
      return tmp2Result;
    }
  }
  const arg1 = FamilyCenterStore;
  callback2(FamilyCenterStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "loadCache",
    value() {
      const snapshot = this.readSnapshot(FamilyCenterStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        callback5(snapshot.linkedUsers);
        callback7(snapshot.guilds);
        callback6(snapshot.teenActivity);
        function teenActivityTotalsFromSnapshot(teenActivityTotals) {
          let closure_20 = teenActivityTotals.reduce((arg0, str) => {
            let tmp2;
            let tmp3;
            [tmp2, tmp3] = callback2(str.split(":"), 2);
            let obj = callback(closure_2[13]);
            const result = obj.displayTypeFromString(tmp2);
            let tmp5 = arg0;
            if (undefined !== result) {
              obj = {};
              const merged = Object.assign(arg0);
              const _parseInt = parseInt;
              obj[result] = parseInt(tmp3, 10);
              tmp5 = obj;
            }
            return tmp5;
          }, callback());
        }(snapshot.teenActivityTotals);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "takeSnapshot",
    value() {
      let obj = { version: FamilyCenterStore.LATEST_SNAPSHOT_VERSION };
      obj = { linkedUsers: Object.values(closure_17) };
      const entries = Object.entries(closure_20);
      obj.teenActivityTotals = entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return "" + tmp + ":" + tmp2;
      });
      const items = [];
      const FamilyCenterStore = items;
      const item = closure_19.forEach((arr) => {
        const items = [...Array.from(arr.values())];
        items.push.apply(items);
      });
      obj.teenActivity = items;
      obj.guilds = Object.values(closure_37);
      obj.data = obj;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSelectedTeenId",
    value() {
      return closure_15;
    }
  };
  items[4] = {
    key: "getLinkedUsers",
    value() {
      return closure_17;
    }
  };
  items[5] = {
    key: "getLinkTimestamp",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_17[arg0]) {
        let created_at = tmp.updated_at;
        if (null == created_at) {
          created_at = tmp.created_at;
        }
        tmp2 = created_at;
      }
      return tmp2;
    }
  };
  items[6] = {
    key: "getRangeStartTimestamp",
    value() {
      let extractTimestampResult = null;
      if (null != closure_16) {
        extractTimestampResult = callback(closure_2[11]).extractTimestamp(closure_16);
        const obj = callback(closure_2[11]);
      }
      return extractTimestampResult;
    }
  };
  items[7] = {
    key: "getActionsForDisplayType",
    value(arg0) {
      const value = closure_19.get(arg0);
      if (null != value) {
        const _Array = Array;
        let items = Array.from(value.values());
      } else {
        items = [];
      }
      return items;
    }
  };
  items[8] = {
    key: "getTotalForDisplayType",
    value(arg0) {
      return closure_20[arg0];
    }
  };
  items[9] = {
    key: "getLinkCode",
    value() {
      return closure_21;
    }
  };
  items[10] = {
    key: "getLinkCodeExpiresAt",
    value() {
      return closure_22;
    }
  };
  items[11] = {
    key: "getGuild",
    value(arg0) {
      return closure_37[arg0];
    }
  };
  items[12] = {
    key: "getSelectedTab",
    value() {
      return closure_23;
    }
  };
  items[13] = {
    key: "getStartId",
    value() {
      return closure_16;
    }
  };
  items[14] = {
    key: "getIsInitialized",
    value() {
      return closure_24;
    }
  };
  items[15] = {
    key: "getAreLinkedUsersProcessed",
    value() {
      return closure_18;
    }
  };
  items[16] = {
    key: "getUserCountry",
    value() {
      return closure_27;
    }
  };
  items[17] = {
    key: "isLoading",
    value() {
      return closure_25;
    }
  };
  items[18] = {
    key: "getTopUserActivities",
    value() {
      return closure_28;
    }
  };
  items[19] = {
    key: "getTopGuildActivities",
    value() {
      return closure_29;
    }
  };
  items[20] = {
    key: "getTotalSpendAmount",
    value() {
      return closure_30;
    }
  };
  items[21] = {
    key: "getTotalSpendCurrency",
    value() {
      return closure_31;
    }
  };
  items[22] = {
    key: "getTotalGiftValue",
    value() {
      const values = Object.values(closure_35);
      let num = 0;
      let flag = false;
      let tmp = null;
      let num2 = 0;
      let num3 = 0;
      let tmp2 = null;
      let flag2 = false;
      if (0 < values.length) {
        while (true) {
          let tmp3 = values[num3];
          let currency = tmp;
          let sum = num2;
          if (null != tmp3.price) {
            if (null != tmp) {
              if (tmp3.price.currency !== tmp) {
                break;
              }
            }
            currency = tmp3.price.currency;
            sum = num2 + tmp3.price.amount;
            flag = true;
          }
          num3 = num3 + 1;
          tmp = currency;
          num2 = sum;
          tmp2 = currency;
          num = sum;
          flag2 = flag;
        }
        return null;
      }
      let tmp5 = null;
      if (flag2) {
        tmp5 = null;
        if (null != tmp2) {
          const obj = { amount: num, currency: tmp2 };
          tmp5 = obj;
        }
      }
      return tmp5;
    }
  };
  items[23] = {
    key: "getSpendingLimit",
    value() {
      return closure_32;
    }
  };
  items[24] = {
    key: "getMonthlyPurchases",
    value() {
      return closure_33;
    }
  };
  items[25] = {
    key: "getPurchaseInfo",
    value(arg0) {
      return closure_34[arg0];
    }
  };
  items[26] = {
    key: "getGiftInfo",
    value(arg0) {
      return closure_35[arg0];
    }
  };
  items[27] = {
    key: "getAgeGroup",
    value() {
      return closure_36;
    }
  };
  items[28] = {
    key: "canRefetch",
    value() {
      let tmp = null === closure_26;
      if (!tmp) {
        tmp = callback(closure_2[11]).age(closure_26) > closure_11;
        const obj = callback(closure_2[11]);
      }
      return tmp;
    }
  };
  items[29] = {
    key: "isCurrentUserInRestrictedHours",
    value() {
      if (obj.getIsFamilyCenterV3Enabled({ location: "isInRestrictedHours" })) {
        const currentUser = currentUser.getCurrentUser();
        let isInRestrictedHoursResult;
        if (null != currentUser) {
          const restrictedSchedule = currentUser.restrictedSchedule;
          if (null != restrictedSchedule) {
            isInRestrictedHoursResult = restrictedSchedule.isInRestrictedHours();
          }
        }
        return null != isInRestrictedHoursResult && isInRestrictedHoursResult;
      } else {
        return false;
      }
      const obj = FamilyCenterStore(closure_2[14]);
    }
  };
  return callback(FamilyCenterStore, items);
}(importDefaultResult);
tmp4.displayName = "FamilyCenterStore";
tmp4.LATEST_SNAPSHOT_VERSION = 3;
tmp4 = new tmp4();
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/parent_tools/FamilyCenterStore.tsx");

export default tmp4;
