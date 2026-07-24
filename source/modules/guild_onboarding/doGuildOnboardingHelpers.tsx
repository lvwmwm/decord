// Module ID: 5062
// Function ID: 43863
// Name: waitForOnboardingCompletion
// Dependencies: [1917, 3746, 1360, 5063, 2]
// Exports: waitForOnboardingCompletion

// Module 5062 (waitForOnboardingCompletion)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
let result = require("hasFlag").fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const result = outer1_3.addConditionalChangeListener(() => {
      const selfMember = outer2_3.getSelfMember(callback);
      let flags;
      if (null != selfMember) {
        flags = selfMember.flags;
      }
      let num = 0;
      if (null != flags) {
        num = flags;
      }
      let flag = !callback(outer2_2[2]).hasFlag(num, outer2_4.COMPLETED_ONBOARDING);
      if (!flag) {
        outer2_1(outer2_2[3]).finishOnboarding(callback);
        callback();
        flag = false;
        const obj2 = outer2_1(outer2_2[3]);
      }
      return flag;
    });
  });
};
