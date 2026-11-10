// Module ID: 12366
// Function ID: 12367
// Name: useActivityApplications
// Dependencies: [19, 12367, 11722, 2]
// Exports: useActivityApplications

// Module 12366 (useActivityApplications)
import fetchShelf from "fetchShelf" /* 11722 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const arr = fetchesShelf(12367)({ guildId });
  const mapped = arr.map((application) => application.application);
  const effect = react.useEffect(() => {
    const tmp = fetchesShelf;
    if (tmp) {
      const obj2 = { guildId };
      const obj = fetchShelf;
      const shelf = obj.fetchShelf(obj2);
    }
  }, items);
  return mapped;
}
