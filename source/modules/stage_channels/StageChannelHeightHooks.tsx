// Module ID: 10680
// Function ID: 10681
// Name: CALL_ACTION_BAR_HEIGHT
// Dependencies: [7674, 2]
// Exports: useGetActionBarHeight, useGetStageRTCPanelHeight

// Module 10680 (CALL_ACTION_BAR_HEIGHT)
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = function useGetStageRTCPanelHeight(stateFromStores) {
  const stageBlockedUsersCount = require(7674) /* useStageBlockedUsersCount */.useStageBlockedUsersCount(stateFromStores);
  require(7674) /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
};
export const useGetActionBarHeight = function useGetActionBarHeight(id) {
  const stageBlockedUsersCount = require(7674) /* useStageBlockedUsersCount */.useStageBlockedUsersCount(id);
  require(7674) /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
};
