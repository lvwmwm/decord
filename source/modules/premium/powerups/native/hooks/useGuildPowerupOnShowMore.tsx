// Module ID: 11589
// Function ID: 90107
// Name: useGuildPowerupOnShowMore
// Dependencies: []
// Exports: default

// Module 11589 (useGuildPowerupOnShowMore)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default function useGuildPowerupOnShowMore(arg0, arg1) {
  const importDefault = arg0;
  const dependencyMap = arg1;
  const items = [arg0, arg1];
  return React.useCallback(() => {
    if (null != arg1) {
      const obj = { guildId: arg0, powerup: arg1 };
      arg0(arg1[1])(obj);
    }
  }, items);
};
