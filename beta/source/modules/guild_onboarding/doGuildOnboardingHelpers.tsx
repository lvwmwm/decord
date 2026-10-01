// Module ID: 6525
// Function ID: 6526
// Name: doGuildOnboardingHelpers
// Dependencies: [2108, 4455, 1385, 6526, 2]
// Exports: waitForOnboardingCompletion

// Module 6525 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6526 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
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
