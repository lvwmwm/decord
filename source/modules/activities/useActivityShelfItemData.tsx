// Module ID: 15708
// Function ID: 120063
// Name: useActivityShelfItemData
// Dependencies: []
// Exports: useActivityShelfItemData

// Module 15708 (useActivityShelfItemData)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guildId, applicationId) {
  const importDefault = applicationId;
  const tmp = importDefault(dependencyMap[1])({ guildId });
  const dependencyMap = tmp;
  const items = [tmp, applicationId];
  return React.useMemo(() => {
    const found = tmp.find((application) => application.application.id === closure_0);
    let tmp2 = null;
    if (null != found) {
      tmp2 = found;
    }
    return tmp2;
  }, items);
};
