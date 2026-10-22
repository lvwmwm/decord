// Module ID: 12879
// Function ID: 12880
// Name: CheckpointFlows
// Dependencies: [6349, 12878, 12880, 12881, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12879 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6349 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12878 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = {
  [CheckpointNavigation.CheckpointRoute.VOICE_INTRO]: (voice) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointVoiceMinutes(voice);
  },
  [CheckpointNavigation.CheckpointRoute.MESSAGES_INTRO]: (messages) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointMessages(messages);
  },
  [CheckpointNavigation.CheckpointRoute.SERVERS_INTRO]: (guilds) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointGuilds(guilds);
  },
  [CheckpointNavigation.CheckpointRoute.EMOJI_INTRO]: (stats) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointEmojis(stats);
  }
};
const obj2 = {};
obj2[CheckpointNavigation.CheckpointRoute.TOP_SERVER_STATS] = CheckpointStatsUtils.hasCheckpointGuilds;
obj2[CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION] = CheckpointStatsUtils.hasCheckpointSquad;
obj2[CheckpointNavigation.CheckpointRoute.SQUAD] = CheckpointStatsUtils.hasCheckpointSquad;
obj2[CheckpointNavigation.CheckpointRoute.SIDEKICK] = CheckpointStatsUtils.hasCheckpointSidekick;
obj2[CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE] = CheckpointStatsUtils.hasCheckpointSidekick;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(arg0, arg1) {
  let closure_0;
  let prop;
  _require = arg1;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp(12880).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12881).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (null != obj[item]) {
      const tmpResult = null != closure_0 && tmp(tmp6);
      return tmpResult;
    } else {
      let tmp4 = null == tmp3;
      if (!tmp4) {
        tmp4 = undefined === closure_0 || obj2[item](closure_0);
        undefined === closure_0 || obj2[item](closure_0);
      }
      return tmp4;
    }
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2, arg3) {
  let INTRODUCTION;
  let closure_0;
  let prop;
  _require = arg3;
  const tmp = _require;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp(12880).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12881).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (null != obj[item]) {
      const tmpResult = null != closure_0 && tmp(tmp6);
      return tmpResult;
    } else {
      let tmp4 = null == tmp3;
      if (!tmp4) {
        tmp4 = undefined === closure_0 || obj2[item](closure_0);
        undefined === closure_0 || obj2[item](closure_0);
      }
      return tmp4;
    }
  });
  const index = found.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp(6349).CheckpointRoute.INTRODUCTION;
  } else {
    let tmp4 = arg2;
    INTRODUCTION = found[index + arg2];
    const tmp6 = null;
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
