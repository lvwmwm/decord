// Module ID: 12916
// Function ID: 12917
// Name: CheckpointFlows
// Dependencies: [6361, 12915, 12917, 12918, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12916 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6361 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12915 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f116161 = (item) => {
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
    prop = tmp(12917).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12918).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter(f116161);
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(arg0, arg1, arg2, arg3) {
  let INTRODUCTION;
  let closure_0;
  let prop;
  _require = arg3;
  if (arg0 === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp(12917).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12918).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter(f116161);
  const index = found.indexOf(arg1);
  if (-1 === index) {
    INTRODUCTION = tmp(6361).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + arg2];
    let tmp6 = null;
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
