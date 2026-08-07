// Module ID: 10930
// Function ID: 10931
// Name: sum
// Dependencies: [676, 4157, 4155, 2]
// Exports: getDrawerWidth, useDrawerWidth

// Module 10930 (sum)
import { DM_WIDTH } from "ME";

const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = require("useChatLayout").fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = require(4157) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  const obj = require(4157) /* useBaseAppContainerDimensions */;
  const chatLayout = require(4155) /* useChatLayout */.getChatLayout();
  if (!chatLayout.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = closure_3;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
};
export const useDrawerWidth = function useDrawerWidth() {
  const width = importDefault(4157)().width;
  if (!tmp.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = closure_3;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
};
