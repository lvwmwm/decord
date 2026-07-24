// Module ID: 1476
// Function ID: 17146
// Name: useEventEmitter
// Dependencies: [65, 31]
// Exports: default

// Module 1476 (useEventEmitter)
import _toConsumableArray from "_toConsumableArray";
import result from "result";


export default function useEventEmitter(arg0) {
  let _toConsumableArray = arg0;
  React = React.useRef(arg0);
  const effect = React.useEffect(() => {
    result.current = _toConsumableArray;
  });
  let closure_2 = React.useRef(Object.create(null));
  const callback = React.useCallback((arg0) => {
    let _toConsumableArray = arg0;
    function removeListener(arg0, arg1) {
      let tmp;
      if (outer1_2.current[arg0]) {
        tmp = outer1_2.current[arg0][_toConsumableArray];
      }
      if (tmp) {
        const index = tmp.indexOf(arg1);
        if (index > -1) {
          tmp.splice(index, 1);
        }
      }
    }
    return {
      addListener(arg0, arg1) {
        let _toConsumableArray = arg0;
        let result = arg1;
        let obj = outer1_2.current[arg0];
        if (!obj) {
          obj = {};
        }
        outer1_2.current[arg0] = obj;
        let items = outer1_2.current[arg0][_toConsumableArray];
        if (!items) {
          items = [];
        }
        outer1_2.current[arg0][_toConsumableArray] = items;
        outer1_2.current[arg0][_toConsumableArray].push(arg1);
        let c2 = false;
        return () => {
          if (!c2) {
            c2 = true;
            callback(_toConsumableArray, callback);
          }
        };
      },
      removeListener
    };
  }, []);
  const callback1 = React.useCallback((type) => {
    type = type.type;
    const data = type.data;
    const target = type.target;
    let obj = target.current[type];
    if (!obj) {
      obj = {};
    }
    if (undefined !== target) {
      let substr;
      if (null != obj[target]) {
        substr = arr5.slice();
      }
      let found = substr;
    } else {
      const items = [];
      const concat = items.concat;
      const _Object = Object;
      const keys = Object.keys(obj);
      found = concat.apply(items, callback(keys.map((arg0) => obj[arg0]))).filter((arg0, arg1, arr) => arr.lastIndexOf(arg0) === arg1);
      const applyResult = concat.apply(items, callback(keys.map((arg0) => obj[arg0])));
    }
    obj = {};
    Object.defineProperty(obj, "type", { get: () => type, set: undefined });
    if (undefined !== target) {
      const _Object2 = Object;
      obj = {
        enumerable: true,
        get() {
            return target;
          }
      };
      Object.defineProperty(obj, "target", obj);
    }
    if (undefined !== data) {
      const _Object3 = Object;
      const obj1 = {
        enumerable: true,
        get() {
            return data;
          }
      };
      Object.defineProperty(obj, "data", obj1);
    }
    if (type.canPreventDefault) {
      let c5 = false;
      const _Object4 = Object;
      const obj2 = {};
      const obj3 = {
        enumerable: true,
        get() {
            return c5;
          }
      };
      obj2.defaultPrevented = obj3;
      const obj4 = {
        enumerable: true,
        value() {
            let c5 = true;
          }
      };
      obj2.preventDefault = obj4;
      Object.defineProperties(obj, obj2);
    }
    if (null != data.current) {
      data.current(obj);
    }
    if (null != found) {
      const item = found.forEach((arg0) => arg0(obj));
    }
    return obj;
  }, []);
  let items = [callback, callback1];
  return React.useMemo(() => ({ create: callback, emit: callback1 }), items);
};
