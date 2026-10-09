// Module ID: 17204
// Function ID: 17205
// Name: ConjureDebugSnapshot
// Dependencies: [10617, 13165, 2]
// Exports: conjureDebugSnapshot

// Module 17204 (ConjureDebugSnapshot)
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
