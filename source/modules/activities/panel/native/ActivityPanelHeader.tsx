// Module ID: 15581
// Function ID: 118905
// Name: useBaseActivityPanelHeaderContent
// Dependencies: []

// Module 15581 (useBaseActivityPanelHeaderContent)
let StyleSheet;
function useBaseActivityPanelHeaderContent(landscape) {
  let pipState;
  let wrapperOffset;
  landscape = landscape.landscape;
  const arg1 = landscape;
  const setMode = landscape.setMode;
  const importDefault = setMode;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = callback3();
  const dependencyMap = tmp;
  const tmp2 = importDefault(dependencyMap[9])();
  let closure_3 = tmp2;
  const items = [landscape];
  const items1 = [landscape, tmp2, , ];
  ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
  const memo = importAllResult.useMemo(() => {
    let num = 0;
    if (!landscape) {
      num = setMode(tmp[8]).radii.lg;
    }
    const items = [absoluteFill.absoluteFill, ];
    const obj = { borderTopStartRadius: num, borderTopEndRadius: num };
    items[1] = obj;
    return items;
  }, items);
  const fn = function c() {
    const obj = landscape(tmp[10]);
  };
  let obj = {};
  const memo1 = importAllResult.useMemo(() => {
    let num = 8;
    if (landscape) {
      num = 24;
    }
    const items = [tmp.panelHeader, , ];
    let panelLandscape;
    if (landscape) {
      panelLandscape = tmp.panelLandscape;
    }
    items[1] = panelLandscape;
    const obj = { paddingTop: num };
    let num2 = 8;
    if (landscape) {
      num2 = 24;
    }
    obj.paddingBottom = num2;
    let num3 = 16;
    let num4 = 16;
    if (!landscape) {
      num4 = 8 + tmp2.left;
    }
    obj.paddingLeft = num4;
    if (!landscape) {
      num3 = 8 + tmp2.right;
    }
    obj.paddingRight = num3;
    items[2] = obj;
    return items;
  }, items1);
  obj.runOnJS = arg1(dependencyMap[10]).runOnJS;
  obj.setMode = setMode;
  obj.ActivityPanelModes = closure_10;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = closure_15;
  const items2 = [setMode];
  obj = {};
  const callback = importAllResult.useCallback(fn, items2);
  obj = { mode: arg1(dependencyMap[11]).MorphablePanelModes.PANEL, panGestureEnabled: true, pipState, swipeRequiresPop: true, wrapperOffset, onPanMinimizeGestureEnd: callback, disableHorizontalSafeAreas: true };
  obj.gesture = importDefault(dependencyMap[11])(obj);
  obj.headerWrapperStyles = memo;
  obj.headerStyles = memo1;
  obj.styles = tmp;
  return obj;
}
class BaseActivityPanelContent {
  constructor(arg0) {
    ({ children, hasConnectedActivity, gesture, headerWrapperStyles, headerStyles, landscape } = global);
    tmp3Result = null;
    if (hasConnectedActivity) {
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num = 12;
      tmp3 = jsx;
      obj = {};
      tmp6 = ThemeTypes;
      obj.theme = ThemeTypes.DARK;
      num2 = 13;
      tmp7 = jsx;
      obj = {};
      obj.gesture = gesture;
      obj1 = {};
      obj1.style = headerWrapperStyles;
      tmp10 = jsx;
      tmp11 = importDefault;
      num3 = 14;
      tmp8 = jsxs;
      tmp9 = View;
      items = [, , ];
      items[0] = jsx(importDefault(dependencyMap[14]), {});
      tmp12 = !landscape;
      if (tmp12) {
        tmp13 = jsx;
        tmp14 = View;
        obj2 = {};
        obj2.style = tmp.pullIndicator;
        tmp12 = jsx(View, obj2);
      }
      items[1] = tmp12;
      tmp15 = jsx;
      tmp16 = View;
      obj3 = {};
      obj3.style = headerStyles;
      obj3.children = children;
      items[2] = jsx(View, obj3);
      obj1.children = items;
      obj.children = tmp8(tmp9, obj1);
      obj.children = tmp7(arg1(dependencyMap[13]).GestureDetector, obj);
      tmp3Result = tmp3(arg1(dependencyMap[12]).ThemeContextProvider, obj);
    }
    return tmp3Result;
  }
}
function useBaseActivityPanelHeader(context) {
  let pipState;
  let setMode;
  let wrapperOffset;
  const tmp = callback3();
  const arg1 = tmp;
  context = importAllResult.useContext(context.context);
  const wrapperDimensions = context.wrapperDimensions;
  const importDefault = wrapperDimensions;
  const items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  return {
    headerStyles: importAllResult.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = closure_9;
        let str = "auto";
        let num = null;
        let tmp = 0;
      } else {
        str = closure_8;
        str2 = "auto";
        num = 0;
        tmp = null;
      }
      const items = [tmp.headerContainer, ];
      const obj = { width: str2, height: str, right: 0, left: num, bottom: tmp };
      items[1] = obj;
      return items;
    }, items),
    wrapperDimensions,
    setMode,
    wrapperOffset,
    pipState
  };
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: closure_8, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_9, ActivityPanelModes: closure_10 } = arg1(dependencyMap[4]));
const ThemeTypes = arg1(dependencyMap[5]).ThemeTypes;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["justifyContent"] = "space-between";
obj["alignItems"] = "center";
obj["flexDirection"] = "row";
obj["gap"] = 8;
obj.panelHeader = obj;
obj.panelLandscape = { flexDirection: "column-reverse" };
obj.headerContainer = { force: null, trackAnalytics: null };
obj1 = { 1446733789: "<string:327708980>", 1404461660: "<string:406913024>", -398372460: "<string:1627390549>", 22137953: "<string:617501431>", -25538045: 219038247, -397232566: -918421502, 1656695610: 1091633153, backgroundColor: importDefault(dependencyMap[8]).colors.WHITE, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.pullIndicator = obj1;
let closure_14 = obj1.createStyles(obj);
let closure_15 = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
const tmp4 = arg1(dependencyMap[6]);
const obj2 = {};
const obj6 = arg1(dependencyMap[7]);
obj2.buttonContainer = { gap: importDefault(dependencyMap[8]).space.PX_8 };
obj2.buttonContainerLandscape = { flexDirection: "column-reverse" };
const styles = obj6.createStyles(obj2);
let closure_17 = importAllResult.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let setMode;
  ({ landscape, setMode } = wrapperOffset);
  let obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent(obj));
  let obj1 = arg1(dependencyMap[15]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getSelfEmbeddedActivityForLocation(store.getConnectedActivityLocation()), []);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(importDefault(dependencyMap[16])(items1), 1)[0];
  const tmp5 = styles();
  obj = {};
  let id;
  const tmp = useBaseActivityPanelHeaderContent(obj);
  const tmp6 = callback2;
  if (null != first) {
    id = first.id;
  }
  obj.applicationId = id;
  const tmp6Result = tmp6(importDefault(dependencyMap[17]), obj);
  obj = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape };
  obj1 = {};
  const items2 = [tmp5.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = tmp5.buttonContainerLandscape;
  }
  items2[1] = prop;
  obj1.style = items2;
  const obj2 = {};
  let name;
  const tmp10 = closure_13;
  const tmp11 = BaseActivityPanelContent;
  const tmp12 = closure_13;
  const tmp13 = closure_5;
  const tmp15 = callback2;
  const tmp7 = importDefault(dependencyMap[17]);
  if (!landscape) {
    if (null != first) {
      name = first.name;
    }
  }
  obj2.activityName = name;
  obj2.setMode = setMode;
  const items3 = [tmp15(importDefault(dependencyMap[18]), obj2), , ];
  let tmp18 = null != applicationId;
  if (tmp18) {
    const obj3 = { applicationId };
    tmp18 = callback2(importDefault(dependencyMap[19]), obj3);
  }
  items3[1] = tmp18;
  let tmp22 = null;
  if (landscape) {
    tmp22 = tmp6Result;
  }
  items3[2] = tmp22;
  obj1.children = items3;
  const items4 = [tmp12(tmp13, obj1), , ];
  let tmp23 = null;
  if (!landscape) {
    tmp23 = tmp6Result;
  }
  items4[1] = tmp23;
  const obj4 = {};
  let tmp26;
  const tmp16 = importDefault(dependencyMap[18]);
  const tmp24 = callback2;
  if (null != stateFromStores) {
    tmp26 = stateFromStores;
  }
  obj4.selfEmbeddedActivity = tmp26;
  obj4.setMode = setMode;
  items4[2] = tmp24(importDefault(dependencyMap[20]), obj4);
  obj.children = items4;
  return tmp10(tmp11, obj);
});
const obj3 = { gap: importDefault(dependencyMap[8]).space.PX_8 };
const memoResult = importAllResult.memo(() => {
  let obj = { context: importDefault(dependencyMap[21]) };
  const tmp = useBaseActivityPanelHeader(obj);
  obj = { style: tmp.headerStyles, children: callback2(closure_17, obj) };
  obj = { landscape: tmp.wrapperDimensions.isWindowLandscape, setMode: tmp.setMode, wrapperOffset: tmp.wrapperOffset, pipState: tmp.pipState };
  return callback2(closure_5, obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default memoResult;
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = styles;
export { useBaseActivityPanelHeader };
