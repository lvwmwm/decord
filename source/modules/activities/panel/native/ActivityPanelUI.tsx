// Module ID: 15698
// Function ID: 121048
// Name: renderActivityOrPIP
// Dependencies: [31, 27, 10226, 33, 15699, 15705, 15719, 5449, 4476, 15720, 15697, 2]
// Exports: default

// Module 15698 (renderActivityOrPIP)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 15699;
  } else {
    tmp4 = 15705;
  }
  return closure_7(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
function getKey(arg0) {
  return arg0;
}
function wrapChildren(children) {
  return callback(closure_4, { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children });
}
class BaseActivityPanelUI {
  constructor(arg0) {
    ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = global);
    mode = result.useContext(global.context).mode;
    tmp = require("useIsConnectedToVoiceChannel")();
    closure_1 = tmp;
    items = [, ];
    items[0] = mode;
    items[1] = tmp;
    memo = result.useMemo(() => {
      if (mode !== outer1_6.DISCONNECTED) {
        if (mode === outer1_6.PIP) {
          return tmp6;
        }
        tmp6 = mode === outer1_6.PIP ? outer1_10 : outer1_11;
      }
      tmp6 = outer1_9;
    }, items);
    obj = {};
    items1 = [, ];
    items1[0] = renderActivityPanelSystemUIManager();
    obj = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
    items1[1] = jsx(require("_createForOfIteratorHelperLoose").TransitionGroup, obj);
    obj.children = items1;
    return jsxs(require("Layer").LayerScope, obj);
  }
}
({ View: closure_4, StyleSheet: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = [];
let closure_10 = ["pip"];
let closure_11 = ["activity"];
const result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default function ActivityPanelUI() {
  const callback = React.useCallback(() => outer1_7(outer1_1(outer1_2[9]), {}), []);
  const items = [callback];
  return React.useMemo(() => outer1_7(outer1_15, { renderActivityOrPIP: outer1_12, context: outer1_1(outer1_2[10]), renderActivityPanelSystemUIManager: callback }), items);
};
export { BaseActivityPanelUI };
