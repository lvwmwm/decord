// Module ID: 16199
// Function ID: 16200
// Name: FramePanelHeaderContentInner
// Dependencies: [32, 19, 17, 10566, 10567, 21, 5774, 16175, 16177, 16181, 16182, 16200, 589, 16192, 2]

// Module 16199 (FramePanelHeaderContentInner)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import map from "map";
import { asLaunched } from "FrameLayoutModes";
import jsxProd from "jsxProd";

let error;
let metroImportAll;
const require = arg1;
function FramePanelHeaderContentInner(arg0) {
  let frame;
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let pipState;
  let setMode;
  let wrapperOffset;
  ({ frame, landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  const items = [frame.applicationId];
  const first = callback(importDefault(5774)(items), 1)[0];
  let obj = require(16175) /* useBaseActivityPanelHeaderContent */;
  const baseActivityPanelHeaderContent = obj.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  let obj1 = require(16175) /* useBaseActivityPanelHeaderContent */;
  const minimizeAndQuestButtonContainerStyles = obj1.useMinimizeAndQuestButtonContainerStyles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp7Result = closure_7(importDefault(16177), { applicationId: id });
  obj = { hasConnectedActivity: true, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items1 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  let tmp15;
  const tmp12 = View;
  const tmp4 = require;
  const tmp8 = importDefault(16177);
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp15 = name;
  }
  const items2 = [closure_7(importDefault(16181), { activityName: tmp15, setMode }), , ];
  obj1 = { applicationId: frame.applicationId };
  items2[1] = closure_7(importDefault(16182), obj1);
  let tmp17 = null;
  if (landscape) {
    tmp17 = tmp7Result;
  }
  items2[2] = tmp17;
  obj[1] = items2;
  const items3 = [closure_8(tmp12, obj), , ];
  let tmp18 = null;
  if (!landscape) {
    tmp18 = tmp7Result;
  }
  items3[1] = tmp18;
  items3[2] = closure_7(importDefault(16200), { frame, setMode });
  obj[5] = items3;
  return closure_8(tmp4(16175).BaseActivityPanelContent, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_10 = importAllResult.memo((arg0) => {
  let obj = require(589) /* initialize */;
  const items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { frame: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    tmp2 = callback2(FramePanelHeaderContentInner, obj);
  }
  return tmp2;
});
const memoResult = importAllResult.memo(() => {
  let obj = require(16175) /* useBaseActivityPanelHeaderContent */;
  obj = { context: importDefault(16192) };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_10, obj1) };
  return callback2(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;
