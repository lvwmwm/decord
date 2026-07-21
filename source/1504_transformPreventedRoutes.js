// Module ID: 1504
// Function ID: 17317
// Name: transformPreventedRoutes
// Dependencies: []
// Exports: default

// Module 1504 (transformPreventedRoutes)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
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
  const first = callback(React.useState(() => first(closure_2[4]).nanoid()), 1)[0];
  const arg1 = first;
  const tmp3 = callback(React.useState(new Map()), 2);
  const first1 = tmp3[0];
  const importDefault = first1;
  let closure_2 = tmp3[1];
  const callback = React.useContext(importDefault(closure_2[5]));
  const context = React.useContext(importDefault(closure_2[6]));
  const callback2 = context;
  const context1 = React.useContext(importDefault(closure_2[7]));
  let setPreventRemove;
  if (null != context1) {
    setPreventRemove = context1.setPreventRemove;
  }
  const React = setPreventRemove;
  const tmp7 = importDefault(closure_2[8])((arg0, arg1, arg2) => {
    const first = arg0;
    const first1 = arg1;
    const callback = arg2;
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
    callback((get) => {
      let value = get.get(get);
      let routeKey;
      if (null != value) {
        routeKey = value.routeKey;
      }
      if (arg1 === routeKey) {
        value = get.get(get);
        let preventRemove;
        if (null != value) {
          preventRemove = value.preventRemove;
        }
        if (tmp4 === preventRemove) {
          return get;
        }
        const tmp4 = arg2;
      }
      const map = new Map(get);
      if (arg2) {
        const obj = { routeKey: arg1, preventRemove: arg2 };
        const result = map.set(get, obj);
      } else {
        map.delete(get);
      }
      return map;
    });
  });
  const jsx = tmp7;
  const map = new Map();
  const someResult = callback2(first1.values()).some((preventRemove) => preventRemove.preventRemove);
  const transformPreventedRoutes = someResult;
  const items = [first, someResult, , ];
  let key;
  if (null != context) {
    key = context.key;
  }
  items[2] = key;
  items[3] = setPreventRemove;
  const effect = React.useEffect(() => {
    let key;
    if (null != context) {
      key = context.key;
    }
    if (undefined !== key) {
      if (undefined !== setPreventRemove) {
        setPreventRemove(first, context.key, someResult);
        return () => {
          callback(closure_0, key.key, false);
        };
      }
    }
  }, items);
  const items1 = [tmp7, first1];
  const value = React.useMemo(() => ({ setPreventRemove: tmp7, preventedRoutes: someResult(first1) }), items1);
  return jsx(importDefault(closure_2[7]).Provider, { value, children: children.children });
};
