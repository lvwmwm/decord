// Module ID: 10821
// Function ID: 10822
// Name: CALL_ACTION_BAR_HEIGHT
// Dependencies: [8048, 2]
// Exports: useGetActionBarHeight, useGetStageRTCPanelHeight

// Module 10821 (CALL_ACTION_BAR_HEIGHT)
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = function useGetStageRTCPanelHeight(stateFromStores) {
  const stageBlockedUsersCount = require(8048) /* useStageBlockedUsersCount */.useStageBlockedUsersCount(stateFromStores);
  require(8048) /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 88;
  } else {
    num = 68;
  }
  return num;
};
export const useGetActionBarHeight = function useGetActionBarHeight(id) {
  const stageBlockedUsersCount = require(8048) /* useStageBlockedUsersCount */.useStageBlockedUsersCount(id);
  require(8048) /* useStageBlockedUsersCount */;
  if (stageBlockedUsersCount > 0) {
    let num = 132;
  } else {
    num = 112;
  }
  return num;
};
