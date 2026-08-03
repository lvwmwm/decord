// Module ID: 11751
// Function ID: 11752
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 11746, 2]
// Exports: default

// Module 11751 (useGuildPowerupOnDeactivate)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = onToggle(11746)(arg0, arg1);
  onToggle = tmp.onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
