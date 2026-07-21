// Module ID: 11563
// Function ID: 89953
// Name: useGuildPowerupOnDeactivate
// Dependencies: []
// Exports: default

// Module 11563 (useGuildPowerupOnDeactivate)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = importDefault(dependencyMap[1])(arg0, arg1);
  const onToggle = tmp.onToggle;
  const importDefault = onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
