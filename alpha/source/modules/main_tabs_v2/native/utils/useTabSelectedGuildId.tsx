// Module ID: 14930
// Function ID: 14931
// Name: useTabSelectedGuildId
// Dependencies: [4578, 5657, 563, 2]
// Exports: default

// Module 14930 (useTabSelectedGuildId)
import useStateFromStores from "useStateFromStores" /* 563 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4578 */;
import SortedGuildStore from "SortedGuildStore" /* 5657 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [SelectedGuildStore, SortedGuildStore];
  return useStateFromStores.useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = flattenedGuildIds.getFlattenedGuildIds()[0];
    }
    return guildId;
  });
};
