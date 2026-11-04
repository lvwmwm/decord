// Module ID: 12583
// Function ID: 12584
// Name: useActivityApplications
// Dependencies: [19, 12584, 11918, 2]
// Exports: useActivityApplications

// Module 12583 (useActivityApplications)
import fetchShelf from "fetchShelf" /* 11918 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const arr = fetchesShelf(12584)({ guildId });
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
