// Module ID: 15720
// Function ID: 121236
// Name: BaseActivityPanelSystemUIManager
// Dependencies: [31, 10226, 33, 15697, 477, 9757, 10537, 2]

// Module 15720 (BaseActivityPanelSystemUIManager)
import importAllResult from "result";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class BaseActivityPanelSystemUIManager {
  constructor(arg0) {
    mode = global.mode;
    tmp = mode === ActivityPanelModes.PANEL;
    obj = require("set");
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
      tmp8 = closure_1;
      tmp9 = closure_2;
      num = 5;
      tmp7 = jsx;
      obj1 = {};
      tmp11 = !global.isWindowLandscape;
      tmp10 = require("_isNativeReflectConstruct");
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
    tmp13 = require("_isNativeReflectConstruct");
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
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(importDefault(15697));
  return callback(BaseActivityPanelSystemUIManager, { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape });
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export { BaseActivityPanelSystemUIManager };
