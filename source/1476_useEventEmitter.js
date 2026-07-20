// Module ID: 1476
// Function ID: 17139
// Name: useEventEmitter
// Dependencies: []
// Exports: default

// Module 1476 (useEventEmitter)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);

export default function useEventEmitter(arg0) {
  let closure_0 = arg0;
  const React = React.useRef(arg0);
  const effect = React.useEffect(() => {
    closure_1.current = arg0;
  });
  let closure_2 = React.useRef(Object.create(null));
  const callback = React.useCallback((arg0) => {
    function removeListener(arg0, arg1) {
      let tmp;
      if (closure_2.current[arg0]) {
        tmp = closure_2.current[arg0][closure_0];
      }
      if (tmp) {
        const index = tmp.indexOf(arg1);
        if (index > -1) {
          tmp.splice(index, 1);
        }
      }
    }
    let closure_1 = removeListener;
    return {
      addListener(arg0, arg1) {
        const removeListener = arg1;
        let obj = closure_2.current[arg0];
        if (!obj) {
          obj = {};
        }
        closure_2.current[arg0] = obj;
        let items = closure_2.current[arg0][closure_0];
        if (!items) {
          items = [];
        }
        closure_2.current[arg0][arg0] = items;
        closure_2.current[arg0][closure_0].push(arg1);
        closure_2 = false;
        return () => {
          if (!closure_2) {
            closure_2 = true;
            arg1(arg0, arg1);
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
    const callback = obj;
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
      found = concat.apply(items, type(keys.map((arg0) => obj[arg0]))).filter((arg0, arg1, arr) => arr.lastIndexOf(arg0) === arg1);
      const applyResult = concat.apply(items, type(keys.map((arg0) => obj[arg0])));
    }
    obj = {};
    Object.defineProperty(obj, "type", { get: () => type, set: undefined });
    const callback1 = obj;
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
      let closure_5 = false;
      const _Object4 = Object;
      const obj2 = {};
      const obj3 = {
        enumerable: true,
        get() {
            return closure_5;
          }
      };
      obj2.defaultPrevented = obj3;
      const obj4 = {
        enumerable: true,
        value() {
            let closure_5 = true;
          }
      };
      obj2.preventDefault = obj4;
      Object.defineProperties(obj, obj2);
    }
    if (null != data.current) {
      ref.current(obj);
    }
    if (null != found) {
      const item = found.forEach((arg0) => arg0(obj));
    }
    return obj;
  }, []);
  const items = [callback, callback1];
  return React.useMemo(() => ({ create: callback, emit: callback1 }), items);
};
