// Module ID: 8193
// Function ID: 64715
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8194, 653, 4015, 3712, 4366, 686, 8195, 566, 2]

// Module 8193 (_isNativeReflectConstruct)
import closure_3 from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_possibleConstructorReturn";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateGiftCode(giftCode) {
  const fromServer = _isNativeReflectConstruct.createFromServer(giftCode);
  const code = fromServer.code;
  if (map.has(code)) {
    const value = map.get(code);
    const result = set(code, value.merge(fromServer));
  } else {
    const result1 = set(code, fromServer);
    if (null != fromServer.expiresAt) {
      const Timeout = require(4015) /* _createForOfIteratorHelperLoose */.Timeout;
      const prototype = Timeout.prototype;
      const timeout = new Timeout();
      closure_12[code] = timeout;
      checkGiftCodeExpiry(code);
    }
  }
}
function checkGiftCodeExpiry(code) {
  let closure_0 = code;
  const value = map.get(code);
  if (null != value) {
    if (null != value.expiresAt) {
      const expiresAt = value.expiresAt;
      const valueOfResult = expiresAt.valueOf();
      const diff = valueOfResult - importDefault(3712)().valueOf();
      if (diff <= 0) {
        map.delete(code);
        delete tmp[tmp2];
        tmp6.emitChange();
      } else if (null != dependencyMap[code]) {
        const _Math = Math;
        obj.start(Math.min(closure_10, diff), () => {
          outer1_24(closure_0);
        });
      }
      const obj2 = importDefault(3712)();
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
  let obj = require(4366) /* unambiguousRegex */;
  const isGiftCodeEmbedResult = require(4366) /* unambiguousRegex */.isGiftCodeEmbed(message);
  const findGiftCodes = require(4366) /* unambiguousRegex */.findGiftCodes;
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
      let closure_0 = code;
      let hasItem = outer1_14.includes(code);
      if (!hasItem) {
        hasItem = outer1_16.includes(code);
      }
      if (!hasItem) {
        const obj = { code };
        outer1_26(obj);
        outer1_1(outer1_2[10]).wait(() => {
          const giftCode = outer2_1(outer2_2[11]).resolveGiftCode(closure_0, false, true);
          return giftCode.catch(outer2_11);
        });
        const obj2 = outer1_1(outer1_2[10]);
      }
    });
  }
  return false;
}
function handleGiftCodeResolve(code) {
  code = code.code;
  if (!items.includes(code)) {
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
    items[arraySpreadResult] = code;
    const sum = arraySpreadResult + 1;
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
    outer1_25(arg0, true);
    return false;
  });
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else if (null != firstMessages) {
    const item = firstMessages.forEach((arg0) => {
      outer1_25(arg0);
      return false;
    });
  }
}
({ AbortCodes: closure_9, MAX_TIMEOUT_MS: closure_10, NOOP_NULL: closure_11 } = ME);
let closure_12 = {};
const map = new Map();
let closure_14 = [];
let closure_15 = [];
let closure_16 = [];
let set = new Set();
let closure_18 = {};
let closure_19 = {};
const set1 = new Set();
let tmp6 = ((Store) => {
  class GiftCodeStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GiftCodeStore);
      obj = outer1_6(GiftCodeStore);
      tmp2 = outer1_5;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GiftCodeStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      const value = outer1_13.get(arg0);
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
        tmp = outer1_19[arg0];
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getForGifterSKUAndPlan",
    value(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      return Array.from(outer1_13.values()).filter((userId) => {
        let tmp = userId.userId === closure_0;
        if (tmp) {
          tmp = userId.skuId === closure_1;
        }
        if (tmp) {
          let tmp5 = null == closure_2;
          if (!tmp5) {
            tmp5 = userId.subscriptionPlanId === closure_2;
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
      return outer1_14.includes(arg0);
    }
  };
  items[4] = {
    key: "getIsResolved",
    value(arg0) {
      return outer1_16.includes(arg0);
    }
  };
  items[5] = {
    key: "getIsAccepting",
    value(arg0) {
      return outer1_15.includes(arg0);
    }
  };
  items[6] = {
    key: "getUserGiftCodesFetchingForSKUAndPlan",
    value(skuId, subscriptionPlanId) {
      return outer1_17.has(GiftCodeStore(outer1_2[9]).makeComboId(skuId, subscriptionPlanId));
    }
  };
  items[7] = {
    key: "getUserGiftCodesLoadedAtForSKUAndPlan",
    value(skuId, subscriptionPlanId) {
      const obj = GiftCodeStore(outer1_2[9]);
      return outer1_18[obj.makeComboId(obj, skuId, subscriptionPlanId)];
    }
  };
  items[8] = {
    key: "getResolvingCodes",
    value() {
      return outer1_14;
    }
  };
  items[9] = {
    key: "getResolvedCodes",
    value() {
      return outer1_16;
    }
  };
  items[10] = {
    key: "getAcceptingCodes",
    value() {
      return outer1_15;
    }
  };
  return callback(GiftCodeStore, items);
})(require("initialize").Store);
tmp6.displayName = "GiftCodeStore";
tmp6 = new tmp6(require("dispatcher"), {
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
    closure_14 = closure_14.filter((arg0) => arg0 !== giftCode.code);
    if (!items.includes(giftCode.code)) {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = giftCode.code;
      const sum = arraySpreadResult + 1;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    const error = code.error;
    closure_14 = closure_14.filter((arg0) => arg0 !== code);
    if (!items.includes(code)) {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
    }
    if (null != error) {
      closure_19[code] = error;
    }
  },
  GIFT_CODE_REDEEM: function handleGiftCodeAccept(code) {
    code = code.code;
    if (!items.includes(code)) {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    closure_15 = closure_15.filter((arg0) => arg0 !== code);
    const value = map.get(code);
    if (null != value) {
      const obj = { redeemed: true, uses: value.uses + 1 };
      const result = map.set(code, value.merge(obj));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
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
    if (null != dependencyMap[code]) {
      obj.stop();
      delete tmp[tmp2];
    }
    if (!items.includes(code)) {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = code;
      const sum = arraySpreadResult + 1;
    }
  },
  GIFT_CODE_CREATE_SUCCESS: function handleGiftCodeCreate(giftCode) {
    updateGiftCode(giftCode.giftCode);
  },
  GIFT_CODES_FETCH: function handleGiftCodesFetch(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    set.add(require(4366) /* unambiguousRegex */.makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    let skuId;
    let subscriptionPlanId;
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const comboId = require(4366) /* unambiguousRegex */.makeComboId(skuId, subscriptionPlanId);
    closure_18[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    set.delete(require(4366) /* unambiguousRegex */.makeComboId(skuId, subscriptionPlanId));
  },
  MESSAGE_CREATE: handleMessage,
  MESSAGE_UPDATE: handleMessage,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadRecentMentions(messages) {
    messages = messages.messages;
    const item = messages.forEach((arg0) => {
      outer1_25(arg0);
      return false;
    });
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      outer1_25(message.message);
      return false;
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => {
          outer3_25(arg0);
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
        outer1_25(first_message);
        flag = false;
      }
      return flag;
    });
  }
});
let closure_21 = tmp6;
let result = set.fileFinishedImporting("stores/GiftCodeStore.tsx");

export default tmp6;
