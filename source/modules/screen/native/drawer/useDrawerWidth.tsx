// Module ID: 10877
// Function ID: 84366
// Name: computeTabletDrawerWidth
// Dependencies: [653, 3986, 3984, 2]
// Exports: getDrawerWidth, useDrawerWidth

// Module 10877 (computeTabletDrawerWidth)
import { DM_WIDTH } from "ME";

function computeTabletDrawerWidth(width, arg1) {
  if (arg1) {
    let bound = closure_3;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
  return bound;
}
const sum = 260 + DM_WIDTH;
let closure_4 = 300 + DM_WIDTH;
const result = require("useChatLayout").fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = require(3986) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  const obj = require(3986) /* useBaseAppContainerDimensions */;
  const chatLayout = require(3984) /* useChatLayout */.getChatLayout();
  let tmp3 = width;
  if (chatLayout.isChatBesideChannelList) {
    tmp3 = computeTabletDrawerWidth(width, tmp2);
  }
  return tmp3;
};
export const useDrawerWidth = function useDrawerWidth() {
  const width = importDefault(3986)().width;
  let tmp3 = width;
  if (tmp.isChatBesideChannelList) {
    tmp3 = computeTabletDrawerWidth(width, tmp2);
  }
  return tmp3;
};
