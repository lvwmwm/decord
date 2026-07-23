// Module ID: 4476
// Function ID: 39571
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 33, 2]
// Exports: TransitionItem

// Module 4476 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

function _createForOfIteratorHelperLoose(iterable) {
  let _slicedToArray = iterable;
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
      _slicedToArray = tmp;
    }
    let c1 = 0;
    return () => {
      if (result >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        result = tmp3 + 1;
        obj.value = length[+result];
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
function wrapChildrenDefault(arg0) {
  return arg0;
}
class TransitionGroup {
  constructor(arg0) {
    items = global.items;
    renderItem = global.renderItem;
    getItemKey = global.getItemKey;
    wrapChildren = global.wrapChildren;
    if (wrapChildren === undefined) {
      wrapChildren = useRef;
    }
    lazyCleanUpDelay = global.lazyCleanUpDelay;
    c4 = undefined;
    c5 = undefined;
    useRef = undefined;
    useRef = undefined;
    c4 = require("module_4294967295");
    layoutEffect = renderItem.useLayoutEffect(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
    }, []);
    c5 = items(renderItem.useState(c4), 2)[1];
    useRef = renderItem.useRef(null);
    items = [, , , ];
    items[0] = items;
    items[1] = getItemKey;
    items[2] = renderItem;
    items[3] = lazyCleanUpDelay;
    memo = renderItem.useMemo(() => {
      let done;
      let iter4;
      let current = ref2.current;
      let keys;
      if (null != current) {
        keys = current.keys();
      }
      const set = new Set(keys);
      const map = new Map(ref2.current);
      function _loop() {
        const tmp = outer1_2(closure_2);
        let value = map.get(tmp);
        if (null == value) {
          if (null != outer1_6.current) {
            let MOUNTED = lazyCleanUpDelay.ENTERED;
          } else {
            MOUNTED = lazyCleanUpDelay.MOUNTED;
          }
          function _cleanUp() {
            const current = outer2_6.current;
            let value;
            if (null != current) {
              value = current.get(_slicedToArray);
            }
            if (null != value) {
              if (value.state === lazyCleanUpDelay.YEETED) {
                const current2 = outer2_6.current;
                if (null != current2) {
                  current2.delete(_slicedToArray);
                }
                if (null != outer2_3) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(outer2_4.current);
                  const _setTimeout = setTimeout;
                  outer2_4.current = setTimeout(() => outer3_5({}), outer2_3);
                } else {
                  outer2_5({});
                }
              }
            }
          }
          let obj = { item: closure_2, children: map(tmp, closure_2, MOUNTED, _cleanUp), state: MOUNTED, cleanUp: _cleanUp, renderItem: map };
        } else {
          if (value.item === closure_2) {
            if (value.renderItem === map) {
              let tmp5 = value;
            }
            const result = map.set(tmp, tmp5);
            set.delete(tmp);
          }
          if (value.state === lazyCleanUpDelay.YEETED) {
            let state = lazyCleanUpDelay.ENTERED;
          } else {
            state = value.state;
          }
          obj = { item: closure_2, children: map(tmp, closure_2, state, value.cleanUp), state, cleanUp: value.cleanUp, renderItem: map };
          tmp5 = obj;
        }
      }
      const tmp3 = callback(set);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let getItemKey = iter.value;
          let _loopResult = _loop();
          let iter2 = tmp3();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      let tmp5 = callback(set);
      let iter3 = tmp5();
      if (!iter3.done) {
        do {
          let value = iter3.value;
          value = map.get(value);
          if (null != value) {
            let tmp15 = lazyCleanUpDelay;
            if (value.state === lazyCleanUpDelay.YEETED) {
              let tmp7 = map;
              if (value.renderItem === map) {
                let result = map.set(value, value);
              }
            }
            let obj = { item: value.item };
            let tmp9 = map;
            let tmp10 = lazyCleanUpDelay;
            let tmp11 = value;
            obj.children = map(value, value.item, lazyCleanUpDelay.YEETED, value.cleanUp);
            let tmp12 = lazyCleanUpDelay;
            obj.state = lazyCleanUpDelay.YEETED;
            obj.cleanUp = value.cleanUp;
            obj.renderItem = map;
            if (null != obj.children) {
              let result1 = map.set(value, obj);
            } else {
              let deleteResult = map.delete(value);
            }
          }
          iter4 = tmp5();
          iter3 = iter4;
        } while (!iter4.done);
      }
      return map;
    }, items);
    useRef = memo;
    items1 = [];
    items1[0] = memo;
    insertionEffect = renderItem.useInsertionEffect(() => {
      closure_6.current = memo;
      return () => {
        const current = outer1_6.current;
        let clearResult;
        if (null != current) {
          clearResult = current.clear();
        }
        return clearResult;
      };
    }, items1);
    items2 = [];
    tmp4 = c5(memo);
    iter = tmp4();
    if (!iter.done) {
      do {
        tmp5 = items;
        arr = items2.push(items(iter.value, 2)[1].children);
        iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    wrapChildrenResult = null;
    if (items2.length > 0) {
      wrapChildrenResult = wrapChildren(items2, items);
    }
    return wrapChildrenResult;
  }
}
function getSingleItemKey() {
  return "key";
}
let obj = { MOUNTED: 0, [0]: "MOUNTED", ENTERED: 1, [1]: "ENTERED", YEETED: 2, [2]: "YEETED" };
let closure_4 = {};
let result = require("jsxProd").fileFinishedImporting("design/components/TransitionGroup/TransitionGroup.tsx");

export const TransitionStates = obj;
export { TransitionGroup };
export const TransitionItem = function TransitionItem(item) {
  item = item.item;
  let items = [item];
  return <TransitionGroup items={React.useMemo(() => {
    if (null != item) {
      const items = [item];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items)} renderItem={arg0.renderItem} getItemKey={getSingleItemKey} />;
};
