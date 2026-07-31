// Module ID: 13761
// Function ID: 13762
// Name: useTabSelectedGuildId
// Dependencies: [4010, 5031, 647, 2]
// Exports: default

// Module 13761 (useTabSelectedGuildId)
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
