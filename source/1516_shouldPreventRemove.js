// Module ID: 1516
// Function ID: 17410
// Name: shouldPreventRemove
// Dependencies: []
// Exports: default

// Module 1516 (shouldPreventRemove)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = Symbol("VISITED_ROUTE_KEYS");
function shouldPreventRemove(emitter, beforeRemoveListeners, routes, routes2, target) {
  let closure_0 = routes2.map((key) => key.key);
  const found = routes.filter((key) => !closure_0.includes(key.key));
  const reversed = found.reverse();
  let set = target[closure_4];
  if (null == set) {
    const _Set = Set;
    set = new Set();
  }
  const merged = Object.assign({}, target, callback({}, closure_4, set));
  const iter = reversed[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp20 = nextResult;
    let tmp21 = set;
    if (!obj2.has(nextResult.key)) {
      let tmp8 = beforeRemoveListeners;
      let tmp9 = nextResult;
      let tmp10 = beforeRemoveListeners[tmp20.key];
      let obj3 = tmp10;
      let callResult;
      if (null != tmp10) {
        let tmp12 = tmp10;
        let tmp13 = beforeRemoveListeners;
        let tmp14 = merged;
        callResult = obj3.call(beforeRemoveListeners, merged);
      }
      if (callResult) {
        iter.return();
        return true;
      } else {
        let tmp15 = set;
        let tmp16 = nextResult;
        let addResult = obj2.add(tmp20.key);
        let tmp18 = emitter;
        let obj = { type: "beforeRemove", target: tmp20.key };
        obj = {};
        let tmp19 = merged;
        obj.action = merged;
        obj.data = obj;
        obj.canPreventDefault = true;
        if (emitter.emit(obj).defaultPrevented) {
          iter.return();
          return true;
        }
      }
    }
    // continue
  }
  return false;
}

export default function useOnPreventRemove(getState) {
  getState = getState.getState;
  const importDefault = getState;
  const emitter = getState.emitter;
  const dependencyMap = emitter;
  const beforeRemoveListeners = getState.beforeRemoveListeners;
  let closure_2 = beforeRemoveListeners;
  const addKeyedListener = React.useContext(importDefault(dependencyMap[2])).addKeyedListener;
  const React = addKeyedListener;
  const context = React.useContext(importDefault(dependencyMap[3]));
  let key;
  if (null != context) {
    key = context.key;
  }
  let closure_4 = key;
  const items = [addKeyedListener, beforeRemoveListeners, emitter, getState, key];
  const effect = React.useEffect(() => {
    if (key) {
      let tmp3;
      if (null != addKeyedListener) {
        tmp3 = addKeyedListener("beforeRemove", key, (arg0) => callback2(closure_1, closure_2, callback().routes, [], arg0));
      }
      return tmp3;
    }
  }, items);
};
export { shouldPreventRemove };
