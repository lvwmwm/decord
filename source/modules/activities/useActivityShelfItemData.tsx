// Module ID: 15963
// Function ID: 15964
// Name: useActivityShelfItemData
// Dependencies: [19, 11209, 2]
// Exports: useActivityShelfItemData

// Module 15963 (useActivityShelfItemData)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  const importDefault = applicationId;
  const tmp = importDefault(11209)({ guildId: guild_id1 });
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
