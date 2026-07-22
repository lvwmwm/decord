// Module ID: 9480
// Function ID: 73906
// Name: SummarySources
// Dependencies: []
// Exports: createSummaryFromServer

// Module 9480 (SummarySources)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/summaries/Summary.tsx");

export const SummarySources = { SOURCE_0: 0, [0]: "SOURCE_0", SOURCE_1: 1, [1]: "SOURCE_1" };
export const SummaryType = { UNSET: 0, [0]: "UNSET", SOURCE_1: 1, [1]: "SOURCE_1", SOURCE_2: 2, [2]: "SOURCE_2" };
export const createSummaryFromServer = function createSummaryFromServer(summary, channelId) {
  const obj = { id: summary.id, topic: summary.topic, summShort: summary.summ_short, people: Array.from(new Set(summary.people)) };
  ({ start_id: obj.startId, end_id: obj.endId, count: obj.count } = summary);
  obj.channelId = channelId;
  ({ source: obj.source, type: obj.type } = summary);
  return obj;
};
