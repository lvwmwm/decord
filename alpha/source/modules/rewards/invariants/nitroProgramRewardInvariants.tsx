// Module ID: 16897
// Function ID: 16898
// Name: nitroProgramRewardInvariants
// Dependencies: [15614, 4456, 2]
// Exports: passesNitroGeneralUIInvariant, passesNitroProgressBarInvariant

// Module 16897 (nitroProgramRewardInvariants)
import differenceInCalendarDaysDefault from "differenceInCalendarDays" /* 4456 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15614 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rewards/invariants/nitroProgramRewardInvariants.tsx");

export function passesNitroGeneralUIInvariant(programReward) {
  let next_reward_date;
  let program_current_state;
  if (null == programReward) {
    return false;
  } else {
    ({ next_reward_date, program_current_state } = programReward);
    if (null == program_current_state) {
      return false;
    } else {
      if (null != next_reward_date) {
        if ("" !== next_reward_date) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(next_reward_date);
          const time = date.getTime();
          const _Number = Number;
          if (!Number.isNaN(time)) {
            const _Date2 = Date;
          }
          return false;
        }
        return true;
      }
      const items = [ProgramRewardsTypes.ProgramCurrentState.PAYMENT_PROCESSING, ProgramRewardsTypes.ProgramCurrentState.PAYMENT_ERROR];
      if (!items.includes(program_current_state)) {
        return false;
      }
    }
  }
}
export function passesNitroProgressBarInvariant(programReward, totalDays) {
  if (null != programReward) {
    if (null != totalDays) {
      const next_reward_date = programReward.next_reward_date;
      if (null != next_reward_date) {
        if ("" !== next_reward_date) {
          const _Date4 = Date;
          const self5 = this;
          const self6 = this;
          const date = new Date(next_reward_date);
          const time = date.getTime();
          const _Number = Number;
          let isNaNResult = Number.isNaN(time);
          if (!isNaNResult) {
            const _Date = Date;
            isNaNResult = time <= Date.now();
          }
          let tmp2 = !isNaNResult;
          if (tmp2) {
            const _Date2 = Date;
            const self = this;
            const self2 = this;
            const tmp5 = differenceInCalendarDaysDefault;
            const _Date3 = Date;
            const self3 = this;
            const self4 = this;
            const date1 = new Date(next_reward_date);
            const date2 = new Date();
            tmp2 = tmp5(date1, date2) <= totalDays;
          }
          return tmp2;
        }
      }
      return false;
    }
  }
  return false;
}
