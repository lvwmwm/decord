// Module ID: 16753
// Function ID: 16754
// Name: ConjureDebugSnapshot
// Dependencies: [8699, 16752, 2]
// Exports: conjureDebugSnapshot

// Module 16753 (ConjureDebugSnapshot)
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;
import ConjureDebugStore from "ConjureDebugStore" /* 16752 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), model_calls: ConjureDebugStore.getModelCalls(projectId), logs: ConjureProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
