// Module ID: 9741
// Function ID: 75758
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9741 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("useSyncGiftOptionsToOrder");
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, arg1) {
  let tmp2;
  arg1 = arg0;
  const dependencyMap = arg1;
  let callback = React.useRef(null);
  const React = React.useRef(null);
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
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    callback(false);
  }, items);
  const items1 = [arg0, arg1, tmp2, callback];
  const effect1 = React.useEffect((self) => {
    if (null != self) {
      const id = self.id;
      self = id;
      closure_3.current = arg1;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = self.revision;
        ref.current = null;
        closure_7.current = 0;
      }
      if (ref7.current !== arg1) {
        closure_7.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== arg1) {
          if (null != ref8.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref8.current);
            ref8.current = null;
          }
          ref3.current = true;
          ref7.current = arg1;
          let obj = self(arg1[3]);
          obj = { orderId: id };
          obj = {};
          ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = arg1);
          obj.giftInfo = obj;
          obj.expectedRevision = ref4.current;
          const updateOrderResult = obj.updateOrder(obj);
          const nextPromise = obj.updateOrder(obj).then((current) => {
            closure_5.current = current;
            closure_2.current = closure_1;
            closure_7.current = 0;
          });
          obj.updateOrder(obj).then((current) => {
            closure_5.current = current;
            closure_2.current = closure_1;
            closure_7.current = 0;
          }).catch((error) => {
            closure_7.current = closure_7.current + 1;
            let obj = { error, orderId: id };
            closure_4.error("Failed to sync gift customization to order", obj);
            obj = { orderId: id };
            const result = id(closure_1[4]).captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: obj });
          }).finally(() => {
            closure_4.current = false;
            if (ref.current !== ref2.current) {
              if (0 === closure_7.current) {
                callback((arg0) => arg0 + 1);
              } else if (closure_7.current < 3) {
                const _setTimeout = setTimeout;
                closure_9.current = setTimeout(() => callback((arg0) => arg0 + 1), 500 * 2 ** (closure_7.current - 1));
              } else {
                callback2(false);
              }
            } else {
              callback2(true);
            }
          });
          const catchPromise = obj.updateOrder(obj).then((current) => {
            closure_5.current = current;
            closure_2.current = closure_1;
            closure_7.current = 0;
          }).catch((error) => {
            closure_7.current = closure_7.current + 1;
            let obj = { error, orderId: id };
            closure_4.error("Failed to sync gift customization to order", obj);
            obj = { orderId: id };
            const result = id(closure_1[4]).captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: obj });
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
    if (null != arg0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          ref6.current = 0;
        }
        let resolved = new Promise((arg0) => {
          let current = ref3.current;
          current.push(arg0);
          current = ref.current;
          if (!current) {
            current = null != ref2.current;
          }
          if (!current) {
            callback((arg0) => arg0 + 1);
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
