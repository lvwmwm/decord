// Module ID: 17065
// Function ID: 17066
// Name: useActivityShelfItemData
// Dependencies: [19, 11971, 2]
// Exports: useActivityShelfItemData

// Module 17065 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 11971 */;
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  importDefault = applicationId;
  const tmp = useActivityShelfItemsDefault({ guildId: guild_id1 });
  dependencyMap = tmp;
  const items = [tmp, applicationId];
  return React.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};
