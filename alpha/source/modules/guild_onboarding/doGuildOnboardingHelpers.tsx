// Module ID: 7178
// Function ID: 7179
// Name: doGuildOnboardingHelpers
// Dependencies: [4881, 4887, 1405, 7179, 2]
// Exports: waitForOnboardingCompletion

// Module 7178 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1405 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4887 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7179 */;
import GuildMemberStore from "GuildMemberStore" /* 4881 */;
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
