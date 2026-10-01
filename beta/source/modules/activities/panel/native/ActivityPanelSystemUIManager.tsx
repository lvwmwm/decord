// Module ID: 16862
// Function ID: 16863
// Name: ActivityPanelSystemUIManager
// Dependencies: [19, 8502, 21, 16839, 1364, 8839, 8841, 2]

// Module 16862 (ActivityPanelSystemUIManager)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import StatusBarDefault from "StatusBar" /* 8839 */;
import HomeIndicatorDefault from "HomeIndicator" /* 8841 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 16839 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
class BaseActivityPanelSystemUIManager {
  constructor(arg0) {
    let isWindowLandscape;
    let mode;
    ({ mode, isWindowLandscape } = arg0);
    let tmp = mode === ActivityPanelModes.PANEL;
    const PIP = ActivityPanelModes.PIP;
    const obj = PlatformUtils;
    const tmp3 = obj.isIOS() && tmp;
    let tmp7Result = null;
    const tmp4 = metroImportDefault;
    const tmp5 = metroRequire;
    if (mode !== PIP) {
      let tmp10 = !isWindowLandscape;
      const tmp7 = hasOwnProperty;
      const tmp9 = StatusBarDefault;
      if (isWindowLandscape) {
        tmp10 = !tmp;
      }
      const obj2 = { hidden: !tmp10, barStyle: "light-content" };
      tmp7Result = tmp7(tmp9, obj2);
    }
    const items = [tmp7Result, ];
    const tmp11 = hasOwnProperty;
    const tmp12 = HomeIndicatorDefault;
    if (tmp) {
      tmp = !tmp3;
    }
    const obj3 = { children: items };
    items[1] = tmp11(tmp12, { prefersHidden: tmp, prefersDeferringSystemGestures: tmp3 });
    return tmp4(tmp5, obj3);
  }
}
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(() => {
  const context = react.useContext(ActivityPanelStateContextDefault);
  const obj = { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape };
  return hasOwnProperty(BaseActivityPanelSystemUIManager, obj);
});
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export { BaseActivityPanelSystemUIManager };
