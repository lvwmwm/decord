// Module ID: 17076
// Function ID: 17077
// Name: VibegrationsDebugSnapshot
// Dependencies: [17075, 9314, 2]
// Exports: vibegrationsDebugSnapshot

// Module 17076 (VibegrationsDebugSnapshot)
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 17075 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9314 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx");

export const vibegrationsDebugSnapshot = function vibegrationsDebugSnapshot(projectId) {
  const obj = { captured_at: new Date().toISOString(), project_id: projectId, status: VibegrationsDebugStore.getStatus(projectId), last_turn_usage: VibegrationsDebugStore.getLastTurnUsage(projectId), last_compaction: VibegrationsDebugStore.getLastCompaction(projectId), last_compaction_decline: VibegrationsDebugStore.getLastCompactionDecline(projectId), model_calls: VibegrationsDebugStore.getModelCalls(projectId), logs: VibegrationsProjectStore.getLogs(projectId) };
  return JSON.stringify(obj, null, 2);
};
