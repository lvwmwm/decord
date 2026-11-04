// Module ID: 11746
// Function ID: 11747
// Name: useDrawerWidth
// Dependencies: [5172, 1072, 5327, 5325, 11747, 504, 2]
// Exports: useDrawerWidth

// Module 11746 (useDrawerWidth)
import get_initialized from "get initialized" /* 504 */;
import useChatLayoutDefault from "useChatLayout" /* 5325 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5327 */;
import useFoldSeamDefault from "useFoldSeam" /* 11747 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const DM_WIDTH = Constants.DM_WIDTH;
const MOBILE_GUILD_UPSELL_LIST = Constants.MOBILE_GUILD_UPSELL_LIST;
const sum = 260 + DM_WIDTH;
const metroRequire = sum;
let closure_7 = 300 + DM_WIDTH;
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export function useDrawerWidth(arg0) {
  let guildId;
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
  const items = [SelectedGuildStore];
  const obj2 = get_initialized;
  if (isChatBesideChannelList) {
    if (!obj2.useStateFromStores(items, () => guildId.getGuildId() === MOBILE_GUILD_UPSELL_LIST)) {
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
            bound1 = metroRequire;
          } else {
            const _Math2 = Math;
            bound1 = Math.min(closure_7, width - 32);
          }
          settledSeam = bound1;
        }
      }
      if (isChatLockedOpen) {
        bound2 = metroRequire;
      } else {
        const _Math = Math;
        bound2 = Math.min(closure_7, width - 32);
      }
      seam = bound2;
    }
  }
  return width;
}
