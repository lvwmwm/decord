// Module ID: 15777
// Function ID: 121600
// Dependencies: [57, 31, 27, 10508, 33, 566, 5468, 15753, 15755, 15759, 15760, 15778, 15770, 2]

// Module 15777
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = importAllResult.memo(function FramePanelHeaderContentInner(arg0) {
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let pipState;
  let setMode;
  let wrapperOffset;
  ({ landscape, setMode } = arg0);
  ({ pipState, wrapperOffset } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getConnectedFrame(), []);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(importDefault(5468)(items1), 1)[0];
  let obj1 = require(15753) /* useBaseActivityPanelHeaderContent */;
  const baseActivityPanelHeaderContent = obj1.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  let obj2 = require(15753) /* useBaseActivityPanelHeaderContent */;
  const minimizeAndQuestButtonContainerStyles = obj2.useMinimizeAndQuestButtonContainerStyles();
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    let id;
    if (null != first) {
      id = first.id;
    }
    obj.applicationId = id;
    const tmp27Result = callback2(importDefault(15755), obj);
    obj = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape };
    obj1 = {};
    const items2 = [minimizeAndQuestButtonContainerStyles.buttonContainer, ];
    let prop;
    if (landscape) {
      prop = minimizeAndQuestButtonContainerStyles.buttonContainerLandscape;
    }
    items2[1] = prop;
    obj1.style = items2;
    obj2 = {};
    let name;
    const tmp11 = View;
    const tmp13 = callback2;
    const tmp27 = callback2;
    const tmp30 = importDefault(15755);
    if (!landscape) {
      if (null != first) {
        name = first.name;
      }
    }
    obj2.activityName = name;
    obj2.setMode = setMode;
    const items3 = [tmp13(importDefault(15759), obj2), , ];
    let tmp18 = null != applicationId;
    if (tmp18) {
      const obj3 = { applicationId };
      tmp18 = callback2(importDefault(15760), obj3);
    }
    items3[1] = tmp18;
    let tmp22 = null;
    if (landscape) {
      tmp22 = tmp27Result;
    }
    items3[2] = tmp22;
    obj1.children = items3;
    const items4 = [closure_7(tmp11, obj1), , ];
    let tmp23 = null;
    if (!landscape) {
      tmp23 = tmp27Result;
    }
    items4[1] = tmp23;
    const obj4 = { frame: stateFromStores, setMode };
    items4[2] = callback2(importDefault(15778), obj4);
    obj.children = items4;
    return closure_7(require(15753) /* useBaseActivityPanelHeaderContent */.BaseActivityPanelContent, obj);
  }
});
const memoResult = importAllResult.memo(() => {
  let obj = require(15753) /* useBaseActivityPanelHeaderContent */;
  obj = { context: importDefault(15770) };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_8, obj1) };
  return callback2(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;
