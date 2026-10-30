// Module ID: 11816
// Function ID: 11817
// Name: StageChannelHeightHooks
// Dependencies: [8167, 2]
// Exports: useGetActionBarHeight, useGetStageRTCPanelHeight

// Module 11816 (StageChannelHeightHooks)
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export function useGetStageRTCPanelHeight(stateFromStores) {
  let num;
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.useStageBlockedUsersCount(stateFromStores);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    num = 88;
  } else {
    num = 68;
  }
  return num;
}
export function useGetActionBarHeight(id) {
  let num;
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.useStageBlockedUsersCount(id);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    num = 132;
  } else {
    num = 112;
  }
  return num;
}
