// Module ID: 15521
// Function ID: 15522
// Name: CheckpointFlows
// Dependencies: [15522, 15523, 15524, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 15521 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 15522 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  let CHECKPOINT_NO_SHARED_DATA_FLOW;
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15523).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15524).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(checkpointFlow, arg1, arg2) {
  let INTRODUCTION;
  let prop;
  if (checkpointFlow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    prop = tmp(15523).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(15524).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp(15522).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
