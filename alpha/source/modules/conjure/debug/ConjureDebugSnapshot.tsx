// Module ID: 16774
// Function ID: 16775
// Name: ConjureDebugSnapshot
// Dependencies: [8734, 16773, 2]
// Exports: conjureDebugSnapshot

// Module 16774 (ConjureDebugSnapshot)
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import ConjureDebugStore from "ConjureDebugStore" /* 16773 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), model_calls: ConjureDebugStore.getModelCalls(projectId), logs: ConjureProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
