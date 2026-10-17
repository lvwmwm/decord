// Module ID: 12038
// Function ID: 12039
// Name: usePollDurationOptions
// Dependencies: [8238, 1128, 2]
// Exports: default

// Module 12038 (usePollDurationOptions)
import intl8 from "intl" /* 1128 */;
import PollsConstants from "PollsConstants" /* 8238 */;
import size from "module_2" /* 2 */;

const PollDurations = PollsConstants.PollDurations;
const result = size.fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const ONE_HOUR = PollDurations.ONE_HOUR;
  const intl = intl8.intl;
  obj[ONE_HOUR] = intl.formatToPlainString(intl8.t["b/mgtw"], { num: 1 });
  const FOUR_HOURS = PollDurations.FOUR_HOURS;
  const intl2 = intl8.intl;
  obj[FOUR_HOURS] = intl2.formatToPlainString(intl8.t["b/mgtw"], { num: 4 });
  const EIGHT_HOURS = PollDurations.EIGHT_HOURS;
  const intl3 = intl8.intl;
  obj[EIGHT_HOURS] = intl3.formatToPlainString(intl8.t["b/mgtw"], { num: 8 });
  const ONE_DAY = PollDurations.ONE_DAY;
  const intl4 = intl8.intl;
  obj[ONE_DAY] = intl4.formatToPlainString(intl8.t["b/mgtw"], { num: 24 });
  const THREE_DAYS = PollDurations.THREE_DAYS;
  const intl5 = intl8.intl;
  obj[THREE_DAYS] = intl5.string(intl8.t.Xn5rX3);
  const SEVEN_DAYS = PollDurations.SEVEN_DAYS;
  const intl6 = intl8.intl;
  obj[SEVEN_DAYS] = intl6.string(intl8.t["Lmq+rj"]);
  const FOURTEEN_DAYS = PollDurations.FOURTEEN_DAYS;
  const intl7 = intl8.intl;
  obj[FOURTEEN_DAYS] = intl7.string(intl8.t["mb8A/O"]);
  return freeze(obj);
};
