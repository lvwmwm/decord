// Module ID: 17703
// Function ID: 17704
// Name: ActivityPanelUI
// Dependencies: [19, 17, 6067, 21, 17704, 17710, 558, 576, 17724, 4827, 6845, 17725, 17702, 2]

// Module 17703 (ActivityPanelUI)
import react2 from "react" /* 576 */;
import native from "native" /* 4827 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6067 */;
import LayerScope2 from "LayerScope" /* 6845 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17702 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17724 */;
import ActivityPanelSystemUIManagerDefault from "ActivityPanelSystemUIManager" /* 17725 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  let tmp4;
  const tmp = metroImportDefault;
  const tmp2 = importDefault;
  if ("pip" === arg1) {
    tmp4 = 17704;
  } else {
    tmp4 = 17710;
  }
  const obj = { transitionState, transitionCleanUp };
  return tmp(tmp2(tmp4), obj, arg0);
}
function getKey(arg0) {
  return arg0;
}
function wrapChildren(items3) {
  const obj = { style: hasOwnProperty.absoluteFill, pointerEvents: "box-none", children: items3 };
  return metroImportDefault(React3, obj);
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseActivityPanelUI(context) {
  let items;
  let renderActivityPanelSystemUIManager;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = context);
  const mode = react.useContext(context.context).mode;
  if (mode !== ActivityPanelModes.DISCONNECTED) {
    if (mode === ActivityPanelModes.PIP) {
      let tmp7;
      if (cResult[0] !== renderActivityPanelSystemUIManager) {
        const result = renderActivityPanelSystemUIManager();
        cResult[0] = renderActivityPanelSystemUIManager;
        cResult[1] = result;
        tmp7 = result;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp6) {
        let tmp9;
        if (cResult[3] === renderActivityOrPIP) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp7) {
          let tmp14;
          if (cResult[6] === tmp9) {
            tmp14 = cResult[7];
          }
          return tmp14;
        }
        const obj2 = { children: items };
        items = [tmp7, tmp9];
        const tmp16 = metroImportAll(LayerScope2.LayerScope, obj2);
        cResult[5] = tmp7;
        cResult[6] = tmp9;
        cResult[7] = tmp16;
        tmp14 = tmp16;
      }
      const obj3 = { items: tmp6, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
      const tmp13 = metroImportDefault(native.TransitionGroup, obj3);
      cResult[2] = tmp6;
      cResult[3] = renderActivityOrPIP;
      cResult[4] = tmp13;
      tmp9 = tmp13;
    }
    tmp6 = mode === tmp5.PIP ? closure_13 : closure_14;
  }
  tmp6 = closure_12;
}) : (function BaseActivityPanelUI(context) {
  let closure_1;
  let items1;
  let renderActivityPanelSystemUIManager;
  ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = context);
  const mode = react.useContext(context.context).mode;
  const tmp = useIsConnectedToVoiceChannelDefault();
  importDefault = tmp;
  const items = [mode, tmp];
  const memo = react.useMemo(() => {
    let tmp4;
    if (mode !== ActivityPanelModes.DISCONNECTED) {
      if (mode === ActivityPanelModes.PIP) {
        return tmp4;
      }
      tmp4 = tmp === tmp2.PIP ? closure_13 : closure_14;
    }
    tmp4 = closure_12;
  }, items);
  const obj = { children: items1 };
  const LayerScope = mode(6845).LayerScope;
  items1 = [renderActivityPanelSystemUIManager(), ];
  const obj2 = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
  items1[1] = closure_7(mode(4827).TransitionGroup, obj2);
  return closure_8(LayerScope, obj);
});
let closure_15 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityPanelUI() {
  let first;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return closure_1_7(ActivityPanelSystemUIManagerDefault, {});
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { renderActivityOrPIP, context: ActivityPanelStateContextDefault, renderActivityPanelSystemUIManager: first };
    const tmp9 = metroImportDefault(closure_15, obj2);
    cResult[1] = tmp9;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ActivityPanelUI() {
  const renderActivityPanelSystemUIManager = react.useCallback(() => closure_1_7(ActivityPanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return react.useMemo(() => {
    const obj = { renderActivityOrPIP, context: ActivityPanelStateContextDefault, renderActivityPanelSystemUIManager };
    return metroImportDefault(closure_15, obj);
  }, items);
});
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default tmp5;
export const BaseActivityPanelUI = tmp4;
