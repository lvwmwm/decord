// Module ID: 16055
// Function ID: 16056
// Name: useActivityShelfItemData
// Dependencies: [19, 11338, 2]
// Exports: useActivityShelfItemData

// Module 16055 (useActivityShelfItemData)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  const importDefault = applicationId;
  const tmp = importDefault(11338)({ guildId: guild_id1 });
  const dependencyMap = tmp;
  const items = [tmp, applicationId];
  return React.useMemo(() => {
    let found = tmp.find((application) => application.application.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};
