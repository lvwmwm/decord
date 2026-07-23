// Module ID: 11574
// Function ID: 90027
// Name: useGuildPowerupOnDeactivate
// Dependencies: [31, 11569, 2]
// Exports: default

// Module 11574 (useGuildPowerupOnDeactivate)
import result from "result";

const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = onToggle(11569)(arg0, arg1);
  onToggle = tmp.onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
