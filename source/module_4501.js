// Module ID: 4501
// Function ID: 39678
// Dependencies: []

// Module 4501
let StyleSheet;
let closure_3 = [1241963093, 675846148, 1643299990, -1339992987, -144148774, -1504593446, -100214189, 302271147, 1022099459, 1022164995, 196739075];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Platform: closure_6, StyleSheet } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const styles = StyleSheet.create({ container: { flex: 1 }, absoluteWithNoBottom: { aspectRatio: 131420590, backgroundColor: -1717986767, margin: -644245095, padding: 94527 } });

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
  const arg1 = screenId;
  unstable_sheetFooter = unstable_sheetFooter.unstable_sheetFooter;
  ({ children, activityState, shouldFreeze, contentStyle, style, onHeaderHeightChange } = unstable_sheetFooter);
  const tmp = callback(unstable_sheetFooter, closure_3);
  const importDefault = importAllResult.useRef(null);
  closure_2 = importAllResult.useContext(arg1(closure_2[4]).RNSScreensRefContext);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ref.current);
  let obj = arg1(closure_2[5]);
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
  const callback = importAllResult.useRef(tmp10);
  const items = [null != hidden && hidden, str];
  const effect = importAllResult.useEffect(() => {
    ref(closure_2[6])(false, "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.");
    closure_4.current = tmp10;
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
  importDefault(closure_2[6])(flag, "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.");
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
  obj.children = callback2(importDefault(closure_2[7]), obj1);
  const items1 = [callback2(arg1(closure_2[5]).EdgeInsetApplicationContext.Provider, obj), callback2(arg1(closure_2[8]).ScreenStackHeaderConfig, Object.assign({}, headerConfig)), ];
  let tmp23 = "formSheet" === str && unstable_sheetFooter;
  if (tmp23) {
    const obj2 = { children: unstable_sheetFooter() };
    tmp23 = callback2(arg1(closure_2[9]).FooterComponent, obj2);
  }
  items1[2] = tmp23;
  obj.children = items1;
  children = closure_9(closure_8, obj);
  const obj3 = {
    margin: null,
    padding: null,
    flexGrow: null,
    ref(current) {
      closure_1.current = current;
      if (null !== closure_2) {
        if (null === current) {
          delete r1[r0];
        } else {
          const obj = { current };
          tmp4[screenId] = obj;
        }
      } else {
        const _console = console;
        console.warn("Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it");
      }
    },
    activityState,
    shouldFreeze,
    screenId,
    stackPresentation: str
  };
  let largeTitle;
  const tmp16 = importDefault(closure_2[6]);
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
  return tmp28(importDefault(closure_2[10]), Object.assign(obj3, tmp, { children }));
});
