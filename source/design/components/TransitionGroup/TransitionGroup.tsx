// Module ID: 4472
// Function ID: 39531
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: TransitionItem

// Module 4472 (_createForOfIteratorHelperLoose)
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
function wrapChildrenDefault(arg0) {
  return arg0;
}
class TransitionGroup {
  constructor(arg0) {
    items = global.items;
    importDefault = items;
    renderItem = global.renderItem;
    importAll = renderItem;
    getItemKey = global.getItemKey;
    jsx = getItemKey;
    wrapChildren = global.wrapChildren;
    if (wrapChildren === undefined) {
      wrapChildren = wrapChildrenDefault;
    }
    lazyCleanUpDelay = global.lazyCleanUpDelay;
    jsx = lazyCleanUpDelay;
    closure_4 = undefined;
    closure_5 = undefined;
    _arrayLikeToArray = undefined;
    wrapChildrenDefault = undefined;
    closure_4 = require("module_4294967295");
    layoutEffect = importAll.useLayoutEffect(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
    }, []);
    closure_5 = importDefault(importAll.useState(closure_4), 2)[1];
    _arrayLikeToArray = importAll.useRef(null);
    items = [, , , ];
    items[0] = items;
    items[1] = getItemKey;
    items[2] = renderItem;
    items[3] = lazyCleanUpDelay;
    memo = importAll.useMemo(() => {
      let done;
      let iter4;
      const current = ref2.current;
      let keys;
      if (null != current) {
        keys = current.keys();
      }
      const set = new Set(keys);
      const items = set;
      const map = new Map(ref2.current);
      const renderItem = map;
      function _loop() {
        const tmp = callback(callback);
        const value = map.get(tmp);
        if (null == value) {
          if (null != ref.current) {
            let MOUNTED = constants.ENTERED;
          } else {
            MOUNTED = constants.MOUNTED;
          }
          function _cleanUp() {
            const current = ref2.current;
            let value;
            if (null != current) {
              value = current.get(tmp);
            }
            if (null != value) {
              if (value.state === constants.YEETED) {
                const current2 = ref2.current;
                if (null != current2) {
                  current2.delete(tmp);
                }
                if (null != constants) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(ref.current);
                  const _setTimeout = setTimeout;
                  ref.current = setTimeout(() => callback({}), constants);
                } else {
                  callback({});
                }
              }
            }
          }
          let obj = { item: callback, children: map(tmp, callback, MOUNTED, _cleanUp), state: MOUNTED, cleanUp: _cleanUp, renderItem: map };
        } else {
          if (value.item === callback) {
            if (value.renderItem === map) {
              let tmp5 = value;
            }
            const result = map.set(tmp, tmp5);
            set.delete(tmp);
          }
          if (value.state === constants.YEETED) {
            let state = constants.ENTERED;
          } else {
            state = value.state;
          }
          obj = { item: callback, children: map(tmp, callback, state, value.cleanUp), state, cleanUp: value.cleanUp, renderItem: map };
          tmp5 = obj;
        }
      }
      const tmp3 = callback(items);
      let iter = tmp3();
      if (!iter.done) {
        do {
          closure_2 = iter.value;
          let _loopResult = _loop();
          let iter2 = tmp3();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const tmp5 = callback(set);
      let iter3 = tmp5();
      if (!iter3.done) {
        do {
          let value = iter3.value;
          value = map.get(value);
          if (null != value) {
            let tmp15 = closure_3;
            if (value.state === closure_3.YEETED) {
              let tmp7 = closure_1;
              if (value.renderItem === closure_1) {
                let result = map.set(value, value);
              }
            }
            let obj = { item: value.item };
            let tmp9 = closure_1;
            let tmp10 = closure_3;
            let tmp11 = value;
            obj.children = closure_1(value, value.item, closure_3.YEETED, value.cleanUp);
            let tmp12 = closure_3;
            obj.state = closure_3.YEETED;
            obj.cleanUp = value.cleanUp;
            obj.renderItem = closure_1;
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
    wrapChildrenDefault = memo;
    items1 = [];
    items1[0] = memo;
    insertionEffect = importAll.useInsertionEffect(() => {
      closure_6.current = memo;
      return () => {
        const current = ref.current;
        let clearResult;
        if (null != current) {
          clearResult = current.clear();
        }
        return clearResult;
      };
    }, items1);
    items2 = [];
    tmp4 = closure_5(memo);
    iter = tmp4();
    if (!iter.done) {
      do {
        tmp5 = closure_0;
        arr = items2.push(closure_0(iter.value, 2)[1].children);
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const obj = { MOUNTED: 0, [0]: "MOUNTED", ENTERED: 1, [1]: "ENTERED", YEETED: 2, [2]: "YEETED" };
let closure_4 = {};
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/components/TransitionGroup/TransitionGroup.tsx");

export const TransitionStates = obj;
export { TransitionGroup };
export const TransitionItem = function TransitionItem(item) {
  item = item.item;
  let closure_0 = item;
  const items = [item];
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
