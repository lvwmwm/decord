// Module ID: 12492
// Function ID: 12493
// Name: CALL_ACTION_BAR_HEIGHT
// Dependencies: [8123, 2]
// Exports: useGetActionBarHeight, useGetStageRTCPanelHeight

// Module 12492 (CALL_ACTION_BAR_HEIGHT)
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = function useGetStageRTCPanelHeight(stateFromStores) {
  const stageBlockedUsersCount = require(8123) /* useStageBlockedUsersCount */.useStageBlockedUsersCount(stateFromStores);
  require(8123) /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
};
export const useGetActionBarHeight = function useGetActionBarHeight(id) {
  const stageBlockedUsersCount = require(8123) /* useStageBlockedUsersCount */.useStageBlockedUsersCount(id);
  require(8123) /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
};
