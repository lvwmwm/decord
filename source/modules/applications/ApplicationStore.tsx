// Module ID: 4163
// Function ID: 35273
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4163 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function addApplication(fromServer) {
  let done;
  let value = map.get(fromServer.id);
  const result = map3.set(fromServer.id, Date.now());
  let result1 = fromServer;
  if (null != value) {
    result1 = value.mergeFromApplicationUpdate(fromServer);
  }
  const result2 = map.set(fromServer.id, result1);
  const result3 = map2.set(fromServer.name.toLowerCase(), result1);
  const tmp5 = _createForOfIteratorHelperLoose(fromServer.aliases);
  let iter = tmp5();
  if (!iter.done) {
    do {
      let str2 = iter.value;
      let tmp6 = closure_10;
      let result4 = closure_10.set(str2.toLowerCase(), result1);
      let iter2 = tmp5();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  if (null != fromServer.linkedGames) {
    const tmp9 = _createForOfIteratorHelperLoose(fromServer.linkedGames);
    let iter3 = tmp9();
    if (!iter3.done) {
      value = iter3.value;
      while (null == value.application) {
        let iter4 = tmp9();
        iter3 = iter4;
      }
      if (value.application instanceof closure_6) {
        let application = value.application;
      } else {
        application = closure_6.createFromServer(value.application);
      }
      addApplication(application);
      const tmp10 = addApplication;
    }
  }
  map4.delete(fromServer.id);
}
function handleWishlistAction(wishlistData) {
  let done;
  const applications = wishlistData.wishlistData.applications;
  if (null != applications) {
    if (0 !== applications.length) {
      const tmp2 = _createForOfIteratorHelperLoose(applications);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let tmp3 = closure_18;
          let tmp4 = closure_18(iter.value);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  }
  return false;
}
function updateApplication(application) {
  addApplication(closure_6.createFromServer(application));
}
function handleAppWithBot(arg0) {
  let applicationId;
  let length;
  let userId;
  ({ userId, applicationId } = arg0);
  if (null == closure_14.botUserIdToAppUsage[userId]) {
    let obj = { applicationId };
    const _Date = Date;
    obj.lastUsedMs = Date.now();
  } else {
    obj = { applicationId, lastUsedMs: tmp.lastUsedMs };
  }
  closure_14.botUserIdToAppUsage[userId] = obj;
  const map = new Map();
  const entries = Object.entries(closure_14.botUserIdToAppUsage);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp3 = closure_5;
      let tmp4 = closure_5(entries[num], 2);
      let result = map.set(tmp4[0], tmp4[1]);
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  const sorted = Array.from(map.entries()).sort((arg0, arg1) => arg1[1].lastUsedMs - arg0[1].lastUsedMs);
  for (let num2 = 0; num2 < sorted.length; num2 = num2 + 1) {
    if (num2 >= 10) {
      let first = sorted[num2][0];
      let tmp7 = closure_14;
      let botUserIdToAppUsage = closure_14.botUserIdToAppUsage;
      delete r1[r7];
    }
  }
}
function handleApplicationWidgetConfigFetchSuccess(applications) {
  let done;
  applications = applications.applications;
  if (0 === applications.length) {
    return false;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(applications);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_18;
        let tmp4 = closure_6;
        let tmp5 = closure_18(closure_6.createFromServer(iter.value));
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return true;
  }
}
function handleEntitlementsFetched(entitlements) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(entitlements.entitlements);
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let sku = iter2.value.sku;
      let application;
      if (null != sku) {
        application = sku.application;
      }
      if (null != application) {
        let tmp3 = closure_18;
        let tmp4 = closure_6;
        let tmp5 = closure_18(closure_6.createFromServer(sku.application));
        flag = true;
      }
      iter3 = tmp();
      iter2 = iter3;
      flag2 = flag;
    } while (!iter3.done);
  }
  return flag2;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const set = new Set();
let closure_14 = { botUserIdToAppUsage: {} };
let tmp8 = (PersistedStore) => {
  class ApplicationStore {
    constructor() {
      self = this;
      tmp = ApplicationStore(this, ApplicationStore);
      obj = closure_3(ApplicationStore);
      tmp2 = closure_2;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ApplicationStore;
  callback2(ApplicationStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(botUserIdToAppUsage) {
      let applicationId;
      let lastUsedMs;
      if (null != botUserIdToAppUsage) {
        if ("object" === typeof botUserIdToAppUsage.botUserIdToAppUsage) {
          for (const key10002 in arg0.botUserIdToAppUsage) {
            let tmp3 = key10002;
            ({ applicationId, lastUsedMs } = arg0.botUserIdToAppUsage[key10002]);
            let tmp = "string" === typeof applicationId;
            if (tmp) {
              tmp = applicationId.length > 0;
            }
            if (tmp) {
              tmp = "number" === typeof lastUsedMs;
            }
            if (tmp) {
              tmp = lastUsedMs > 0;
            }
            if (!tmp) {
              continue;
            } else {
              let tmp2 = closure_14;
              let obj = { applicationId, lastUsedMs };
              closure_14.botUserIdToAppUsage[key10002] = obj;
              // continue
            }
            continue;
          }
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_14;
    }
  };
  items[1] = obj;
  obj = {
    key: "_getAllApplications",
    value() {
      return Array.from(closure_8.values());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildApplication",
    value(arg0, arg1) {
      let value;
      if (null != arg0) {
        const tmp3 = callback3(closure_8.values());
        const iter = tmp3();
        let iter2 = iter;
        if (!iter.done) {
          while (true) {
            value = iter2.value;
            if (value.guildId === arg0) {
              if (value.type === arg1) {
                break;
              }
            }
            let iter3 = tmp3();
            iter2 = iter3;
          }
          return value;
        }
      }
    }
  };
  items[4] = {
    key: "getGuildApplicationIds",
    value(arg0) {
      if (null == arg0) {
        let value = closure_7;
      } else {
        value = closure_9.get(arg0);
        if (null == value) {
          value = closure_7;
        }
      }
      return value;
    }
  };
  items[5] = {
    key: "getApplication",
    value(arg0) {
      if (null != arg0) {
        return closure_8.get(arg0);
      }
    }
  };
  items[6] = {
    key: "getApplicationByName",
    value(str) {
      if (null != str) {
        const formatted = str.toLowerCase();
        let value;
        if (map.has(formatted)) {
          value = map.get(formatted);
        }
        return value;
      }
    }
  };
  items[7] = {
    key: "getApplicationLastUpdated",
    value(arg0) {
      return closure_11.get(arg0);
    }
  };
  items[8] = {
    key: "isFetchingApplication",
    value(arg0) {
      return true === store.get(arg0);
    }
  };
  items[9] = {
    key: "isHydrated",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[10] = {
    key: "didFetchingApplicationFail",
    value(arg0) {
      return false === store.get(arg0);
    }
  };
  items[11] = {
    key: "getFetchingOrFailedFetchingIds",
    value() {
      return Array.from(store.keys());
    }
  };
  items[12] = {
    key: "getAppIdForBotUserId",
    value(arg0) {
      if (null != arg0) {
        let applicationId;
        if (null != botUserIdToAppUsage.botUserIdToAppUsage[arg0]) {
          applicationId = tmp2.applicationId;
        }
        return applicationId;
      }
    }
  };
  return callback(ApplicationStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp8.displayName = "ApplicationStore";
tmp8.persistKey = "ApplicationStore";
tmp8 = new tmp8(importDefault(dependencyMap[8]), {
  LOGOUT: function handleLogout() {
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set.clear();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(applications) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(applications.applications);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_18;
        let tmp3 = closure_6;
        let prototype = closure_6.prototype;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let tmp6 = new closure_6(iter.value);
        let tmp7 = tmp6;
        let tmp8 = closure_18(tmp6);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  APPLICATION_FETCH: function handleApplicationFetch(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map4.get(applicationId);
    const result = map4.set(applicationId, true);
    return true !== value;
  },
  APPLICATION_FETCH_SUCCESS: function handleApplicationFetchSuccess(application) {
    application = application.application;
    if (true === application.isHydrated) {
      set.add(application.id);
    }
    updateApplication(application);
  },
  APPLICATION_FETCH_FAIL: function handleApplicationFetchFail(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map4.get(applicationId);
    const result = map4.set(applicationId, false);
    return false !== value;
  },
  APPLICATIONS_FETCH: function handleApplicationsFetch(applicationIds) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(applicationIds.applicationIds);
    let iter = tmp();
    let flag = false;
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_12;
        let tmp4 = closure_12;
        value = closure_12.get(value);
        let result = closure_12.set(value, true);
        flag = true !== value;
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return flag;
  },
  APPLICATIONS_FETCH_SUCCESS: function handleApplicationsFetchSuccess(applications) {
    let iter2;
    const tmp2 = _createForOfIteratorHelperLoose(applications.applications);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (true === tmp) {
          let tmp3 = closure_13;
          let addResult = closure_13.add(value.id);
        }
        let tmp5 = closure_18;
        let tmp6 = closure_6;
        let tmp7 = closure_18(closure_6.createFromServer(value));
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  APPLICATIONS_FETCH_FAIL: function handleApplicationsFetchFail(applicationIds) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(applicationIds.applicationIds);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_12;
        let tmp4 = closure_12;
        value = closure_12.get(value);
        let result = closure_12.set(value, false);
        flag = false !== value;
        let iter3 = tmp();
        iter2 = iter3;
        done = iter3.done;
      } while (!done);
    }
    return flag;
  },
  APPLICATION_UPDATE: function handleUpdateApplication(application) {
    updateApplication(application.application);
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: handleEntitlementsFetched,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: handleEntitlementsFetched,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: handleEntitlementsFetched,
  GUILD_APPLICATIONS_FETCH_SUCCESS: function handleGuildApplicationsFetchSuccess(applications) {
    let done;
    const items = [];
    const tmp = _createForOfIteratorHelperLoose(applications.applications);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let arr = items.push(value.id);
        let tmp3 = closure_18;
        let tmp4 = closure_6;
        let tmp5 = closure_18(closure_6.createFromServer(value));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const result = map1.set(applications.guildId, items);
  },
  BILLING_PAYMENTS_FETCH_SUCCESS: function handleFetchPayments(payments) {
    let iter2;
    const set = new Set();
    const tmp = _createForOfIteratorHelperLoose(payments.payments);
    let iter = tmp();
    if (!iter.done) {
      do {
        let sku = iter.value.sku;
        let application;
        if (null != sku) {
          application = sku.application;
        }
        let tmp3 = null == application || set.has(application.id);
        if (!tmp3) {
          let tmp4 = closure_18;
          let tmp5 = closure_6;
          let tmp6 = closure_18(closure_6.createFromServer(application));
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    return set.size > 0;
  },
  PAYMENT_UPDATE: function handleUpdatePayment(payment) {
    payment = payment.payment;
    const sku = payment.sku;
    let application;
    if (null != sku) {
      application = sku.application;
    }
    if (null == application) {
      return false;
    } else {
      addApplication(closure_6.createFromServer(payment.sku.application));
    }
  },
  INVITE_RESOLVE_SUCCESS: function handleResolveInvite(invite) {
    invite = invite.invite;
    if (null == invite.target_application) {
      return false;
    } else {
      addApplication(closure_6.createFromServer(invite.target_application));
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    const store_listing = giftCode.store_listing;
    let application;
    if (null != store_listing) {
      application = store_listing.sku.application;
    }
    if (null == application) {
      return false;
    } else {
      addApplication(closure_6.createFromServer(giftCode.store_listing.sku.application));
    }
  },
  LIBRARY_FETCH_SUCCESS: function handleLibraryApplicationsFetch(libraryApplications) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(libraryApplications.libraryApplications);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_18;
        let tmp3 = closure_6;
        let tmp4 = closure_18(closure_6.createFromServer(iter.value.application));
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetch(storeListing) {
    storeListing = storeListing.storeListing;
    if (null == storeListing.sku.application) {
      return false;
    } else {
      addApplication(closure_6.createFromServer(storeListing.sku.application));
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(messages) {
    messages = messages.messages;
    const item = messages.forEach((attachments) => {
      function mergeApplicationsFromMessage(attachments) {
        attachments = attachments.attachments;
        if (null != attachments) {
          const item = attachments.forEach((application) => {
            if (null != application.application) {
              callback(closure_6.createFromServer(application.application));
            }
          });
        }
      }(attachments);
    });
  },
  USER_PROFILE_FETCH_SUCCESS: function handleProfileFetchSuccess(userProfile) {
    let application;
    let user;
    ({ user, application } = userProfile.userProfile);
    let bot = user.bot;
    if (bot) {
      bot = null != application;
    }
    if (bot) {
      const obj = { userId: user.id, applicationId: application.id };
      handleAppWithBot(obj);
    }
  },
  APP_DM_OPEN: function handleAppDMOpen(botUserId) {
    botUserId = botUserId.botUserId;
    if (null != closure_14.botUserIdToAppUsage[botUserId]) {
      const obj = {};
      const merged = Object.assign(tmp);
      const _Date = Date;
      obj["lastUsedMs"] = Date.now();
      closure_14.botUserIdToAppUsage[botUserId] = obj;
    }
  },
  USER_AUTHORIZED_APPS_UPDATE: function handleAuthorizedAppsUpdate(tokens) {
    const values = Object.values(tokens.tokens);
    for (let num = 0; num < values.length; num = num + 1) {
      let tmp = values[num];
      if (null != tmp) {
        let tmp2 = addApplication;
        let tmp3 = closure_6;
        let tmp4 = addApplication(closure_6.createFromServer(tmp.application));
        let bot = tmp.application.bot;
        let tmp5 = bot;
        if (null != bot) {
          let tmp6 = handleAppWithBot;
          let obj = { userId: bot.id, applicationId: tmp.application.id };
          let tmp7 = handleAppWithBot(obj);
          let tmp8 = bot;
        }
      }
    }
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function handleNotificationCenterItemsSuccess(items) {
    items = items.items;
    const item = items.forEach((application) => {
      if (null != application.application) {
        callback(closure_6.createFromServer(application.application));
      }
    });
  },
  OAUTH2_TOKEN_CREATE: function handleOAuth2TokenCreate(application) {
    addApplication(closure_6.createFromServer(application.application));
  },
  WISHLIST_FETCH_SUCCESS: handleWishlistAction,
  WISHLIST_ADD_SKU_SUCCESS: handleWishlistAction,
  WISHLIST_REMOVE_SKU_SUCCESS: handleWishlistAction,
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function handleSocialLayerStorefrontLoadSuccess(storefront) {
    const application = storefront.storefront.application;
    if (null == application) {
      return false;
    } else {
      addApplication(application);
    }
  },
  WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function handleWishlistRecommendationsFetchSuccess(data) {
    let done;
    const applications = data.data.applications;
    if (null != applications) {
      if (0 !== applications.length) {
        const tmp2 = _createForOfIteratorHelperLoose(applications);
        let iter = tmp2();
        if (!iter.done) {
          do {
            let tmp3 = closure_18;
            let tmp4 = closure_18(iter.value);
            let iter2 = tmp2();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    }
    return false;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: handleApplicationWidgetConfigFetchSuccess,
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: handleApplicationWidgetConfigFetchSuccess,
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: handleApplicationWidgetConfigFetchSuccess
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/applications/ApplicationStore.tsx");

export default tmp8;
