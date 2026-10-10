// Module ID: 17285
// Function ID: 17286
// Name: ConjureDebugSnapshot
// Dependencies: [10651, 13214, 2]
// Exports: conjureDebugSnapshot

// Module 17285 (ConjureDebugSnapshot)
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13214 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
