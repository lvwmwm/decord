// Module ID: 11554
// Function ID: 89921
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: []
// Exports: default

// Module 11554 (useGuildPowerupOnShowDeactivate)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = importAllResult.lazy(() => arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths));
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [arg0, arg1];
  return importAllResult.useCallback(() => {
    let obj = arg0(arg1[4]);
    obj = { guildId: arg0, powerup: arg1 };
    obj.openAlert("guild-powerups-deactivate-alert", callback(closure_4, obj));
  }, items);
};
