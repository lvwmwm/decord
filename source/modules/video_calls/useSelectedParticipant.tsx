// Module ID: 10177
// Function ID: 78658
// Name: useSelectedParticipant
// Dependencies: [4144, 566, 2]
// Exports: default

// Module 10177 (useSelectedParticipant)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_2.getSelectedParticipant(id.id));
};
