// Module ID: 1540
// Function ID: 17531
// Name: useLinking
// Dependencies: [117047296, 117112832, 119013376, 460849152]
// Exports: default

// Module 1540 (useLinking)
let Platform;
let closure_3 = importAll(dependencyMap[0]);
({ Linking: closure_4, Platform } = arg1(dependencyMap[1]));

export default function useLinking(arg0, enabled) {
  enabled = arg0;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const importDefault = tmp;
  const prefixes = enabled.prefixes;
  const dependencyMap = prefixes;
  const filter = enabled.filter;
  const React = filter;
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
      function callback(url) {
        return url(url.url);
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
    getStateFromPath = enabled(dependencyMap[2]).getStateFromPath;
  }
  let getActionFromState = enabled.getActionFromState;
  if (undefined === getActionFromState) {
    getActionFromState = enabled(dependencyMap[2]).getActionFromState;
  }
  const items = [tmp, enabled.independent];
  const effect = React.useEffect(() => {

  }, items);
  let closure_9 = React.useRef(tmp);
  let closure_10 = React.useRef(prefixes);
  let closure_11 = React.useRef(filter);
  let closure_12 = React.useRef(config);
  let closure_13 = React.useRef(fn);
  let closure_14 = React.useRef(getStateFromPath);
  let closure_15 = React.useRef(getActionFromState);
  const effect1 = React.useEffect(() => {
    closure_9.current = tmp;
    closure_10.current = prefixes;
    closure_11.current = filter;
    closure_12.current = config;
    closure_13.current = fn;
    closure_14.current = getStateFromPath;
    closure_15.current = getActionFromState;
  });
  const callback = React.useCallback((arg0) => {
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
  const getInitialState = React.useCallback(() => {
    if (ref.current) {
      const currentResult = ref5.current();
      if (null != currentResult) {
        if ("string" !== typeof currentResult) {
          return currentResult.then((arg0) => callback(arg0));
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
  const effect2 = React.useEffect(() => fn2(function listener(arg0) {
    if (closure_1) {
      const current = ref.current;
      if (current) {
        const tmp2 = callback(arg0);
      }
      if (current) {
        if (tmp2) {
          const ref = obj.getRootState();
          const routes = tmp2.routes;
          if (routes.some((name) => {
            let hasItem = null != routeNames;
            if (hasItem) {
              const routeNames = routeNames.routeNames;
              hasItem = routeNames.includes(name.name);
            }
            return !hasItem;
          })) {
            const _console = console;
            console.warn("The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
          } else {
            const currentResult = ref3.current(tmp2, ref2.current);
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
