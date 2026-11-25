// Module ID: 13434
// Function ID: 13435
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 13428, 2]
// Exports: default

// Module 13434 (useGuildPowerupOnDeactivate)
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle" /* 13428 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  let items;
  const tmp = useGuildPowerupOnToggleDefault(arg0, arg1);
  const onToggle = tmp.onToggle;
  const obj = { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: react.useCallback(() => onToggle(false), items) };
  items = [onToggle];
  return obj;
};
