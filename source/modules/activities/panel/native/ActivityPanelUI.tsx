// Module ID: 15563
// Function ID: 118769
// Name: renderActivityOrPIP
// Dependencies: []
// Exports: default

// Module 15563 (renderActivityOrPIP)
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = dependencyMap[4];
  } else {
    tmp4 = dependencyMap[5];
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
    mode = importAll.useContext(global.context).mode;
    arg1 = mode;
    tmp = importDefault(dependencyMap[6])();
    importDefault = tmp;
    items = [, ];
    items[0] = mode;
    items[1] = tmp;
    memo = importAll.useMemo(() => {
      if (mode !== constants.DISCONNECTED) {
        if (mode === constants.PIP) {
          return tmp6;
        }
        let tmp6 = mode === constants.PIP ? closure_10 : closure_11;
      }
      tmp6 = closure_9;
    }, items);
    obj = {};
    items1 = [, ];
    items1[0] = renderActivityPanelSystemUIManager();
    obj = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
    items1[1] = jsx(arg1(dependencyMap[8]).TransitionGroup, obj);
    obj.children = items1;
    return jsxs(arg1(dependencyMap[7]).LayerScope, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5 } = arg1(dependencyMap[1]));
const ActivityPanelModes = arg1(dependencyMap[2]).ActivityPanelModes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = [];
let closure_10 = [null];
let closure_11 = [];
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default function ActivityPanelUI() {
  const callback = React.useCallback(() => callback2(callback(closure_2[9]), {}), []);
  const arg1 = callback;
  const items = [callback];
  return React.useMemo(() => callback2(closure_15, { renderActivityOrPIP: closure_12, context: callback(closure_2[10]), renderActivityPanelSystemUIManager: callback }), items);
};
export { BaseActivityPanelUI };
