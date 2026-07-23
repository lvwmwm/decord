// Module ID: 15825
// Function ID: 122236
// Name: useActivityShelfItemData
// Dependencies: [31, 11159, 2]
// Exports: useActivityShelfItemData

// Module 15825 (useActivityShelfItemData)
import result from "result";

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guildId, applicationId) {
  const importDefault = applicationId;
  const tmp = importDefault(11159)({ guildId });
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
