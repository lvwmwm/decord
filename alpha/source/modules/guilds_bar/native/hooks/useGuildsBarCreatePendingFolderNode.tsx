// Module ID: 18151
// Function ID: 18152
// Name: useGuildsBarCreatePendingFolderNode
// Dependencies: [19, 5077, 6165, 504, 12378, 18152, 7005, 6169, 1112, 2]
// Exports: default

// Module 18151 (useGuildsBarCreatePendingFolderNode)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 7005 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 12378 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5077 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 6165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  let folderExpanded;
  let intl;
  let stateFromStores;
  let tmp = stateFromStores;
  let obj = stateFromStores(504);
  const items = [UserGuildJoinRequestStore];
  stateFromStores = obj.useStateFromStores(items, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
  const arr2 = usePendingFolderGuildIdsDefault();
  const items1 = [ExpandedGuildFolderStore];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => folderExpanded.isFolderExpanded(stateFromStores(dependencyMap[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const obj = GuildJoinRequestActionCreatorsDefault;
      const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
    }
  }, items2);
  if (arr2.length > 0) {
    const obj3 = { folderId: stateFromStores(18152).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER, folderName: intl.string(stateFromStores(1112).t["scsU+l"]), expanded: stateFromStores1, guildIds: arr2 };
    const createFolderNode = tmp2(6169).createFolderNode;
    stateFromStores(6169);
    intl = tmp2(1112).intl;
    const folderNode = createFolderNode(obj3);
    for (const item10054 of arr2) {
      let children = folderNode.children;
      let push = children.push;
      let obj4 = stateFromStores(6169);
      let arr = push(obj4.createGuildNode(item10054, folderNode.id));
      continue;
    }
    return { expanded: stateFromStores1, pendingFolderNode: folderNode };
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
};
