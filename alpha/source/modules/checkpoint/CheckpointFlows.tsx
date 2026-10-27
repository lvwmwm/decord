// Module ID: 12972
// Function ID: 12973
// Name: CheckpointFlows
// Dependencies: [6365, 12971, 12973, 12974, 2]
// Exports: getAdjacentCheckpointRoute, getCheckpointFlow, getCheckpointRoutes

// Module 12972 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6365 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12971 */;
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

export const getCheckpointFlow = function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
};
export const getCheckpointRoutes = function getCheckpointRoutes(stats) {
  let prop;
  stats = stats.stats;
  if (stats.flow === stats(6365).CheckpointFlow.SHARED_DATA) {
    prop = tmp(12973).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12974).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.NO_DATA_INTRO) {
      return null === stats;
    } else if (null != obj[item]) {
      const tmp10 = null != stats && obj[item](stats);
      return tmp10;
    } else {
      let tmp8 = null == tmp7;
      if (!tmp8) {
        tmp8 = undefined === stats || obj2[item](stats);
        undefined === stats || obj2[item](stats);
      }
      return tmp8;
    }
  });
};
export const getAdjacentCheckpointRoute = function getAdjacentCheckpointRoute(stats) {
  let INTRODUCTION;
  let currentRoute;
  let direction;
  let flow;
  let prop;
  stats = stats.stats;
  let tmp = stats;
  ({ flow, currentRoute, direction } = stats);
  if (flow === stats(6365).CheckpointFlow.SHARED_DATA) {
    prop = tmp(12973).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(12974).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.NO_DATA_INTRO) {
      return null === stats;
    } else if (null != obj[item]) {
      const tmp10 = null != stats && obj[item](stats);
      return tmp10;
    } else {
      let tmp8 = null == tmp7;
      if (!tmp8) {
        tmp8 = undefined === stats || obj2[item](stats);
        undefined === stats || obj2[item](stats);
      }
      return tmp8;
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    INTRODUCTION = tmp(6365).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + direction];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
};
