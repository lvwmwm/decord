// Module ID: 16410
// Function ID: 16411
// Name: VibegrationsDebugSnapshot
// Dependencies: [16409, 8492, 2]
// Exports: vibegrationsDebugSnapshot

// Module 16410 (VibegrationsDebugSnapshot)
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 16409 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8492 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx");

export const vibegrationsDebugSnapshot = function vibegrationsDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: VibegrationsDebugStore.getStatus(projectId), last_turn_usage: VibegrationsDebugStore.getLastTurnUsage(projectId), last_compaction: VibegrationsDebugStore.getLastCompaction(projectId), last_compaction_decline: VibegrationsDebugStore.getLastCompactionDecline(projectId), model_calls: VibegrationsDebugStore.getModelCalls(projectId), logs: VibegrationsProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
