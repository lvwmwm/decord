// Module ID: 17226
// Function ID: 17227
// Name: useTabSelectedGuildId
// Dependencies: [5343, 6954, 563, 2]
// Exports: default

// Module 17226 (useTabSelectedGuildId)
import useStateFromStores from "useStateFromStores" /* 563 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5343 */;
import SortedGuildStore from "SortedGuildStore" /* 6954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  let flattenedGuildIds;
  const items = [SelectedGuildStore, SortedGuildStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
    const first = flattenedGuildIds.getFlattenedGuildIds()[0];
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = first;
    }
    return guildId;
  });
};
