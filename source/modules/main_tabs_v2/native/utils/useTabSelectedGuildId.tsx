// Module ID: 14032
// Function ID: 14033
// Name: useTabSelectedGuildId
// Dependencies: [4165, 5196, 647, 2]
// Exports: default

// Module 14032 (useTabSelectedGuildId)
import handleConnectionOpen from "handleConnectionOpen";
import insertUnsortedGuilds from "insertUnsortedGuilds";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [handleConnectionOpen, insertUnsortedGuilds];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    let guildId = store.getGuildId();
    const lastSelectedGuildId = store.getLastSelectedGuildId();
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = flattenedGuildIds.getFlattenedGuildIds()[0];
    }
    return guildId;
  });
};
