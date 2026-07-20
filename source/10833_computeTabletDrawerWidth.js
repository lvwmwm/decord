// Module ID: 10833
// Function ID: 84081
// Name: computeTabletDrawerWidth
// Dependencies: []
// Exports: getDrawerWidth, useDrawerWidth

// Module 10833 (computeTabletDrawerWidth)
function computeTabletDrawerWidth(width, arg1) {
  if (arg1) {
    let bound = sum;
  } else {
    const _Math = Math;
    bound = Math.min(closure_4, width - 32);
  }
  return bound;
}
const DM_WIDTH = require(dependencyMap[0]).DM_WIDTH;
const sum = 260 + DM_WIDTH;
let closure_4 = 300 + DM_WIDTH;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const getDrawerWidth = function getDrawerWidth() {
  const width = require(dependencyMap[1]).getBaseAppContainerDimensions().width;
  const obj = require(dependencyMap[1]);
  const chatLayout = require(dependencyMap[2]).getChatLayout();
  let tmp3 = width;
  if (chatLayout.isChatBesideChannelList) {
    tmp3 = computeTabletDrawerWidth(width, tmp2);
  }
  return tmp3;
};
export const useDrawerWidth = function useDrawerWidth() {
  const width = importDefault(dependencyMap[1])().width;
  let tmp3 = width;
  if (tmp.isChatBesideChannelList) {
    tmp3 = computeTabletDrawerWidth(width, tmp2);
  }
  return tmp3;
};
