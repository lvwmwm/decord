// Module ID: 9783
// Function ID: 76035
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 3, 6668, 3791, 2]
// Exports: default

// Module 9783 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import importDefaultResult from "getOrders";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
importDefaultResult = new importDefaultResult("useSyncGiftOptionsToOrder");
let result = require("timestamp").fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, arg1) {
  let closure_11;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let callback = React.useRef(null);
  React = React.useRef(null);
  let closure_4 = React.useRef(false);
  let closure_5 = React.useRef(undefined);
  let closure_6 = React.useRef(null);
  let closure_7 = React.useRef(0);
  let closure_8 = React.useRef(null);
  let closure_9 = React.useRef(null);
  let closure_10 = React.useRef([]);
  [tmp2, closure_11] = callback(React.useState(0), 2);
  callback = React.useCallback((arg0) => {
    let done;
    ref9.current = [];
    const tmp = ref4(ref9.current);
    let iter = tmp();
    if (!iter.done) {
      do {
        let valueResult = iter.value(arg0);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => () => {
    if (null != outer1_9.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_9.current);
    }
    outer1_12(false);
  }, items);
  const items1 = [arg0, arg1, tmp2, callback];
  const effect1 = React.useEffect(() => {
    if (null != id) {
      id = id.id;
      result.current = table;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = id.revision;
        ref.current = null;
        closure_7.current = 0;
      }
      if (ref7.current !== table) {
        closure_7.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== table) {
          if (null != ref8.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref8.current);
            ref8.current = null;
          }
          ref3.current = true;
          ref7.current = table;
          let obj = callback(table[3]);
          obj = { orderId: id };
          obj = {};
          ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = table);
          obj.giftInfo = obj;
          obj.expectedRevision = ref4.current;
          const updateOrderResult = obj.updateOrder(obj);
          const nextPromise = obj.updateOrder(obj).then((current) => {
            outer1_5.current = current;
            outer1_2.current = outer1_1;
            outer1_7.current = 0;
          });
          obj.updateOrder(obj).then((current) => {
            outer1_5.current = current;
            outer1_2.current = outer1_1;
            outer1_7.current = 0;
          }).catch((error) => {
            outer1_7.current = outer1_7.current + 1;
            let obj = { error, orderId: id };
            logger.error("Failed to sync gift customization to order", obj);
            obj = { orderId: id };
            const result = id(table[4]).captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: obj });
          }).finally(() => {
            outer1_4.current = false;
            if (outer1_2.current !== outer1_3.current) {
              if (0 === outer1_7.current) {
                outer1_11((arg0) => arg0 + 1);
              } else if (outer1_7.current < 3) {
                const _setTimeout = setTimeout;
                outer1_9.current = setTimeout(() => outer2_11((arg0) => arg0 + 1), 500 * 2 ** (outer1_7.current - 1));
              } else {
                outer1_12(false);
              }
            } else {
              outer1_12(true);
            }
          });
          const catchPromise = obj.updateOrder(obj).then((current) => {
            outer1_5.current = current;
            outer1_2.current = outer1_1;
            outer1_7.current = 0;
          }).catch((error) => {
            outer1_7.current = outer1_7.current + 1;
            let obj = { error, orderId: id };
            logger.error("Failed to sync gift customization to order", obj);
            obj = { orderId: id };
            const result = id(table[4]).captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: obj });
          });
        } else {
          callback(true);
        }
      }
    } else {
      callback(true);
    }
  }, items1);
  const items2 = [arg0];
  const callback1 = React.useCallback(() => {
    if (null != closure_0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          ref6.current = 0;
        }
        let resolved = new Promise((arg0) => {
          let current = outer1_10.current;
          current.push(arg0);
          current = outer1_4.current;
          if (!current) {
            current = null != outer1_9.current;
          }
          if (!current) {
            outer1_11((arg0) => arg0 + 1);
          }
        });
      }
      return resolved;
    }
    resolved = Promise.resolve(true);
  }, items2);
  const items3 = [callback1];
  return React.useMemo(() => ({ awaitSync: callback1 }), items3);
};
