// Module ID: 13271
// Function ID: 13272
// Name: useActivityApplications
// Dependencies: [19, 13272, 12646, 2]
// Exports: useActivityApplications

// Module 13271 (useActivityApplications)
import fetchShelf from "fetchShelf" /* 12646 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const arr = fetchesShelf(13272)({ guildId });
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
