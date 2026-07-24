// Module ID: 4505
// Function ID: 39711
// Dependencies: [29, 31, 27, 33, 4503, 4494, 4487, 4506, 4493, 4509, 4482]

// Module 4505
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
let closure_3 = ["children", "headerConfig", "activityState", "shouldFreeze", "stackPresentation", "sheetAllowedDetents", "contentStyle", "style", "screenId", "onHeaderHeightChange", "unstable_sheetFooter"];
({ Platform: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1 }, absoluteWithNoBottom: { position: "absolute", top: 0, start: 0, end: 0 } });

export default importAllResult.forwardRef(function ScreenStackItem(unstable_sheetFooter) {
  let activityState;
  let children;
  let contentStyle;
  let headerConfig;
  let onHeaderHeightChange;
  let screenId;
  let sheetAllowedDetents;
  let shouldFreeze;
  let stackPresentation;
  let style;
  ({ headerConfig, stackPresentation, sheetAllowedDetents, screenId } = unstable_sheetFooter);
  unstable_sheetFooter = unstable_sheetFooter.unstable_sheetFooter;
  ({ children, activityState, shouldFreeze, contentStyle, style, onHeaderHeightChange } = unstable_sheetFooter);
  const tmp = callback(unstable_sheetFooter, closure_3);
  const importDefault = importAllResult.useRef(null);
  const dependencyMap = importAllResult.useContext(screenId(4503).RNSScreensRefContext);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ref.current);
  let obj = screenId(4494);
  let prop;
  if (null != headerConfig) {
    prop = headerConfig.disableLeftInsetApplication;
  }
  let prop1;
  if (null != headerConfig) {
    prop1 = headerConfig.disableRightInsetApplication;
  }
  let prop2;
  if (null != headerConfig) {
    prop2 = headerConfig.disableBottomInsetApplication;
  }
  let str = "push";
  if (null != stackPresentation) {
    str = stackPresentation;
  }
  let hidden;
  if (null != headerConfig) {
    hidden = headerConfig.hidden;
  }
  closure_3 = tmp10;
  callback = importAllResult.useRef(tmp10);
  const items = [null != hidden && hidden, str];
  const effect = importAllResult.useEffect(() => {
    ref(table[6])(false, "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.");
    _objectWithoutProperties.current = closure_3;
  }, items);
  let scrollEdgeEffects;
  if (null != tmp) {
    scrollEdgeEffects = tmp.scrollEdgeEffects;
  }
  let flag = undefined === scrollEdgeEffects;
  if (!flag) {
    const _Object = Object;
    const values = Object.values(tmp.scrollEdgeEffects);
    flag = values.some((arg0) => "hidden" !== arg0);
  }
  let blurEffect;
  if (null != headerConfig) {
    blurEffect = headerConfig.blurEffect;
  }
  let tmp15 = undefined !== blurEffect;
  if (tmp15) {
    tmp15 = "none" !== headerConfig.blurEffect;
  }
  if (flag) {
    flag = tmp15;
  }
  if (flag) {
    flag = false;
  }
  importDefault(4487)(flag, "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.");
  if ("formSheet" !== str) {
    let container = closure_10.container;
  } else if ("fitToContents" === sheetAllowedDetents) {
    container = closure_10.absoluteWithNoBottom;
  } else {
    container = closure_10.container;
  }
  obj = {};
  obj = { value: obj.useEdgeInsetApplication(null != prop && prop, null != prop1 && prop1, null != prop2 && prop2).nextContextValue };
  const obj1 = { contentStyle, style: container, stackPresentation: str, children };
  obj.children = callback2(importDefault(4506), obj1);
  const items1 = [callback2(screenId(4494).EdgeInsetApplicationContext.Provider, obj), callback2(screenId(4493).ScreenStackHeaderConfig, Object.assign({}, headerConfig)), ];
  let tmp23 = "formSheet" === str && unstable_sheetFooter;
  if (tmp23) {
    const obj2 = { children: unstable_sheetFooter() };
    tmp23 = callback2(screenId(4509).FooterComponent, obj2);
  }
  items1[2] = tmp23;
  obj.children = items1;
  children = closure_9(closure_8, obj);
  const obj3 = {
    ref(current) {
      closure_1.current = current;
      if (null !== closure_2) {
        if (null === current) {
          delete tmp2[tmp];
        } else {
          const obj = { current };
          tmp6[screenId] = obj;
        }
      } else {
        const _console = console;
        console.warn("Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it");
      }
    },
    enabled: true,
    isNativeStack: true,
    activityState,
    shouldFreeze,
    screenId,
    stackPresentation: str
  };
  let largeTitle;
  const tmp16 = importDefault(4487);
  const tmp21 = closure_9;
  const tmp22 = closure_8;
  const tmp28 = callback2;
  const tmp4 = null != prop && prop;
  const tmp6 = null != prop1 && prop1;
  const tmp8 = null != prop2 && prop2;
  if (null != headerConfig) {
    largeTitle = headerConfig.largeTitle;
  }
  obj3.hasLargeHeader = null != largeTitle && largeTitle;
  obj3.sheetAllowedDetents = sheetAllowedDetents;
  const items2 = [style, undefined];
  obj3.style = items2;
  obj3.onHeaderHeightChange = onHeaderHeightChange;
  return tmp28(importDefault(4482), Object.assign(obj3, tmp, { children }));
});
