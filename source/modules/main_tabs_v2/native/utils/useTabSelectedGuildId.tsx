// Module ID: 13665
// Function ID: 104916
// Name: useTabSelectedGuildId
// Dependencies: [3947, 4970, 624, 2]
// Exports: default

// Module 13665 (useTabSelectedGuildId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [_isNativeReflectConstruct, closure_3];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    const guildId = outer1_2.getGuildId();
    let lastSelectedGuildId = outer1_2.getLastSelectedGuildId();
    let first = outer1_3.getFlattenedGuildIds()[0];
    if (null != guildId) {
      lastSelectedGuildId = guildId;
    }
    if (null != lastSelectedGuildId) {
      first = lastSelectedGuildId;
    }
    return first;
  });
};
