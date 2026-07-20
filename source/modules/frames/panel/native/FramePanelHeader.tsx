// Module ID: 15595
// Function ID: 118999
// Dependencies: []

// Module 15595
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
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
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => connectedFrame.getConnectedFrame(), []);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(importDefault(dependencyMap[6])(items1), 1)[0];
  let obj1 = arg1(dependencyMap[7]);
  const baseActivityPanelHeaderContent = obj1.useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset, pipState });
  ({ gesture, headerWrapperStyles, headerStyles } = baseActivityPanelHeaderContent);
  let obj2 = arg1(dependencyMap[7]);
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
    const tmp27Result = callback2(importDefault(dependencyMap[8]), obj);
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
    const tmp30 = importDefault(dependencyMap[8]);
    if (!landscape) {
      if (null != first) {
        name = first.name;
      }
    }
    obj2.activityName = name;
    obj2.setMode = setMode;
    const items3 = [tmp13(importDefault(dependencyMap[9]), obj2), , ];
    let tmp18 = null != applicationId;
    if (tmp18) {
      const obj3 = { applicationId };
      tmp18 = callback2(importDefault(dependencyMap[10]), obj3);
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
    items4[2] = callback2(importDefault(dependencyMap[11]), obj4);
    obj.children = items4;
    return closure_7(arg1(dependencyMap[7]).BaseActivityPanelContent, obj);
  }
});
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[7]);
  obj = { context: importDefault(dependencyMap[12]) };
  const baseActivityPanelHeader = obj.useBaseActivityPanelHeader(obj);
  obj = { style: baseActivityPanelHeader.headerStyles, children: callback2(closure_8, obj1) };
  return callback2(View, obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/frames/panel/native/FramePanelHeader.tsx");

export default memoResult;
