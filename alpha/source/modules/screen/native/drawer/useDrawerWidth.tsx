// Module ID: 11319
// Function ID: 11320
// Name: useDrawerWidth
// Dependencies: [1084, 558, 576, 5192, 5190, 11320, 2]

// Module 11319 (useDrawerWidth)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import useChatLayoutDefault from "useChatLayout" /* 5190 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5192 */;
import useFoldSeamDefault from "useFoldSeam" /* 11320 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const DM_WIDTH = Constants.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let closure_5 = 300 + DM_WIDTH;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDrawerWidth(arg0) {
  let isChatBesideChannelList;
  let isChatLockedOpen;
  let obj = arg0;
  const obj2 = react;
  const cResult = obj2.c(8);
  if (undefined === arg0) {
    obj = {};
  }
  const whileSliding = obj.whileSliding;
  const width = useBaseAppContainerDimensionsDefault().width;
  ({ isChatLockedOpen, isChatBesideChannelList } = useChatLayoutDefault());
  useChatLayoutDefault();
  const tmp4 = useFoldSeamDefault();
  if (isChatBesideChannelList) {
    let tmp7;
    let bound2;
    let seam;
    if (tmp4 != null) {
      seam = tmp4.seam;
    }
    if (seam == null) {
      seam = null;
    }
    if (cResult[0] === isChatLockedOpen) {
      if (cResult[1] === seam) {
        if (cResult[2] === width) {
          tmp7 = cResult[3];
        }
        if (null == whileSliding) {
          return tmp7;
        } else {
          let tmp14;
          let bound1;
          let settledSeam;
          if (tmp4 != null) {
            settledSeam = tmp4.settledSeam;
          }
          if (settledSeam == null) {
            settledSeam = null;
          }
          if (cResult[4] === isChatLockedOpen) {
            if (cResult[5] === settledSeam) {
              let bound;
              if (cResult[6] === width) {
                tmp14 = cResult[7];
              }
              if ("wider" === whileSliding) {
                const _Math4 = Math;
                bound = Math.max(tmp7, tmp14);
              } else {
                const _Math3 = Math;
                bound = Math.min(tmp7, tmp14);
              }
              return bound;
            }
          }
          if (null != settledSeam) {
            let tmp16;
            if (settledSeam > DM_WIDTH + 32) {
              tmp16 = settledSeam;
            }
            cResult[4] = isChatLockedOpen;
            cResult[5] = settledSeam;
            cResult[6] = width;
            cResult[7] = tmp16;
            tmp14 = tmp16;
          }
          if (isChatLockedOpen) {
            bound1 = sum;
          } else {
            const _Math2 = Math;
            bound1 = Math.min(closure_5, width - 32);
          }
          tmp16 = bound1;
        }
      }
    }
    if (null != seam) {
      let tmp9;
      if (seam > DM_WIDTH + 32) {
        tmp9 = seam;
      }
      cResult[0] = isChatLockedOpen;
      cResult[1] = seam;
      cResult[2] = width;
      cResult[3] = tmp9;
      tmp7 = tmp9;
    }
    if (isChatLockedOpen) {
      bound2 = sum;
    } else {
      const _Math = Math;
      bound2 = Math.min(closure_5, width - 32);
    }
    tmp9 = bound2;
  } else {
    return width;
  }
}) : (function useDrawerWidth() {
  let isChatBesideChannelList;
  let isChatLockedOpen;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const whileSliding = obj.whileSliding;
  const width = useBaseAppContainerDimensionsDefault().width;
  ({ isChatLockedOpen, isChatBesideChannelList } = useChatLayoutDefault());
  useChatLayoutDefault();
  const tmp2 = useFoldSeamDefault();
  if (isChatBesideChannelList) {
    let bound2;
    let seam;
    if (tmp2 != null) {
      seam = tmp2.seam;
    }
    if (seam == null) {
      seam = null;
    }
    if (null != seam) {
      if (null == whileSliding) {
        return seam;
      } else {
        let bound1;
        let settledSeam;
        if (tmp2 != null) {
          settledSeam = tmp2.settledSeam;
        }
        if (settledSeam == null) {
          settledSeam = null;
        }
        if (null != settledSeam) {
          let bound;
          if ("wider" === whileSliding) {
            const _Math4 = Math;
            bound = Math.max(seam, settledSeam);
          } else {
            const _Math3 = Math;
            bound = Math.min(seam, settledSeam);
          }
          return bound;
        }
        if (isChatLockedOpen) {
          bound1 = sum;
        } else {
          const _Math2 = Math;
          bound1 = Math.min(closure_5, width - 32);
        }
        settledSeam = bound1;
      }
    }
    if (isChatLockedOpen) {
      bound2 = sum;
    } else {
      const _Math = Math;
      bound2 = Math.min(closure_5, width - 32);
    }
    seam = bound2;
  } else {
    return width;
  }
});
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const useDrawerWidth = tmp3;
