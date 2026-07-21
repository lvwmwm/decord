// Module ID: 5333
// Function ID: 45423
// Name: waitForOnboardingCompletion
// Dependencies: []
// Exports: waitForOnboardingCompletion

// Module 5333 (waitForOnboardingCompletion)
let closure_3 = importDefault(dependencyMap[0]);
const GuildMemberFlags = arg1(dependencyMap[1]).GuildMemberFlags;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(arg0) {
  const arg1 = arg0;
  return new Promise((arg0) => {
    const result = closure_3.addConditionalChangeListener(() => {
      const selfMember = selfMember.getSelfMember(arg0);
      let flags;
      if (null != selfMember) {
        flags = selfMember.flags;
      }
      let num = 0;
      if (null != flags) {
        num = flags;
      }
      let flag = !arg0(closure_2[2]).hasFlag(num, constants.COMPLETED_ONBOARDING);
      if (!flag) {
        callback(closure_2[3]).finishOnboarding(arg0);
        arg0();
        flag = false;
        const obj2 = callback(closure_2[3]);
      }
      return flag;
    });
  });
};
