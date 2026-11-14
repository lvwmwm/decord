// Module ID: 14255
// Function ID: 14256
// Name: CheckpointFlows
// Dependencies: [6745, 6747, 14256, 14257, 2]
// Exports: getCheckpointFlow, getCheckpointReplayRoute, getCheckpointRoutes, hasCheckpointSummaryRoute

// Module 14255 (CheckpointFlows)
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getAdjacentCheckpointRoute(arg0) {
  let c0;
  let c1;
  let currentRoute;
  let direction;
  let flow;
  let isCharacterCreatorEnabled;
  let prop;
  let tmp5;
  ({ currentRoute, direction } = arg0);
  const merged = Object.assign(arg0, Object.assign({ currentRoute: 0, direction: 0 }));
  _require = undefined;
  dependencyMap = undefined;
  isCharacterCreatorEnabled = undefined;
  ({ stats: c0, character: c1, isCharacterCreatorEnabled, flow } = merged);
  if (isCharacterCreatorEnabled === undefined) {
    isCharacterCreatorEnabled = true;
  }
  if (flow === require("CheckpointNavigation").CheckpointFlow.SHARED_DATA) {
    prop = tmp2(14256).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp2(14257).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  const found = prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !isCharacterCreatorEnabled;
    } else {
      let flag2 = isCharacterCreatorEnabled;
      if (!flag2) {
        let result = item === tmp(6745).CheckpointRoute.INTRODUCTION;
        if (!result) {
          const tmpResult = CheckpointNavigation;
          result = tmpResult.isCheckpointCustomizationRoute(item);
        }
        if (result) {
          return false;
        }
      }
      if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
        const tmp12 = c0;
        const tmp13 = c1;
        if (flag2 === undefined) {
          flag2 = true;
        }
        if (!flag2) {
          flag2 = null != tmp13;
        }
        if (!flag2) {
          flag2 = null !== tmp12;
        }
        return flag2;
      } else if (null != obj[item]) {
        const tmp11 = null != c0 && obj[item](c0);
        return tmp11;
      } else {
        let tmp9 = null == tmp8;
        if (!tmp9) {
          tmp9 = undefined === c0 || obj2[item](c0);
          undefined === c0 || obj2[item](c0);
        }
        return tmp9;
      }
    }
  });
  const index = found.indexOf(currentRoute);
  if (-1 === index) {
    let first = found[0];
    if (first == null) {
      first = null;
    }
    tmp5 = first;
  } else {
    tmp5 = found[index + direction];
    if (tmp5 == null) {
      tmp5 = null;
    }
  }
  return tmp5;
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
export function hasCheckpointSummaryRoute(isCharacterCreatorEnabled) {
  let character;
  let stats;
  let flag = isCharacterCreatorEnabled.isCharacterCreatorEnabled;
  ({ stats, character } = isCharacterCreatorEnabled);
  if (flag === undefined) {
    flag = true;
  }
  if (!flag) {
    flag = null != character;
  }
  if (!flag) {
    flag = null !== stats;
  }
  return flag;
}
export function getCheckpointRoutes(flow) {
  let isCharacterCreatorEnabled;
  let prop;
  let require;
  ({ stats: require, character: dependencyMap, isCharacterCreatorEnabled } = flow);
  flow = flow.flow;
  if (isCharacterCreatorEnabled === undefined) {
    isCharacterCreatorEnabled = true;
  }
  if (flow === CheckpointNavigation.CheckpointFlow.SHARED_DATA) {
    prop = tmp(14256).CHECKPOINT_SHARED_DATA_FLOW;
  } else {
    prop = tmp(14257).CHECKPOINT_NO_SHARED_DATA_FLOW;
  }
  return prop.filter((item) => {
    if (item === CheckpointNavigation.CheckpointRoute.SHARE) {
      return false;
    } else if (item === CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE) {
      return !isCharacterCreatorEnabled;
    } else {
      let flag2 = isCharacterCreatorEnabled;
      if (!flag2) {
        let result = item === tmp(6745).CheckpointRoute.INTRODUCTION;
        if (!result) {
          const tmpResult = CheckpointNavigation;
          result = tmpResult.isCheckpointCustomizationRoute(item);
        }
        if (result) {
          return false;
        }
      }
      if (item === CheckpointNavigation.CheckpointRoute.SUMMARY) {
        const tmp12 = c0;
        const tmp13 = c1;
        if (flag2 === undefined) {
          flag2 = true;
        }
        if (!flag2) {
          flag2 = null != tmp13;
        }
        if (!flag2) {
          flag2 = null !== tmp12;
        }
        return flag2;
      } else if (null != obj[item]) {
        const tmp11 = null != c0 && obj[item](c0);
        return tmp11;
      } else {
        let tmp9 = null == tmp8;
        if (!tmp9) {
          tmp9 = undefined === c0 || obj2[item](c0);
          undefined === c0 || obj2[item](c0);
        }
        return tmp9;
      }
    }
  });
}
export { getAdjacentCheckpointRoute };
export function getCheckpointReplayRoute(isCharacterCreatorEnabled) {
  isCharacterCreatorEnabled = isCharacterCreatorEnabled.isCharacterCreatorEnabled;
  if (isCharacterCreatorEnabled != null) {
    let CHARACTER_UNAVAILABLE;
    if (!isCharacterCreatorEnabled) {
      CHARACTER_UNAVAILABLE = CheckpointNavigation.CheckpointRoute.CHARACTER_UNAVAILABLE;
    }
    return CHARACTER_UNAVAILABLE;
  }
  obj = { currentRoute: CheckpointNavigation.CheckpointRoute.INTRODUCTION, direction: 1 };
  const merged = Object.assign(isCharacterCreatorEnabled);
  let INTRODUCTION = getAdjacentCheckpointRoute(obj);
  if (INTRODUCTION == null) {
    INTRODUCTION = CheckpointNavigation.CheckpointRoute.INTRODUCTION;
  }
  CHARACTER_UNAVAILABLE = INTRODUCTION;
}
