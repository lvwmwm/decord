// Module ID: 9083
// Function ID: 71191
// Name: useNameplate
// Dependencies: []
// Exports: useNameplate

// Module 9083 (useNameplate)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = function useNameplate(user) {
  user = user.user;
  const arg1 = user;
  const dependencyMap = user.guildId;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = member.getMember(guildId, user.id);
      }
    }
    return member;
  });
  const React = stateFromStores;
  const items1 = [stateFromStores, user];
  return React.useMemo(() => {
    if (null != user) {
      let nameplate;
      if (null != stateFromStores) {
        const collectibles = stateFromStores.collectibles;
        if (null != collectibles) {
          nameplate = collectibles.nameplate;
        }
      }
      nameplate = user(guildId[3]).getNameplateData(nameplate);
      if (null == nameplate) {
        nameplate = user.nameplate;
      }
      return nameplate;
    }
  }, items1);
};
