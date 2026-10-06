// Module ID: 15644
// Function ID: 15645
// Name: getJankSurfaceName
// Dependencies: [15640, 15639, 4697, 15643, 2]
// Exports: composeJankSurfaceName, getJankSurfaceName, recordJankChannelDetailsOpen, setJankChannelDetailsOpen

// Module 15644 (getJankSurfaceName)
import useChatLayout from "useChatLayout" /* 4697 */;
import getJankScreenName from "getJankScreenName" /* 15639 */;
import react_nativeDefault from "react-native" /* 15643 */;
import JankScreenConstants from "JankScreenConstants" /* 15640 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ CHANNEL_DETAILS_SCREEN: c3, INTERACTION_NONE: closure_4 } = JankScreenConstants);
const set = new Set();
const result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export const composeJankSurfaceName = function composeJankSurfaceName(resolveClosedName) {
  const tmp = resolveClosedName();
  const obj = getJankScreenName;
  if (obj.isModalScreenName(tmp)) {
    return tmp;
  } else {
    let tmp6 = null;
    if (set.size > 0) {
      tmp6 = _false;
    }
    const tmp2Result = useChatLayout;
    if (tmp2Result.getChatLayout().isChatBesideChannelList) {
      const tmp2Result2 = getJankScreenName;
      const wideViewScreenName = tmp2Result2.getWideViewScreenName(tmp6);
      if (null != wideViewScreenName) {
        return wideViewScreenName;
      }
    }
    if (tmp6 == null) {
      tmp6 = tmp;
    }
    return tmp6;
  }
};
export const getJankSurfaceName = function getJankSurfaceName() {
  const baseScreenName = getJankScreenName.getBaseScreenName();
  let wideViewScreenName = baseScreenName;
  const obj = getJankScreenName;
  if (!obj.isModalScreenName(baseScreenName)) {
    let tmp7 = null;
    if (set.size > 0) {
      tmp7 = _false;
    }
    const tmpResult = useChatLayout;
    if (!tmpResult.getChatLayout().isChatBesideChannelList) {
      if (tmp7 == null) {
        tmp7 = baseScreenName;
      }
      wideViewScreenName = tmp7;
    } else {
      const tmpResult2 = getJankScreenName;
      wideViewScreenName = tmpResult2.getWideViewScreenName(tmp7);
    }
  }
  return wideViewScreenName;
};
export const recordJankChannelDetailsOpen = function recordJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set.has(memo1);
  if (flag) {
    if (arg1) {
      set.add(memo1);
      flag = true;
    } else {
      set.delete(memo1);
      flag = true;
    }
  }
  return flag;
};
export const setJankChannelDetailsOpen = function setJankChannelDetailsOpen(arg0, arg1) {
  let flag = arg1 !== set.has(arg0);
  if (flag) {
    if (arg1) {
      set.add(arg0);
      flag = true;
    } else {
      set.delete(arg0);
      flag = true;
    }
  }
  if (flag) {
    const tmp5 = react_nativeDefault;
    if (tmp5 != null) {
      const setScreenContext = tmp5.setScreenContext;
      const baseScreenName = getJankScreenName.getBaseScreenName();
      let wideViewScreenName = baseScreenName;
      const obj4 = getJankScreenName;
      if (!obj4.isModalScreenName(baseScreenName)) {
        let tmp7 = null;
        if (set.size > 0) {
          tmp7 = _false;
        }
        const tmp11Result = useChatLayout;
        if (!tmp11Result.getChatLayout().isChatBesideChannelList) {
          if (tmp7 == null) {
            tmp7 = baseScreenName;
          }
          wideViewScreenName = tmp7;
        } else {
          const tmp11Result2 = getJankScreenName;
          wideViewScreenName = tmp11Result2.getWideViewScreenName(tmp7);
        }
      }
      setScreenContext(wideViewScreenName, React3);
    }
  }
};
