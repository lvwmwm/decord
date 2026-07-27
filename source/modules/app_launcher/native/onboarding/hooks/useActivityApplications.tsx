// Module ID: 11150
// Function ID: 86663
// Name: useActivityApplications
// Dependencies: [31, 11151, 5668, 2]
// Exports: useActivityApplications

// Module 11150 (useActivityApplications)
import result from "result";

const require = arg1;
const result = require("_runPrimaryAppCommandOrJoinEmbeddedActivity").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(11151)({ guildId }).map((application) => application.application);
  const effect = React.useEffect(() => {
    if (fetchesShelf) {
      let obj = guildId(outer1_2[2]);
      obj = { guildId };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};
