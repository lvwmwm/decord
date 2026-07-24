// Module ID: 15753
// Function ID: 121443
// Name: useBaseActivityPanelHeaderContent
// Dependencies: [57, 31, 27, 1347, 10256, 482, 33, 4130, 689, 1557, 3991, 15750, 3842, 5217, 15754, 566, 5468, 15755, 15759, 15760, 15765, 15744, 2]

// Module 15753 (useBaseActivityPanelHeaderContent)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import ActivityPanelModes from "ActivityPanelModes";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_12;
let closure_13;
let closure_5;
let closure_8;
let closure_9;
let require = arg1;
function useBaseActivityPanelHeaderContent(landscape) {
  let pipState;
  let wrapperOffset;
  landscape = landscape.landscape;
  const setMode = landscape.setMode;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = callback3();
  const dependencyMap = tmp;
  const tmp2 = setMode(1557)();
  let _slicedToArray = tmp2;
  let items = [landscape];
  const items1 = [landscape, tmp2, , ];
  ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
  const memo = importAllResult.useMemo(() => {
    let num = 0;
    if (!landscape) {
      num = setMode(tmp[8]).radii.lg;
    }
    const items = [outer1_6.absoluteFill, ];
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
  obj.runOnJS = landscape(3991).runOnJS;
  obj.setMode = setMode;
  obj.ActivityPanelModes = closure_10;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = closure_15;
  const items2 = [setMode];
  obj = {};
  const callback = importAllResult.useCallback(fn, items2);
  obj = { mode: landscape(15750).MorphablePanelModes.PANEL, panGestureEnabled: true, pipState, swipeRequiresPop: true, wrapperOffset, onPanMinimizeGestureEnd: callback, disableHorizontalSafeAreas: true };
  obj.gesture = setMode(15750)(obj);
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
      tmp4 = closure_0;
      tmp5 = closure_2;
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
      tmp11 = closure_1;
      num3 = 14;
      tmp8 = jsxs;
      tmp9 = View;
      items = [, , ];
      items[0] = jsx(require("module_15754"), {});
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
      obj.children = tmp7(require("Directions").GestureDetector, obj);
      tmp3Result = tmp3(require("ManaContext").ThemeContextProvider, obj);
    }
    return tmp3Result;
  }
}
function useBaseActivityPanelHeader(context) {
  let pipState;
  let setMode;
  let wrapperOffset;
  let tmp = callback3();
  const require = tmp;
  context = importAllResult.useContext(context.context);
  const wrapperDimensions = context.wrapperDimensions;
  let items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  return {
    headerStyles: importAllResult.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = outer1_9;
        let str = "auto";
        let num = null;
        let tmp = 0;
      } else {
        str = outer1_8;
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
({ View: closure_5, StyleSheet } = get_ActivityIndicator);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: closure_8, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_9, ActivityPanelModes: closure_10 } = ActivityPanelModes);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["justifyContent"] = "space-between";
obj["alignItems"] = "center";
obj["flexDirection"] = "row";
obj["gap"] = 8;
obj.panelHeader = obj;
obj.panelLandscape = { flexDirection: "column-reverse" };
obj.headerContainer = { position: "absolute", top: 0 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, width: 32, height: 4, alignSelf: "center", marginTop: 4, opacity: 0.3 };
obj.pullIndicator = _createForOfIteratorHelperLoose;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_15 = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
let obj2 = {};
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexShrink: 1 };
obj2.buttonContainer = obj3;
obj2.buttonContainerLandscape = { flexDirection: "column-reverse" };
const styles = _createForOfIteratorHelperLoose.createStyles(obj2);
let closure_17 = importAllResult.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let setMode;
  ({ landscape, setMode } = wrapperOffset);
  let obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent(obj));
  let obj1 = require(566) /* initialize */;
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getSelfEmbeddedActivityForLocation(outer1_7.getConnectedActivityLocation()), []);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(importDefault(5468)(items1), 1)[0];
  const tmp5 = styles();
  obj = {};
  let id;
  const tmp = useBaseActivityPanelHeaderContent(obj);
  const tmp6 = callback2;
  if (null != first) {
    id = first.id;
  }
  obj.applicationId = id;
  const tmp6Result = tmp6(importDefault(15755), obj);
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
  const tmp7 = importDefault(15755);
  if (!landscape) {
    if (null != first) {
      name = first.name;
    }
  }
  obj2.activityName = name;
  obj2.setMode = setMode;
  const items3 = [tmp15(importDefault(15759), obj2), , ];
  let tmp18 = null != applicationId;
  if (tmp18) {
    const obj3 = { applicationId };
    tmp18 = callback2(importDefault(15760), obj3);
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
  const tmp16 = importDefault(15759);
  const tmp24 = callback2;
  if (null != stateFromStores) {
    tmp26 = stateFromStores;
  }
  obj4.selfEmbeddedActivity = tmp26;
  obj4.setMode = setMode;
  items4[2] = tmp24(importDefault(15765), obj4);
  obj.children = items4;
  return tmp10(tmp11, obj);
});
const memoResult = importAllResult.memo(() => {
  let obj = { context: importDefault(15744) };
  const tmp = useBaseActivityPanelHeader(obj);
  obj = { style: tmp.headerStyles, children: callback2(closure_17, obj) };
  obj = { landscape: tmp.wrapperDimensions.isWindowLandscape, setMode: tmp.setMode, wrapperOffset: tmp.wrapperOffset, pipState: tmp.pipState };
  return callback2(closure_5, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default memoResult;
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = styles;
export { useBaseActivityPanelHeader };
