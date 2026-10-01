// Module ID: 10470
// Function ID: 10471
// Name: useSyncGiftOptionsToOrder
// Dependencies: [32, 19, 6844, 3, 10164, 6849, 4503, 2]
// Exports: default

// Module 10470 (useSyncGiftOptionsToOrder)
import LoggerDefault from "Logger" /* 3 */;
import BillingUtils from "BillingUtils" /* 4503 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import useGiftOptionsSyncDebounceDefault from "useGiftOptionsSyncDebounce" /* 10164 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_5 = NativeCheckoutStore.useNativeCheckoutStoreOrNull;
const tmp2 = new LoggerDefault("useSyncGiftOptionsToOrder");
let closure_6 = tmp2;
let result = size.fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, current) {
  let first;
  let ref;
  let ref2;
  let ref3;
  let tmp3;
  let closure_0 = arg0;
  importDefault = current;
  dependencyMap = react.useRef(null);
  _slicedToArray = react.useRef(null);
  react = react.useRef(false);
  const ref4 = react.useRef(undefined);
  const ref5 = react.useRef(null);
  const ref6 = react.useRef(0);
  const ref7 = react.useRef(null);
  const ref8 = react.useRef(null);
  [first, tmp3] = react.useState(0);
  let closure_10 = tmp3;
  const tmp4 = ref4((setOrderRevision) => setOrderRevision.setOrderRevision);
  let closure_11 = tmp4;
  let tmp5 = useGiftOptionsSyncDebounceDefault(tmp3);
  const waitForPause = tmp5.waitForPause;
  const flush = tmp5.flush;
  const waitForSync = tmp5.waitForSync;
  const resolveSyncs = tmp5.resolveSyncs;
  const effect = react.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
  }, []);
  const items = [arg0, current, first, resolveSyncs, tmp4, waitForPause];
  const effect1 = react.useEffect(() => {
    let id;
    let logger;
    let obj5;
    const tmp = id;
    if (null != id) {
      let tmp8;
      id = tmp.id;
      let tmp5 = current;
      ref2.current = current;
      if (ref5.current !== id) {
        ref5.current = id;
        const tmp9 = ref4;
        ref4.current = tmp.revision;
        ref.current = null;
        ref7.current = null;
        ref4.current = 0;
        tmp8 = ref4;
      } else {
        tmp8 = tmp6;
        const tmp7 = null == ref4.current || tmp.revision > ref4.current;
        if (tmp7) {
          ref4.current = tmp.revision;
          tmp8 = tmp6;
        }
      }
      if (ref7.current !== tmp5) {
        ref4.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== tmp5) {
          const tmp19 = null != tmp13.current && tmp13.current !== tmp5 && waitForPause(tmp5);
          if (!tmp19) {
            if (null != ref8.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref8.current);
              ref8.current = null;
            }
            tmp15.current = true;
            ref7.current = tmp5;
            let obj = closure_0(ref[5]);
            let obj2 = { orderId: id, giftInfo: obj5, expectedRevision: tmp8.current };
            obj5 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
            ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = tmp5);
            const updateOrderResult = obj.updateOrder(obj2);
            const nextPromise = updateOrderResult.then((current) => {
              if (logger.current === id) {
                const tmp5 = null == ref3.current || current > ref3.current;
                if (tmp5) {
                  ref3.current = current;
                }
                ref.current = current;
                ref6.current = 0;
                if (closure_11 != null) {
                  tmp9(tmp, current);
                }
              }
            });
            const catchPromise = nextPromise.catch((error) => {
              ref4.current = ref4.current + 1;
              const obj = { error, orderId: id };
              logger.error("Failed to sync gift customization to order", obj);
              const obj2 = BillingUtils;
              const obj3 = { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } };
              const result = obj2.captureBillingException(error, obj3);
            });
            catchPromise.finally(() => {
              ref3.current = false;
              if (ref.current !== ref2.current) {
                if (0 === ref4.current) {
                  closure_1_10((arg0) => arg0 + 1);
                } else if (ref4.current < 3) {
                  const _setTimeout = setTimeout;
                  ref8.current = setTimeout(() => closure_1_10((arg0) => arg0 + 1), 500 * 2 ** (ref4.current - 1));
                } else {
                  resolveSyncs(false);
                }
              } else {
                resolveSyncs(true);
              }
            });
          }
        } else {
          resolveSyncs(true);
        }
      }
    } else {
      resolveSyncs(true);
    }
  }, items);
  const items1 = [arg0, flush, waitForSync];
  const awaitSync = react.useCallback(() => {
    if (null != closure_0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          tmp3.current = 0;
        }
        flush(tmp2.current);
        current = ref3.current;
        const tmp7 = waitForSync();
        if (!current) {
          current = null != ref8.current;
        }
        if (!current) {
          closure_10((arg0) => arg0 + 1);
        }
        return tmp7;
      }
    }
    return Promise.resolve(true);
  }, items1);
  const items2 = [awaitSync];
  return react.useMemo(() => ({ awaitSync }), items2);
};
