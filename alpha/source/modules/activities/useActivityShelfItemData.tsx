// Module ID: 19571
// Function ID: 19572
// Name: useActivityShelfItemData
// Dependencies: [19, 12592, 2]
// Exports: useActivityShelfItemData

// Module 19571 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 12592 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export function useActivityShelfItemData(guild_id1, applicationId) {
  let closure_0 = applicationId;
  const obj = { guildId: guild_id1 };
  const tmp = useActivityShelfItemsDefault(obj);
  let closure_1 = tmp;
  const items = [tmp, applicationId];
  return react.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === closure_1_0);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
}
