// Module ID: 17049
// Function ID: 17050
// Name: ConjureDebugSnapshot
// Dependencies: [11251, 17048, 2]
// Exports: conjureDebugSnapshot

// Module 17049 (ConjureDebugSnapshot)
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import ConjureDebugStore from "ConjureDebugStore" /* 17048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), model_calls: ConjureDebugStore.getModelCalls(projectId), logs: ConjureProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
