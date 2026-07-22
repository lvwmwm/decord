// Module ID: 1536
// Function ID: 17520
// Name: weakMap
// Dependencies: []

// Module 1536 (weakMap)
let closure_3 = [0, 0.053, 0.978, 1, 0];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const weakMap = new WeakMap();
global.REACT_NAVIGATION_DEVTOOLS = weakMap;

export default importAllResult.forwardRef(function NavigationContainerInner(theme) {
  theme = theme.theme;
  if (undefined === theme) {
    theme = importDefault(dependencyMap[4]);
  }
  const linking = theme.linking;
  const arg1 = linking;
  const fallback = theme.fallback;
  let tmp22Result = null;
  if (undefined !== fallback) {
    tmp22Result = fallback;
  }
  const onReady = theme.onReady;
  const importDefault = onReady;
  const tmp4 = callback2(theme, closure_3);
  let tmp6 = !tmp5;
  if (!!linking) {
    tmp6 = false !== linking.enabled;
  }
  const dependencyMap = tmp6;
  if (tmp7) {
    let obj = arg1(dependencyMap[5]);
    obj.validatePathConfig(linking.config);
  }
  const ref = importAllResult.useRef(null);
  closure_3 = ref;
  importDefault(dependencyMap[6])(ref);
  importDefault(dependencyMap[7])(ref, theme.documentTitle);
  obj = { independent: tmp4.independent, enabled: tmp6, prefixes: [] };
  const effect = importAllResult.useEffect(() => {
    if (ref.current) {
      const obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = { enabled: closure_2 };
            let prefixes;
            if (null != lib) {
              prefixes = lib.prefixes;
            }
            if (null == prefixes) {
              prefixes = [];
            }
            obj.prefixes = prefixes;
            let getStateFromPath;
            if (null != lib) {
              getStateFromPath = lib.getStateFromPath;
            }
            if (null == getStateFromPath) {
              getStateFromPath = lib(closure_2[5]).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (null != lib) {
              getPathFromState = lib.getPathFromState;
            }
            if (null == getPathFromState) {
              getPathFromState = lib(closure_2[5]).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (null != lib) {
              getActionFromState = lib.getActionFromState;
            }
            if (null == getActionFromState) {
              getActionFromState = lib(closure_2[5]).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return Object.assign({}, lib, obj);
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(ref.current, obj);
    }
  });
  const tmp16 = callback(importDefault(dependencyMap[9])(importDefault(dependencyMap[8])(ref, Object.assign(obj, linking)).getInitialState), 2);
  let initialState = tmp16[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ref.current);
  const items = [linking];
  let first = null != tmp4.initialState;
  const memo = importAllResult.useMemo(() => ({ options: linking }), items);
  if (!first) {
    first = !tmp6;
  }
  if (!first) {
    first = tmp16[0];
  }
  const callback = first;
  const callback2 = importAllResult.useRef(onReady);
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = onReady;
  });
  const items1 = [first];
  const effect2 = importAllResult.useEffect(() => {
    if (first) {
      if (null != ref.current) {
        ref.current();
      }
    }
  }, items1);
  if (first) {
    obj = { value: memo };
    const obj1 = { value: theme };
    const obj2 = {};
    if (null != tmp4.initialState) {
      initialState = tmp4.initialState;
    }
    obj2.initialState = initialState;
    obj2.ref = ref;
    obj1.children = jsx(arg1(dependencyMap[5]).BaseNavigationContainer, Object.assign({}, tmp4, obj2));
    obj.children = jsx(importDefault(dependencyMap[11]), obj1);
    tmp22Result = tmp22(importDefault(dependencyMap[10]).Provider, obj);
    const tmp25 = importDefault(dependencyMap[11]);
  }
  return tmp22Result;
});
