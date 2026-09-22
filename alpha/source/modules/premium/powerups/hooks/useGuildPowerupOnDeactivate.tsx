// Module ID: 12799
// Function ID: 12800
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 12794, 2]
// Exports: default

// Module 12799 (useGuildPowerupOnDeactivate)
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle" /* 12794 */;
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
