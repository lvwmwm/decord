// Module ID: 15595
// Function ID: 119020
// Name: BaseActivityPanelSystemUIManager
// Dependencies: []

// Module 15595 (BaseActivityPanelSystemUIManager)
class BaseActivityPanelSystemUIManager {
  constructor(arg0) {
    mode = global.mode;
    tmp = mode === ActivityPanelModes.PANEL;
    obj = arg1(dependencyMap[4]);
    tmp2 = !obj.isIOS();
    tmp3 = !tmp2;
    if (!tmp2) {
      tmp3 = tmp;
    }
    obj = {};
    tmp7Result = null;
    tmp4 = jsxs;
    tmp5 = Fragment;
    if (mode !== ActivityPanelModes.PIP) {
      tmp8 = importDefault;
      tmp9 = dependencyMap;
      num = 5;
      tmp7 = jsx;
      obj1 = {};
      tmp11 = !global.isWindowLandscape;
      tmp10 = importDefault(dependencyMap[5]);
      if (!tmp11) {
        tmp11 = !tmp;
      }
      obj1.hidden = !tmp11;
      str = "light-content";
      obj1.barStyle = "light-content";
      tmp7Result = tmp7(tmp10, obj1);
    }
    items = [, ];
    items[0] = tmp7Result;
    tmp12 = jsx;
    obj2 = {};
    tmp13 = importDefault(dependencyMap[6]);
    if (tmp) {
      tmp = !tmp3;
    }
    obj2.prefersHidden = tmp;
    obj2.prefersDeferringSystemGestures = tmp3;
    items[1] = tmp12(tmp13, obj2);
    obj.children = items;
    return tmp4(tmp5, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const ActivityPanelModes = arg1(dependencyMap[1]).ActivityPanelModes;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(importDefault(dependencyMap[3]));
  return callback(BaseActivityPanelSystemUIManager, { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape });
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export { BaseActivityPanelSystemUIManager };
