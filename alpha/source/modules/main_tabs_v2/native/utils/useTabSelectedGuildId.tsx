// Module ID: 14923
// Function ID: 14924
// Name: useTabSelectedGuildId
// Dependencies: [4577, 5655, 563, 2]
// Exports: default

// Module 14923 (useTabSelectedGuildId)
import useStateFromStores from "useStateFromStores" /* 563 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;
import SortedGuildStore from "SortedGuildStore" /* 5655 */;

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
