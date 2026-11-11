// Module ID: 14183
// Function ID: 14184
// Name: CheckpointFlows
// Dependencies: [6682, 6684, 14184, 14185, 2]
// Exports: getCheckpointFlow, getCheckpointReplayRoute, getCheckpointRoutes

// Module 14183 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6682 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getAdjacentCheckpointRoute(isCharacterCreatorEnabled) {
  let INTRODUCTION;
  let currentRoute;
  let direction;
  let flow;
  let prop;
  let flag;
  ({ stats: require, flow, currentRoute, direction } = isCharacterCreatorEnabled);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = require;
  if (flow === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp(tmp2[2]).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(tmp2[3]).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !flag;
    } else {
      if (!flag) {
        let result = item === tmp(6682).CheckpointRoute.INTRODUCTION;
        if (!result) {
          const tmpResult = CheckpointNavigation;
          result = tmpResult.isCheckpointCustomizationRoute(item);
        }
        if (result) {
          return false;
        }
      }
      if (!flag) {
        if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
          if (null === require) {
            return false;
          }
        }
      }
      if (null != obj[item]) {
        const tmp13 = null != require && obj[item](require);
        return tmp13;
      } else {
        let tmp11 = null == tmp10;
        if (!tmp11) {
          tmp11 = undefined === require || obj2[item](require);
          undefined === require || obj2[item](require);
        }
        return tmp11;
      }
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    INTRODUCTION = tmp(tmp2[0]).CheckpointRoute.INTRODUCTION;
  } else {
    INTRODUCTION = found[index + direction];
    if (INTRODUCTION == null) {
      INTRODUCTION = null;
    }
  }
  return INTRODUCTION;
}
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
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointFlows.tsx");

export function getCheckpointFlow(flag) {
  const CheckpointFlow = CheckpointNavigation.CheckpointFlow;
  return flag ? CheckpointFlow.SHARED_DATA : CheckpointFlow.NO_SHARED_DATA;
}
export function getCheckpointRoutes(flow) {
  let isCharacterCreatorEnabled;
  let prop;
  ({ stats: require, isCharacterCreatorEnabled } = flow);
  flow = flow.flow;
  if (isCharacterCreatorEnabled === undefined) {
    isCharacterCreatorEnabled = true;
  }
  if (flow === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp(tmp2[2]).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(tmp2[3]).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !flag;
    } else {
      if (!flag) {
        let result = item === tmp(6682).CheckpointRoute.INTRODUCTION;
        if (!result) {
          const tmpResult = CheckpointNavigation;
          result = tmpResult.isCheckpointCustomizationRoute(item);
        }
        if (result) {
          return false;
        }
      }
      if (!flag) {
        if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
          if (null === require) {
            return false;
          }
        }
      }
      if (null != obj[item]) {
        const tmp13 = null != require && obj[item](require);
        return tmp13;
      } else {
        let tmp11 = null == tmp10;
        if (!tmp11) {
          tmp11 = undefined === require || obj2[item](require);
          undefined === require || obj2[item](require);
        }
        return tmp11;
      }
    }
  });
}
export { getAdjacentCheckpointRoute };
export function getCheckpointReplayRoute(arg0) {
  obj = { currentRoute: CheckpointNavigation.CheckpointRoute.INTRODUCTION, direction: 1 };
  const merged = Object.assign(arg0);
  let INTRODUCTION = getAdjacentCheckpointRoute(obj);
  if (INTRODUCTION == null) {
    INTRODUCTION = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  }
  return INTRODUCTION;
}
