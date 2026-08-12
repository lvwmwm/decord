// Module ID: 11485
// Function ID: 11486
// Name: useActivityApplications
// Dependencies: [19, 11486, 10672, 2]
// Exports: useActivityApplications

// Module 11485 (useActivityApplications)
import noop from "noop";

const require = arg1;
const result = require("_runPrimaryAppCommandOrJoinEmbeddedActivity").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(11486)({ guildId }).map((application) => application.application);
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
