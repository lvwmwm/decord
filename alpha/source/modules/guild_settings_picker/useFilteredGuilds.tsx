// Module ID: 15678
// Function ID: 15679
// Name: useFilteredGuilds
// Dependencies: [19, 4880, 6766, 1384, 504, 38, 2]
// Exports: default

// Module 15678 (useFilteredGuilds)
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import SortedGuildStore from "SortedGuildStore" /* 6766 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  let currentUser;
  let flattenedGuildIds;
  let guilds;
  let items3;
  let tmp4;
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores1;
  let items = [SortedGuildStore];
  const obj = isGuildIncluded(stateFromStores1[4]);
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const items1 = [GuildStore];
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => guilds.getGuilds());
  const items2 = [UserStore];
  const obj3 = isGuildIncluded(stateFromStores1[4]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj4 = {
    options: stateFromStores2.useMemo(() => {
      let items;
      if (null == stateFromStores2) {
        items = [];
      } else {
        let found;
        if (null == isGuildIncluded) {
          found = stateFromStores;
        } else {
          found = stateFromStores.filter((item) => {
            stateFromStores(stateFromStores1[5])(null != closure_1_2[item], "guild should not be null");
            return isGuildIncluded(closure_1_2[item], stateFromStores2);
          });
        }
        items = found.map((id) => {
          stateFromStores(stateFromStores1[5])(null != closure_1_2[id], "guild should not be null");
          return { id, label: closure_1_2[id].name, value: closure_1_2[id].id };
        });
      }
      return items;
    }, items3),
    selectedGuild: tmp4
  };
  items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  tmp4 = undefined;
  if (null != selectedGuildId) {
    tmp4 = stateFromStores1[selectedGuildId];
  }
  return obj4;
};
