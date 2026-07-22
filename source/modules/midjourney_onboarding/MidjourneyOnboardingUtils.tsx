// Module ID: 12752
// Function ID: 97804
// Name: isMidjourneyOnboardingFlow
// Dependencies: []
// Exports: hasRedirectedToGuild, isEligibleForMidjourneyRedirect, useIsMidjourneyOnboardingFlow

// Module 12752 (isMidjourneyOnboardingFlow)
function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (null == guildStore) {
    guildStore = closure_2;
  }
  const guild = guildStore.getGuild(closure_5);
  let joinedAt;
  if (null != guild) {
    joinedAt = guild.joinedAt;
  }
  let tmp3 = joinedAt instanceof Date;
  if (tmp3) {
    const _Date = Date;
    joinedAt = guild.joinedAt;
    const timestamp = Date.now();
    tmp3 = timestamp - joinedAt.getTime() <= 3600000;
  }
  return 1 === guildStore.getGuildCount() && tmp3;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ MIDJOURNEY_BOT_ID: closure_4, MIDJOURNEY_GUILD_ID: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export { isMidjourneyOnboardingFlow };
export const useIsMidjourneyOnboardingFlow = function useIsMidjourneyOnboardingFlow() {
  const items = [closure_2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback({ guildStore: closure_2 }), []);
};
export const isEligibleForMidjourneyRedirect = function isEligibleForMidjourneyRedirect(channel) {
  let isDMResult = channel.isDM();
  if (isDMResult) {
    isDMResult = 1 === channel.rawRecipients.length;
  }
  if (isDMResult) {
    isDMResult = channel.rawRecipients[0].id === closure_4;
  }
  if (isDMResult) {
    isDMResult = isMidjourneyOnboardingFlow();
  }
  return isDMResult;
};
export const hasRedirectedToGuild = function hasRedirectedToGuild(arg0) {
  const arg1 = arg0;
  return new Promise((arg0, arg1) => {
    function handleSelectedGuildUpdate() {
      if (handleSelectedGuildUpdate.getGuildId() === arg0) {
        cleanup();
        arg0();
      }
    }
    function cleanup() {
      handleSelectedGuildUpdate.removeChangeListener(handleSelectedGuildUpdate);
      clearTimeout(closure_2);
    }
    if (handleSelectedGuildUpdate.getGuildId() !== arg0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        cleanup();
        arg1();
      }, 3000);
      handleSelectedGuildUpdate.addChangeListener(handleSelectedGuildUpdate);
    } else {
      arg0();
    }
  });
};
