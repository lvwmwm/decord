// Module ID: 11556
// Function ID: 11557
// Name: useDrawerWidth
// Dependencies: [1072, 5203, 5201, 11557, 2]
// Exports: useDrawerWidth

// Module 11556 (useDrawerWidth)
import Constants from "Constants" /* 1072 */;
import useChatLayoutDefault from "useChatLayout" /* 5201 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5203 */;
import useFoldSeamDefault from "useFoldSeam" /* 11557 */;
import size from "module_2" /* 2 */;

const DM_WIDTH = Constants.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export function useDrawerWidth(arg0) {
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
          bound1 = c3;
        } else {
          const _Math2 = Math;
          bound1 = Math.min(closure_4, width - 32);
        }
        settledSeam = bound1;
      }
    }
    if (isChatLockedOpen) {
      bound2 = c3;
    } else {
      const _Math = Math;
      bound2 = Math.min(closure_4, width - 32);
    }
    seam = bound2;
  } else {
    return width;
  }
}
