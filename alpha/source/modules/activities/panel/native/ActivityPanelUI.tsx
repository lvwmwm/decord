// Module ID: 19076
// Function ID: 19077
// Name: ActivityPanelUI
// Dependencies: [19, 17, 5652, 21, 19077, 19082, 19095, 5606, 5075, 19096, 19075, 2]
// Exports: default

// Module 19076 (ActivityPanelUI)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 19075 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19095 */;
import ActivityPanelSystemUIManagerDefault from "ActivityPanelSystemUIManager" /* 19096 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
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
    tmp4 = 19077;
  } else {
    tmp4 = 19082;
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
class BaseActivityPanelUI {
  constructor(context) {
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
    const LayerScope = mode(5606).LayerScope;
    items1 = [renderActivityPanelSystemUIManager(), ];
    const obj2 = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
    items1[1] = closure_7(mode(5075).TransitionGroup, obj2);
    return closure_8(LayerScope, obj);
  }
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default function ActivityPanelUI() {
  const renderActivityPanelSystemUIManager = react.useCallback(() => closure_1_7(ActivityPanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return react.useMemo(() => {
    const obj = { renderActivityOrPIP, context: ActivityPanelStateContextDefault, renderActivityPanelSystemUIManager };
    return metroImportDefault(BaseActivityPanelUI, obj);
  }, items);
};
export { BaseActivityPanelUI };
