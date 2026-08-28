// Module ID: 12039
// Function ID: 12040
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 12034, 2]
// Exports: default

// Module 12039 (useGuildPowerupOnDeactivate)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = onToggle(12034)(arg0, arg1);
  onToggle = tmp.onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
