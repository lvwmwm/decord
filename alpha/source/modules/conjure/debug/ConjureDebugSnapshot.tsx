// Module ID: 11977
// Function ID: 11978
// Name: ConjureDebugSnapshot
// Dependencies: [11225, 11220, 2]
// Exports: conjureDebugSnapshot

// Module 11977 (ConjureDebugSnapshot)
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 11225 */;
import ConjureDebugStore from "ConjureDebugStore" /* 11220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureDebugLogStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
