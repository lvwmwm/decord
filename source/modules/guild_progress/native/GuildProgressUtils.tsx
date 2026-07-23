// Module ID: 11507
// Function ID: 89616
// Name: useIOSCompletionStates
// Dependencies: [1907, 1838, 3758, 11508, 11502, 653, 4098, 11509, 1934, 11510, 566, 11505, 11622, 1212, 21, 2]
// Exports: createGuildProgress, hideActionSheet, openActionSheet, useGuildProgressStep, useIsEligibleForGuildProgress

// Module 11507 (useIOSCompletionStates)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Steps } from "Steps";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function useIOSCompletionStates(guild) {
  const _require = guild;
  let obj = _require(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.can(outer1_9.ADMINISTRATOR, closure_0));
  const guildPersonalized = _require(11505).useGuildPersonalized(guild);
  const obj2 = _require(11505);
  const guildPopulated = _require(11505).useGuildPopulated(guild);
  const obj3 = _require(11505);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_3.getDefaultChannel(guild.id));
  const obj4 = _require(566);
  if (null != stateFromStores1) {
    const items2 = [stateFromStores1];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const channelsMessaged = _require(11505).useChannelsMessaged(items3);
  const obj5 = _require(11505);
  const items4 = [closure_6];
  let stateFromStores2 = channelsMessaged;
  if (!channelsMessaged) {
    stateFromStores2 = obj6.useStateFromStores(items4, () => {
      const progress = outer1_6.getProgress(guild.id);
      let hasItem;
      if (null != progress) {
        hasItem = progress.has(outer1_7.MESSAGE);
      }
      return null != hasItem && hasItem;
    });
  }
  obj6 = _require(566);
  const items5 = [_createForOfIteratorHelperLoose];
  const stateFromStores3 = _require(566).useStateFromStores(items5, () => {
    guild = outer1_4.getGuild(guild.id);
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
  const obj7 = _require(566);
  const items6 = [closure_6];
  const stateFromStores4 = _require(566).useStateFromStores(items6, () => outer1_6.getProgress(guild.id));
  if (stateFromStores) {
    const ServerSetupBoostCtaExperiment = _require(11622).ServerSetupBoostCtaExperiment;
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
    return { guildPopulated: false, guildPersonalized: false, guildMessaged: false, guildChannelCreated: false, guildBoosted: false, showBoostStep: false, completed: true, dismissed: true, numFinished: 0, totalSteps: 0 };
  }
  const obj8 = _require(566);
}
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_8, Permissions: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  let obj = importDefault(4098);
  obj = { guild };
  obj.openLazy(require(1934) /* maybeLoadBundle */(11509, dependencyMap.paths), "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(arg0) {
  importDefault(4098).hideActionSheet("guild-progress-" + arg0);
};
export const createGuildProgress = function createGuildProgress(id) {
  if (null != guild.getGuild(id)) {
    const progress = importDefault(11510).createProgress(id);
    const obj = importDefault(11510);
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
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.q9n0Ta);
  }
  const items = [stringResult, , ];
  let stringResult1 = null;
  if (!guildPersonalized) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t.DWB2YZ);
  }
  items[1] = stringResult1;
  let stringResult2 = null;
  if (!guildMessaged) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    stringResult2 = intl3.string(require(1212) /* getSystemLocale */.t.dNktpr);
  }
  items[2] = stringResult2;
  if (showBoostStep) {
    let stringResult3 = null;
    if (!guildBoosted) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      stringResult3 = intl4.string(require(1212) /* getSystemLocale */.t["6Qbqxw"]);
    }
    items.push(stringResult3);
  }
  const length = items.filter((arg0) => null == arg0).length;
  let found = items.find((arg0) => null != arg0);
  if (null == found) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    found = intl5.string(require(1212) /* getSystemLocale */.t["+Gyklt"]);
  }
  let obj = { percentComplete: Math.max(3, 100 * length / totalSteps) };
  if (length < totalSteps) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj = { currStep: length + 1, total: totalSteps, step: found };
    let formatToPlainStringResult = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.zhHW5c, obj);
  } else {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl6.string(require(1212) /* getSystemLocale */.t["+Gyklt"]);
  }
  obj.subtitle = formatToPlainStringResult;
  obj.completed = completed;
  return obj;
};
export const useIsEligibleForGuildProgress = function useIsEligibleForGuildProgress(guild) {
  const _require = guild;
  const items = [closure_5];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.can(outer1_9.ADMINISTRATOR, closure_0));
  const obj = _require(566);
  const obj2 = importDefault(21);
  if (stateFromStores) {
    stateFromStores = extractTimestampResult >= Date.now() - closure_8;
  }
  return stateFromStores;
};
