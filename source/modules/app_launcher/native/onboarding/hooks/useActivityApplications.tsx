// Module ID: 11839
// Function ID: 11840
// Name: useActivityApplications
// Dependencies: [19, 11840, 9486, 2]
// Exports: useActivityApplications

// Module 11839 (useActivityApplications)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(11840)({ guildId }).map((application) => application.application);
  const effect = React.useEffect(() => {
    if (fetchesShelf) {
      let obj = guildId(closure_1_2[2]);
      obj = { guildId: null };
      obj[0] = guildId;
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};
