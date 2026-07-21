// Module ID: 11496
// Function ID: 89553
// Name: useIOSCompletionStates
// Dependencies: []
// Exports: createGuildProgress, hideActionSheet, openActionSheet, useGuildProgressStep, useIsEligibleForGuildProgress

// Module 11496 (useIOSCompletionStates)
function useIOSCompletionStates(guild) {
  const arg1 = guild;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.can(constants2.ADMINISTRATOR, arg0));
  const guildPersonalized = arg1(dependencyMap[11]).useGuildPersonalized(guild);
  const obj2 = arg1(dependencyMap[11]);
  const guildPopulated = arg1(dependencyMap[11]).useGuildPopulated(guild);
  const obj3 = arg1(dependencyMap[11]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => defaultChannel.getDefaultChannel(arg0.id));
  const obj4 = arg1(dependencyMap[10]);
  if (null != stateFromStores1) {
    const items2 = [stateFromStores1];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const channelsMessaged = arg1(dependencyMap[11]).useChannelsMessaged(items3);
  const obj5 = arg1(dependencyMap[11]);
  const items4 = [closure_6];
  let stateFromStores2 = channelsMessaged;
  if (!channelsMessaged) {
    stateFromStores2 = obj6.useStateFromStores(items4, () => {
      const progress = store.getProgress(arg0.id);
      let hasItem;
      if (null != progress) {
        hasItem = progress.has(constants.MESSAGE);
      }
      return null != hasItem && hasItem;
    });
  }
  const obj6 = arg1(dependencyMap[10]);
  const items5 = [closure_4];
  const stateFromStores3 = arg1(dependencyMap[10]).useStateFromStores(items5, () => {
    const guild = guild.getGuild(arg0.id);
    let prop;
    if (null != guild) {
      prop = guild.premiumSubscriberCount;
    }
    let num = 0;
    if (null != prop) {
      num = prop;
    }
    return num > 0;
  });
  const obj7 = arg1(dependencyMap[10]);
  const items6 = [closure_6];
  const stateFromStores4 = arg1(dependencyMap[10]).useStateFromStores(items6, () => store.getProgress(arg0.id));
  if (stateFromStores) {
    const ServerSetupBoostCtaExperiment = arg1(dependencyMap[12]).ServerSetupBoostCtaExperiment;
    obj = { location: "GuildProgress" };
    const enabled = ServerSetupBoostCtaExperiment.getConfig(obj).enabled;
    const items7 = [guildPopulated, guildPersonalized, stateFromStores2];
    if (enabled) {
      items7.push(stateFromStores3);
    }
    let length = items7.filter((arg0) => arg0).length;
    let hasItem;
    if (null != stateFromStores4) {
      hasItem = stateFromStores4.has(Steps.COMPLETED);
    }
    if (!hasItem) {
      hasItem = length === length2;
    }
    obj = { guildPopulated, guildPersonalized, guildMessaged: stateFromStores2, guildBoosted: stateFromStores3, showBoostStep: enabled, completed: hasItem };
    let hasItem1 = null == stateFromStores4;
    if (!hasItem1) {
      hasItem1 = stateFromStores4.has(Steps.DISMISSED);
    }
    obj.dismissed = hasItem1;
    if (hasItem) {
      length = length2;
    }
    obj.numFinished = length;
    obj.totalSteps = items7.length;
    return obj;
  } else {
    return {};
  }
  const obj8 = arg1(dependencyMap[10]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Steps = arg1(dependencyMap[4]).Steps;
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_8, Permissions: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  let obj = importDefault(dependencyMap[6]);
  obj = { guild };
  obj.openLazy(arg1(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(arg0) {
  importDefault(dependencyMap[6]).hideActionSheet("guild-progress-" + arg0);
};
export const createGuildProgress = function createGuildProgress(id) {
  if (null != guild.getGuild(id)) {
    const progress = importDefault(dependencyMap[9]).createProgress(id);
    const obj = importDefault(dependencyMap[9]);
  }
};
export { useIOSCompletionStates };
export const useGuildProgressStep = function useGuildProgressStep(guild) {
  let completed;
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let showBoostStep;
  const tmp = useIOSCompletionStates(guild);
  const totalSteps = tmp.totalSteps;
  let stringResult = null;
  ({ guildPersonalized, guildMessaged, guildBoosted, showBoostStep, completed } = tmp);
  if (!tmp.guildPopulated) {
    const intl = arg1(dependencyMap[13]).intl;
    stringResult = intl.string(arg1(dependencyMap[13]).t.q9n0Ta);
  }
  const items = [stringResult, , ];
  let stringResult1 = null;
  if (!guildPersonalized) {
    const intl2 = arg1(dependencyMap[13]).intl;
    stringResult1 = intl2.string(arg1(dependencyMap[13]).t.DWB2YZ);
  }
  items[1] = stringResult1;
  let stringResult2 = null;
  if (!guildMessaged) {
    const intl3 = arg1(dependencyMap[13]).intl;
    stringResult2 = intl3.string(arg1(dependencyMap[13]).t.dNktpr);
  }
  items[2] = stringResult2;
  if (showBoostStep) {
    let stringResult3 = null;
    if (!guildBoosted) {
      const intl4 = arg1(dependencyMap[13]).intl;
      stringResult3 = intl4.string(arg1(dependencyMap[13]).t.6Qbqxw);
    }
    items.push(stringResult3);
  }
  const length = items.filter((arg0) => null == arg0).length;
  let found = items.find((arg0) => null != arg0);
  if (null == found) {
    const intl5 = arg1(dependencyMap[13]).intl;
    found = intl5.string(arg1(dependencyMap[13]).t.+Gyklt);
  }
  let obj = { percentComplete: Math.max(3, 100 * length / totalSteps) };
  if (length < totalSteps) {
    const intl7 = arg1(dependencyMap[13]).intl;
    obj = { currStep: length + 1, total: totalSteps, step: found };
    let formatToPlainStringResult = intl7.formatToPlainString(arg1(dependencyMap[13]).t.zhHW5c, obj);
  } else {
    const intl6 = arg1(dependencyMap[13]).intl;
    formatToPlainStringResult = intl6.string(arg1(dependencyMap[13]).t.+Gyklt);
  }
  obj.subtitle = formatToPlainStringResult;
  obj.completed = completed;
  return obj;
};
export const useIsEligibleForGuildProgress = function useIsEligibleForGuildProgress(guild) {
  const arg1 = guild;
  const items = [closure_5];
  let stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => closure_5.can(constants.ADMINISTRATOR, arg0));
  const obj = arg1(dependencyMap[10]);
  const obj2 = importDefault(dependencyMap[14]);
  if (stateFromStores) {
    stateFromStores = extractTimestampResult >= Date.now() - closure_8;
  }
  return stateFromStores;
};
