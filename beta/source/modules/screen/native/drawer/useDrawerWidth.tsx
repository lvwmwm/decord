// Module ID: 11021
// Function ID: 11022
// Name: useDrawerWidth
// Dependencies: [1074, 4697, 4695, 2]
// Exports: getDrawerWidth, useDrawerWidth

// Module 11021 (useDrawerWidth)
import Constants from "Constants" /* 1074 */;
import useChatLayout from "useChatLayout" /* 4695 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4697 */;
import size from "module_2" /* 2 */;

const useChatLayoutDefault = useChatLayout;
const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const DM_WIDTH = Constants.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const obj = useBaseAppContainerDimensions;
  const width = obj.getBaseAppContainerDimensions().width;
  const obj2 = useChatLayout;
  const chatLayout = obj2.getChatLayout();
  let tmp2 = width;
  if (chatLayout.isChatBesideChannelList) {
    let bound;
    if (chatLayout.isChatLockedOpen) {
      bound = c3;
    } else {
      const _Math = Math;
      bound = Math.min(closure_4, width - 32);
    }
    tmp2 = bound;
  }
  return tmp2;
};
export const useDrawerWidth = function useDrawerWidth() {
  const width = useBaseAppContainerDimensionsDefault().width;
  const tmp = useChatLayoutDefault();
  let tmp2 = width;
  if (tmp.isChatBesideChannelList) {
    let bound;
    if (tmp.isChatLockedOpen) {
      bound = c3;
    } else {
      const _Math = Math;
      bound = Math.min(closure_4, width - 32);
    }
    tmp2 = bound;
  }
  return tmp2;
};
