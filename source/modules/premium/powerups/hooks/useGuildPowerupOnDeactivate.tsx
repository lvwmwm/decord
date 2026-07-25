// Module ID: 11568
// Function ID: 89988
// Name: useGuildPowerupOnDeactivate
// Dependencies: [31, 11562, 2]
// Exports: default

// Module 11568 (useGuildPowerupOnDeactivate)
import result from "result";

const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = onToggle(11562)(arg0, arg1);
  onToggle = tmp.onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
