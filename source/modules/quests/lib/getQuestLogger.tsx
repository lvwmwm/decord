// Module ID: 6948
// Function ID: 55532
// Name: getQuestLogger
// Dependencies: [683, 482, 3, 2]
// Exports: getQuestLogger

// Module 6948 (getQuestLogger)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NOOP } from "sum";

const result = require("timestamp").fileFinishedImporting("modules/quests/lib/getQuestLogger.tsx");

export const getQuestLogger = function getQuestLogger(getQuestLogger) {
  let _location;
  let quest;
  let obj = getQuestLogger;
  if (getQuestLogger === undefined) {
    obj = {};
  }
  ({ quest, location: _location } = obj);
  isLoggingQuestEvents = isLoggingQuestEvents.isLoggingQuestEvents;
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
  let tmp4 = importDefault(3);
  tmp4 = new tmp4("QuestLogger" + str2 + str);
  obj = { log: isLoggingQuestEvents ? tmp4.log : NOOP, warn: isLoggingQuestEvents ? tmp4.warn : NOOP, error: isLoggingQuestEvents ? tmp4.error : NOOP, info: isLoggingQuestEvents ? tmp4.info : NOOP, verbose: isLoggingQuestEvents ? tmp4.verbose : NOOP, trace: isLoggingQuestEvents ? tmp4.trace : NOOP };
  return obj;
};
