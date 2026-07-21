// Module ID: 11309
// Function ID: 87991
// Name: usePollDurationOptions
// Dependencies: []
// Exports: default

// Module 11309 (usePollDurationOptions)
const PollDurations = require(dependencyMap[0]).PollDurations;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj[PollDurations.ONE_HOUR] = intl.formatToPlainString(require(dependencyMap[1]).t.b/mgtw, { num: 1 });
  const intl2 = require(dependencyMap[1]).intl;
  obj[PollDurations.FOUR_HOURS] = intl2.formatToPlainString(require(dependencyMap[1]).t.b/mgtw, { num: 4 });
  const intl3 = require(dependencyMap[1]).intl;
  obj[PollDurations.EIGHT_HOURS] = intl3.formatToPlainString(require(dependencyMap[1]).t.b/mgtw, { num: 8 });
  const intl4 = require(dependencyMap[1]).intl;
  obj[PollDurations.ONE_DAY] = intl4.formatToPlainString(require(dependencyMap[1]).t.b/mgtw, { num: 24 });
  const intl5 = require(dependencyMap[1]).intl;
  obj[PollDurations.THREE_DAYS] = intl5.string(require(dependencyMap[1]).t.Xn5rX3);
  const intl6 = require(dependencyMap[1]).intl;
  obj[PollDurations.SEVEN_DAYS] = intl6.string(require(dependencyMap[1]).t.Lmq+rj);
  const intl7 = require(dependencyMap[1]).intl;
  obj[PollDurations.FOURTEEN_DAYS] = intl7.string(require(dependencyMap[1]).t.mb8A/O);
  return Object.freeze(obj);
};
