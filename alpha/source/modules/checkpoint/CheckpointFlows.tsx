// Module ID: 12897
// Function ID: 12898
// Name: CheckpointFlows
// Dependencies: [6348, 12896, 12898, 12899, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12897 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6348 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12896 */;
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
  },
  [CheckpointNavigation.CheckpointRoute.GAMES_INTRO]: (stats) => {
    obj = CheckpointStatsUtils;
    return !obj.hasCheckpointGames(stats);
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
    prop = tmp(12898).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12899).CHECKPOINT_NO_SHARED_DATA_FLOW;
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
    prop = tmp(12898).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12899).CHECKPOINT_NO_SHARED_DATA_FLOW;
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
    INTRODUCTION = tmp(6348).CheckpointRoute.INTRODUCTION;
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
