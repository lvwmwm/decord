// Module ID: 6789
// Function ID: 6790
// Name: doGuildOnboardingHelpers
// Dependencies: [2124, 4695, 1403, 6790, 2]
// Exports: waitForOnboardingCompletion

// Module 6789 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1403 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4695 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6790 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import size from "module_2" /* 2 */;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => {
    closure_0 = arg0;
    const result = GuildMemberStore.addConditionalChangeListener(() => {
      const selfMember = GuildMemberStore.getSelfMember(closure_0);
      let num;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      const tmp = closure_0;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        const obj = GuildOnboardingActionCreatorsDefault;
        obj.finishOnboarding(tmp);
        closure_0();
        flag = false;
      }
      return flag;
    });
  });
  return promise;
};
