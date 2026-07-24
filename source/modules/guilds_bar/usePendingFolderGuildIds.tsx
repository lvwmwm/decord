// Module ID: 10970
// Function ID: 85281
// Name: getPendingFolderGuildIds
// Dependencies: [3948, 1838, 566, 2]
// Exports: default

// Module 10970 (getPendingFolderGuildIds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getPendingFolderGuildIds() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
    tmp = items;
  }
  [obj, obj2] = tmp;
  let guilds;
  const guildIds = obj.computeGuildIds();
  guilds = obj2.getGuilds();
  return guildIds.filter((arg0) => null == table[arg0]);
}
const result = require("initialize").fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  let items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const items = [outer1_2, outer1_3];
    return outer1_4(items);
  });
};
export { getPendingFolderGuildIds };
