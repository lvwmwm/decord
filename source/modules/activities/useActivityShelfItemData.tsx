// Module ID: 16108
// Function ID: 16109
// Name: useActivityShelfItemData
// Dependencies: [19, 11344, 2]
// Exports: useActivityShelfItemData

// Module 16108 (useActivityShelfItemData)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  const importDefault = applicationId;
  const tmp = importDefault(11344)({ guildId: guild_id1 });
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
