// Module ID: 11520
// Function ID: 11521
// Name: useActivityApplications
// Dependencies: [19, 11521, 8782, 2]
// Exports: useActivityApplications

// Module 11520 (useActivityApplications)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8782 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const arr = fetchesShelf(11521)({ guildId });
  const mapped = arr.map((application) => application.application);
  const effect = react.useEffect(() => {
    const tmp = fetchesShelf;
    if (tmp) {
      const obj2 = { guildId };
      const obj = EmbeddedActivitiesActionCreators;
      const shelf = obj.fetchShelf(obj2);
    }
  }, items);
  return mapped;
};
