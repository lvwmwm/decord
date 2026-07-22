// Module ID: 10618
// Function ID: 82836
// Name: CALL_ACTION_BAR_HEIGHT
// Dependencies: []
// Exports: useGetActionBarHeight, useGetStageRTCPanelHeight

// Module 10618 (CALL_ACTION_BAR_HEIGHT)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = function useGetStageRTCPanelHeight(stateFromStores) {
  const stageBlockedUsersCount = require(dependencyMap[0]).useStageBlockedUsersCount(stateFromStores);
  require(dependencyMap[0]);
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
};
export const useGetActionBarHeight = function useGetActionBarHeight(id) {
  const stageBlockedUsersCount = require(dependencyMap[0]).useStageBlockedUsersCount(id);
  require(dependencyMap[0]);
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
};
