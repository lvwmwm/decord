// Module ID: 15803
// Function ID: 15804
// Name: CheckpointFlows
// Dependencies: [15804, 15805, 15806, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 15803 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 15804 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  let CHECKPOINT_NO_SHARED_DATA_FLOW;
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15805).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    CHECKPOINT_NO_SHARED_DATA_FLOW = tmp(15806).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return CHECKPOINT_NO_SHARED_DATA_FLOW;
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2) {
  let INTRODUCTION;
  let prop;
  if (arg0 === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    prop = tmp(15805).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(15806).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const index = prop.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp(15804).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = prop[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
