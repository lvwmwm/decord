// Module ID: 7070
// Function ID: 7071
// Name: doGuildOnboardingHelpers
// Dependencies: [2128, 4831, 1405, 7071, 2]
// Exports: waitForOnboardingCompletion

// Module 7070 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1405 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4831 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7071 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
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
