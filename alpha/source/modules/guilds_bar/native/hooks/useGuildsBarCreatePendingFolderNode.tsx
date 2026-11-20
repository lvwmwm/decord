// Module ID: 17809
// Function ID: 17810
// Name: useGuildsBarCreatePendingFolderNode
// Dependencies: [19, 4828, 6394, 504, 12152, 17810, 6407, 6435, 1112, 2]
// Exports: default

// Module 17809 (useGuildsBarCreatePendingFolderNode)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6407 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 12152 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4828 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 6394 */;
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
    const obj3 = { folderId: stateFromStores(17810).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER, folderName: intl.string(stateFromStores(1112).t["scsU+l"]), expanded: stateFromStores1, guildIds: arr2 };
    const createFolderNode = tmp2(6435).createFolderNode;
    stateFromStores(6435);
    intl = tmp2(1112).intl;
    const folderNode = createFolderNode(obj3);
    for (const item10054 of arr2) {
      let children = folderNode.children;
      let push = children.push;
      let obj4 = stateFromStores(6435);
      let arr = push(obj4.createGuildNode(item10054, folderNode.id));
      continue;
    }
    return { expanded: stateFromStores1, pendingFolderNode: folderNode };
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
};
