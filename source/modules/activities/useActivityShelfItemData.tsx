// Module ID: 16724
// Function ID: 16725
// Name: useActivityShelfItemData
// Dependencies: [19, 11611, 2]
// Exports: useActivityShelfItemData

// Module 16724 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 11611 */;
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
