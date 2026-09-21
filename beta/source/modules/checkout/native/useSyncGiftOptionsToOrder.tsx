// Module ID: 11127
// Function ID: 11128
// Name: useSyncGiftOptionsToOrder
// Dependencies: [32, 19, 7668, 3, 558, 568, 7673, 4433, 2]

// Module 11127 (useSyncGiftOptionsToOrder)
import LoggerDefault from "Logger" /* 3 */;
import BillingUtils from "BillingUtils" /* 4433 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
fn(7668).useNativeCheckoutStoreOrNull;
const ReactCompilerGating = fn(558);
let tmp2 = new LoggerDefault("useSyncGiftOptionsToOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, current) => {
  _require = arg0;
  dependencyMap = current;
  const cResult = require("c").c(18);
  let obj = require("c");
  noop = noop.useRef(null);
  ref = noop.useRef(null);
  noop.useRef(undefined);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  closure_10 = obj2.useRef(first);
  ref2 = noop.useRef(false);
  [r10045, closure_11] = ref(noop.useState(0), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        return arg0.setOrderRevision;
      }
    }
    cResult[1] = T;
    const tmp4 = T;
  } else {
    class T {
      constructor(arg0) {
        return arg0.setOrderRevision;
      }
    }
  }
  let tmp5 = ref2(tmp4);
  closure_12 = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        return arg0.setOrderRevision;
      }
    }
    cResult[2] = tmp7;
  } else {
    class T {
      constructor(arg0) {
        return arg0.setOrderRevision;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return () => { ... };
      }
    }
    const items1 = [tmp6];
    cResult[3] = P;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = P;
  } else {
    class P {
      constructor() {
        return () => { ... };
      }
    }
    tmp9 = cResult[4];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[5] === current) {
    class P {
      constructor() {
        return () => { ... };
      }
    }
  }
  class G {
    constructor() {
      tmp = id;
      if (null != id) {
        id = tmp.id;
        tmp4 = closure_3;
        tmp5 = closure_1;
        closure_3.current = closure_1;
        if (closure_6.current !== id) {
          closure_6.current = id;
          tmp9 = closure_5;
          closure_5.current = tmp.revision;
          tmp10 = closure_2;
          closure_2.current = null;
          tmp11 = closure_7;
          num = 0;
          closure_7.current = 0;
          tmp8 = closure_5;
        } else {
          tmp6 = closure_5;
          tmp7 = null == closure_5.current || tmp.revision > tmp6.current;
          tmp8 = tmp6;
          if (tmp7) {
            tmp6.current = tmp.revision;
            tmp8 = tmp6;
          }
        }
        tmp12 = closure_8;
        if (closure_8.current !== tmp5) {
          tmp13 = closure_7;
          num2 = 0;
          closure_7.current = 0;
        }
        if (!closure_4.current) {
          tmp15 = closure_2;
          if (closure_2.current !== tmp5) {
            tmp18 = closure_9;
            if (null != closure_9.current) {
              tmp19 = globalThis;
              _clearTimeout = clearTimeout;
              clearTimeoutResult = clearTimeout(tmp18.current);
              tmp18.current = null;
            }
            flag3 = true;
            tmp14.current = true;
            tmp12.current = tmp5;
            tmp21 = closure_0;
            tmp22 = closure_1;
            obj = closure_0(closure_1[6]);
            obj1 = { orderId: null, giftInfo: null, expectedRevision: null };
            obj1.orderId = id;
            obj4 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
            ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = tmp5);
            obj1.giftInfo = obj4;
            obj1.expectedRevision = tmp8.current;
            updateOrderResult = obj.updateOrder(obj1);
            nextPromise = updateOrderResult.then(() => { ... });
            catchPromise = nextPromise.catch(() => { ... });
            cleanupPromise = catchPromise.finally(() => { ... });
          } else {
            tmp16 = closure_13;
            flag2 = true;
            tmp17 = closure_13(true);
          }
        }
      } else {
        tmp2 = closure_13;
        flag = true;
        tmp3 = closure_13(true);
      }
      return;
    }
  }
  cResult[5] = current;
  cResult[6] = arg0;
  cResult[7] = tmp5;
  cResult[8] = G;
}) : ((arg0, current) => {
  closure_0 = arg0;
  noop = noop.useRef(null);
  ref = noop.useRef(null);
  noop.useRef(undefined);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  closure_10 = noop.useRef([]);
  const tmp = ref(noop.useState(0), 2);
  closure_11 = tmp[1];
  const tmp2 = noop.useRef(false)((setOrderRevision) => setOrderRevision.setOrderRevision);
  closure_12 = tmp2;
  const callback = noop.useCallback((arg0) => {
    closure_10.current = [];
    for (const item10008 of tmp) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [callback];
  const effect = noop.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    callback(false);
  }, items);
  const items1 = [arg0, current, tmp[0], callback, tmp2];
  const effect1 = noop.useEffect(() => {
    if (null != id) {
      id = tmp.id;
      ref2.current = current;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = tmp.revision;
        ref.current = null;
        ref4.current = 0;
        let tmp8 = ref4;
      } else {
        tmp8 = tmp6;
        if (tmp7) {
          tmp6.current = tmp.revision;
          tmp8 = tmp6;
        }
        tmp7 = null == ref4.current || tmp.revision > ref4.current;
      }
      if (ref7.current !== current) {
        ref4.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== tmp5) {
          if (null != ref8.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp18.current);
            tmp18.current = null;
          }
          tmp14.current = true;
          tmp12.current = tmp5;
          const obj2 = { orderId: id, giftInfo: null, expectedRevision: null };
          ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = tmp5);
          obj2.giftInfo = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
          obj2.expectedRevision = tmp8.current;
          const obj = closure_0(current[6]);
          const obj5 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
          const updateOrderResult = closure_0(current[6]).updateOrder(obj2);
          const nextPromise = closure_0(current[6]).updateOrder(obj2).then((current) => {
            if (ref3.current === id) {
              if (tmp5) {
                tmp3.current = current;
              }
              closure_2.current = current;
              closure_7.current = 0;
              if (closure_12 != null) {
                tmp9(tmp, current);
              }
              tmp5 = null == logger.current || current > logger.current;
            }
          });
          closure_0(current[6]).updateOrder(obj2).then((current) => {
            if (ref3.current === id) {
              if (tmp5) {
                tmp3.current = current;
              }
              closure_2.current = current;
              closure_7.current = 0;
              if (closure_12 != null) {
                tmp9(tmp, current);
              }
              tmp5 = null == logger.current || current > logger.current;
            }
          }).catch((error) => {
            ref4.current = ref4.current + 1;
            logger.error("Failed to sync gift customization to order", { error, orderId: id });
            const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
          }).finally(() => {
            ref3.current = false;
            if (ref.current !== ref2.current) {
              if (0 === ref4.current) {
                closure_1_11((arg0) => arg0 + 1);
              } else if (tmp3.current < 3) {
                const _setTimeout = setTimeout;
                ref8.current = setTimeout(() => closure_1_11((arg0) => arg0 + 1), 500 * 2 ** (tmp3.current - 1));
              } else {
                callback(false);
              }
            } else {
              callback(true);
            }
          });
          const catchPromise = closure_0(current[6]).updateOrder(obj2).then((current) => {
            if (ref3.current === id) {
              if (tmp5) {
                tmp3.current = current;
              }
              closure_2.current = current;
              closure_7.current = 0;
              if (closure_12 != null) {
                tmp9(tmp, current);
              }
              tmp5 = null == logger.current || current > logger.current;
            }
          }).catch((error) => {
            ref4.current = ref4.current + 1;
            logger.error("Failed to sync gift customization to order", { error, orderId: id });
            const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
          });
        } else {
          callback(true);
        }
      }
      tmp12 = ref7;
    } else {
      callback(true);
    }
  }, items1);
  const items2 = [arg0];
  const callback1 = noop.useCallback(() => {
    if (null != closure_0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          tmp3.current = 0;
        }
        let resolved = new Promise((arg0) => {
          const current1 = ref3.current;
          current1.push(arg0);
          current = ref.current;
          if (!current) {
            current = null != ref2.current;
          }
          if (!current) {
            closure_1_11((arg0) => arg0 + 1);
          }
        });
      }
      return resolved;
    }
    resolved = Promise.resolve(true);
  }, items2);
  const items3 = [callback1];
  return noop.useMemo(() => ({ awaitSync: callback1 }), items3);
});
