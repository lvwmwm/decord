// Module ID: 15979
// Function ID: 15980
// Name: CheckpointFlows
// Dependencies: [15980, 15981, 15982, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 15979 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 15980 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15981).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15982).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(checkpointFlow, arg1, arg2) {
  if (checkpointFlow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    let prop = tmp(15981).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(15982).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(arg1);
  if (-1 === index) {
    let INTRODUCTION = tmp(15980).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
