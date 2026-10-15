// Module ID: 12246
// Function ID: 12247
// Name: ConjureDebugSnapshot
// Dependencies: [10896, 10891, 2]
// Exports: conjureDebugSnapshot

// Module 12246 (ConjureDebugSnapshot)
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 10896 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10891 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureDebugLogStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
