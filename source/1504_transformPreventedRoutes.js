// Module ID: 1504
// Function ID: 17319
// Name: transformPreventedRoutes
// Dependencies: [57, 65, 31, 33, 1465, 1502, 1483, 1503, 1505]
// Exports: default

// Module 1504 (transformPreventedRoutes)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function transformPreventedRoutes(arr) {
  return callback2(arr.values()).reduce((arg0, routeKey) => {
    routeKey = routeKey.routeKey;
    const obj = {};
    let preventRemove;
    if (null != arg0[routeKey]) {
      preventRemove = tmp.preventRemove;
    }
    if (!preventRemove) {
      preventRemove = routeKey.preventRemove;
    }
    obj.preventRemove = preventRemove;
    arg0[routeKey] = obj;
    return arg0;
  }, {});
}

export default function PreventRemoveProvider(children) {
  const first = callback(setPreventRemove.useState(() => first(1465).nanoid()), 1)[0];
  const tmp3 = callback(setPreventRemove.useState(new Map()), 2);
  const first1 = tmp3[0];
  let dependencyMap = tmp3[1];
  callback = setPreventRemove.useContext(first1(1502));
  const context = setPreventRemove.useContext(first1(1483));
  const context1 = setPreventRemove.useContext(first1(1503));
  setPreventRemove = undefined;
  if (null != context1) {
    setPreventRemove = context1.setPreventRemove;
  }
  const tmp7 = first1(1505)((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const dependencyMap = arg2;
    if (arg2) {
      if (null != state) {
        if (null != state) {
          const routes = state.getState().routes;
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Couldn't find a route with the key " + arg1 + ". Is your component inside NavigationContent?");
      throw error;
    }
    dependencyMap((get) => {
      let value = get.get(closure_0);
      let routeKey;
      if (null != value) {
        routeKey = value.routeKey;
      }
      if (closure_1 === routeKey) {
        value = get.get(closure_0);
        let preventRemove;
        if (null != value) {
          preventRemove = value.preventRemove;
        }
        if (tmp4 === preventRemove) {
          return get;
        }
        tmp4 = closure_2;
      }
      const map = new Map(get);
      if (closure_2) {
        const obj = { routeKey: closure_1, preventRemove: closure_2 };
        const result = map.set(closure_0, obj);
      } else {
        map.delete(closure_0);
      }
      return map;
    });
  });
  const jsx = tmp7;
  let map = new Map();
  const someResult = context(first1.values()).some((preventRemove) => preventRemove.preventRemove);
  const transformPreventedRoutes = someResult;
  const items = [first, someResult, , ];
  let key;
  if (null != context) {
    key = context.key;
  }
  items[2] = key;
  items[3] = setPreventRemove;
  const effect = setPreventRemove.useEffect(() => {
    let key;
    if (null != context) {
      key = context.key;
    }
    if (undefined !== key) {
      if (undefined !== setPreventRemove) {
        setPreventRemove(first, context.key, closure_7);
        return () => {
          outer1_5(outer1_0, outer1_4.key, false);
        };
      }
    }
  }, items);
  const items1 = [tmp7, first1];
  let value = setPreventRemove.useMemo(() => ({ setPreventRemove: closure_6, preventedRoutes: someResult(first1) }), items1);
  return jsx(first1(1503).Provider, { value, children: children.children });
};
