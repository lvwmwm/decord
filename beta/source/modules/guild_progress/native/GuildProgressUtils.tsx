// Module ID: 11967
// Function ID: 11968
// Name: GuildProgressUtils
// Dependencies: [4467, 2067, 4469, 11968, 11962, 1074, 4800, 11969, 1981, 11970, 504, 11965, 1115, 11, 2]
// Exports: createGuildProgress, hideActionSheet, openActionSheet, useGuildProgressStep, useIsEligibleForGuildProgress

// Module 11967 (GuildProgressUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl8 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildProgressConstants from "GuildProgressConstants" /* 11962 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 11970 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildProgressStore from "GuildProgressStore" /* 11968 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
function useIOSCompletionStates(guild) {
  let hasItem1;
  let items3;
  _require = guild;
  const items = [PermissionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.ADMINISTRATOR, guild));
  const obj2 = require("GuildProgressHooks");
  const guildPersonalized = obj2.useGuildPersonalized(guild);
  const obj3 = require("GuildProgressHooks");
  const guildPopulated = obj3.useGuildPopulated(guild);
  const items1 = [GuildChannelStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items1, () => GuildChannelStore.getDefaultChannel(guild.id));
  const useChannelsMessaged = require("GuildProgressHooks").useChannelsMessaged;
  require("GuildProgressHooks");
  if (null != stateFromStores1) {
    const items2 = [stateFromStores1];
    items3 = items2;
  } else {
    items3 = [];
  }
  let channelsMessaged = useChannelsMessaged(items3);
  const items4 = [GuildProgressStore];
  const tmp9 = GuildProgressStore;
  const tmpResult = require("get initialized");
  if (!channelsMessaged) {
    channelsMessaged = tmpResult.useStateFromStores(items4, () => {
      const progress = GuildProgressStore.getProgress(guild.id);
      let flag;
      if (progress != null) {
        flag = progress.has(Steps.MESSAGE);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
  }
  const items5 = [GuildStore];
  const tmpResult3 = require("get initialized");
  const stateFromStores2 = tmpResult3.useStateFromStores(items5, () => {
    guild = GuildStore.getGuild(guild.id);
    let num;
    if (guild != null) {
      num = guild.premiumSubscriberCount;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  });
  const items6 = [tmp9];
  const tmpResult4 = require("get initialized");
  const stateFromStores3 = tmpResult4.useStateFromStores(items6, () => GuildProgressStore.getProgress(guild.id));
  if (stateFromStores) {
    const items7 = [guildPopulated, guildPersonalized, channelsMessaged, stateFromStores2];
    let length = items7.filter((item) => item).length;
    let hasItem;
    if (stateFromStores3 != null) {
      hasItem = stateFromStores3.has(Steps.COMPLETED);
    }
    if (!hasItem) {
      hasItem = length === length2;
    }
    const obj5 = { guildPopulated, guildPersonalized, guildMessaged: channelsMessaged, guildBoosted: stateFromStores2, completed: hasItem, dismissed: hasItem1, numFinished: length, totalSteps: items7.length };
    hasItem1 = null == stateFromStores3 || stateFromStores3.has(Steps.DISMISSED);
    if (hasItem) {
      length = length2;
    }
    return obj5;
  } else {
    return { guildPopulated: false, guildPersonalized: false, guildMessaged: false, guildChannelCreated: false, guildBoosted: false, completed: true, dismissed: true, numFinished: 0, totalSteps: 0 };
  }
}
const Steps = GuildProgressConstants.Steps;
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: metroImportAll, Permissions: c9 } = Constants);
const result = size.fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { guild };
  const tmp2 = asyncRequire(11969, dependencyMap.paths);
  openLazy(tmp2, "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet("guild-progress-" + arg0);
};
export const createGuildProgress = function createGuildProgress(id) {
  if (null != GuildStore.getGuild(id)) {
    const obj = GuildProgressActionCreatorsDefault;
    const progress = obj.createProgress(id);
  }
};
export { useIOSCompletionStates };
export const useGuildProgressStep = function useGuildProgressStep(guild) {
  let completed;
  let formatToPlainStringResult;
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  const tmp = useIOSCompletionStates(guild);
  const totalSteps = tmp.totalSteps;
  let stringResult = null;
  ({ guildPersonalized, guildMessaged, guildBoosted, completed } = tmp);
  if (!tmp.guildPopulated) {
    const intl = intl8.intl;
    stringResult = intl.string(intl8.t.q9n0Ta);
  }
  const items = [stringResult, , , ];
  let stringResult1 = null;
  if (!guildPersonalized) {
    const intl2 = intl8.intl;
    stringResult1 = intl2.string(intl8.t.DWB2YZ);
  }
  items[1] = stringResult1;
  let stringResult2 = null;
  if (!guildMessaged) {
    const intl3 = intl8.intl;
    stringResult2 = intl3.string(intl8.t.dNktpr);
  }
  items[2] = stringResult2;
  let stringResult3 = null;
  if (!guildBoosted) {
    const intl4 = intl8.intl;
    stringResult3 = intl4.string(intl8.t["6Qbqxw"]);
  }
  items[3] = stringResult3;
  const length = items.filter((item) => null == item).length;
  let found = items.find((item) => null != item);
  if (found == null) {
    const intl5 = intl8.intl;
    found = intl5.string(intl8.t["+Gyklt"]);
  }
  const obj = { percentComplete: Math.max(3, 100 * length / totalSteps), subtitle: formatToPlainStringResult, completed };
  if (length < totalSteps) {
    const intl7 = intl8.intl;
    const obj2 = { currStep: length + 1, total: totalSteps, step: found };
    formatToPlainStringResult = intl7.formatToPlainString(intl8.t.zhHW5c, obj2);
  } else {
    const intl6 = intl8.intl;
    formatToPlainStringResult = intl6.string(intl8.t["+Gyklt"]);
  }
  return obj;
};
export const useIsEligibleForGuildProgress = function useIsEligibleForGuildProgress(guild) {
  _require = guild;
  const items = [PermissionStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.ADMINISTRATOR, guild));
  const obj2 = SnowflakeUtilsDefault;
  const extractTimestampResult = obj2.extractTimestamp(guild.id);
  if (stateFromStores) {
    stateFromStores = extractTimestampResult >= Date.now() - closure_8;
  }
  return stateFromStores;
};
