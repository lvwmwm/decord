// Module ID: 12990
// Function ID: 12991
// Name: CheckpointFlows
// Dependencies: [6395, 12989, 12991, 12992, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12990 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6395 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12989 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f116656 = (item) => {
  if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
    return false;
  } else if (null != obj[item]) {
    const tmp8 = null != closure_0 && obj[item](closure_0);
    return tmp8;
  } else {
    let tmp6 = null == tmp5;
    if (!tmp6) {
      tmp6 = undefined === closure_0 || obj2[item](closure_0);
      undefined === closure_0 || obj2[item](closure_0);
    }
    return tmp6;
  }
};
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
    prop = tmp(12991).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12992).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter(f116656);
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2, arg3) {
  let INTRODUCTION;
  let closure_0;
  let prop;
  _require = arg3;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp(12991).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12992).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter(f116656);
  const index = found.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp(6395).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + arg2];
    let tmp6 = null;
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
