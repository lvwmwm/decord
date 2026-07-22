// Module ID: 8187
// Function ID: 64678
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8187 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateGiftCode(giftCode) {
  const fromServer = closure_8.createFromServer(giftCode);
  const code = fromServer.code;
  if (map.has(code)) {
    const value = map.get(code);
    const result = set(code, value.merge(fromServer));
  } else {
    const result1 = set(code, fromServer);
    if (null != fromServer.expiresAt) {
      const Timeout = arg1(dependencyMap[7]).Timeout;
      const prototype = Timeout.prototype;
      const timeout = new Timeout();
      closure_12[code] = timeout;
      checkGiftCodeExpiry(code);
    }
  }
}
function checkGiftCodeExpiry(code) {
  const arg1 = code;
  const value = map.get(code);
  if (null != value) {
    if (null != value.expiresAt) {
      const expiresAt = value.expiresAt;
      const valueOfResult = expiresAt.valueOf();
      const diff = valueOfResult - importDefault(dependencyMap[8])().valueOf();
      if (diff <= 0) {
        map.delete(code);
        delete r1[r2];
        map.emitChange();
      } else if (null != closure_12[code]) {
        const _Math = Math;
        obj.start(Math.min(closure_10, diff), () => {
          callback(arg0);
        });
      }
      const obj2 = importDefault(dependencyMap[8])();
    }
  }
}
function resolveMessageGiftCodes(message, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    if (!set1.has(message.channel_id)) {
      return false;
    }
  }
  const obj = arg1(dependencyMap[9]);
  const isGiftCodeEmbedResult = arg1(dependencyMap[9]).isGiftCodeEmbed(message);
  const findGiftCodes = arg1(dependencyMap[9]).findGiftCodes;
  if (isGiftCodeEmbedResult) {
    let embeds;
    if (null != message) {
      embeds = message.embeds;
    }
    let tmp6;
    if (null != embeds) {
      let url;
      if (null != message) {
        url = message.embeds[0].url;
      }
      tmp6 = url;
    }
    let findGiftCodesResult = findGiftCodes(tmp6);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  if (0 !== findGiftCodesResult.length) {
    const item = findGiftCodesResult.forEach((code) => {
      let hasItem = closure_14.includes(code);
      if (!hasItem) {
        hasItem = closure_16.includes(code);
      }
      if (!hasItem) {
        const obj = { code };
        callback2(obj);
        callback(closure_2[10]).wait(() => {
          const giftCode = callback(closure_2[11]).resolveGiftCode(arg0, false, true);
          return giftCode.catch(closure_11);
        });
        const obj2 = callback(closure_2[10]);
      }
    });
  }
  return false;
}
function handleGiftCodeResolve(code) {
  code = code.code;
  if (!closure_14.includes(code)) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(closure_14, 0);
    items[arraySpreadResult] = code;
    const sum = arraySpreadResult + 1;
    closure_14 = items;
  }
}
function handleMessage(message) {
  resolveMessageGiftCodes(message.message, true);
  return false;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  set1.add(messages.channelId);
  const item = messages.forEach((arg0) => {
    callback(arg0, true);
    return false;
  });
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else if (null != firstMessages) {
    const item = firstMessages.forEach((arg0) => {
      callback(arg0);
      return false;
    });
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AbortCodes: closure_9, MAX_TIMEOUT_MS: closure_10, NOOP_NULL: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = {};
const map = new Map();
let closure_14 = [];
let closure_15 = [];
let closure_16 = [];
const set = new Set();
let closure_18 = {};
let closure_19 = {};
const set1 = new Set();
let tmp6 = (Store) => {
  class GiftCodeStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GiftCodeStore);
      obj = closure_6(GiftCodeStore);
      tmp2 = closure_5;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GiftCodeStore;
  callback2(GiftCodeStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      const value = closure_13.get(arg0);
      let tmp = null;
      if (null != value) {
        tmp = null;
        if (!value.isExpired()) {
          tmp = value;
        }
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getError",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = closure_19[arg0];
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getForGifterSKUAndPlan",
    value(arg0, arg1, arg2) {
      const GiftCodeStore = arg0;
      return Array.from(closure_13.values()).filter((userId) => {
        let tmp = userId.userId === userId;
        if (tmp) {
          tmp = userId.skuId === arg1;
        }
        if (tmp) {
          let tmp5 = null == arg2;
          if (!tmp5) {
            tmp5 = userId.subscriptionPlanId === arg2;
          }
          tmp = tmp5;
        }
        if (tmp) {
          tmp = !userId.isExpired();
        }
        return tmp;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsResolving",
    value(arg0) {
      return closure_14.includes(arg0);
    }
  };
  items[4] = {
    key: "getIsResolved",
    value(arg0) {
      return closure_16.includes(arg0);
    }
  };
  items[5] = {
    key: "getIsAccepting",
    value(arg0) {
      return closure_15.includes(arg0);
    }
  };
  items[6] = {
    key: "getUserGiftCodesFetchingForSKUAndPlan",
    value(skuId, subscriptionPlanId) {
      return set.has(GiftCodeStore(closure_2[9]).makeComboId(skuId, subscriptionPlanId));
    }
  };
  items[7] = {
    key: "getUserGiftCodesLoadedAtForSKUAndPlan",
    value(skuId, subscriptionPlanId) {
      const obj = GiftCodeStore(closure_2[9]);
      return closure_18[obj.makeComboId(obj, skuId, subscriptionPlanId)];
    }
  };
  items[8] = {
    key: "getResolvingCodes",
    value() {
      return closure_14;
    }
  };
  items[9] = {
    key: "getResolvedCodes",
    value() {
      return closure_16;
    }
  };
  items[10] = {
    key: "getAcceptingCodes",
    value() {
      return closure_15;
    }
  };
  return callback(GiftCodeStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp6.displayName = "GiftCodeStore";
tmp6 = new tmp6(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set1.clear();
    return false;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      set1.add(channelId);
    }
    return false;
  },
  GIFT_CODE_RESOLVE: handleGiftCodeResolve,
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    const arg1 = giftCode;
    closure_14 = closure_14.filter((arg0) => arg0 !== giftCode.code);
    if (!closure_16.includes(giftCode.code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_16, 0);
      items[arraySpreadResult] = giftCode.code;
      const sum = arraySpreadResult + 1;
      closure_16 = items;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    const arg1 = code;
    const error = code.error;
    closure_14 = closure_14.filter((arg0) => arg0 !== code);
    if (!closure_16.includes(code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_16, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
      closure_16 = items;
    }
    if (null != error) {
      closure_19[code] = error;
    }
  },
  GIFT_CODE_REDEEM: function handleGiftCodeAccept(code) {
    code = code.code;
    if (!closure_15.includes(code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_15, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
      closure_15 = items;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    const arg1 = code;
    closure_15 = closure_15.filter((arg0) => arg0 !== code);
    const value = map.get(code);
    if (null != value) {
      const obj = { redeemed: true, uses: value.uses + 1 };
      const result = map.set(code, value.merge(obj));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
    const arg1 = code;
    const error = code.error;
    closure_15 = closure_15.filter((arg0) => arg0 !== code);
    const value = map.get(code);
    closure_19[code] = error;
    if (null != value) {
      const code2 = error.code;
      if (constants.UNKNOWN_GIFT_CODE === code2) {
        const result = map.set(code, value.set("revoked", true));
      } else if (constants.INVALID_GIFT_REDEMPTION_EXHAUSTED === code2) {
        const result1 = map.set(code, value.set("uses", value.maxUses));
      }
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function handleGiftCodeRevoke(code) {
    code = code.code;
    map.delete(code);
    if (null != closure_12[code]) {
      obj.stop();
      delete r0[r2];
    }
    if (!closure_16.includes(code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_16, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
      closure_16 = items;
    }
  },
  GIFT_CODE_CREATE_SUCCESS: function handleGiftCodeCreate(giftCode) {
    updateGiftCode(giftCode.giftCode);
  },
  GIFT_CODES_FETCH: function handleGiftCodesFetch(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    set.add(arg1(dependencyMap[9]).makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    let skuId;
    let subscriptionPlanId;
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const comboId = arg1(dependencyMap[9]).makeComboId(skuId, subscriptionPlanId);
    closure_18[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    set.delete(arg1(dependencyMap[9]).makeComboId(skuId, subscriptionPlanId));
  },
  MESSAGE_CREATE: handleMessage,
  MESSAGE_UPDATE: handleMessage,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadRecentMentions(messages) {
    messages = messages.messages;
    const item = messages.forEach((arg0) => {
      callback(arg0);
      return false;
    });
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      callback(message.message);
      return false;
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    const item = data.forEach((messages) => {
      messages = messages.messages;
      const item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => {
          callback(arg0);
          return false;
        });
      });
    });
  },
  GIFT_CODE_UPDATE: function handleGiftCodeUpdate(code) {
    code = code.code;
    const value = map.get(code);
    if (null != value) {
      const _Math = Math;
      const result = map.set(code, value.set("uses", Math.max(value.uses, code.uses)));
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    const values = Object.values(threads.threads);
    const mapped = values.map((first_message) => {
      first_message = first_message.first_message;
      let flag = null != first_message;
      if (flag) {
        callback(first_message);
        flag = false;
      }
      return flag;
    });
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set1.clear();
    return false;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      set1.add(channelId);
    }
    return false;
  },
  GIFT_CODE_RESOLVE: handleGiftCodeResolve,
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    const arg1 = giftCode;
    closure_14 = closure_14.filter((arg0) => arg0 !== giftCode.code);
    if (!closure_16.includes(giftCode.code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_16, 0);
      items[arraySpreadResult] = giftCode.code;
      const sum = arraySpreadResult + 1;
      closure_16 = items;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    const arg1 = code;
    const error = code.error;
    closure_14 = closure_14.filter((arg0) => arg0 !== code);
    if (!closure_16.includes(code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_16, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
      closure_16 = items;
    }
    if (null != error) {
      closure_19[code] = error;
    }
  },
  GIFT_CODE_REDEEM: function handleGiftCodeAccept(code) {
    code = code.code;
    if (!closure_15.includes(code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_15, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
      closure_15 = items;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    const arg1 = code;
    closure_15 = closure_15.filter((arg0) => arg0 !== code);
    const value = map.get(code);
    if (null != value) {
      const obj = { redeemed: true, uses: value.uses + 1 };
      const result = map.set(code, value.merge(obj));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
    const arg1 = code;
    const error = code.error;
    closure_15 = closure_15.filter((arg0) => arg0 !== code);
    const value = map.get(code);
    closure_19[code] = error;
    if (null != value) {
      const code2 = error.code;
      if (constants.UNKNOWN_GIFT_CODE === code2) {
        const result = map.set(code, value.set("revoked", true));
      } else if (constants.INVALID_GIFT_REDEMPTION_EXHAUSTED === code2) {
        const result1 = map.set(code, value.set("uses", value.maxUses));
      }
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function handleGiftCodeRevoke(code) {
    code = code.code;
    map.delete(code);
    if (null != closure_12[code]) {
      obj.stop();
      delete r0[r2];
    }
    if (!closure_16.includes(code)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_16, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
      closure_16 = items;
    }
  },
  GIFT_CODE_CREATE_SUCCESS: function handleGiftCodeCreate(giftCode) {
    updateGiftCode(giftCode.giftCode);
  },
  GIFT_CODES_FETCH: function handleGiftCodesFetch(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    set.add(arg1(dependencyMap[9]).makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    let skuId;
    let subscriptionPlanId;
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const comboId = arg1(dependencyMap[9]).makeComboId(skuId, subscriptionPlanId);
    closure_18[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    set.delete(arg1(dependencyMap[9]).makeComboId(skuId, subscriptionPlanId));
  },
  MESSAGE_CREATE: handleMessage,
  MESSAGE_UPDATE: handleMessage,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadRecentMentions(messages) {
    messages = messages.messages;
    const item = messages.forEach((arg0) => {
      callback(arg0);
      return false;
    });
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      callback(message.message);
      return false;
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    const item = data.forEach((messages) => {
      messages = messages.messages;
      const item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => {
          callback(arg0);
          return false;
        });
      });
    });
  },
  GIFT_CODE_UPDATE: function handleGiftCodeUpdate(code) {
    code = code.code;
    const value = map.get(code);
    if (null != value) {
      const _Math = Math;
      const result = map.set(code, value.set("uses", Math.max(value.uses, code.uses)));
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    const values = Object.values(threads.threads);
    const mapped = values.map((first_message) => {
      first_message = first_message.first_message;
      let flag = null != first_message;
      if (flag) {
        callback(first_message);
        flag = false;
      }
      return flag;
    });
  }
};
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("stores/GiftCodeStore.tsx");

export default tmp6;
