// Module ID: 15859
// Function ID: 15860
// Name: getJankSurfaceName
// Dependencies: [19, 4550, 15855, 15854, 4724, 15858, 1364, 2]
// Exports: attachJankActionSheetReporter, getJankSurfaceName, recordJankChannelDetailsOpen, setJankChannelDetailsOpen, setJankPanelOpen

// Module 15859 (getJankSurfaceName)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import getJankScreenName from "getJankScreenName" /* 15854 */;
import NativeJankStatsModuleDefault from "NativeJankStatsModule" /* 15858 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4550 */;

require = fn;
function composeJankSurfaceName(getBaseScreenName) {
  const stack = ActionSheetStore.getStack();
  let diff = stack.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      let appEntryKey = stack[diff].appEntryKey;
      if (appEntryKey == null) {
        appEntryKey = main;
      }
      if (appEntryKey === main) {
        break;
      } else {
        diff = diff - 1;
        tmp2 = null;
      }
    }
    let componentDisplayName = null;
    if (noop.isValidElement(tmp3.content)) {
      componentDisplayName = getJankScreenName.getComponentDisplayName(tmp3.content.type);
    }
    if (null == componentDisplayName) {
      let combined = React6;
    } else {
      let key = componentDisplayName;
      if (set.has(componentDisplayName)) {
        key = tmp3.key;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + React6 + ":" + key;
    }
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const tmp23 = getBaseScreenName();
    if (obj4.isModalScreenName(tmp23)) {
      return tmp23;
    } else if (null != closure_11[closure_11.length - 1]) {
      const _HermesInternal2 = HermesInternal;
      return "" + React5 + ":" + tmp16;
    } else {
      let tmp18 = null;
      if (set1.size > 0) {
        tmp18 = hasOwnProperty;
      }
      if (tmp24Result.getChatLayout().isChatBesideChannelList) {
        const wideViewScreenName = tmp24(15854).getWideViewScreenName(tmp18);
        if (null != wideViewScreenName) {
          return wideViewScreenName;
        }
        const tmp24Result2 = tmp24(15854);
      }
      if (tmp18 == null) {
        tmp18 = tmp23;
      }
      return tmp18;
    }
    obj4 = getJankScreenName;
  }
}
const JankScreenConstants = fn(15855);
({ CHANNEL_DETAILS_SCREEN: hasOwnProperty, INTERACTION_NONE: metroRequire, PANEL_SURFACE: closure_7, SHEET_SURFACE: closure_8 } = JankScreenConstants);
const set = new Set(["SimpleActionSheet"]);
const main = "main";
let closure_11 = [];
const set1 = new Set();
let c13 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export { composeJankSurfaceName };
export const getJankSurfaceName = function getJankSurfaceName() {
  return composeJankSurfaceName(getJankScreenName.getBaseScreenName);
};
export const recordJankChannelDetailsOpen = function recordJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set1.has(memo1);
  if (flag) {
    if (arg1) {
      obj.add(memo1);
      flag = true;
    } else {
      obj.delete(memo1);
      flag = true;
    }
  }
  return flag;
};
export const setJankChannelDetailsOpen = function setJankChannelDetailsOpen(arg0, arg1) {
  let flag = arg1 !== set1.has(arg0);
  if (flag) {
    if (arg1) {
      obj.add(arg0);
      flag = true;
    } else {
      obj.delete(arg0);
      flag = true;
    }
  }
  if (flag) {
    const obj2 = NativeJankStatsModuleDefault;
    if (obj2 != null) {
      obj2.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), timestampProducer);
    }
  }
};
export const setJankPanelOpen = function setJankPanelOpen(activity, arg1) {
  const lastIndexOfResult = closure_11.lastIndexOf(activity);
  if (arg1 !== -1 !== lastIndexOfResult) {
    if (arg1) {
      arr.push(activity);
    } else {
      arr.splice(lastIndexOfResult, 1);
    }
    const obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      obj.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), timestampProducer);
    }
  }
};
export const attachJankActionSheetReporter = function attachJankActionSheetReporter() {
  let isAndroidResult = !c13;
  if (!c13) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (isAndroidResult) {
    c13 = true;
    ActionSheetStore.addChangeListener(() => {
      const obj = NativeJankStatsModuleDefault;
      if (obj != null) {
        obj.setScreenContext(composeJankSurfaceName(getJankScreenName.getBaseScreenName), closure_1_6);
      }
    });
  }
};
