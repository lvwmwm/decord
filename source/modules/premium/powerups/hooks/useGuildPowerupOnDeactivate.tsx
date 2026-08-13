// Module ID: 11962
// Function ID: 11963
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 11957, 2]
// Exports: default

// Module 11962 (useGuildPowerupOnDeactivate)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = onToggle(11957)(arg0, arg1);
  onToggle = tmp.onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
