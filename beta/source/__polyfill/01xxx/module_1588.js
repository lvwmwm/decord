// Module ID: 1588
// Function ID: 1589
// Dependencies: [32, 19, 17, 21, 1589, 1488, 1591, 1592, 1593, 1595, 1596, 1585]

// Module 1588
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const I18nManager = fn(17).I18nManager;
const jsx = fn(21).jsx;
const weakMap = new WeakMap();
globalThis.REACT_NAVIGATION_DEVTOOLS = weakMap;

export const NavigationContainer = noop.forwardRef(function NavigationContainerInner(direction, ref) {
  direction = direction.direction;
  if (direction === undefined) {
    let str = "ltr";
    if (I18nManager.getConstants().isRTL) {
      str = "rtl";
    }
    direction = str;
  }
  let DefaultTheme = direction.theme;
  if (DefaultTheme === undefined) {
    DefaultTheme = linking(1589).DefaultTheme;
  }
  linking = direction.linking;
  let fallback = direction.fallback;
  if (fallback === undefined) {
    fallback = null;
  }
  let merged = Object.assign(direction, Object.assign({ direction: 0, theme: 0, linking: 0, fallback: 0, documentTitle: 0 }));
  dependencyMap = undefined;
  ref = undefined;
  let tmp6 = linking;
  if (tmp6) {
    tmp6 = false !== linking.enabled;
  }
  dependencyMap = tmp6;
  let config;
  if (linking != null) {
    config = linking.config;
  }
  if (config) {
    linking(1488).validatePathConfig(linking.config);
    let obj = linking(1488);
  }
  ref = noop.useRef(null);
  const backButton = linking(1591).useBackButton(ref);
  const obj2 = linking(1591);
  const documentTitle = linking(1592).useDocumentTitle(ref, direction.documentTitle);
  const obj3 = linking(1592);
  const merged1 = Object.assign(linking);
  const items = [linking];
  const memo = noop.useMemo(() => ({ options: linking }), items);
  const effect = noop.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = {};
            const merged = Object.assign(closure_1_0);
            obj.enabled = enabled;
            let prefixes;
            if (closure_1_0 != null) {
              prefixes = tmp.prefixes;
            }
            if (prefixes == null) {
              prefixes = [];
            }
            obj.prefixes = prefixes;
            let getStateFromPath;
            if (closure_1_0 != null) {
              getStateFromPath = tmp.getStateFromPath;
            }
            if (getStateFromPath == null) {
              getStateFromPath = linking(enabled[5]).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (closure_1_0 != null) {
              getPathFromState = tmp.getPathFromState;
            }
            if (getPathFromState == null) {
              getPathFromState = linking(enabled[5]).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (closure_1_0 != null) {
              getActionFromState = tmp.getActionFromState;
            }
            if (getActionFromState == null) {
              getActionFromState = linking(enabled[5]).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return obj;
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(tmp.current, obj);
    }
  });
  const obj4 = linking(1593);
  const obj5 = { enabled: tmp6, prefixes: [] };
  const obj6 = linking(1595);
  [tmp20, initialState] = ref(linking(1595).useThenable(obj4.useLinking(ref, obj5).getInitialState), 2);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ref.current);
  const obj7 = { value: direction, children: null };
  if (tmp22) {
    const obj8 = { value: memo, children: null };
    const obj9 = {};
    const merged2 = Object.assign(merged);
    obj9.theme = DefaultTheme;
    if (null != merged.initialState) {
      initialState = merged.initialState;
    }
    obj9.initialState = initialState;
    obj9.ref = ref;
    obj8.children = tmp23(tmp12(1488).BaseNavigationContainer, obj9);
    obj7.children = tmp23(tmp12(1585).LinkingContext.Provider, obj8);
    let tmp24 = obj7;
  } else {
    const obj10 = { value: DefaultTheme, children: fallback };
    obj7.children = tmp23(tmp12(1488).ThemeProvider, obj10);
    tmp24 = obj7;
  }
  return jsx(linking(1596).LocaleDirContext.Provider, tmp24);
});
