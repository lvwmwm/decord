// Module ID: 10980
// Function ID: 10981
// Name: StageChannelHeightHooks
// Dependencies: [558, 7702, 2]

// Module 10980 (StageChannelHeightHooks)
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 7702 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetStageRTCPanelHeight(arg0) {
  let num;
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    num = 88;
  } else {
    num = 68;
  }
  return num;
}) : (function useGetStageRTCPanelHeight(arg0) {
  let num;
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    num = 88;
  } else {
    num = 68;
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetActionBarHeight(arg0) {
  let num;
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    num = 132;
  } else {
    num = 112;
  }
  return num;
}) : (function useGetActionBarHeight(arg0) {
  let num;
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.useStageBlockedUsersCount(arg0);
  useStageBlockedUsersCount;
  if (stageBlockedUsersCount > 0) {
    num = 132;
  } else {
    num = 112;
  }
  return num;
});
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelHeightHooks.tsx");

export const CALL_ACTION_BAR_HEIGHT = 112;
export const useGetStageRTCPanelHeight = tmp2;
export const useGetActionBarHeight = tmp3;
