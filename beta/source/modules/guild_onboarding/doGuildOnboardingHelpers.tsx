// Module ID: 7383
// Function ID: 7384
// Name: doGuildOnboardingHelpers
// Dependencies: [2109, 4418, 1389, 7384, 2]
// Exports: waitForOnboardingCompletion

// Module 7383 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1389 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7384 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;

require = fn;
const GuildMemberFlags = fn(4418).GuildMemberFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const result = GuildMemberStore.addConditionalChangeListener(() => {
      const selfMember = GuildMemberStore.getSelfMember(closure_0);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        GuildOnboardingActionCreatorsDefault.finishOnboarding(closure_0);
        closure_0();
        flag = false;
      }
      return flag;
    });
  });
};
