// Module ID: 18687
// Function ID: 18688
// Name: ConjureDebugSnapshot
// Dependencies: [6973, 6968, 2]
// Exports: conjureDebugSnapshot

// Module 18687 (ConjureDebugSnapshot)
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 6973 */;
import ConjureDebugStore from "ConjureDebugStore" /* 6968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureDebugLogStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
}
