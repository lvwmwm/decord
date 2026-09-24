// Module ID: 17711
// Function ID: 17712
// Name: useActivityShelfItemData
// Dependencies: [19, 12381, 2]
// Exports: useActivityShelfItemData

// Module 17711 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 12381 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  closure_0 = applicationId;
  const tmp = useActivityShelfItemsDefault({ guildId: guild_id1 });
  closure_1 = tmp;
  const items = [tmp, applicationId];
  return noop.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === applicationId);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};
