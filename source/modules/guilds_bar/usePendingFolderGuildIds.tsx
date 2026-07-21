// Module ID: 10932
// Function ID: 85019
// Name: getPendingFolderGuildIds
// Dependencies: []
// Exports: default

// Module 10932 (getPendingFolderGuildIds)
function getPendingFolderGuildIds() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  let guilds;
  const guildIds = obj.computeGuildIds();
  guilds = obj2.getGuilds();
  return guildIds.filter((arg0) => null == closure_0[arg0]);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[2]).useStateFromStoresArray(items, () => {
    const items = [closure_2, closure_3];
    return callback(items);
  });
};
export { getPendingFolderGuildIds };
