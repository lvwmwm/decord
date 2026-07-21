// Module ID: 6943
// Function ID: 55487
// Name: getQuestLogger
// Dependencies: []
// Exports: getQuestLogger

// Module 6943 (getQuestLogger)
let closure_2 = importDefault(dependencyMap[0]);
const NOOP = arg1(dependencyMap[1]).NOOP;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/quests/lib/getQuestLogger.tsx");

export const getQuestLogger = function getQuestLogger(arg0) {
  let _location;
  let quest;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ quest, location: _location } = obj);
  const isLoggingQuestEvents = isLoggingQuestEvents.isLoggingQuestEvents;
  let questName;
  if (null != quest) {
    questName = quest.config.messages.questName;
  }
  let str = "";
  let str2 = "";
  if (null != _location) {
    const _HermesInternal = HermesInternal;
    str2 = "-" + _location;
  }
  if (null != questName) {
    const _HermesInternal2 = HermesInternal;
    str = "-" + questName + ")";
  }
  let tmp4 = importDefault(dependencyMap[2]);
  tmp4 = new tmp4("QuestLogger" + str2 + str);
  obj = { log: isLoggingQuestEvents ? tmp4.log : NOOP, warn: isLoggingQuestEvents ? tmp4.warn : NOOP, error: isLoggingQuestEvents ? tmp4.error : NOOP, info: isLoggingQuestEvents ? tmp4.info : NOOP, verbose: isLoggingQuestEvents ? tmp4.verbose : NOOP, trace: isLoggingQuestEvents ? tmp4.trace : NOOP };
  return obj;
};
