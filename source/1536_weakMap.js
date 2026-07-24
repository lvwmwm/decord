// Module ID: 1536
// Function ID: 17522
// Name: weakMap
// Dependencies: [57, 29, 31, 33, 1537, 1459, 1538, 1539, 1540, 1542, 1534, 1543]

// Module 1536 (weakMap)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["theme", "linking", "fallback", "documentTitle", "onReady"];
const weakMap = new WeakMap();
global.REACT_NAVIGATION_DEVTOOLS = weakMap;

export default importAllResult.forwardRef(function NavigationContainerInner(theme) {
  theme = theme.theme;
  if (undefined === theme) {
    theme = onReady(1537);
  }
  const linking = theme.linking;
  const fallback = theme.fallback;
  let tmp22Result = null;
  if (undefined !== fallback) {
    tmp22Result = fallback;
  }
  onReady = theme.onReady;
  const tmp4 = callback(theme, ref);
  let tmp6 = !tmp5;
  if (!!linking) {
    tmp6 = false !== linking.enabled;
  }
  const dependencyMap = tmp6;
  if (tmp7) {
    let obj = linking(1459);
    obj.validatePathConfig(linking.config);
  }
  ref = importAllResult.useRef(null);
  onReady(1538)(ref);
  onReady(1539)(ref, theme.documentTitle);
  obj = { independent: tmp4.independent, enabled: tmp6, prefixes: [] };
  const effect = importAllResult.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = { enabled: outer1_2 };
            let prefixes;
            if (null != outer1_0) {
              prefixes = outer1_0.prefixes;
            }
            if (null == prefixes) {
              prefixes = [];
            }
            obj.prefixes = prefixes;
            let getStateFromPath;
            if (null != outer1_0) {
              getStateFromPath = outer1_0.getStateFromPath;
            }
            if (null == getStateFromPath) {
              getStateFromPath = linking(1459).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (null != outer1_0) {
              getPathFromState = outer1_0.getPathFromState;
            }
            if (null == getPathFromState) {
              getPathFromState = linking(1459).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (null != outer1_0) {
              getActionFromState = outer1_0.getActionFromState;
            }
            if (null == getActionFromState) {
              getActionFromState = linking(1459).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return Object.assign({}, outer1_0, obj);
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(ref.current, obj);
    }
  });
  const tmp16 = first(onReady(1542)(onReady(1540)(ref, Object.assign(obj, linking)).getInitialState), 2);
  let initialState = tmp16[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ref.current);
  const items = [linking];
  first = null != tmp4.initialState;
  const memo = importAllResult.useMemo(() => ({ options: linking }), items);
  if (!first) {
    first = !tmp6;
  }
  if (!first) {
    first = tmp16[0];
  }
  callback = importAllResult.useRef(onReady);
  const effect1 = importAllResult.useEffect(() => {
    _objectWithoutProperties.current = onReady;
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
    obj1.children = jsx(linking(1459).BaseNavigationContainer, Object.assign({}, tmp4, obj2));
    obj.children = jsx(onReady(1543), { value: theme });
    tmp22Result = tmp22(onReady(1534).Provider, obj);
    const tmp25 = onReady(1543);
  }
  return tmp22Result;
});
