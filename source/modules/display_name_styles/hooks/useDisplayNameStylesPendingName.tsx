// Module ID: 14098
// Function ID: 107040
// Name: useDisplayNameStylesPendingName
// Dependencies: []
// Exports: useDisplayNameStylesPendingName

// Module 14098 (useDisplayNameStylesPendingName)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  guildId = stateFromStores;
  const importDefault = guildId;
  let name = importDefault(dependencyMap[2]).useName(stateFromStores);
  const obj = importDefault(dependencyMap[2]);
  const items = [closure_3, closure_4];
  const items1 = [guildId, stateFromStores];
  stateFromStores = guildId(dependencyMap[3]).useStateFromStores(items, () => {
    const pendingChanges = pendingChanges.getPendingChanges(arg1);
    if (null != arg1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (null == pendingNickname) {
        let id;
        if (null != arg0) {
          id = arg0.id;
        }
        pendingNickname = nick.getNick(arg1, id);
        const tmp3 = arg1;
      }
      let pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  }, items1);
  if (null != stateFromStores) {
    name = stateFromStores;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  return str;
};
