// Module ID: 12423
// Function ID: 12424
// Name: useDrawerWidth
// Dependencies: [5349, 1072, 5497, 5495, 12424, 504, 2]
// Exports: useDrawerWidth

// Module 12423 (useDrawerWidth)
import get_initialized from "get initialized" /* 504 */;
import useChatLayoutDefault from "useChatLayout" /* 5495 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5497 */;
import useFoldSeamDefault from "useFoldSeam" /* 12424 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let guildId;

let hasOwnProperty;
let metroRequire;
const DM_WIDTH = Constants.DM_WIDTH;
({ MOBILE_GUILD_UPSELL_LIST: hasOwnProperty, WATERWHEELS: metroRequire } = Constants);
const sum = 260 + DM_WIDTH;
const metroImportDefault = sum;
let closure_8 = 300 + DM_WIDTH;
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
  const items = [SelectedGuildStore];
  const obj2 = get_initialized;
  if (isChatBesideChannelList) {
    if (!obj2.useStateFromStores(items, () => {
      guildId = guildId.getGuildId();
      return guildId === closure_1_5 || guildId === closure_1_6;
    })) {
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
            bound1 = metroImportDefault;
          } else {
            const _Math2 = Math;
            bound1 = Math.min(closure_8, width - 32);
          }
          settledSeam = bound1;
        }
      }
      if (isChatLockedOpen) {
        bound2 = metroImportDefault;
      } else {
        const _Math = Math;
        bound2 = Math.min(closure_8, width - 32);
      }
      seam = bound2;
    }
  }
  return width;
}
