// Module ID: 19145
// Function ID: 19146
// Name: ActivityPanelSystemUIManager
// Dependencies: [19, 5657, 21, 19124, 1375, 11212, 11702, 2]

// Module 19145 (ActivityPanelSystemUIManager)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5657 */;
import StatusBarDefault from "StatusBar" /* 11212 */;
import HomeIndicatorDefault from "HomeIndicator" /* 11702 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 19124 */;
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
const memoResult = react.memo(function ActivityPanelSystemUIManager() {
  const context = react.useContext(ActivityPanelStateContextDefault);
  const obj = { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape };
  return hasOwnProperty(BaseActivityPanelSystemUIManager, obj);
});
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export { BaseActivityPanelSystemUIManager };
