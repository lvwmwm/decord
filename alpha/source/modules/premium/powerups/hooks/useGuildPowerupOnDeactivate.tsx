// Module ID: 14358
// Function ID: 14359
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 14353, 2]
// Exports: default

// Module 14358 (useGuildPowerupOnDeactivate)
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle" /* 14353 */;
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
