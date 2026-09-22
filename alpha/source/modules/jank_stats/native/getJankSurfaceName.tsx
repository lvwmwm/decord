// Module ID: 16360
// Function ID: 16361
// Name: getJankSurfaceName
// Dependencies: [16356, 16355, 4617, 16359, 2]
// Exports: composeJankSurfaceName, getJankSurfaceName, recordJankChannelDetailsOpen, setJankChannelDetailsOpen

// Module 16360 (getJankSurfaceName)
import getJankScreenName from "getJankScreenName" /* 16355 */;
import NativeJankStatsModuleDefault from "NativeJankStatsModule" /* 16359 */;
import JankScreenConstants from "JankScreenConstants" /* 16356 */;
import size from "module_2" /* 2 */;

({ CHANNEL_DETAILS_SCREEN: c3, INTERACTION_NONE: closure_4 } = JankScreenConstants);
const set = new Set();
const result = size.fileFinishedImporting("modules/jank_stats/native/getJankSurfaceName.tsx");

export const composeJankSurfaceName = function composeJankSurfaceName(resolveClosedName) {
  const tmp = resolveClosedName();
  if (obj.isModalScreenName(tmp)) {
    return tmp;
  } else {
    let tmp6 = null;
    if (set.size > 0) {
      tmp6 = React3;
    }
    if (tmp2Result.getChatLayout().isChatBesideChannelList) {
      const wideViewScreenName = tmp2(16355).getWideViewScreenName(tmp6);
      if (null != wideViewScreenName) {
        return wideViewScreenName;
      }
      const tmp2Result2 = tmp2(16355);
    }
    if (tmp6 == null) {
      tmp6 = tmp;
    }
    return tmp6;
  }
  obj = getJankScreenName;
};
export const getJankSurfaceName = function getJankSurfaceName() {
  const baseScreenName = getJankScreenName.getBaseScreenName();
  let wideViewScreenName = baseScreenName;
  if (!obj.isModalScreenName(baseScreenName)) {
    let tmp7 = null;
    if (set.size > 0) {
      tmp7 = React3;
    }
    if (!tmpResult.getChatLayout().isChatBesideChannelList) {
      if (tmp7 == null) {
        tmp7 = baseScreenName;
      }
      wideViewScreenName = tmp7;
    } else {
      wideViewScreenName = tmp(16355).getWideViewScreenName(tmp7);
      const tmpResult2 = tmp(16355);
    }
    tmpResult = tmp(4617);
  }
  return wideViewScreenName;
};
export const recordJankChannelDetailsOpen = function recordJankChannelDetailsOpen(memo1, arg1) {
  let flag = arg1 !== set.has(memo1);
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
  let flag = arg1 !== set.has(arg0);
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
      const baseScreenName = getJankScreenName.getBaseScreenName();
      let wideViewScreenName = baseScreenName;
      if (!obj5.isModalScreenName(baseScreenName)) {
        let tmp6 = null;
        if (obj.size > 0) {
          tmp6 = React3;
        }
        if (!tmp10Result.getChatLayout().isChatBesideChannelList) {
          if (tmp6 == null) {
            tmp6 = baseScreenName;
          }
          wideViewScreenName = tmp6;
        } else {
          wideViewScreenName = tmp10(16355).getWideViewScreenName(tmp6);
          const tmp10Result2 = tmp10(16355);
        }
        tmp10Result = tmp10(4617);
      }
      obj2.setScreenContext(wideViewScreenName, React4);
      obj5 = getJankScreenName;
    }
  }
};
