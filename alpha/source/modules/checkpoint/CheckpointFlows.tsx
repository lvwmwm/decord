// Module ID: 12729
// Function ID: 12730
// Name: CheckpointFlows
// Dependencies: [12730, 12731, 12732, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12729 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 12730 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  let CHECKPOINT_NO_SHARED_DATA_FLOW;
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(12731).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(12732).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2) {
  let INTRODUCTION;
  let prop;
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    prop = tmp(12731).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12732).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp(12730).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
