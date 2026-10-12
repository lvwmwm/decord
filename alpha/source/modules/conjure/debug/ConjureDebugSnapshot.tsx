// Module ID: 17334
// Function ID: 17335
// Name: ConjureDebugSnapshot
// Dependencies: [13224, 13219, 2]
// Exports: conjureDebugSnapshot

// Module 17334 (ConjureDebugSnapshot)
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 13224 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13219 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureDebugLogStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
