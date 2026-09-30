// Module ID: 15455
// Function ID: 15456
// Name: CheckpointFlows
// Dependencies: [15456, 15457, 15458, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 15455 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 15456 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15457).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15458).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(checkpointFlow, arg1, arg2) {
  if (checkpointFlow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let prop = tmp(15457).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(15458).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(arg1);
  if (-1 === index) {
    let INTRODUCTION = tmp(15456).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
