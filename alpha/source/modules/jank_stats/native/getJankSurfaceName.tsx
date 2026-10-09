// Module ID: 16357
// Function ID: 16358
// Name: getJankSurfaceName
// Dependencies: [19, 4761, 16353, 16352, 4940, 16356, 1382, 2]
// Exports: attachJankActionSheetReporter, getJankSurfaceName, recordJankChannelDetailsOpen, setJankChannelDetailsOpen, setJankPanelOpen, setJankVoicePanelFocus, setJankVoicePanelTab

// Module 16357 (getJankSurfaceName)
import useChatLayout from "useChatLayout" /* 4940 */;
import getJankScreenName from "getJankScreenName" /* 16352 */;
import react_nativeDefault from "react-native" /* 16356 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4761 */;
import JankScreenConstants from "JankScreenConstants" /* 16353 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function composeJankSurfaceName(getBaseScreenName) {
  const stack = ActionSheetStore.getStack();
  let diff = stack.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    let combined;
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
    if (react.isValidElement(tmp3.content)) {
      const obj = getJankScreenName;
      componentDisplayName = obj.getComponentDisplayName(tmp3.content.type);
    }
    if (null == componentDisplayName) {
      combined = metroImportAll;
    } else {
      let key = componentDisplayName;
      const tmp10 = metroImportAll;
      if (set.has(componentDisplayName)) {
        key = tmp3.key;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + tmp10 + ":" + key;
    }
    tmp2 = combined;
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const tmp28 = getBaseScreenName();
    const obj4 = getJankScreenName;
    if (obj4.isModalScreenName(tmp28)) {
      return tmp28;
    } else if (null != closure_11[closure_11.length - 1]) {
      let combined1;
      if ("voice" !== closure_11[closure_11.length - 1]) {
        const _HermesInternal4 = HermesInternal;
        combined1 = "" + metroImportDefault + ":" + tmp15;
      } else {
        const _Array = Array;
        const arr = Array.from(map.values());
        let arr2 = arr.pop();
        if (arr2 == null) {
          arr2 = c14;
        }
        if (null != arr2) {
          const _HermesInternal3 = HermesInternal;
          combined1 = "" + metroImportDefault + ":" + tmp15 + ":" + arr2;
        } else {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + metroImportDefault + ":" + tmp15;
        }
      }
      return combined1;
    } else {
      let tmp17 = null;
      if (set1.size > 0) {
        tmp17 = hasOwnProperty;
      }
      const tmp29Result = useChatLayout;
      if (tmp29Result.getChatLayout().isChatBesideChannelList) {
        const tmp29Result2 = getJankScreenName;
        const wideViewScreenName = tmp29Result2.getWideViewScreenName(tmp17);
        if (null != wideViewScreenName) {
          return wideViewScreenName;
        }
      }
      if (tmp17 == null) {
        tmp17 = tmp28;
      }
      return tmp17;
    }
  }
}
({ CHANNEL_DETAILS_SCREEN: hasOwnProperty, INTERACTION_NONE: metroRequire, PANEL_SURFACE: metroImportDefault, SHEET_SURFACE: metroImportAll } = JankScreenConstants);
const set = new Set(["SimpleActionSheet"]);
const main = "main";
let closure_11 = [];
const set1 = new Set();
const map = new Map();
let c14 = null;
let c15 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export { composeJankSurfaceName };
export const getJankSurfaceName = function getJankSurfaceName() {
  return composeJankSurfaceName(getJankScreenName.getBaseScreenName);
};
export const recordJankChannelDetailsOpen = function recordJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set1.has(memo1);
  if (flag) {
    if (arg1) {
      set1.add(memo1);
      flag = true;
    } else {
      set1.delete(memo1);
      flag = true;
    }
  }
  return flag;
};
export const setJankChannelDetailsOpen = function setJankChannelDetailsOpen(arg0, arg1) {
  let flag = arg1 !== set1.has(arg0);
  if (flag) {
    if (arg1) {
      set1.add(arg0);
      flag = true;
    } else {
      set1.delete(arg0);
      flag = true;
    }
  }
  if (flag) {
    const tmp6 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      obj2.setScreenContext(tmp6, metroRequire);
    }
  }
};
export const setJankPanelOpen = function setJankPanelOpen(activity, arg1) {
  const lastIndexOfResult = closure_11.lastIndexOf(activity);
  if (arg1 !== -1 !== lastIndexOfResult) {
    if (arg1) {
      closure_11.push(activity);
    } else {
      closure_11.splice(lastIndexOfResult, 1);
    }
    const tmp8 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj = react_nativeDefault;
    if (arg1) {
      if (obj != null) {
        obj.setScreenContext(tmp8, metroRequire);
      }
    } else if (obj != null) {
      obj.surfaceClosed(tmp8);
    }
  }
};
export const setJankVoicePanelTab = function setJankVoicePanelTab(channelId, arg1) {
  let value = map.get(channelId);
  if (value == null) {
    value = null;
  }
  if (value !== arg1) {
    if (null == arg1) {
      map.delete(channelId);
    } else {
      const result = obj.set(channelId, arg1);
    }
    const tmp4 = null == arg1;
    const tmp8 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj2 = react_nativeDefault;
    if (tmp4) {
      if (obj2 != null) {
        obj2.surfaceClosed(tmp8);
      }
    } else if (obj2 != null) {
      obj2.setScreenContext(tmp8, metroRequire);
    }
  }
};
export const setJankVoicePanelFocus = function setJankVoicePanelFocus(arg0) {
  if (arg0 !== c14) {
    c14 = arg0;
    const tmp4 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
    const obj = react_nativeDefault;
    if (obj != null) {
      obj.setScreenContext(tmp4, metroRequire);
    }
  }
};
export const attachJankActionSheetReporter = function attachJankActionSheetReporter() {
  let length;
  let tmp = c15;
  if (!tmp) {
    let tmp2 = length;
    let obj = length(1382);
    if (obj.isAndroid()) {
      c15 = true;
      length = ActionSheetStore.getStack().length;
      ActionSheetStore.addChangeListener(() => {
        length = ActionSheetStore.getStack().length;
        const tmp = length < length;
        const tmp2 = composeJankSurfaceName(getJankScreenName.getBaseScreenName);
        const obj = react_nativeDefault;
        if (tmp) {
          if (obj != null) {
            obj.surfaceClosed(tmp2);
          }
        } else if (obj != null) {
          obj.setScreenContext(tmp2, metroRequire);
        }
      });
    }
  }
};
