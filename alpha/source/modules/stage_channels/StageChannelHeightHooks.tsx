// Module ID: 10785
// Function ID: 10786
// Name: StageChannelHeightHooks
// Dependencies: [10786, 2]
// Exports: useGetActionBarHeight, useGetStageRTCPanelHeight

// Module 10785 (StageChannelHeightHooks)
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 10786 */;
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
