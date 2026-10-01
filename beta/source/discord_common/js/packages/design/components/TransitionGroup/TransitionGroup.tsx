// Module ID: 4554
// Function ID: 4555
// Name: TransitionGroup/TransitionGroup
// Dependencies: [32, 19, 21, 2]
// Exports: TransitionItem

// Module 4554 (TransitionGroup/TransitionGroup)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_5, map;

function wrapChildrenDefault(arg0) {
  return arg0;
}
class TransitionGroup {
  constructor(renderItem) {
    const items = renderItem.items;
    renderItem = renderItem.renderItem;
    const getItemKey = renderItem.getItemKey;
    let wrapChildren = renderItem.wrapChildren;
    if (wrapChildren === undefined) {
      wrapChildren = closure_5;
    }
    const lazyCleanUpDelay = renderItem.lazyCleanUpDelay;
    const ref = renderItem.useRef(-1);
    const layoutEffect = renderItem.useLayoutEffect(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    }, []);
    closure_5 = items(renderItem.useState(ref), 2)[1];
    const ref2 = renderItem.useRef(null);
    const items1 = [items, getItemKey, renderItem, lazyCleanUpDelay];
    const memo = renderItem.useMemo(() => {
      let current = ref2.current;
      let keys;
      const _Set = Set;
      let tmp = ref2;
      if (current != null) {
        keys = current.keys();
      }
      const _Set1 = new _Set(keys);
      const tmp4 = _Set1;
      map = new Map(tmp.current);
      function _loop() {
        let tmp6;
        let tmp = closure_2;
        const tmp2 = getItemKey(closure_2);
        let closure_0 = tmp2;
        let value = map.get(tmp2);
        if (null == value) {
          let MOUNTED;
          if (null != ref.current) {
            MOUNTED = obj.ENTERED;
          } else {
            MOUNTED = obj.MOUNTED;
          }
          function _cleanUp2() {
            const current = ref2.current;
            let value;
            const tmp = ref2;
            if (current != null) {
              value = current.get(closure_0);
            }
            if (null != value) {
              if (value.state === constants.YEETED) {
                const current2 = tmp.current;
                if (current2 != null) {
                  current2.delete(closure_0);
                }
                if (null != closure_2_3) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(ref.current);
                  const _setTimeout = setTimeout;
                  ref.current = setTimeout(() => closure_1_5({}), tmp7);
                } else {
                  closure_2_5({});
                }
              }
            }
          }
          tmp6 = { item: tmp, children: renderItem(tmp2, tmp, MOUNTED, _cleanUp2), state: MOUNTED, cleanUp: _cleanUp2, renderItem };
          const obj2 = { item: tmp, children: renderItem(tmp2, tmp, MOUNTED, _cleanUp2), state: MOUNTED, cleanUp: _cleanUp2, renderItem };
        } else {
          let state;
          if (value.item === tmp) {
            if (value.renderItem === renderItem) {
              tmp6 = value;
            }
          }
          const tmp7 = obj;
          const cleanUp = value.cleanUp;
          if (value.state === map.YEETED) {
            state = obj.ENTERED;
          } else {
            state = value.state;
          }
          tmp6 = { item: tmp, children: renderItem(tmp2, tmp, state, value.cleanUp), state, cleanUp, renderItem };
          const obj3 = { item: tmp, children: renderItem(tmp2, tmp, state, value.cleanUp), state, cleanUp, renderItem };
        }
        const result = obj.set(tmp2, tmp6);
        _Set1.delete(tmp2);
      }
      const iter = _Set1[Symbol.iterator]();
      while (iter !== undefined) {
        let closure_2 = iter.next();
        let _loopResult = _loop();
        continue;
      }
      for (const item10035 of tmp4) {
        let tmp7 = item10035;
        let value = map.get(item10035);
        let tmp9 = value;
        if (null != value) {
          let tmp25 = lazyCleanUpDelay;
          if (tmp9.state === lazyCleanUpDelay.YEETED) {
            if (tmp9.renderItem === map) {
              let result = map.set(tmp7, tmp9);
            }
          }
          let obj = { item: tmp9.item, children: map(tmp7, tmp9.item, tmp25.YEETED, tmp9.cleanUp), state: tmp25.YEETED, cleanUp, renderItem: map };
          let cleanUp = tmp9.cleanUp;
          if (null != obj.children) {
            let result1 = map.set(tmp7, tmp18);
          } else {
            let deleteResult = map.delete(tmp7);
          }
        }
        continue;
      }
      return map;
    }, items1);
    const items2 = [memo];
    const insertionEffect = renderItem.useInsertionEffect(() => {
      ref.current = memo;
      return () => {
        const current = ref.current;
        let clearResult;
        if (current != null) {
          clearResult = current.clear();
        }
        return clearResult;
      };
    }, items2);
    const items3 = [];
    for (const item10037 of memo) {
      let tmp4 = items;
      let arr = items3.push(items(item10037, 2)[1].children);
      continue;
    }
    let wrapChildrenResult = null;
    if (items3.length > 0) {
      wrapChildrenResult = wrapChildren(items3, items);
    }
    return wrapChildrenResult;
  }
}
function getSingleItemKey() {
  return "key";
}
const jsx = Fragment.jsx;
const TransitionStates = { MOUNTED: 0, [0]: "MOUNTED", ENTERED: 1, [1]: "ENTERED", YEETED: 2, [2]: "YEETED" };
let closure_4 = {};
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/TransitionGroup/TransitionGroup.tsx");

export { TransitionStates };
export { TransitionGroup };
export const TransitionItem = function TransitionItem(renderItem) {
  const item = renderItem.item;
  let items = [item];
  return <TransitionGroup items={react.useMemo(() => {
    let items1;
    if (null != item) {
      const items = [tmp];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items)} renderItem={arg0.renderItem} getItemKey={getSingleItemKey} />;
};
