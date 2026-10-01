// Module ID: 13404
// Function ID: 13405
// Name: MidjourneyOnboardingUtils
// Dependencies: [2067, 4655, 13405, 504, 2]
// Exports: hasRedirectedToGuild, isEligibleForMidjourneyRedirect, isMidjourneyOnboardingFlow, useIsMidjourneyOnboardingFlow

// Module 13404 (MidjourneyOnboardingUtils)
import get_initialized from "get initialized" /* 504 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import MidjourneyOnboardingConstants from "MidjourneyOnboardingConstants" /* 13405 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ MIDJOURNEY_BOT_ID: closure_4, MIDJOURNEY_GUILD_ID: hasOwnProperty } = MidjourneyOnboardingConstants);
const result = size.fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export const isMidjourneyOnboardingFlow = function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (guildStore == null) {
    guildStore = GuildStore;
  }
  const guild = guildStore.getGuild(hasOwnProperty);
  let joinedAt1;
  if (guild != null) {
    joinedAt1 = guild.joinedAt;
  }
  let tmp3 = joinedAt1 instanceof Date;
  if (tmp3) {
    const _Date = Date;
    const joinedAt = guild.joinedAt;
    const timestamp = Date.now();
    tmp3 = timestamp - joinedAt.getTime() <= 3600000;
  }
  const tmp5 = 1 === guildStore.getGuildCount() && tmp3;
  return tmp5;
};
export const useIsMidjourneyOnboardingFlow = function useIsMidjourneyOnboardingFlow() {
  let obj = get_initialized;
  const items = [GuildStore];
  return obj.useStateFromStores(items, () => {
    const obj = { guildStore };
    guildStore = obj.guildStore;
    const guild = guildStore.getGuild(closure_1_5);
    let joinedAt1;
    if (guild != null) {
      joinedAt1 = guild.joinedAt;
    }
    let tmp3 = joinedAt1 instanceof Date;
    if (tmp3) {
      const _Date = Date;
      const joinedAt = guild.joinedAt;
      const timestamp = Date.now();
      tmp3 = timestamp - joinedAt.getTime() <= 3600000;
    }
    const tmp5 = 1 === guildStore.getGuildCount() && tmp3;
    return tmp5;
  }, []);
};
export const isEligibleForMidjourneyRedirect = function isEligibleForMidjourneyRedirect(channel) {
  let isDMResult = channel.isDM() && 1 === channel.rawRecipients.length && channel.rawRecipients[0].id === React3;
  if (isDMResult) {
    let guildStore = {}.guildStore;
    if (guildStore == null) {
      guildStore = GuildStore;
    }
    const guild = guildStore.getGuild(hasOwnProperty);
    let joinedAt1;
    if (guild != null) {
      joinedAt1 = guild.joinedAt;
    }
    const _Date = Date;
    let tmp8 = joinedAt1 instanceof Date;
    if (tmp8) {
      const _Date2 = Date;
      const joinedAt = guild.joinedAt;
      const timestamp = Date.now();
      tmp8 = timestamp - joinedAt.getTime() <= 3600000;
    }
    isDMResult = 1 === guildStore.getGuildCount() && tmp8;
    1 === guildStore.getGuildCount() && tmp8;
  }
  return isDMResult;
};
export const hasRedirectedToGuild = function hasRedirectedToGuild(arg0) {
  let guildId;
  let closure_0 = arg0;
  const promise = new Promise((fn, arg1) => {
    let closure_2;
    closure_0 = fn;
    let closure_1 = arg1;
    function handleSelectedGuildUpdate() {
      const obj = SelectedGuildStore;
      if (SelectedGuildStore.getGuildId() === closure_0) {
        obj.removeChangeListener(handleSelectedGuildUpdate);
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_2);
        closure_0();
      }
    }
    let obj = guildId;
    if (guildId.getGuildId() !== closure_0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        SelectedGuildStore.removeChangeListener(handleSelectedGuildUpdate);
        clearTimeout(closure_2);
        closure_1();
      }, 3000);
      obj.addChangeListener(handleSelectedGuildUpdate);
    } else {
      fn();
    }
  });
  return promise;
};
