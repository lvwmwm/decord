// Module ID: 15895
// Function ID: 122774
// Name: useActivityShelfItemData
// Dependencies: [31, 11151, 2]
// Exports: useActivityShelfItemData

// Module 15895 (useActivityShelfItemData)
import result from "result";

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guildId, applicationId) {
  const importDefault = applicationId;
  const tmp = importDefault(11151)({ guildId });
  const dependencyMap = tmp;
  const items = [tmp, applicationId];
  return React.useMemo(() => {
    const found = tmp.find((application) => application.application.id === outer1_0);
    let tmp2 = null;
    if (null != found) {
      tmp2 = found;
    }
    return tmp2;
  }, items);
};
