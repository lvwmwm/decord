// Module ID: 12240
// Function ID: 12241
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 12235, 2]
// Exports: default

// Module 12240 (useGuildPowerupOnDeactivate)
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle" /* 12235 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = useGuildPowerupOnToggleDefault(arg0, arg1);
  const onToggle = tmp.onToggle;
  const obj = { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: null };
  const items = [onToggle];
  obj.onDeactivate = noop.useCallback(() => onToggle(false), items);
  return obj;
};
