// Module ID: 11141
// Function ID: 86646
// Name: useActivityApplications
// Dependencies: []
// Exports: useActivityApplications

// Module 11141 (useActivityApplications)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const importDefault = fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = importDefault(dependencyMap[1])({ guildId }).map((application) => application.application);
  const effect = React.useEffect(() => {
    if (fetchesShelf) {
      let obj = guildId(closure_2[2]);
      obj = { guildId };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};
