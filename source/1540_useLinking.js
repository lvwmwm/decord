// Module ID: 1540
// Function ID: 17537
// Name: useLinking
// Dependencies: [31, 27, 1459, 1541]
// Exports: default

// Module 1540 (useLinking)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_4;
const require = arg1;
({ Linking: closure_4, Platform } = get_ActivityIndicator);

export default function useLinking(arg0, enabled) {
  const _require = arg0;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const importDefault = tmp;
  const prefixes = enabled.prefixes;
  let filter = enabled.filter;
  const config = enabled.config;
  let fn = enabled.getInitialURL;
  if (undefined === fn) {
    fn = () => {
      const items = [config.getInitialURL(), new Promise((arg0) => setTimeout(arg0, 150))];
      return Promise.race(items);
    };
  }
  let fn2 = enabled.subscribe;
  if (undefined === fn2) {
    fn2 = (arg0) => {
      let closure_0 = arg0;
      function callback(url) {
        return callback(url.url);
      }
      let closure_2 = config.addEventListener("url", callback);
      const removeEventListener = config.removeEventListener;
      let bindResult;
      if (null != removeEventListener) {
        bindResult = removeEventListener.bind(config);
      }
      const filter = bindResult;
      return () => {
        if (null != closure_2) {
          if (closure_2.remove) {
            closure_2.remove();
          }
        }
        if (null != bindResult) {
          bindResult("url", callback);
        }
      };
    };
  }
  let getStateFromPath = enabled.getStateFromPath;
  if (undefined === getStateFromPath) {
    getStateFromPath = _require(prefixes[2]).getStateFromPath;
  }
  let getActionFromState = enabled.getActionFromState;
  if (undefined === getActionFromState) {
    getActionFromState = _require(prefixes[2]).getActionFromState;
  }
  let items = [tmp, enabled.independent];
  const effect = filter.useEffect(() => {

  }, items);
  let closure_9 = filter.useRef(tmp);
  let closure_10 = filter.useRef(prefixes);
  let closure_11 = filter.useRef(filter);
  let closure_12 = filter.useRef(config);
  let closure_13 = filter.useRef(fn);
  let closure_14 = filter.useRef(getStateFromPath);
  let closure_15 = filter.useRef(getActionFromState);
  const effect1 = filter.useEffect(() => {
    closure_9.current = closure_1;
    closure_10.current = prefixes;
    closure_11.current = filter;
    closure_12.current = config;
    closure_13.current = fn;
    closure_14.current = getStateFromPath;
    closure_15.current = getActionFromState;
  });
  let callback = filter.useCallback((arg0) => {
    if (arg0) {
      let currentResult;
      const tmp7 = ref3(prefixes[3])(ref2.current, arg0);
      if (undefined !== tmp7) {
        currentResult = ref6.current(tmp7, ref4.current);
      }
      return currentResult;
    }
  }, []);
  const items1 = [callback];
  const items2 = [tmp, callback, arg0, fn2];
  const getInitialState = filter.useCallback(() => {
    if (ref.current) {
      const currentResult = ref5.current();
      if (null != currentResult) {
        if ("string" !== typeof currentResult) {
          return currentResult.then((arg0) => outer1_16(arg0));
        }
      }
      let closure_0 = callback(currentResult);
    }
    const obj = {
      then(arg0) {
        if (arg0) {
          let tmp2 = arg0(tmp);
        } else {
          tmp2 = tmp;
        }
        return Promise.resolve(tmp2);
      },
      catch: function _catch() {
        return obj;
      }
    };
    return obj;
  }, items1);
  const effect2 = filter.useEffect(() => fn2(function listener(arg0) {
    if (outer1_1) {
      const current = outer1_0.current;
      if (current) {
        const tmp2 = outer1_16(arg0);
      }
      if (current) {
        if (tmp2) {
          const rootState = obj.getRootState();
          const routes = tmp2.routes;
          if (routes.some((name) => {
            let hasItem = null != routeNames;
            if (hasItem) {
              routeNames = routeNames.routeNames;
              hasItem = routeNames.includes(name.name);
            }
            return !hasItem;
          })) {
            const _console = console;
            console.warn("The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
          } else {
            const currentResult = outer1_15.current(tmp2, outer1_12.current);
            if (undefined !== currentResult) {
              obj.dispatch(currentResult);
            } else {
              obj.resetRoot(tmp2);
            }
          }
        }
      }
    }
  }), items2);
  return { getInitialState };
};
