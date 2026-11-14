// Module ID: 12378
// Function ID: 12379
// Name: GiftCodeStore
// Dependencies: [11665, 502, 1072, 5150, 2169, 6755, 12379, 504, 572, 2]

// Module 12378 (GiftCodeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef2169 from "module_2169" /* 2169 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6755 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 12379 */;
import GiftCodeRecord from "GiftCodeRecord" /* 11665 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_12, first_message;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function updateGiftCode(giftCode) {
  const f104898 = () => {
    let closure_0 = code;
    const value = map.get(code);
    const obj = map;
    if (null != value) {
      if (null != value.expiresAt) {
        const expiresAt = value.expiresAt;
        const valueOfResult = expiresAt.valueOf();
        const obj3 = _modDef2169();
        const diff = valueOfResult - obj3.valueOf();
        if (diff <= 0) {
          obj.delete(code);
          delete closure_9[code];
          giftCodeStore.emitChange();
        } else if (null != closure_9[code]) {
          const _Math = Math;
          closure_9[code].start(Math.min(metroRequire, diff), f104898);
        }
      }
    }
  };
  const fromServer = GiftCodeRecord.createFromServer(giftCode);
  const code = fromServer.code;
  let value = map.get(code);
  if (null != value) {
    let result = fromServer;
    const merge = value.merge;
    set = map.set;
    if (undefined === fromServer.giftSubscriptionAgreement) {
      result = fromServer.set("giftSubscriptionAgreement", value.giftSubscriptionAgreement);
    }
    const result1 = set(code, merge(result));
  } else {
    const result2 = obj2.set(code, fromServer);
    if (null != fromServer.expiresAt) {
      const self = this;
      const self2 = this;
      const timeout = new code(5150).Timeout();
      closure_9[code] = timeout;
      const value2 = obj2.get(code);
      if (null != value2) {
        if (null != value2.expiresAt) {
          let expiresAt = value2.expiresAt;
          let valueOfResult = expiresAt.valueOf();
          const obj4 = _modDef2169();
          let diff = valueOfResult - obj4.valueOf();
          if (diff <= 0) {
            map.delete(code);
            delete closure_9[code];
            giftCodeStore.emitChange();
          } else {
            let obj3 = tmp11[code];
            if (null != obj3) {
              let _Math = Math;
              obj3.start(Math.min(closure_6, diff), f104898);
            }
          }
        }
      }
    }
  }
}
function resolveMessageGiftCodes(message, arg1) {
  let findGiftCodesResult;
  let withGiftSubscriptionAgreement;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  _require = undefined;
  if (flag) {
    if (!set1.has(message.channel_id)) {
      return false;
    }
  }
  let obj = require("GiftCodeUtils");
  const isGiftCodeEmbedResult = obj.isGiftCodeEmbed(message);
  const findGiftCodes = require("GiftCodeUtils").findGiftCodes;
  const tmp3 = require("GiftCodeUtils");
  if (isGiftCodeEmbedResult) {
    let embeds;
    if (message != null) {
      embeds = message.embeds;
    }
    let tmp6;
    if (null != embeds) {
      let url;
      if (message != null) {
        url = message.embeds[0].url;
      }
      tmp6 = url;
    }
    findGiftCodesResult = findGiftCodes(tmp6);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  if (0 === findGiftCodesResult.length) {
    return false;
  } else {
    let tmp9 = message.type === constants2.CUSTOM_GIFT;
    if (!tmp9) {
      tmp9 = null != message.author && message.author.id === AuthenticationStore.getId();
      const tmp11 = null != message.author && message.author.id === AuthenticationStore.getId();
    }
    _require = tmp9;
    const item = findGiftCodesResult.forEach((item) => {
      const hasItem = items.includes(item) || items.includes(item);
      if (!hasItem) {
        if (!items.includes(item)) {
          items = [];
          items[HermesBuiltin.arraySpread(items, items, 0)] = item;
        }
        const obj2 = { withSubscriptionPlan: true, withGiftSubscriptionAgreement };
        const obj = GiftCodeActionCreatorsDefault;
        const giftCode = obj.resolveGiftCode(item, obj2);
        giftCode.catch(metroImportAll);
      }
    });
    return false;
  }
}
function handleMessage(message) {
  resolveMessageGiftCodes(message.message, true);
  return false;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  set1.add(messages.channelId);
  const item = messages.forEach((item) => {
    resolveMessageGiftCodes(item, true);
    return false;
  });
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else if (firstMessages != null) {
    const item = firstMessages.forEach((item) => {
      resolveMessageGiftCodes(item);
      return false;
    });
  }
}
({ AbortCodes: hasOwnProperty, MAX_TIMEOUT_MS: metroRequire, MessageTypes: metroImportDefault, NOOP_NULL: metroImportAll } = Constants);
let closure_9 = {};
const map = new Map();
let items = [];
const authStore2 = [];
items = [];
let set = new Set();
let closure_15 = {};
const authStore3 = {};
const set1 = new Set();
const Store = get_initializedDefault.Store;
class GiftCodeStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  get(arg0) {
    const value = map.get(arg0);
    let tmp = null;
    if (null != value) {
      tmp = null;
      if (!value.isExpired()) {
        tmp = value;
      }
    }
    return tmp;
  }
  getError(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_16[arg0];
    }
    return tmp;
  }
  getForGifterSKUAndPlan(id, skuId, subscriptionPlanId) {
    let closure_0 = id;
    let closure_1 = skuId;
    let closure_2 = subscriptionPlanId;
    const arr = Array.from(map.values());
    return arr.filter((userId) => {
      let tmp = userId.userId === closure_0 && userId.skuId === closure_1;
      if (tmp) {
        tmp = null == closure_2 || userId.subscriptionPlanId === tmp3;
      }
      if (tmp) {
        tmp = !userId.isExpired();
      }
      return tmp;
    });
  }
  getIsResolving(arg0) {
    return items.includes(arg0);
  }
  getIsResolved(giftCode) {
    return items.includes(giftCode);
  }
  getIsAccepting(code) {
    return closure_12.includes(code);
  }
  getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId) {
    const has = set.has;
    const obj = GiftCodeUtils;
    return has(obj.makeComboId(skuId, subscriptionPlanId));
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId) {
    const obj = GiftCodeUtils;
    return closure_15[obj.makeComboId(obj, skuId, subscriptionPlanId)];
  }
  getResolvingCodes() {
    return items;
  }
  getResolvedCodes() {
    return items;
  }
  getAcceptingCodes() {
    return closure_12;
  }
}
const prototype = GiftCodeStore.prototype;
GiftCodeStore.displayName = "GiftCodeStore";
let obj = {
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
  GIFT_CODE_RESOLVE: function handleGiftCodeResolve(code) {
    code = code.code;
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = code;
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    items = items.filter((item) => item !== giftCode.code);
    if (!items.includes(giftCode.code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = giftCode.code;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    const error = code.error;
    items = items.filter((item) => item !== code);
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = code;
    }
    if (null != error) {
      closure_16[code] = error;
    }
  },
  GIFT_CODE_REDEEM: function handleGiftCodeAccept(code) {
    code = code.code;
    if (!closure_12.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, closure_12, 0)] = code;
      closure_12 = items;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    closure_12 = closure_12.filter((item) => item !== code);
    const value = map.get(code);
    const obj = map;
    if (null != value) {
      const obj2 = { redeemed: true, uses: value.uses + 1 };
      const result = obj.set(code, value.merge(obj2));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
    const error = code.error;
    closure_12 = closure_12.filter((item) => item !== code);
    const value = map.get(code);
    closure_16[code] = error;
    if (null != value) {
      const code2 = error.code;
      if (hasOwnProperty.UNKNOWN_GIFT_CODE === code2) {
        const result = obj.set(code, value.set("revoked", true));
      } else if (tmp.INVALID_GIFT_REDEMPTION_EXHAUSTED === code2) {
        const result1 = obj.set(code, value.set("uses", value.maxUses));
      }
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function handleGiftCodeRevoke(code) {
    code = code.code;
    map.delete(code);
    if (null != closure_9[code]) {
      closure_9[code].stop();
      delete tmp3[code];
    }
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = code;
    }
  },
  GIFT_CODE_CREATE_SUCCESS: function handleGiftCodeCreate(giftCode) {
    updateGiftCode(giftCode.giftCode);
  },
  GIFT_CODES_FETCH: function handleGiftCodesFetch(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    const add = set.add;
    const obj = GiftCodeUtils;
    add(obj.makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    let skuId;
    let subscriptionPlanId;
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const obj = GiftCodeUtils;
    const comboId = obj.makeComboId(skuId, subscriptionPlanId);
    closure_15[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    const _delete = set.delete;
    const obj = GiftCodeUtils;
    _delete(obj.makeComboId(skuId, subscriptionPlanId));
  },
  MESSAGE_CREATE: handleMessage,
  MESSAGE_UPDATE: handleMessage,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadRecentMentions(messages) {
    messages = messages.messages;
    const item = messages.forEach((item) => {
      resolveMessageGiftCodes(item);
      return false;
    });
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      resolveMessageGiftCodes(message.message);
      return false;
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((item) => {
          closure_1_19(item);
          return false;
        });
      });
    });
  },
  GIFT_CODE_UPDATE: function handleGiftCodeUpdate(code) {
    code = code.code;
    const uses = code.uses;
    const value = map.get(code);
    const obj = map;
    if (null != value) {
      const _Math = Math;
      const result = obj.set(code, value.set("uses", Math.max(value.uses, uses)));
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
        resolveMessageGiftCodes(first_message);
        flag = false;
      }
      return flag;
    });
  }
};
const giftCodeStore = new GiftCodeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GiftCodeStore.tsx");

export default giftCodeStore;
