// Module ID: 16077
// Function ID: 16078
// Name: CheckpointActionCreators
// Dependencies: [573, 2]
// Exports: toggleMute

// Module 16077 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  return DispatcherDefault.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
