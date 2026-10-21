// Module ID: 12847
// Function ID: 12848
// Name: CheckpointFlows
// Dependencies: [6342, 12846, 12848, 12849, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12847 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6342 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12846 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = {
  [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointVoiceMinutes(voice);
  },
  [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointGuilds(guilds);
  }
};
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0) {
  let c0;
  let prop;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  _require = tmp;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp2(12848).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp2(12849).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    let tmp2 = null == tmp;
    if (!tmp2) {
      tmp2 = null != c0 && tmp(tmp3);
      const tmpResult = null != c0 && tmp(tmp3);
    }
    return tmp2;
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2, arg3) {
  let INTRODUCTION;
  let c0;
  let prop;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  if (tmp === undefined) {
    tmp = null;
  }
  _require = tmp;
  let tmp2 = _require;
  const tmp3 = dependencyMap;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp2(12848).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp2(12849).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    let tmp2 = null == tmp;
    if (!tmp2) {
      tmp2 = null != c0 && tmp(tmp3);
      const tmpResult = null != c0 && tmp(tmp3);
    }
    return tmp2;
  });
  const index = found.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp2(6342).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + arg2];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
