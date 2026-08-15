// Module ID: 11211
// Function ID: 11212
// Name: useActivityApplications
// Dependencies: [19, 11212, 8701, 2]
// Exports: useActivityApplications

// Module 11211 (useActivityApplications)
import noop from "noop";

const require = arg1;
const result = require("_runPrimaryAppCommandOrJoinEmbeddedActivity").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(11212)({ guildId }).map((application) => application.application);
  const effect = React.useEffect(() => {
    if (fetchesShelf) {
      let obj = guildId(outer1_2[2]);
      obj = { guildId: null };
      obj[0] = guildId;
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};
