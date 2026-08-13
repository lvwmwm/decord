// Module ID: 10971
// Function ID: 10972
// Name: sum
// Dependencies: [676, 4202, 4200, 2]
// Exports: getDrawerWidth, useDrawerWidth

// Module 10971 (sum)
import { DM_WIDTH } from "ME";

const sum = 260 + DM_WIDTH;
let c3 = sum;
let closure_4 = 300 + DM_WIDTH;
const result = require("useChatLayout").fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = require(4202) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width;
  const obj = require(4202) /* useBaseAppContainerDimensions */;
  const chatLayout = require(4200) /* useChatLayout */.getChatLayout();
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
  const width = importDefault(4202)().width;
  if (!tmp.isChatBesideChannelList) {
    return width;
  } else if (tmp2) {
    let bound = closure_3;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
};
