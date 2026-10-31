// Module ID: 13437
// Function ID: 13438
// Name: CheckpointFlows
// Dependencies: [6435, 6437, 13438, 13439, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 13437 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6435 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6437 */;
import size from "module_2" /* 2 */;

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

export function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
}
export function getCheckpointRoutes(stats) {
  let prop;
  stats = stats.stats;
  if (stats.flow === stats(6435).CheckpointFlow.SHARED_DATA) {
    prop = tmp(13438).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(13439).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (null != obj[item]) {
      const tmp8 = null != stats && obj[item](stats);
      return tmp8;
    } else {
      let tmp6 = null == tmp5;
      if (!tmp6) {
        tmp6 = undefined === stats || obj2[item](stats);
        undefined === stats || obj2[item](stats);
      }
      return tmp6;
    }
  });
}
export function getAdjacentCheckpointRoute(stats) {
  let INTRODUCTION;
  let currentRoute;
  let direction;
  let flow;
  let prop;
  stats = stats.stats;
  ({ flow, currentRoute, direction } = stats);
  if (flow === stats(6435).CheckpointFlow.SHARED_DATA) {
    prop = tmp(13438).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(13439).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (null != obj[item]) {
      const tmp8 = null != stats && obj[item](stats);
      return tmp8;
    } else {
      let tmp6 = null == tmp5;
      if (!tmp6) {
        tmp6 = undefined === stats || obj2[item](stats);
        undefined === stats || obj2[item](stats);
      }
      return tmp6;
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    INTRODUCTION = tmp(6435).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + direction];
    const tmp5 = null;
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
}
