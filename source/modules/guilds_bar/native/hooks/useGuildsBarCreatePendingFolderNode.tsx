// Module ID: 16281
// Function ID: 16282
// Name: useGuildsBarCreatePendingFolderNode
// Dependencies: [19, 4303, 5399, 586, 9135, 16282, 5496, 5400, 1233, 2]
// Exports: default

// Module 16281 (useGuildsBarCreatePendingFolderNode)
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9135 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleGatewayJoinRequestUpdate" /* 4303 */;
import closure_5 from "set" /* 5399 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  let obj = stateFromStores(586);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => obj.hasFetchedRequestToJoinGuilds);
  const arr2 = usePendingFolderGuildIdsDefault();
  const items1 = [closure_5];
  const stateFromStores1 = stateFromStores(586).useStateFromStores(items1, () => folderExpanded.isFolderExpanded(stateFromStores(table[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      const requestToJoinGuilds = closure_1_1(closure_1_2[6]).fetchRequestToJoinGuilds();
      const obj = closure_1_1(closure_1_2[6]);
    }
  }, items2);
  if (arr2.length > 0) {
    obj = { folderId: null, folderName: null, expanded: null, guildIds: null };
    obj[0] = tmp2(16282).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER;
    const intl = tmp2(1233).intl;
    obj[1] = intl.string(tmp2(1233).t["scsU+l"]);
    obj[2] = stateFromStores1;
    obj[3] = arr2;
    const folderNode = tmp2(5400).createFolderNode(obj);
    for (const item10054 of arr2) {
      let children = folderNode.children;
      let tmp13 = stateFromStores;
      let tmp14 = stateFromStores;
      let tmp15 = dependencyMap;
      let tmp16 = dependencyMap;
      let obj5 = stateFromStores(5400);
      let arr = children.push(obj5.createGuildNode(item10054, folderNode.id));
      continue;
    }
    obj = { expanded: null, pendingFolderNode: null };
    obj[0] = stateFromStores1;
    obj[1] = folderNode;
    return obj;
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
  const obj2 = stateFromStores(586);
  const tmp = stateFromStores;
  const tmp3 = dependencyMap;
};
