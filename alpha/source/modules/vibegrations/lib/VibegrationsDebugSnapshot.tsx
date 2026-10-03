// Module ID: 16734
// Function ID: 16735
// Name: VibegrationsDebugSnapshot
// Dependencies: [16733, 8699, 2]
// Exports: vibegrationsDebugSnapshot

// Module 16734 (VibegrationsDebugSnapshot)
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 16733 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx");

export const vibegrationsDebugSnapshot = function vibegrationsDebugSnapshot(projectId) {
  let date;
  const obj = { captured_at: date.toISOString(), project_id: projectId, status: VibegrationsDebugStore.getStatus(projectId), last_turn_usage: VibegrationsDebugStore.getLastTurnUsage(projectId), last_compaction: VibegrationsDebugStore.getLastCompaction(projectId), last_compaction_decline: VibegrationsDebugStore.getLastCompactionDecline(projectId), model_calls: VibegrationsDebugStore.getModelCalls(projectId), logs: VibegrationsProjectStore.getLogs(projectId) };
  date = new Date();
  return stringify(obj, null, 2);
};
