// Module ID: 12918
// Function ID: 100283
// Name: isMidjourneyOnboardingFlow
// Dependencies: [1838, 3947, 12919, 566, 2]
// Exports: hasRedirectedToGuild, isEligibleForMidjourneyRedirect, useIsMidjourneyOnboardingFlow

// Module 12918 (isMidjourneyOnboardingFlow)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MIDJOURNEY_GUILD_ID from "MIDJOURNEY_GUILD_ID";

let closure_4;
let closure_5;
const require = arg1;
function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (null == guildStore) {
    guildStore = _createForOfIteratorHelperLoose;
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
({ MIDJOURNEY_BOT_ID: closure_4, MIDJOURNEY_GUILD_ID: closure_5 } = MIDJOURNEY_GUILD_ID);
const result = require("MIDJOURNEY_GUILD_ID").fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export { isMidjourneyOnboardingFlow };
export const useIsMidjourneyOnboardingFlow = function useIsMidjourneyOnboardingFlow() {
  const items = [_createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_6({ guildStore: outer1_2 }), []);
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
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function handleSelectedGuildUpdate() {
      if (outer2_3.getGuildId() === callback) {
        cleanup();
        callback();
      }
    }
    function cleanup() {
      outer2_3.removeChangeListener(handleSelectedGuildUpdate);
      clearTimeout(_createForOfIteratorHelperLoose);
    }
    if (outer1_3.getGuildId() !== closure_0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        cleanup();
        callback2();
      }, 3000);
      outer1_3.addChangeListener(handleSelectedGuildUpdate);
    } else {
      arg0();
    }
  });
};
